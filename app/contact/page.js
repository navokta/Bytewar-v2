"use client";
import React, { useState } from 'react';
import { FaTwitter, FaDiscord, FaLinkedin, FaGithub, FaPaperPlane, FaMapMarkerAlt, FaPhone, FaEnvelope, FaInstagram } from 'react-icons/fa';
import { motion } from 'framer-motion';
import Link from 'next/link';
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
    // Clear error when user types
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
      // Create FormData object
      const formDataToSubmit = new FormData();
      formDataToSubmit.append(FORM_FIELDS.name, data.name);
      formDataToSubmit.append(FORM_FIELDS.email, data.email);
      formDataToSubmit.append(FORM_FIELDS.subject, data.subject);
      formDataToSubmit.append(FORM_FIELDS.message, data.message);

      // Submit to Google Forms
      const response = await fetch(GOOGLE_FORM_ACTION_URL, {
        method: 'POST',
        mode: 'no-cors', // Important: Google Forms requires no-cors mode
        body: formDataToSubmit
      });

      // Since we're using no-cors, we can't check the response status
      // We'll assume success if no error is thrown
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
        // Submit to Google Forms
        await submitToGoogleForms(formData);
        
        console.log('Form submitted successfully:', formData);
        setSubmitSuccess(true);
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: ''
        });
        
        // Reset success message after 5 seconds
        setTimeout(() => setSubmitSuccess(false), 5000);
      } catch (error) {
        console.error('Failed to submit form:', error);
        // You can add error handling here, like showing an error message
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
    <div>
        <Header />
    <section className="bg-gradient-to-br from-gray-900 to-black text-white py-12 md:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Animated Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-yellow-300 mb-3 md:mb-4">
            GET IN TOUCH
          </h2>
          <p className="text-base md:text-xl text-gray-400 max-w-2xl mx-auto">
            Have questions about ByteWar? We're here to help! Reach out and our team will get back to you soon.
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
                className={`flex items-start p-5 md:p-6 rounded-xl backdrop-blur-sm bg-gray-800/50 border border-gray-700/50 hover:border-orange-500/50 transition-all duration-300`}
              >
                <div className={`p-3 rounded-full ${method.color} mr-4`}>
                  {method.icon}
                </div>
                <div>
                  <h3 className="text-lg md:text-xl font-bold mb-1">{method.title}</h3>
                  <p className="text-sm md:text-base text-gray-300">{method.description}</p>
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
              <div className="flex space-x-3 md:space-x-4">
                <motion.a
                  href="https://github.com/navokta"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -3 }}
                  className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-gray-800 border border-gray-700 flex items-center justify-center text-lg md:text-xl hover:bg-gray-700 transition-all duration-300"
                  aria-label="GitHub"
                >
                  <FaGithub />
                </motion.a>
                <motion.a
                  href="https://www.linkedin.com/company/navokta/"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -3 }}
                  className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-gray-800 border border-gray-700 flex items-center justify-center text-lg md:text-xl hover:bg-blue-700 transition-all duration-300"
                  aria-label="LinkedIn"
                >
                  <FaLinkedin />
                </motion.a>
                <motion.a
                  href="https://x.com/navokta"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -3 }}
                  className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-gray-800 border border-gray-700 flex items-center justify-center text-lg md:text-xl hover:bg-blue-500 transition-all duration-300"
                  aria-label="Twitter"
                >
                  <FaTwitter />
                </motion.a>
                <motion.a
                  href="https://www.instagram.com/navokta/"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -3 }}
                  className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-gray-800 border border-gray-700 flex items-center justify-center text-lg md:text-xl hover:bg-pink-600 transition-all duration-300"
                  aria-label="Instagram"
                >
                  <FaInstagram />
                </motion.a>
              </div>
            </motion.div>
          </div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-gray-800/50 border border-gray-700/50 rounded-xl p-5 md:p-8 backdrop-blur-sm"
          >
            <h3 className="text-xl md:text-2xl font-bold mb-5 md:mb-6">Send Us a Message</h3>
            
            {/* Inquiry Type Tabs */}
            <div className="flex flex-wrap gap-2 mb-5 md:mb-6">
              {inquiryTypes.map((type) => (
                <button
                  key={type.id}
                  onClick={() => setActiveTab(type.id)}
                  className={`px-3 py-1 md:px-4 md:py-2 rounded-full text-xs md:text-sm font-medium transition-all ${
                    activeTab === type.id
                      ? 'bg-gradient-to-r from-orange-500 to-yellow-500 text-white'
                      : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                  }`}
                >
                  {type.label}
                </button>
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
                  whileTap={{ scale: 0.95 }}
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
          </motion.div>
        </div>
      </div>
    </section>
    <Footer />
    </div>
  );
};

export default InteractiveContactPage;