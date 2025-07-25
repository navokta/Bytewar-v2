export default function OutputWindow({ output }) {
  return (
    <div className="bg-gray-800 rounded-lg p-4 font-mono text-white border border-gray-600">
      <div className="font-bold mb-1">Output:</div>
      <pre className="whitespace-pre-wrap">{output}</pre>
    </div>
  );
}