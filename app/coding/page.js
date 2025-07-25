"use client";
import { useState, useEffect } from "react";
import ResizableSplit from "../../components/ResizableSplit"; // Assuming the component name is ResponsiveSplit based on common naming
import dynamic from 'next/dynamic';

// Dynamically import CodeEditor to avoid SSR issues
const CodeEditor = dynamic(() => import('../../components/CodeEditor'), { ssr: false });
// Dynamically import OutputWindow for consistency (optional, but good practice if it uses client-side libs)
const OutputWindow = dynamic(() => import('../../components/OutputWindow'), { ssr: false });

const languages = ["C++", "Java", "Python", "JavaScript"];

export default function CodingPage() {
  const [selected, setSelected] = useState(0);
  const [language, setLanguage] = useState(languages[0]);
  const [code, setCode] = useState("// Write your code here...");
  const [output, setOutput] = useState("// Output will appear here");
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  // Simulate code run (replace with real API call)
  const handleRun = () => {
    setOutput(`[Execution Result]\n${code.slice(0, 100) || "No code executed"}`);
  };

  // Simulate submit
  const handleSubmit = () => {
    alert("Code submitted for evaluation! (Simulated)");
  };

  // Restriction: block right click, copy, paste, inspect
  const blockEvents = (e) => {
    e.preventDefault();
    return false;
  };

  // Render a loading state or nothing while ensuring client-side only rendering
  if (!isClient) {
    return (
      <div className="w-full min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 flex items-center justify-center">
        <div className="text-center">
          <div className="inline-block animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-purple-500 mb-4"></div>
          <p className="text-xl font-semibold text-gray-300">Initializing Coding Environment...</p>
        </div>
      </div>
    );
  }

  return (
    // Apply restrictions to the entire page
    <div
      className="w-full min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-gray-100"
      onContextMenu={blockEvents}
      onCopy={blockEvents}
      onCut={blockEvents}
      onPaste={blockEvents}
      onKeyDown={(e) => {
        // Block common shortcuts
        if (
          (e.ctrlKey || e.metaKey) &&
          ["c", "v", "x", "u", "s", "p"].includes(e.key.toLowerCase())
        )
          e.preventDefault();
        // Block developer tools
        if (
          e.key === "F12" ||
          (e.ctrlKey && e.shiftKey && ["i", "c", "j"].includes(e.key.toLowerCase()))
        )
          e.preventDefault();
        // Block 'Ctrl + U' (View Source)
        if ((e.ctrlKey || e.metaKey) && e.key === "u") e.preventDefault();
      }}
    >
      {/* 
        IMPORTANT: Move this meta tag to your root layout (e.g., app/layout.js) 
        <meta name="format-detection" content="telephone=no, date=no, email=no, address=no" /> 
      */}

      <ResizableSplit
        left={
          <div className="h-full flex flex-col bg-gray-800/70 backdrop-blur-sm rounded-2xl border border-gray-700 shadow-2xl overflow-hidden">
            {/* Question Header */}
            <div className="bg-gradient-to-r from-purple-900/80 to-indigo-900/80 p-5 font-bold text-xl text-white sticky top-0 z-10 shadow-lg border-b border-gray-700">
              Two Sum
            </div>

            {/* Question Description */}
            <div className="bg-gray-800/40 p-6 flex-1 overflow-auto border-b border-gray-700">
              <div className="prose prose-invert prose-purple max-w-none">
                <p className="text-gray-200">
                  Given an array of integers <code className="text-purple-300">nums</code> and an integer <code className="text-purple-300">target</code>, return <em>indices</em> of the two numbers such that they add up to <code className="text-purple-300">target</code>.
                </p>
                <p className="text-gray-300 mt-3">
                  You may assume that each input would have <strong>exactly one solution</strong>, and you may not use the <em>same</em> element twice.
                </p>
                <p className="text-gray-300">
                  You can return the answer in any order.
                </p>
              </div>
            </div>

            {/* Examples Section */}
            <div className="bg-gray-800/30 p-5 border-b border-gray-700">
              <h3 className="font-semibold text-lg text-purple-300 mb-3">Examples:</h3>
              <div className="space-y-4">
                <div className="text-sm p-3 bg-gray-700/50 rounded-lg border border-gray-600">
                  <div className="flex items-start mb-1">
                    <span className="font-medium text-gray-400 mr-2 shrink-0">Input:</span>
                    <code className="font-mono text-yellow-200 break-all">nums = [2,7,11,15], target = 9</code>
                  </div>
                  <div className="flex items-start">
                    <span className="font-medium text-gray-400 mr-2 shrink-0">Output:</span>
                    <code className="font-mono text-green-300 break-all">[0,1]</code>
                  </div>
                  <p className="text-gray-400 text-xs mt-2 italic">Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].</p>
                </div>
                <div className="text-sm p-3 bg-gray-700/50 rounded-lg border border-gray-600">
                  <div className="flex items-start mb-1">
                    <span className="font-medium text-gray-400 mr-2 shrink-0">Input:</span>
                    <code className="font-mono text-yellow-200 break-all">nums = [3,2,4], target = 6</code>
                  </div>
                  <div className="flex items-start">
                    <span className="font-medium text-gray-400 mr-2 shrink-0">Output:</span>
                    <code className="font-mono text-green-300 break-all">[1,2]</code>
                  </div>
                </div>
              </div>
            </div>

            {/* Question Selector */}
            <div className="p-4">
              <div className="flex flex-wrap gap-2">
                {["Q1", "Q2"].map((q, idx) => (
                  <button
                    key={q}
                    className={`px-4 py-2 rounded-lg font-semibold text-sm transition-all duration-200 transform hover:scale-105 ${
                      selected === idx
                        ? "bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-lg shadow-purple-500/20"
                        : "bg-gray-700 hover:bg-gray-600 text-gray-200 border border-gray-600"
                    }`}
                    onClick={() => setSelected(idx)}
                  >
                    {q}
                  </button>
                ))}
              </div>
            </div>
          </div>
        }
        right={
          <div className="h-full flex flex-col bg-gray-800/70 backdrop-blur-sm rounded-2xl border border-gray-700 shadow-2xl overflow-hidden">
             {/* Editor Header with Controls */}
            <div className="bg-gray-800/60 p-4 flex flex-wrap items-center gap-4 border-b border-gray-700">
              <div className="flex-1 min-w-[150px]">
                <label htmlFor="language-select" className="block text-xs font-medium text-gray-400 mb-1">Language</label>
                <select
                  id="language-select"
                  value={language}
                  onChange={(e) => setLanguage(e.target.value)}
                  className="w-full bg-gray-700 border border-gray-600 text-gray-100 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                >
                  {languages.map((l) => (
                    <option key={l} value={l} className="bg-gray-800">
                      {l}
                    </option>
                  ))}
                </select>
              </div>
              <div className="flex gap-2 pt-5"> {/* Added pt-5 to align buttons with select */}
                <button
                  onClick={handleRun}
                  className="bg-gradient-to-r from-green-600 to-emerald-700 hover:from-green-700 hover:to-emerald-800 text-white px-5 py-2 rounded-lg font-bold text-sm shadow-lg hover:shadow-green-500/20 transition-all duration-200 flex items-center gap-2"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                  </svg>
                  Run Code
                </button>
                <button
                  onClick={handleSubmit}
                  className="bg-gradient-to-r from-blue-600 to-indigo-700 hover:from-blue-700 hover:to-indigo-800 text-white px-5 py-2 rounded-lg font-bold text-sm shadow-lg hover:shadow-blue-500/20 transition-all duration-200 flex items-center gap-2"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Submit
                </button>
              </div>
            </div>

            {/* Code Editor Area - Takes remaining space */}
            <div className="flex-1 min-h-0"> {/* min-h-0 is crucial for flex overflow */}
              <CodeEditor code={code} setCode={setCode} language={language} />
            </div>

            {/* Output Window */}
            <div className="bg-gray-900/80 p-4 border-t border-gray-700">
              <OutputWindow output={output} />
            </div>
          </div>
        }
      />
    </div>
  );
}