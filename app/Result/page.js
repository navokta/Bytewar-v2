'use client';
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

export default function ResultPage() {
  const router = useRouter();

  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(true);

  // Static fallback data (when API fails or no data found)
  const fallbackResults = [
    { name: 'CodeMaster' },
    { name: 'LogicWizard' },
    { name: 'PixelPirate' },
    { name: 'DevDino' },
    { name: 'SyntaxSlayer' },
  ];

  useEffect(() => {
    const fetchResults = async () => {
      try {
        const res = await fetch('/api/results');
        if (!res.ok) throw new Error('Failed to fetch');
        const data = await res.json();

        if (Array.isArray(data) && data.length > 0) {
          setResults(data);
        } else {
          setResults(fallbackResults); // Use fallback if empty
        }
      } catch (error) {
        console.warn('Using fallback data due to error:', error.message);
        setResults(fallbackResults); // Use fallback if error
      } finally {
        setLoading(false);
      }
    };

    fetchResults();
  }, []);

  return (
    <div className="max-w-2xl mx-auto my-10 p-6 bg-white border border-gray-200 shadow-xl rounded-xl">
      <div className="bg-blue-100 text-blue-800 font-semibold text-lg text-center py-4 px-6 rounded-md mb-6">
        🎉 Thankuuu For Joining...
      </div>

      <h3 className="text-lg font-semibold text-gray-700 mb-4">📊 Here is the Result:</h3>

      {loading ? (
        <p className="text-center text-sm text-gray-500">Loading results...</p>
      ) : (
        <ul className="space-y-3 mb-6">
          {results.map((participant, index) => (
            <li
              key={index}
              className="flex items-center gap-3 bg-gray-50 border border-gray-200 p-3 rounded-md hover:shadow transition"
            >
              <div className="w-8 h-8 flex items-center justify-center bg-blue-600 text-white font-bold rounded-full">
                {index + 1}
              </div>
              <span className="text-sm font-medium text-gray-800">{participant.name}</span>
            </li>
          ))}
        </ul>
      )}

      <p className="text-sm text-gray-600 mb-6">
        ⚠️ This result might change as new participants submit better code.
      </p>

      <div className="text-center">
        <button
          onClick={() => router.push('/')}
          className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-md transition"
        >
          Go to Home Page
        </button>
      </div>
    </div>
  );
}
