"use client";
import { useState } from "react";
import { codingQuestions } from "../../components/CodingQuestions";
import ResizableSplit from "../../components/ResizableSplit";
import CodePlayground from "../../components/CodePlayground";

const languages = ["C++", "Java", "Python", "JavaScript"];

export default function CodingPage() {
  const [selected, setSelected] = useState(0);
  const [language, setLanguage] = useState(languages[0]);
  const [code, setCode] = useState("");
  const [output, setOutput] = useState("");

  // Simulate code run (replace with real API call)
  const handleRun = () => {
    setOutput("[Simulated Output]\n" + code.slice(0, 100));
  };
  // Simulate submit
  const handleSubmit = () => {
    alert("Code submitted! (Simulated)");
  };

  // Restriction: block right click, copy, paste, inspect for left panel
  const blockEvents = (e) => e.preventDefault();

  return (
    <div className="w-full min-h-screen bg-gray-100">
      <ResizableSplit
        left={
          <div
            className="h-full flex flex-col gap-4 p-4 select-none"
            onContextMenu={blockEvents}
            onCopy={blockEvents}
            onPaste={blockEvents}
            onCut={blockEvents}
            onKeyDown={e => {
              if ((e.ctrlKey || e.metaKey) && ["c", "v", "x", "u", "s"].includes(e.key.toLowerCase())) e.preventDefault();
              if (e.key === "F12" || (e.ctrlKey && e.shiftKey && ["i", "c", "j"].includes(e.key.toLowerCase()))) e.preventDefault();
            }}
          >
            <div className="bg-blue-100 rounded p-2 font-bold text-lg sticky top-0 z-10">
              {codingQuestions[selected].title}
            </div>
            <div className="bg-white rounded p-4 shadow flex-1 overflow-auto">
              {codingQuestions[selected].question}
            </div>
            <div className="bg-gray-50 rounded p-4 shadow max-h-40 overflow-auto">
              <div className="font-semibold mb-2">Examples:</div>
              {codingQuestions[selected].examples.map((ex, i) => (
                <div key={i} className="mb-2">
                  <div className="text-xs text-gray-600">Input: <span className="font-mono">{ex.input}</span></div>
                  <div className="text-xs text-gray-600">Output: <span className="font-mono">{ex.output}</span></div>
                </div>
              ))}
            </div>
            <div className="flex gap-2 mt-4">
              {codingQuestions.map((q, idx) => (
                <button
                  key={q.id}
                  className={`px-3 py-1 rounded ${selected === idx ? "bg-blue-500 text-white" : "bg-gray-200"}`}
                  onClick={() => setSelected(idx)}
                >
                  Q{idx + 1}
                </button>
              ))}
            </div>
          </div>
        }
        right={
          <div className="h-full flex flex-col gap-4 p-4">
            <div className="flex items-center gap-4 mb-2">
              <select value={language} onChange={e => setLanguage(e.target.value)} className="border rounded px-2 py-1">
                {languages.map(l => <option key={l}>{l}</option>)}
              </select>
              <button onClick={handleRun} className="bg-green-500 text-white px-4 py-2 rounded font-semibold">Run</button>
              <button onClick={handleSubmit} className="bg-blue-600 text-white px-4 py-2 rounded font-semibold">Submit</button>
            </div>
            <CodePlayground code={code} setCode={setCode} language={language} />
            <div className="bg-black text-white rounded p-4 font-mono min-h-16 mt-2">
              <div className="font-bold mb-1">Output:</div>
              <pre className="whitespace-pre-wrap">{output}</pre>
            </div>
          </div>
        }
      />
    </div>
  );
}
