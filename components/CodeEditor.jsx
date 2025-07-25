// components/CodeEditor.jsx
"use client";
import { useState, useEffect } from 'react';

// Dynamically import ReactMonacoEditor with SSR disabled
import dynamic from 'next/dynamic';

// This component will only be imported and rendered on the client side
const MonacoEditor = dynamic(
  () => import('@monaco-editor/react'),
  { ssr: false, loading: () => <p>Loading editor...</p> } // Optional loading component
);

export default function CodeEditor({ code, setCode, language }) {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    // Set isClient to true only after the component mounts on the client
    setIsClient(true);
  }, []);

  // Map common language names to Monaco identifiers if needed
  const getMonacoLanguage = (lang) => {
    switch (lang.toLowerCase()) {
      case 'c++': return 'cpp';
      case 'javascript': return 'javascript';
      case 'python': return 'python';
      case 'java': return 'java';
      default: return 'javascript'; // Fallback
    }
  };

  // Render nothing on the server, and the loading placeholder initially on the client
  if (!isClient) {
    return <div className="bg-gray-800 rounded-lg border border-gray-700 h-[400px] flex items-center justify-center">
             <p className="text-gray-400">Loading editor...</p>
           </div>;
  }

  return (
    <div className="bg-gray-800 rounded-lg border border-gray-700 overflow-hidden shadow-lg">
      <MonacoEditor
        height="400px"
        language={getMonacoLanguage(language)}
        theme="vs-dark" // Use VS Code's dark theme
        value={code}
        onChange={(newValue) => setCode(newValue)}
        options={{
          minimap: { enabled: false },
          fontSize: 14,
          scrollBeyondLastLine: false,
          automaticLayout: true, // Adjusts to container size
          tabSize: 2,
          fontFamily: 'JetBrains Mono, Consolas, monospace', // Use a coding font if available
        }}
        // Provide a fallback UI while the editor is loading
        loading={<div className="h-full flex items-center justify-center text-gray-500">Initializing editor...</div>}
      />
    </div>
  );
}