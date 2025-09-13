"use client";
import AdminAuth from "@/components/AdminAuth";
import { useEffect, useState, useRef } from "react";

function AllEntryContent() {
  const [students, setStudents] = useState([]);
  const [editing, setEditing] = useState(null);
  const [form, setForm] = useState({ name: "", email: "", college: "", certificateLink: "" });
  const [isLoading, setIsLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortConfig, setSortConfig] = useState({ key: null, direction: 'ascending' });
  const [activeTab, setActiveTab] = useState('all');
  const tableRef = useRef(null);

  // Load all students
  useEffect(() => {
    fetchStudents();
  }, []);

  const fetchStudents = async () => {
    setIsLoading(true);
    try {
      const res = await fetch("/api/students");
      const data = await res.json();
      if (data.success) setStudents(data.students);
    } catch (error) {
      console.error("Failed to fetch students:", error);
    } finally {
      setIsLoading(false);
    }
  };

  // Handle edit click
  const handleEdit = (student) => {
    setEditing(student.uuid);
    setForm({
      name: student.name,
      email: student.email,
      college: student.college,
      certificateLink: student.certificateLink,
    });
  };

  // Handle edit save
  const handleUpdate = async (uuid) => {
    const res = await fetch("/api/students", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ uuid, ...form }),
    });
    const data = await res.json();
    if (data.success) {
      setEditing(null);
      fetchStudents();
      
      // Success animation
      const row = document.getElementById(`row-${uuid}`);
      if (row) {
        row.classList.add("animate-success");
        setTimeout(() => row.classList.remove("animate-success"), 2000);
      }
    }
  };

  // Handle delete with confirmation
  const handleDelete = async (uuid) => {
    if (!confirm("⚠️ Are you sure you want to delete this entry?")) return;

    const res = await fetch("/api/students", {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ uuid }),
    });

    const data = await res.json();
    if (data.success) {
      // Delete animation
      const row = document.getElementById(`row-${uuid}`);
      if (row) {
        row.classList.add("animate-delete");
        setTimeout(() => {
          fetchStudents();
        }, 500);
      }
    }
  };

  // Handle sorting
  const handleSort = (key) => {
    let direction = 'ascending';
    if (sortConfig.key === key && sortConfig.direction === 'ascending') {
      direction = 'descending';
    }
    setSortConfig({ key, direction });
  };

  // Filter and sort students
  const filteredAndSortedStudents = students
    .filter(student => 
      student.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      student.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      student.college.toLowerCase().includes(searchTerm.toLowerCase()) ||
      student.uuid.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .sort((a, b) => {
      if (sortConfig.key) {
        if (a[sortConfig.key] < b[sortConfig.key]) {
          return sortConfig.direction === 'ascending' ? -1 : 1;
        }
        if (a[sortConfig.key] > b[sortConfig.key]) {
          return sortConfig.direction === 'ascending' ? 1 : -1;
        }
      }
      return 0;
    });

  // Mobile view component for small screens
  const MobileStudentCard = ({ student }) => (
    <div 
      key={student.uuid} 
      id={`row-${student.uuid}`}
      className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl border border-gray-700/50 mb-4 p-5 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-1 backdrop-blur-md"
      style={{ animationDelay: `${filteredAndSortedStudents.indexOf(student) * 0.05}s` }}
    >
      <div className="flex justify-between items-start mb-4">
        <div className="flex-1">
          <h3 className="text-white font-bold text-lg mb-1">{student.name}</h3>
          <span className="inline-flex items-center px-2 py-1 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 text-cyan-300 text-xs font-medium rounded-full border border-cyan-500/30">
            {student.uuid.slice(0, 8)}...
          </span>
        </div>
        <div className="flex space-x-1">
          {editing === student.uuid ? (
            <>
              <button 
                onClick={() => handleUpdate(student.uuid)}
                className="p-2 bg-green-600 hover:bg-green-700 text-white rounded-xl transition-colors duration-200 shadow-md"
                aria-label="Save"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
              </button>
              <button 
                onClick={() => setEditing(null)}
                className="p-2 bg-gray-600 hover:bg-gray-700 text-white rounded-xl transition-colors duration-200 shadow-md"
                aria-label="Cancel"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                </svg>
              </button>
            </>
          ) : (
            <>
              <button 
                onClick={() => handleEdit(student)}
                className="p-2 bg-blue-600 hover:bg-blue-700 text-white rounded-xl transition-colors duration-200 shadow-md"
                aria-label="Edit"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path>
                </svg>
              </button>
              <button 
                onClick={() => handleDelete(student.uuid)}
                className="p-2 bg-red-600 hover:bg-red-700 text-white rounded-xl transition-colors duration-200 shadow-md"
                aria-label="Delete"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path>
                </svg>
              </button>
            </>
          )}
        </div>
      </div>
      
      <div className="space-y-3 mb-4">
        <div className="flex items-center p-3 bg-gray-800/50 rounded-xl border border-gray-700/30">
          <div className="p-2 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-lg mr-3">
            <svg className="w-4 h-4 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
            </svg>
          </div>
          <div className="flex-1">
            <p className="text-gray-400 text-sm">Email</p>
            {editing === student.uuid ? (
              <input
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full mt-1 px-2 py-1 bg-gray-700/80 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-1 focus:ring-cyan-500 text-sm"
                placeholder="Enter email"
              />
            ) : (
              <p className="text-white font-medium truncate max-w-[180px]" title={student.email}>{student.email}</p>
            )}
          </div>
        </div>
        
        <div className="flex items-center p-3 bg-gray-800/50 rounded-xl border border-gray-700/30">
          <div className="p-2 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-lg mr-3">
            <svg className="w-4 h-4 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h1M5 16v1a2 2 0 002 2h10a2 2 0 002-2v-1"></path>
            </svg>
          </div>
          <div className="flex-1">
            <p className="text-gray-400 text-sm">College</p>
            {editing === student.uuid ? (
              <input
                value={form.college}
                onChange={(e) => setForm({ ...form, college: e.target.value })}
                className="w-full mt-1 px-2 py-1 bg-gray-700/80 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-1 focus:ring-cyan-500 text-sm"
                placeholder="Enter college"
              />
            ) : (
              <p className="text-white font-medium truncate max-w-[180px]" title={student.college}>{student.college}</p>
            )}
          </div>
        </div>
        
        <div className="flex items-center p-3 bg-gray-800/50 rounded-xl border border-gray-700/30">
          <div className="p-2 bg-gradient-to-r from-indigo-500/20 to-blue-500/20 rounded-lg mr-3">
            <svg className="w-4 h-4 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
            </svg>
          </div>
          <div className="flex-1">
            <p className="text-gray-400 text-sm">Certificate</p>
            {editing === student.uuid ? (
              <input
                value={form.certificateLink}
                onChange={(e) => setForm({ ...form, certificateLink: e.target.value })}
                className="w-full mt-1 px-2 py-1 bg-gray-700/80 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-1 focus:ring-cyan-500 text-sm"
                placeholder="Enter certificate link"
              />
            ) : (
              <a 
                href={`/certificate/${student.uuid}`} 
                target="_blank"
                className="text-cyan-400 hover:text-cyan-300 transition-colors flex items-center text-sm font-medium"
              >
                <span className="truncate max-w-[150px]">View Certificate</span>
                <svg className="w-3 h-3 ml-1" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14,3V5H17.59L7.76,14.83L9.17,16.24L19,6.41V10H21V3M19,19H5V5H12V3H5C3.89,3 3,3.9 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V12H19V19Z" />
                </svg>
              </a>
            )}
          </div>
        </div>
      </div>
      
      {editing === student.uuid && (
        <div className="flex space-x-2 pt-2">
          <button 
            onClick={() => handleUpdate(student.uuid)}
            className="flex-1 py-2 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-medium rounded-xl transition-all duration-200 shadow-lg transform hover:scale-[1.02]"
          >
            Save Changes
          </button>
          <button 
            onClick={() => setEditing(null)}
            className="px-4 py-2 bg-gray-700 hover:bg-gray-600 text-gray-300 font-medium rounded-xl transition-all duration-200 shadow-lg"
          >
            Cancel
          </button>
        </div>
      )}
    </div>
  );

  // Desktop/tablet view component
  const DesktopStudentRow = ({ student, index }) => (
    <tr 
      key={student.uuid} 
      id={`row-${student.uuid}`}
      className="border-b border-gray-800/50 hover:bg-gray-800/30 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/10"
      style={{ animationDelay: `${index * 0.05}s` }}
    >
      <td className="p-4">
        {editing === student.uuid ? (
          <input
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            className="w-full px-3 py-2 bg-gray-800/80 border border-gray-700 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-200 text-sm"
          />
        ) : (
          <div className="flex items-center">
            <div className="w-8 h-8 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full flex items-center justify-center mr-3">
              <span className="text-cyan-400 text-xs font-bold">{student.name.charAt(0)}</span>
            </div>
            <span className="text-white font-medium text-sm">{student.name}</span>
          </div>
        )}
      </td>
      <td className="p-4">
        {editing === student.uuid ? (
          <input
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            className="w-full px-3 py-2 bg-gray-800/80 border border-gray-700 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-200 text-sm"
          />
        ) : (
          <span className="text-gray-300 text-sm truncate max-w-xs" title={student.email}>{student.email}</span>
        )}
      </td>
      <td className="p-4">
        {editing === student.uuid ? (
          <input
            value={form.college}
            onChange={(e) => setForm({ ...form, college: e.target.value })}
            className="w-full px-3 py-2 bg-gray-800/80 border border-gray-700 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-200 text-sm"
          />
        ) : (
          <span className="text-gray-300 text-sm truncate max-w-xs" title={student.college}>{student.college}</span>
        )}
      </td>
      <td className="p-4">
        <div className="flex items-center">
          <span className="text-gray-400 text-xs font-mono bg-gray-800/50 px-3 py-1 rounded-lg border border-gray-700/50">
            {student.uuid.slice(0, 8)}...
          </span>
        </div>
      </td>
      <td className="p-4">
        {editing === student.uuid ? (
          <input
            value={form.certificateLink}
            onChange={(e) => setForm({ ...form, certificateLink: e.target.value })}
            className="w-full px-3 py-2 bg-gray-800/80 border border-gray-700 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-200 text-sm"
          />
        ) : (
          <a 
            href={`/certificate/${student.uuid}`} 
            target="_blank"
            className="text-cyan-400 hover:text-cyan-300 transition-colors flex items-center text-sm"
          >
            <span>View</span>
            <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
            </svg>
          </a>
        )}
      </td>
      <td className="p-4">
        <div className="flex items-center space-x-2">
          {editing === student.uuid ? (
            <>
              <button 
                onClick={() => handleUpdate(student.uuid)}
                className="p-2 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white rounded-xl transition-all duration-200 shadow-md transform hover:scale-[1.05]"
                aria-label="Save"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
              </button>
              <button 
                onClick={() => setEditing(null)}
                className="p-2 bg-gray-700 hover:bg-gray-600 text-gray-300 rounded-xl transition-all duration-200 shadow-md"
                aria-label="Cancel"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                </svg>
              </button>
            </>
          ) : (
            <>
              <button 
                onClick={() => handleEdit(student)}
                className="p-2 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white rounded-xl transition-all duration-200 shadow-md transform hover:scale-[1.05]"
                aria-label="Edit"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path>
                </svg>
              </button>
              <button 
                onClick={() => handleDelete(student.uuid)}
                className="p-2 bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white rounded-xl transition-all duration-200 shadow-md transform hover:scale-[1.05]"
                aria-label="Delete"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path>
                </svg>
              </button>
            </>
          )}
        </div>
      </td>
    </tr>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900/20 to-slate-900 p-2 md:p-4 lg:p-8 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl mb-4 shadow-lg">
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
            </svg>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-2 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
            Student Records Dashboard
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Manage, edit, and track all student entries with a modern, intuitive interface
          </p>
        </div>

        {/* Controls */}
        <div className="mb-6 flex flex-col lg:flex-row gap-4">
          <div className="relative flex-grow">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
              </svg>
            </div>
            <input
              type="text"
              placeholder="Search students by name, email, college or UUID..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-12 pr-6 py-4 w-full bg-gray-800/80 border border-gray-700/50 rounded-2xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-transparent transition-all duration-300 text-base shadow-lg"
            />
          </div>
          
          <button
            onClick={fetchStudents}
            className="px-8 py-4 bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 text-white rounded-2xl font-medium transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center justify-center"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path>
            </svg>
            Refresh Data
          </button>
        </div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap gap-2 mb-6">
          <button
            onClick={() => setActiveTab('all')}
            className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
              activeTab === 'all'
                ? 'bg-gradient-to-r from-cyan-600 to-blue-600 text-white shadow-lg transform scale-105'
                : 'bg-gray-800/50 text-gray-400 hover:bg-gray-800/70 hover:text-gray-200'
            }`}
          >
            All Students ({students.length})
          </button>
          <button
            onClick={() => setActiveTab('recent')}
            className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
              activeTab === 'recent'
                ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg transform scale-105'
                : 'bg-gray-800/50 text-gray-400 hover:bg-gray-800/70 hover:text-gray-200'
            }`}
          >
            Recent
          </button>
          <button
            onClick={() => setActiveTab('verified')}
            className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
              activeTab === 'verified'
                ? 'bg-gradient-to-r from-green-600 to-teal-600 text-white shadow-lg transform scale-105'
                : 'bg-gray-800/50 text-gray-400 hover:bg-gray-800/70 hover:text-gray-200'
            }`}
          >
            Verified
          </button>
        </div>

        {/* Table / Mobile Cards */}
        <div className="bg-gray-800/50 backdrop-blur-md rounded-3xl border border-gray-700/50 overflow-hidden shadow-2xl">
          {isLoading ? (
            <div className="p-12 text-center">
              <div className="inline-block animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-cyan-500 mb-4"></div>
              <p className="text-gray-400 text-xl">Loading student data...</p>
            </div>
          ) : filteredAndSortedStudents.length === 0 ? (
            <div className="p-12 text-center">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-gray-800/50 rounded-full mb-4">
                <svg className="w-10 h-10 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
              </div>
              <p className="text-gray-400 text-xl">No student records found</p>
              <p className="text-gray-500 mt-2">Try adjusting your search criteria</p>
            </div>
          ) : (
            <div className="overflow-x-auto">
              {/* Desktop/Tablet View */}
              <div className="hidden md:block">
                <table ref={tableRef} className="w-full min-w-full">
                  <thead className="bg-gray-800/70">
                    <tr>
                      {['name', 'email', 'college', 'uuid', 'certificate', 'actions'].map((header) => (
                        <th 
                          key={header} 
                          className="p-4 text-left text-gray-300 font-semibold uppercase text-sm tracking-wider border-b border-gray-700/50 cursor-pointer hover:bg-gray-700/50 transition-colors duration-200"
                          onClick={() => header !== 'actions' && header !== 'certificate' ? handleSort(header) : null}
                        >
                          <div className="flex items-center">
                            {header === 'name' && 'Name'}
                            {header === 'email' && 'Email'}
                            {header === 'college' && 'College'}
                            {header === 'uuid' && 'UUID'}
                            {header === 'certificate' && 'Certificate'}
                            {header === 'actions' && 'Actions'}
                            {header !== 'actions' && header !== 'certificate' && (
                              <svg className={`w-4 h-4 ml-2 ${sortConfig.key === header ? 'text-cyan-400' : 'text-gray-500'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16V4m0 0L3 8m4-4l4 4"></path>
                              </svg>
                            )}
                          </div>
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-700/30">
                    {filteredAndSortedStudents.map((s, index) => (
                      <DesktopStudentRow key={s.uuid} student={s} index={index} />
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Mobile View */}
              <div className="md:hidden p-4">
                {filteredAndSortedStudents.map((s) => (
                  <MobileStudentCard key={s.uuid} student={s} />
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Stats Footer */}
        <div className="mt-8 flex flex-col md:flex-row justify-between items-center gap-4 p-6 bg-gradient-to-r from-gray-800/50 to-gray-900/50 backdrop-blur-md rounded-2xl border border-gray-700/50 shadow-lg">
          <div className="flex flex-col sm:flex-row items-center gap-6">
            <div className="text-center sm:text-left">
              <p className="text-gray-400 text-sm">Total Records</p>
              <p className="text-white text-2xl font-bold">{students.length}</p>
            </div>
            <div className="text-center sm:text-left">
              <p className="text-gray-400 text-sm">Filtered Results</p>
              <p className="text-cyan-400 text-2xl font-bold">{filteredAndSortedStudents.length}</p>
            </div>
            <div className="text-center sm:text-left">
              <p className="text-gray-400 text-sm">Active Edits</p>
              <p className="text-purple-400 text-2xl font-bold">{editing ? '1' : '0'}</p>
            </div>
          </div>
          
          <div className="text-gray-400 text-sm">
            Last updated: {new Date().toLocaleString()}
          </div>
        </div>
      </div>

      <style jsx global>{`
        @keyframes laser-line {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        
        @keyframes success {
          0% { background-color: transparent; }
          50% { background-color: rgba(16, 185, 129, 0.3); }
          100% { background-color: transparent; }
        }
        
        @keyframes delete {
          0% { 
            opacity: 1;
            transform: translateX(0);
          }
          100% { 
            opacity: 0;
            transform: translateX(100%);
          }
        }
        
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-laser-line {
          animation: laser-line 2s linear infinite;
        }
        
        .animate-success {
          animation: success 2s ease;
        }
        
        .animate-delete {
          animation: delete 0.5s ease forwards;
        }
        
        /* Animation for rows */
        tbody tr {
          opacity: 0;
          animation: fadeIn 0.5s ease forwards;
        }
        
        /* Responsive adjustments for mobile */
        @media (max-width: 768px) {
          /* Ensure tables are scrollable on small screens */
          .overflow-x-auto {
            overflow-x: auto;
            -webkit-overflow-scrolling: touch;
          }
          
          /* Make input fields full width on mobile */
          .w-full {
            width: 100%;
          }
          
          /* Adjust button sizes on mobile */
          .px-2, .py-1, .text-xs {
            padding: 0.5rem 0.75rem;
            font-size: 0.75rem;
          }
          
          /* Increase spacing between mobile cards */
          .md\:hidden > div {
            margin-bottom: 1rem;
          }
          
          /* Ensure search input doesn't overflow */
          .relative {
            position: relative;
            width: 100%;
          }
          
          /* Hide unnecessary elements on very small screens */
          .md\:block {
            display: none;
          }
          
          /* Make icons smaller on mobile */
          svg.w-3, svg.h-3 {
            width: 0.75rem;
            height: 0.75rem;
          }
        }
        
        /* Extra small devices (portrait phones, less than 640px) */
        @media (max-width: 639px) {
          .p-2, .md\:p-3, .lg\:p-4 {
            padding: 0.5rem;
          }
          
          .text-sm, .md\:text-base {
            font-size: 0.875rem;
          }
          
          .h-4, .w-4, .h-5, .w-5 {
            height: 0.875rem;
            width: 0.875rem;
          }
          
          .text-xs {
            font-size: 0.75rem;
          }
          
          .min-h-screen {
            padding-top: 1rem;
            padding-bottom: 1rem;
          }
          
          .bg-gray-800\/60 {
            background-color: rgba(31, 41, 55, 0.6);
          }
        }
        
        /* Tablet landscape and up */
        @media (min-width: 768px) {
          .min-w-full {
            min-width: 100%;
          }
          
          .flex-col {
            flex-direction: column;
          }
          
          .md\:flex-row {
            flex-direction: row;
          }
          
          .md\:gap-4 {
            gap: 1rem;
          }
          
          .md\:p-3 {
            padding: 0.75rem;
          }
          
          .md\:p-4 {
            padding: 1rem;
          }
          
          .md\:text-base {
            font-size: 1rem;
          }
          
          .md\:text-sm {
            font-size: 0.875rem;
          }
        }
        
        /* Desktop */
        @media (min-width: 1024px) {
          .lg\:p-4 {
            padding: 1rem;
          }
          
          .text-lg {
            font-size: 1.125rem;
          }
          
          .w-6, .h-6 {
            width: 1.5rem;
            height: 1.5rem;
          }
          
          .w-8, .h-8 {
            width: 2rem;
            height: 2rem;
          }
          
          .max-w-[120px] {
            max-width: 120px;
          }
          
          .max-w-[180px] {
            max-width: 180px;
          }
        }
        
        /* Ensure proper layout on all devices */
        * {
          box-sizing: border-box;
        }
        
        /* Prevent horizontal scrolling on mobile */
        html, body {
          overflow-x: hidden;
        }
        
        /* Improve touch targets on mobile */
        button {
          min-height: 36px;
          min-width: 36px;
        }
        
        /* Better contrast on dark backgrounds */
        .text-gray-300 {
          color: #d1d5db;
        }
        
        .text-gray-400 {
          color: #9ca3af;
        }
        
        .text-gray-700 {
          color: #374151;
        }
        
        /* Custom scrollbar */
        ::-webkit-scrollbar {
          width: 8px;
          height: 8px;
        }
        
        ::-webkit-scrollbar-track {
          background: transparent;
        }
        
        ::-webkit-scrollbar-thumb {
          background: rgba(148, 163, 184, 0.3);
          border-radius: 10px;
        }
        
        ::-webkit-scrollbar-thumb:hover {
          background: rgba(148, 163, 184, 0.5);
        }
        
        /* Glow effect on hover */
        .hover\:shadow-lg:hover {
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
        }
        
        /* Gradient borders */
        .border-gradient {
          border: 1px solid transparent;
          background-origin: border-box;
          background-clip: content-box, border-box;
        }
      `}</style>
    </div>
  );
}

export default function ProtectedAllEntry() {
  return (
    <AdminAuth type="all-entry">
      <AllEntryContent />
    </AdminAuth>
  );
}