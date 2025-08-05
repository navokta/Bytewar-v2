'use client';
import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import Gallery from '../components/Gallery';
import ThoughtSection from '../components/ThoughtSection';
import Footer from '../components/Footer';
import ByteWarInfo from '../components/ByteWarInfo';
import VideoAndInfographicSection from '../components/VideoAndInfographicSection';
import ThemesSection from '../components/ThemesSection';
import Sponser from '../components/Sponser';
import TermsSection from "@/components/TermsSection";
import EventsPreviewSection from "@/components/EventsPreviewSection";

export default function Home() {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    const checkUserProfile = async () => {
      const alreadyRedirected = localStorage.getItem('redirectedToCompleteProfile');

      if (status === 'authenticated' && !alreadyRedirected) {
        const res = await fetch(`/api/users/check-profile?email=${session?.user?.email}`);
        const data = await res.json();

        if (data.incompleteProfile) {
          localStorage.setItem('redirectedToCompleteProfile', 'true');
          router.push(`/complete-profile?email=${session.user.email}`);
        }
      }
    };

    checkUserProfile();
  }, [status, session, router]);

  if (status === 'loading') return null;

  return (
    <div className="font-sans min-h-screen flex flex-col bg-sky-900">
      <Header />
      <HeroSection />
      <ByteWarInfo />
      <VideoAndInfographicSection />
      <ThemesSection />
      <EventsPreviewSection />
      <Gallery />
      <Sponser />
      <TermsSection />
      <ThoughtSection />
      <Footer />
    </div>
  );
}
