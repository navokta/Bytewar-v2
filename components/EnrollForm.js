"use client";
import { useState } from "react";

export default function EnrollForm() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    state: "",
    college: "",
    language: "",
    details: ""
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  // Google Form POST endpoint (replace with your own)
  const GOOGLE_FORM_ACTION = "https://docs.google.com/forms/d/e/YOUR_FORM_ID/formResponse";
  // Map form fields to Google Form entry IDs (replace with your own)
  const ENTRY_IDS = {
    name: "entry.1234567890",
    phone: "entry.2345678901",
    email: "entry.3456789012",
    state: "entry.4567890123",
    college: "entry.5678901234",
    language: "entry.6789012345",
    details: "entry.7890123456"
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess(false);
    try {
      const formData = new FormData();
      Object.keys(form).forEach((key) => {
        formData.append(ENTRY_IDS[key], form[key]);
      });
      await fetch(GOOGLE_FORM_ACTION, {
        method: "POST",
        mode: "no-cors",
        body: formData
      });
      setSuccess(true);
    } catch (err) {
      setError("Submission failed. Please try again.");
    }
    setLoading(false);
  };

  if (success) {
    return (
      <div className="bg-green-100 p-6 rounded text-center">
        <h2 className="text-2xl font-bold mb-2">Form Submitted!</h2>
        <p className="mb-4">Please complete payment below and join the WhatsApp group.</p>
        <a href="https://wa.me/YOUR_GROUP_LINK" target="_blank" rel="noopener" className="inline-block bg-green-500 text-white px-6 py-2 rounded-full font-semibold mb-4">Join WhatsApp Group</a>
        <br />
        <a href="/" className="text-blue-600 underline">Go to Home</a>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white p-8 rounded shadow-md max-w-xl mx-auto flex flex-col gap-4">
      <h2 className="text-2xl font-bold mb-4 text-center">Enroll for ByteWar</h2>
      <input name="name" value={form.name} onChange={handleChange} required placeholder="Name" className="border p-2 rounded" />
      <input name="phone" value={form.phone} onChange={handleChange} required placeholder="Phone" className="border p-2 rounded" />
      <input name="email" value={form.email} onChange={handleChange} required placeholder="Email" type="email" className="border p-2 rounded" />
      <input name="state" value={form.state} onChange={handleChange} required placeholder="State" className="border p-2 rounded" />
      <input name="college" value={form.college} onChange={handleChange} required placeholder="College" className="border p-2 rounded" />
      <select name="language" value={form.language} onChange={handleChange} required className="border p-2 rounded">
        <option value="">Preferred Coding Language</option>
        <option value="C++">C++</option>
        <option value="Java">Java</option>
        <option value="Python">Python</option>
        <option value="JavaScript">JavaScript</option>
        <option value="Other">Other</option>
      </select>
      <textarea name="details" value={form.details} onChange={handleChange} placeholder="Other basic details (optional)" className="border p-2 rounded" />
      {error && <div className="text-red-600">{error}</div>}
      <button type="submit" disabled={loading} className="bg-blue-600 text-white px-6 py-2 rounded-full font-semibold mt-2 disabled:opacity-50">
        {loading ? "Submitting..." : "Submit & Continue to Payment"}
      </button>
    </form>
  );
}
