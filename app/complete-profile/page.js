'use client';
import { useSearchParams, useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';

export default function CompleteProfile() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    // Check if user came from OAuth (no email in URL)
    fetch('/api/auth/session')
      .then(res => res.json())
      .then(session => {
        if (session?.user?.email) {
          setEmail(session.user.email);
        } else {
          router.push('/signup'); // Not an OAuth user? Redirect to signup
        }
      });
  }, []);

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

    if (res.ok) {
      router.push('/'); // Redirect to home after completion
    } else {
      setError("Failed to save profile");
    }
  };

  if (!email) return <div>Loading...</div>; // Wait for session check

  return (
    <div className="p-6 max-w-md mx-auto">
      <h1>Complete Your Profile</h1>
      <form onSubmit={handleSubmit}>
        <input type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="Phone" required />
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" required />
        <button type="submit">Save</button>
        {error && <p className="text-red-500">{error}</p>}
      </form>
    </div>
  );
}