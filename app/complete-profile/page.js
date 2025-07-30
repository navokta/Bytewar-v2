// app/complete-profile/page.jsx

"use client";

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function CompleteProfile() {
  const { data: session } = useSession();
  const router = useRouter();
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch("/api/save-extra-details", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ phone, password }),
    });

    if (res.ok) {
      router.push("/dashboard"); // redirect after completion
    } else {
      alert("Failed to save details.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto p-6 bg-white shadow rounded">
      <h2 className="text-2xl font-semibold mb-4">Complete Your Profile</h2>
      <div className="mb-4">
        <label className="block text-sm font-medium">Phone Number</label>
        <input
          type="tel"
          required
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          className="w-full border px-3 py-2 rounded"
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium">Set Password</label>
        <input
          type="password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full border px-3 py-2 rounded"
        />
      </div>
      <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">Save</button>
    </form>
  );
}
