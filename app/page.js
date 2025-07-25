"use client";
import Image from "next/image";
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import EnrollNow from '../components/EnrollNow';
import Gallery from '../components/Gallery';
import ThoughtSection from '../components/ThoughtSection';
import Footer from '../components/Footer';
import Autoplay from "embla-carousel-autoplay"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
    //  import logo from '../public/image.png';




export default function Home() {
  return (
    <div className="font-sans min-h-screen flex flex-col bg-sky-900">
      <Header />
      <HeroSection />
      <EnrollNow />
      <Gallery />
      <ThoughtSection />
      <Footer />
    </div>
  );
}
