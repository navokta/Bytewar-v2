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
      className="bg-gray-800/60 backdrop-blur-md rounded-lg border border-gray-700/50 mb-3 p-3 shadow-lg hover:shadow-xl transition-all duration-300"
      style={{ animationDelay: `${filteredAndSortedStudents.indexOf(student) * 0.05}s` }}
    >
      <div className="flex justify-between items-start mb-2">
        <h3 className="text-white font-semibold text-sm md:text-base truncate flex-1">{student.name}</h3>
        <span className="text-cyan-300 text-xs font-mono px-2 py-1 bg-gray-700/50 rounded">
          {student.uuid.slice(0, 8)}...
        </span>
      </div>
      
      <div className="space-y-2 text-sm">
        <div className="flex items-center">
          <svg className="w-3 h-3 mr-1 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
          </svg>
          <span className="text-gray-300 truncate max-w-[180px]">{student.email}</span>
        </div>
        
        <div className="flex items-center">
          <svg className="w-3 h-3 mr-1 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h1M5 16v1a2 2 0 002 2h10a2 2 0 002-2v-1"></path>
          </svg>
          <span className="text-gray-300 truncate max-w-[180px]">{student.college}</span>
        </div>
        
        <div className="flex items-center">
          <svg className="w-3 h-3 mr-1 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
          </svg>
          <a 
            href={`/certificate/${student.uuid}`} 
            target="_blank"
            className="text-cyan-400 hover:text-cyan-300 transition-colors flex items-center text-xs"
          >
            <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 24 24">
              <path d="M14,3V5H17.59L7.76,14.83L9.17,16.24L19,6.41V10H21V3M19,19H5V5H12V3H5C3.89,3 3,3.9 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V12H19V19Z" />
            </svg>
            View Certificate
          </a>
        </div>
      </div>
      
      <div className="mt-3 pt-3 border-t border-gray-700/50 flex justify-between">
        {editing === student.uuid ? (
          <>
            <button 
              onClick={() => handleUpdate(student.uuid)}
              className="px-3 py-1 bg-green-600 hover:bg-green-700 text-white rounded text-xs flex-1 mr-1"
            >
              Save
            </button>
            <button 
              onClick={() => setEditing(null)}
              className="px-3 py-1 bg-gray-600 hover:bg-gray-700 text-white rounded text-xs flex-1 ml-1"
            >
              Cancel
            </button>
          </>
        ) : (
          <>
            <button 
              onClick={() => handleEdit(student)}
              className="px-3 py-1 bg-blue-600 hover:bg-blue-700 text-white rounded text-xs flex-1 mr-1"
            >
              Edit
            </button>
            <button 
              onClick={() => handleDelete(student.uuid)}
              className="px-3 py-1 bg-red-600 hover:bg-red-700 text-white rounded text-xs flex-1 ml-1"
            >
              Delete
            </button>
          </>
        )}
      </div>
    </div>
  );

  // Desktop/tablet view component
  const DesktopStudentRow = ({ student, index }) => (
    <tr 
      key={student.uuid} 
      id={`row-${student.uuid}`}
      className="border-b border-gray-700/30 hover:bg-gray-700/20 transition-all duration-300"
      style={{ animationDelay: `${index * 0.05}s` }}
    >
      <td className="p-2 md:p-3 lg:p-4">
        {editing === student.uuid ? (
          <input
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            className="w-full px-2 md:px-3 py-1 md:py-2 bg-gray-700/50 border border-gray-600 rounded text-white focus:outline-none focus:ring-1 focus:ring-cyan-500 text-sm md:text-base"
          />
        ) : (
          <div className="text-white text-sm md:text-base truncate max-w-[120px] md:max-w-none" title={student.name}>{student.name}</div>
        )}
      </td>
      <td className="p-2 md:p-3 lg:p-4">
        {editing === student.uuid ? (
          <input
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            className="w-full px-2 md:px-3 py-1 md:py-2 bg-gray-700/50 border border-gray-600 rounded text-white focus:outline-none focus:ring-1 focus:ring-cyan-500 text-sm md:text-base"
          />
        ) : (
          <div className="text-white text-sm md:text-base truncate max-w-[120px] md:max-w-none" title={student.email}>{student.email}</div>
        )}
      </td>
      <td className="p-2 md:p-3 lg:p-4">
        {editing === student.uuid ? (
          <input
            value={form.college}
            onChange={(e) => setForm({ ...form, college: e.target.value })}
            className="w-full px-2 md:px-3 py-1 md:py-2 bg-gray-700/50 border border-gray-600 rounded text-white focus:outline-none focus:ring-1 focus:ring-cyan-500 text-sm md:text-base"
          />
        ) : (
          <div className="text-white text-sm md:text-base truncate max-w-[120px] md:max-w-none" title={student.college}>{student.college}</div>
        )}
      </td>
      <td className="p-2 md:p-3 lg:p-4">
        <div className="text-cyan-300 font-mono text-xs md:text-sm truncate max-w-[80px] md:max-w-[120px] lg:max-w-none" title={student.uuid}>{student.uuid}</div>
      </td>
      <td className="p-2 md:p-3 lg:p-4">
        {editing === student.uuid ? (
          <input
            value={form.certificateLink}
            onChange={(e) => setForm({ ...form, certificateLink: e.target.value })}
            className="w-full px-2 md:px-3 py-1 md:py-2 bg-gray-700/50 border border-gray-600 rounded text-white focus:outline-none focus:ring-1 focus:ring-cyan-500 text-sm md:text-base"
          />
        ) : (
          <a 
            href={`/certificate/${student.uuid}`} 
            target="_blank"
            className="text-cyan-400 hover:text-cyan-300 transition-colors flex items-center text-sm md:text-base"
          >
            <svg className="w-3 h-3 md:w-4 md:h-4 mr-1" fill="currentColor" viewBox="0 0 24 24">
              <path d="M14,3V5H17.59L7.76,14.83L9.17,16.24L19,6.41V10H21V3M19,19H5V5H12V3H5C3.89,3 3,3.9 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V12H19V19Z" />
            </svg>
            View
          </a>
        )}
      </td>
      <td className="p-2 md:p-3 lg:p-4">
        <div className="flex flex-wrap gap-1 md:gap-2">
          {editing === student.uuid ? (
            <>
              <button 
                onClick={() => handleUpdate(student.uuid)}
                className="px-2 md:px-3 py-1 bg-green-600 hover:bg-green-700 text-white rounded flex items-center transition-colors text-xs md:text-sm"
              >
                <svg className="w-3 h-3 md:w-4 md:h-4 mr-1" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z" />
                </svg>
                Save
              </button>
              <button 
                onClick={() => setEditing(null)}
                className="px-2 md:px-3 py-1 bg-gray-600 hover:bg-gray-700 text-white rounded flex items-center transition-colors text-xs md:text-sm"
              >
                <svg className="w-3 h-3 md:w-4 md:h-4 mr-1" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z" />
                </svg>
                Cancel
              </button>
            </>
          ) : (
            <>
              <button 
                onClick={() => handleEdit(student)}
                className="px-2 md:px-3 py-1 bg-blue-600 hover:bg-blue-700 text-white rounded flex items-center transition-colors text-xs md:text-sm"
              >
                <svg className="w-3 h-3 md:w-4 md:h-4 mr-1" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.71,7.04C21.1,6.65 21.1,6 20.71,5.63L18.37,3.29C18,2.9 17.35,2.9 16.96,3.29L15.12,5.12L18.87,8.87M3,17.25V21H6.75L17.81,9.93L14.06,6.18L3,17.25Z" />
                </svg>
                Edit
              </button>
              <button 
                onClick={() => handleDelete(student.uuid)}
                className="px-2 md:px-3 py-1 bg-red-600 hover:bg-red-700 text-white rounded flex items-center transition-colors text-xs md:text-sm"
              >
                <svg className="w-3 h-3 md:w-4 md:h-4 mr-1" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19,4H15.5L14.5,3H9.5L8.5,4H5V6H19M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19Z" />
                </svg>
                Delete
              </button>
            </>
          )}
        </div>
      </td>
    </tr>
  );

  return (
    <div className="min-h-screen bg-gray-900 p-2 md:p-4 lg:p-8 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 to-purple-900/20"></div>
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 animate-laser-line"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-4 md:mb-8 p-3 md:p-4 bg-gray-800/80 backdrop-blur-md rounded-xl border border-gray-700/50">
          <h1 className="text-xl md:text-2xl lg:text-3xl font-bold text-white flex items-center">
            <span className="icon-orb animate-pulse mr-2 md:mr-3">
              <svg className="w-6 h-6 md:w-8 md:h-8" fill="currentColor" viewBox="0 0 24 24">
                <path d="M3,3H21V7H3V3M4,8H20V21H4V8M9,11V19H7V11H9M15,11V19H13V11H15M3,1H21V2H3V1Z" />
              </svg>
            </span>
            STUDENT RECORDS DATABASE
          </h1>
          <p className="text-gray-400 mt-1 md:mt-2 text-sm md:text-base">Manage all student entries in the system</p>
        </div>

        {/* Controls */}
        <div className="mb-4 md:mb-6 flex flex-col md:flex-row gap-3 md:gap-4 items-start">
          <div className="relative flex-grow w-full">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <svg className="h-4 w-4 md:h-5 md:w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
              </svg>
            </div>
            <input
              type="text"
              placeholder="Search students by name, email, college or UUID..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-9 md:pl-10 pr-3 md:pr-4 py-2 w-full bg-gray-800/60 border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 text-sm md:text-base"
            />
          </div>
          <button
            onClick={fetchStudents}
            className="px-4 py-2 bg-cyan-600 hover:bg-cyan-700 text-white rounded-lg flex items-center transition-colors w-full md:w-auto justify-center mt-2 md:mt-0 text-sm md:text-base min-h-[40px]"
          >
            <svg className="w-4 h-4 md:w-5 md:h-5 mr-1 md:mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path>
            </svg>
            Refresh Data
          </button>
        </div>

        {/* Table / Mobile Cards */}
        <div className="bg-gray-800/60 backdrop-blur-md rounded-xl border border-gray-700/50 overflow-hidden">
          {isLoading ? (
            <div className="p-8 md:p-12 text-center">
              <div className="inline-block animate-spin rounded-full h-8 w-8 md:h-12 md:w-12 border-t-2 border-b-2 border-cyan-500"></div>
              <p className="mt-3 md:mt-4 text-gray-400 text-sm md:text-base">Loading student data...</p>
            </div>
          ) : filteredAndSortedStudents.length === 0 ? (
            <div className="p-8 md:p-12 text-center">
              <svg className="inline-block h-12 w-12 md:h-16 md:w-16 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
              <p className="mt-3 md:mt-4 text-gray-400 text-sm md:text-base">No student records found</p>
            </div>
          ) : (
            <div className="overflow-x-auto">
              {/* Desktop/Tablet View */}
              <div className="hidden md:block">
                <table ref={tableRef} className="w-full min-w-full">
                  <thead>
                    <tr className="bg-gray-700/50 text-left">
                      {['name', 'email', 'college', 'uuid', 'certificate', 'actions'].map((header) => (
                        <th 
                          key={header} 
                          className="p-2 md:p-3 lg:p-4 text-gray-300 font-semibold uppercase text-xs md:text-sm cursor-pointer hover:bg-gray-700/70 transition-colors"
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
                              <svg className="w-3 h-3 md:w-4 md:h-4 ml-1" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M7 10l5 5 5-5z" />
                              </svg>
                            )}
                          </div>
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {filteredAndSortedStudents.map((s, index) => (
                      <DesktopStudentRow key={s.uuid} student={s} index={index} />
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Mobile View */}
              <div className="md:hidden">
                {filteredAndSortedStudents.map((s) => (
                  <MobileStudentCard key={s.uuid} student={s} />
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Stats Footer */}
        <div className="mt-4 md:mt-6 p-3 md:p-4 bg-gray-800/60 backdrop-blur-md rounded-xl border border-gray-700/50 flex flex-col md:flex-row justify-between items-start md:items-center gap-2 md:gap-0">
          <div className="text-gray-400 text-sm md:text-base">
            Showing <span className="text-white font-semibold">{filteredAndSortedStudents.length}</span> of <span className="text-white font-semibold">{students.length}</span> records
          </div>
          <div className="text-gray-400 text-xs md:text-sm">
            Last updated: {new Date().toLocaleTimeString()}
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