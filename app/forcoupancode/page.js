"use client";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Head from "next/head";

export default function CouponPage() {
  const [codeInput, setCodeInput] = useState("");
  const [output, setOutput] = useState("");
  const [isVerified, setIsVerified] = useState(false);
  const [error, setError] = useState("");
  const [showHint, setShowHint] = useState(false);
  const [difficulty, setDifficulty] = useState("medium");
  const [couponCode, setCouponCode] = useState("");
  const [loading, setLoading] = useState(false);
  const [currentProblem, setCurrentProblem] = useState(null);
  const textareaRef = useRef(null);

  // Fetch problem from backend
  const fetchProblem = async () => {
    setLoading(true);
    try {
      const res = await fetch(`/api/verify-coupon?difficulty=${difficulty}`);
      const data = await res.json();
      setCurrentProblem(data.problem);
      setCouponCode(data.coupon);
      setCodeInput("");
      setOutput("");
      setError("");
      setIsVerified(false);
    } catch (err) {
      setError("Failed to load problem");
    } finally {
      setLoading(false);
    }
  };

  // Get new problem when difficulty changes
  useEffect(() => {
    fetchProblem();
  }, [difficulty]);

  // Prevent paste functionality - fixed with null check
  useEffect(() => {
    if (!textareaRef.current) return;

    const handlePaste = (e) => {
      e.preventDefault();
      setError("Pasting code is not allowed. Please type it yourself.");
      return false;
    };

    const textarea = textareaRef.current;
    textarea.addEventListener('paste', handlePaste);

    return () => {
      textarea.removeEventListener('paste', handlePaste);
    };
  }, [textareaRef.current]); // Add dependency

  const handleRunCode = async () => {
    if (!codeInput.includes("function")) {
      setError("Please write a proper function");
      return;
    }

    setLoading(true);
    setError("");
    
    try {
      const res = await fetch('/api/verify-coupon', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          problemId: currentProblem.id,
          code: codeInput,
          difficulty
        })
      });
      
      const data = await res.json();
      
      if (data.verified) {
        setIsVerified(true);
        setCouponCode(data.coupon);
        setOutput(data.message);
      } else {
        setError(data.message);
        setOutput("Try again!");
      }
    } catch (err) {
      setError("Failed to verify solution");
    } finally {
      setLoading(false);
    }
  };

  const getHint = () => {
    return currentProblem?.hint || "No hint available";
  };

  const handleInputChange = (e) => {
    const newValue = e.target.value;
    
    if (newValue.length - codeInput.length > 10) {
      setError("Typing too fast! Please write the code yourself.");
      return;
    }
    
    setCodeInput(newValue);
  };

  if (loading && !currentProblem) {
    return (
      <div className="min-h-screen flex items-center justify-center text-white">
        Loading problem...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center p-4">
      <Head>
        <title>Get Coupon Code | ByteWar Hackathon</title>
      </Head>

      <div className="max-w-2xl w-full bg-gray-800 rounded-2xl border border-gray-700 p-8">
        <h1 className="text-2xl font-bold text-center text-purple-400 mb-6">
          Get Your Coupon Code
        </h1>

        {/* Difficulty Selection */}
        <div className="mb-6 bg-gray-700 p-4 rounded-lg">
          <h3 className="text-lg font-bold text-white mb-2">Select Difficulty:</h3>
          <div className="grid grid-cols-3 gap-2">
            <button
              onClick={() => setDifficulty("easy")}
              className={`py-2 rounded-lg ${difficulty === "easy" ? 'bg-green-600' : 'bg-gray-600'}`}
            >
              Easy (10-15%)
            </button>
            <button
              onClick={() => setDifficulty("medium")}
              className={`py-2 rounded-lg ${difficulty === "medium" ? 'bg-yellow-600' : 'bg-gray-600'}`}
            >
              Medium (15-25%)
            </button>
            <button
              onClick={() => setDifficulty("hard")}
              className={`py-2 rounded-lg ${difficulty === "hard" ? 'bg-red-600' : 'bg-gray-600'}`}
            >
              Hard (25-33%)
            </button>
          </div>
        </div>

        {!isVerified && currentProblem ? (
          <>
            <div className="mb-6">
              <div className="flex justify-between items-center mb-2">
                <h2 className="text-lg font-bold text-white">
                  Problem #{currentProblem.id}: {currentProblem.question}
                </h2>
                {/* <button
                  onClick={fetchProblem}
                  className="p-2 bg-gray-600 rounded-lg hover:bg-gray-500 transition-colors"
                  aria-label="New problem"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                    />
                  </svg>
                </button> */}
              </div>

              <div className="bg-gray-900 p-4 rounded-lg mb-3">
                <div className="text-gray-400 text-sm mb-1">Function Signature:</div>
                <div className="font-mono text-white mb-3">function {currentProblem.functionName}(input) {'{ ... }'}</div>
                
                <div className="text-gray-400 text-sm mb-1">Test Cases:</div>
                <div className="grid grid-cols-2 gap-2">
                  {currentProblem.testCases.map((test, i) => (
                    <div key={i} className="font-mono text-sm text-white">
                      {currentProblem.functionName}({JSON.stringify(test)}) → ?
                    </div>
                  ))}
                </div>
              </div>

              <div className="mb-3">
                <textarea
          ref={textareaRef}
          value={codeInput}
          onChange={handleInputChange}
          onPaste={(e) => {
            e.preventDefault();
            setError("Pasting code is not allowed. Please type it yourself.");
          }}
          placeholder={currentProblem ? `Write your ${currentProblem.functionName} function here...` : "Loading..."}
          className="w-full h-40 px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500/50 font-mono text-sm"
          spellCheck="false"
          disabled={!currentProblem}
        />
              </div>

              <button
                onClick={() => setShowHint(!showHint)}
                className="text-sm text-purple-400 hover:underline mb-2"
              >
                {showHint ? "Hide Hint" : "Show Hint"}
              </button>

              {showHint && (
                <div className="text-gray-400 text-sm mb-3 p-3 bg-gray-700 rounded-lg">
                  {getHint()}
                </div>
              )}

              <button
                onClick={handleRunCode}
                disabled={loading}
                className="w-full py-2 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 transition-colors mb-2 disabled:opacity-50"
              >
                {loading ? "Running..." : "Run Code"}
              </button>

              {output && (
                <div className="p-3 bg-gray-700 rounded-lg mb-2">
                  <div className="text-sm text-gray-300">Output:</div>
                  <div className="font-mono text-white">{output}</div>
                </div>
              )}

              {error && (
                <div className="p-3 bg-red-900/30 rounded-lg border border-red-700">
                  <div className="text-sm text-red-400">{error}</div>
                </div>
              )}
            </div>
          </>
        ) : isVerified ? (
          <>
            <div className="mb-6 p-4 bg-gray-700 rounded-lg border border-green-500">
              <p className="text-gray-300 mb-2">Your coupon code is:</p>
              <div className="text-2xl font-bold text-green-400 text-center py-2 px-4 bg-gray-800 rounded-md font-mono">
                {couponCode}
              </div>
              <p className="text-gray-400 text-sm mt-2">
                Use this code during payment to get your discount
              </p>
              <p className="text-yellow-400 text-sm mt-1">
                Valid for {difficulty} difficulty only
              </p>
            </div>
          </>
        ) : null}

        <Link
          href="/enroll/payment"
          className="w-full block text-center py-3 bg-gray-600 text-white font-bold rounded-lg hover:bg-gray-500 transition-colors mt-4"
        >
          Back to Payment
        </Link>
      </div>
    </div>
  );
}