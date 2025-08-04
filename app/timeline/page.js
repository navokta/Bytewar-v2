"use client";
import Header from '@/components/Header';
import Timeline from '@/components/Timeline';
import AboutEnroll from '@/components/about/Enroll';
import Footer from '@/components/Footer';

export default function TimelinePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-gray-100">
      <Header />
      <Timeline />
      <AboutEnroll />
      <Footer />
    </div>
  );
}