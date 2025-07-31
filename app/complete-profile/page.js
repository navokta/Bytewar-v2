'use client';
import { useSearchParams, useRouter } from 'next/navigation';
import { useState } from 'react';

export default function CompleteProfile() {
  const searchParams = useSearchParams();
  const email = searchParams.get('email');
  const router = useRouter();

  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!phone || !password) {
      setError("Phone and password are required");
      return;
    }

    const res = await fetch('/api/auth/complete-profile', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, phone, password }),
    });

    const data = await res.json();
    if (res.ok) {
      setSuccess("Profile completed. Redirecting...");
      setTimeout(() => router.push('/'), 2000);
    } else {
      setError(data.message || "Error saving data");
    }
  };

  return (
    <div className="p-6 max-w-md mx-auto mt-20 bg-white rounded-lg shadow-md">
      <h1 className="text-xl font-semibold mb-4">Complete Your Profile</h1>
      <form onSubmit={handleSubmit}>
        <label>Phone Number</label>
        <input type="text" value={phone} onChange={e => setPhone(e.target.value)} className="w-full mb-4 p-2 border" />

        <label>Password</label>
        <input type="password" value={password} onChange={e => setPassword(e.target.value)} className="w-full mb-4 p-2 border" />

        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">Save</button>

        {error && <p className="text-red-500 mt-2">{error}</p>}
        {success && <p className="text-green-500 mt-2">{success}</p>}
      </form>
    </div>
  );
}
