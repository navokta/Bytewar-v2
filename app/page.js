"use client";
import Image from "next/image";
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
// import EnrollNow from '../components/EnrollNow';
import Gallery from '../components/Gallery';
import ThoughtSection from '../components/ThoughtSection';
import Footer from '../components/Footer';
import ByteWarInfo from '../components/ByteWarInfo';
import VideoAndInfographicSection from '../components/VideoAndInfographicSection';
import ThemesSection from '../components/ThemesSection';
import Timeline from '../components/Timeline';
    //  import logo from '../public/image.png';




export default function Home() {
  return (
    <div className="font-sans min-h-screen flex flex-col bg-sky-900">
      <Header />
      <HeroSection />
      <ByteWarInfo />
      <VideoAndInfographicSection />
      <ThemesSection />
      <Timeline />
      <Gallery />
      <ThoughtSection />
      <Footer />
    </div>
  );
}
