"use client";
import { useRef, useEffect } from "react";

export default function CodePlayground({ code, setCode, language }) {
  const textareaRef = useRef();

  useEffect(() => {
    const textarea = textareaRef.current;
    // Disable right click, copy, paste, cut, context menu, and keyboard shortcuts
    const blockEvent = (e) => e.preventDefault();
    textarea.addEventListener("contextmenu", blockEvent);
    textarea.addEventListener("copy", blockEvent);
    textarea.addEventListener("paste", blockEvent);
    textarea.addEventListener("cut", blockEvent);
    textarea.addEventListener("keydown", (e) => {
      if ((e.ctrlKey || e.metaKey) && ["c", "v", "x", "u", "s"].includes(e.key.toLowerCase())) {
        e.preventDefault();
      }
      // Block F12, Ctrl+Shift+I, Ctrl+Shift+C, Ctrl+Shift+J
      if (
        e.key === "F12" ||
        (e.ctrlKey && e.shiftKey && ["i", "c", "j"].includes(e.key.toLowerCase()))
      ) {
        e.preventDefault();
      }
    });
    return () => {
      textarea.removeEventListener("contextmenu", blockEvent);
      textarea.removeEventListener("copy", blockEvent);
      textarea.removeEventListener("paste", blockEvent);
      textarea.removeEventListener("cut", blockEvent);
    };
  }, []);

  return (
    <textarea
      ref={textareaRef}
      value={code}
      onChange={e => setCode(e.target.value)}
      spellCheck={false}
      className="w-full h-96 p-4 font-mono text-base rounded border resize-none bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-400"
      placeholder={`Write your ${language} code here...`}
      style={{ minHeight: 350 }}
    />
  );
}
