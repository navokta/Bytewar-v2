"use client";
import React, { useState } from 'react';
import { FaTwitter, FaDiscord, FaLinkedin, FaGithub, FaPaperPlane, FaMapMarkerAlt, FaPhone, FaEnvelope, FaInstagram } from 'react-icons/fa';
import { motion } from 'framer-motion';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const InteractiveContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [activeTab, setActiveTab] = useState('general');

  // Google Forms configuration
  const GOOGLE_FORM_ACTION_URL = "https://docs.google.com/forms/d/e/1FAIpQLSe9X8mMUfypeN6yVYJ6KYn4v9ZNaDNHQ8BCTyMekI1TO6N6lA/formResponse";
  const FORM_FIELDS = {
    name: "entry.2058199135",
    email: "entry.1931446687", 
    subject: "entry.1844142547",
    message: "entry.1452999000"
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    if (!formData.subject.trim()) newErrors.subject = 'Subject is required';
    if (!formData.message.trim()) newErrors.message = 'Message is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const submitToGoogleForms = async (data) => {
    try {
      const formDataToSubmit = new FormData();
      formDataToSubmit.append(FORM_FIELDS.name, data.name);
      formDataToSubmit.append(FORM_FIELDS.email, data.email);
      formDataToSubmit.append(FORM_FIELDS.subject, data.subject);
      formDataToSubmit.append(FORM_FIELDS.message, data.message);

      await fetch(GOOGLE_FORM_ACTION_URL, {
        method: 'POST',
        mode: 'no-cors',
        body: formDataToSubmit
      });
      return true;
    } catch (error) {
      console.error('Error submitting to Google Forms:', error);
      throw error;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      setIsSubmitting(true);
      
      try {
        await submitToGoogleForms(formData);
        setSubmitSuccess(true);
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: ''
        });
        setTimeout(() => setSubmitSuccess(false), 5000);
      } catch (error) {
        alert('Failed to submit form. Please try again.');
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  const contactMethods = [
    {
      icon: <FaMapMarkerAlt className="text-2xl" />,
      title: "Our Headquarters",
      description: "Hansi, Haryana - 125033",
      color: "bg-blue-100 text-blue-600"
    },
    {
      icon: <FaPhone className="text-2xl" />,
      title: "Contact Number",
      description: "+91 8307233996",
      color: "bg-green-100 text-green-600"
    },
    {
      icon: <FaEnvelope className="text-2xl" />,
      title: "Email Address",
      description: "navokta@gmail.com",
      color: "bg-purple-100 text-purple-600"
    }
  ];

  const inquiryTypes = [
    { id: 'general', label: 'General Inquiry' },
    { id: 'technical', label: 'Technical Support' },
    { id: 'sponsorship', label: 'Sponsorship' },
    { id: 'media', label: 'Media/Press' }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      {/* Main Content */}
      <main className="flex-grow bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white pt-12 pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <div className="absolute top-0 left-1/4 w-[30vw] h-[30vw] max-w-[384px] max-h-[384px] bg-purple-500 rounded-full mix-blend-soft-light filter blur-3xl opacity-20 animate-blob"></div>
          <div className="absolute top-0 right-1/4 w-[30vw] h-[30vw] max-w-[384px] max-h-[384px] bg-blue-500 rounded-full mix-blend-soft-light filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-0 left-1/2 w-[30vw] h-[30vw] max-w-[384px] max-h-[384px] bg-pink-500 rounded-full mix-blend-soft-light filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          {/* Animated Header */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12 md:mb-16"
          >
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-4">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-400 via-yellow-300 to-orange-400 animate-gradient-x">
                GET IN TOUCH
              </span>
            </h2>
            <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto">
              Have questions about ByteWar? We&apos;re here to help! Reach out and our team will get back to you soon.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
            {/* Contact Information */}
            <div className="space-y-6 md:space-y-8">
              {/* Contact Cards */}
              {contactMethods.map((method, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group relative"
                >
                  {/* Glow Effect */}
                  <div className={`absolute -inset-1 rounded-xl bg-gradient-to-r ${method.color.replace('bg-', 'from-').replace('text-', 'to-')} opacity-0 group-hover:opacity-30 blur-lg transition-all duration-500`}></div>
                  
                  {/* Card */}
                  <div className="relative flex items-start p-5 md:p-6 rounded-xl backdrop-blur-sm bg-gray-800/50 border border-gray-700/50 group-hover:border-orange-500/50 transition-all duration-300">
                    <div className={`p-3 rounded-full ${method.color} mr-4`}>
                      {method.icon}
                    </div>
                    <div>
                      <h3 className="text-lg md:text-xl font-bold mb-1">{method.title}</h3>
                      <p className="text-sm md:text-base text-gray-300">{method.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}

              {/* Social Media */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="pt-4 md:pt-6"
              >
                <h3 className="text-lg md:text-xl font-bold mb-3 md:mb-4">Connect With Us</h3>
                <div className="flex flex-wrap gap-3 md:gap-4">
                  {[
                    { icon: <FaGithub />, href: "https://github.com/navokta", color: "hover:bg-gray-700", label: "GitHub" },
                    { icon: <FaLinkedin />, href: "https://www.linkedin.com/company/navokta/", color: "hover:bg-blue-700", label: "LinkedIn" },
                    { icon: <FaTwitter />, href: "https://x.com/navokta", color: "hover:bg-blue-500", label: "Twitter" },
                    { icon: <FaInstagram />, href: "https://www.instagram.com/navokta/", color: "hover:bg-pink-600", label: "Instagram" },
                    { icon: <FaDiscord />, href: "https://discord.com/users/1401496221687873619", color: "hover:bg-indigo-600", label: "Discord" }
                  ].map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ y: -3 }}
                      className={`w-10 h-10 md:w-12 md:h-12 rounded-full bg-gray-800 border border-gray-700 flex items-center justify-center text-lg md:text-xl transition-all duration-300 ${social.color}`}
                      aria-label={social.label}
                    >
                      {social.icon}
                    </motion.a>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="group relative"
            >
              {/* Glow Effect */}
              <div className="absolute -inset-1 rounded-xl bg-gradient-to-r from-orange-500 to-yellow-500 opacity-0 group-hover:opacity-20 blur-lg transition-all duration-500"></div>
              
              {/* Form Card */}
              <div className="relative bg-gray-800/50 border border-gray-700/50 rounded-xl p-5 md:p-8 backdrop-blur-sm">
                <h3 className="text-xl md:text-2xl font-bold mb-5 md:mb-6">Send Us a Message</h3>
                
                {/* Inquiry Type Tabs */}
                <div className="flex flex-wrap gap-2 mb-5 md:mb-6">
                  {inquiryTypes.map((type) => (
                    <motion.button
                      key={type.id}
                      onClick={() => setActiveTab(type.id)}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className={`px-3 py-1 md:px-4 md:py-2 rounded-full text-xs md:text-sm font-medium transition-all ${
                        activeTab === type.id
                          ? 'bg-gradient-to-r from-orange-500 to-yellow-500 text-white shadow-md shadow-orange-500/30'
                          : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                      }`}
                    >
                      {type.label}
                    </motion.button>
                  ))}
                </div>

                <form onSubmit={handleSubmit} className="space-y-4 md:space-y-5">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-1">Name *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className={`w-full px-4 py-2 md:py-3 rounded-lg bg-gray-700 border ${
                        errors.name ? 'border-red-500' : 'border-gray-600 focus:border-orange-500'
                      } focus:outline-none focus:ring-2 focus:ring-orange-500/50 transition-all`}
                      placeholder="Your name"
                    />
                    {errors.name && <p className="mt-1 text-sm text-red-400">{errors.name}</p>}
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-1">Email *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`w-full px-4 py-2 md:py-3 rounded-lg bg-gray-700 border ${
                        errors.email ? 'border-red-500' : 'border-gray-600 focus:border-orange-500'
                      } focus:outline-none focus:ring-2 focus:ring-orange-500/50 transition-all`}
                      placeholder="your@email.com"
                    />
                    {errors.email && <p className="mt-1 text-sm text-red-400">{errors.email}</p>}
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium mb-1">Subject *</label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className={`w-full px-4 py-2 md:py-3 rounded-lg bg-gray-700 border ${
                        errors.subject ? 'border-red-500' : 'border-gray-600 focus:border-orange-500'
                      } focus:outline-none focus:ring-2 focus:ring-orange-500/50 transition-all`}
                      placeholder="What's this about?"
                    />
                    {errors.subject && <p className="mt-1 text-sm text-red-400">{errors.subject}</p>}
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-1">Message *</label>
                    <textarea
                      id="message"
                      name="message"
                      rows="4"
                      value={formData.message}
                      onChange={handleChange}
                      className={`w-full px-4 py-2 md:py-3 rounded-lg bg-gray-700 border ${
                        errors.message ? 'border-red-500' : 'border-gray-600 focus:border-orange-500'
                      } focus:outline-none focus:ring-2 focus:ring-orange-500/50 transition-all`}
                      placeholder="Your message here..."
                    ></textarea>
                    {errors.message && <p className="mt-1 text-sm text-red-400">{errors.message}</p>}
                  </div>

                  <div className="pt-2">
                    <motion.button
                      type="submit"
                      disabled={isSubmitting}
                      whileHover={!isSubmitting ? { scale: 1.02 } : {}}
                      whileTap={!isSubmitting ? { scale: 0.98 } : {}}
                      className={`w-full flex items-center justify-center px-5 py-2 md:px-6 md:py-3 rounded-lg font-bold transition-all ${
                        isSubmitting
                          ? 'bg-gray-600 cursor-not-allowed'
                          : 'bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600'
                      } shadow-lg shadow-orange-500/20 text-sm md:text-base`}
                    >
                      {isSubmitting ? (
                        <span className="flex items-center">
                          <svg className="animate-spin -ml-1 mr-2 h-4 w-4 md:h-5 md:w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Sending...
                        </span>
                      ) : (
                        <span className="flex items-center">
                          <FaPaperPlane className="mr-2" /> Send Message
                        </span>
                      )}
                    </motion.button>
                  </div>

                  {submitSuccess && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="mt-3 p-3 md:p-4 bg-green-900/50 border border-green-700 rounded-lg text-sm md:text-base text-green-300"
                    >
                      Thank you! Your message has been sent successfully. We'll get back to you soon.
                    </motion.div>
                  )}
                </form>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Custom Styles */}
        <style jsx>{`
          @keyframes gradient-x {
            0%, 100% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
          }
          .animate-gradient-x {
            background-size: 200% 200%;
            animation: gradient-x 3s ease infinite;
          }
          .animate-blob {
            animation: blob 7s infinite;
          }
          .animation-delay-2000 {
            animation-delay: 2s;
          }
          .animation-delay-4000 {
            animation-delay: 4s;
          }
          @keyframes blob {
            0% { transform: translate(0px, 0px) scale(1); }
            33% { transform: translate(30px, -50px) scale(1.1); }
            66% { transform: translate(-20px, 20px) scale(0.9); }
            100% { transform: translate(0px, 0px) scale(1); }
          }
        `}</style>
      </main>

      <Footer />
    </div>
  );
};

export default InteractiveContactPage;