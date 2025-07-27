"use client"

import * as React from "react"
import Autoplay from "embla-carousel-autoplay"
import Image from "next/image"
import photo1 from "../public/photo1.jpg"
import photo2 from "../public/photo2.jpg"
import photo3 from "../public/photo3.jpg"

import {
  Carousel,
  CarouselContent,
  CarouselItem
} from "@/components/ui/carousel"

export default function WowImageCarousel() {
  const plugin = React.useRef(
    Autoplay({ delay: 3000, stopOnInteraction: true })
  )

  const [currentSlideIndex, setCurrentSlideIndex] = React.useState(0)
  const [isHovered, setIsHovered] = React.useState(false)

  const carouselRef = React.useRef(null)

  const totalSlides = 3

  const images = [
    {
      src: photo1,
      title: "Innovation Hub",
      desc: "Students collaborating on groundbreaking projects",
    },
    {
      src: photo2,
      title: "Coding Marathon",
      desc: "48 hours of non-stop development and creativity",
    },
    {
      src: photo3,
      title: "Winner Celebration",
      desc: "Champions receiving recognition for their excellence",
    },
  ]

  // Auto update index on manual or auto scroll
  React.useEffect(() => {
    const embla = carouselRef.current?.emblaApi
    if (!embla) return

    const onSelect = () => {
      setCurrentSlideIndex(embla.selectedScrollSnap())
    }

    embla.on("select", onSelect)
    onSelect() // initialize

    return () => embla?.off("select", onSelect)
  }, [carouselRef.current?.emblaApi])

  return (
    <div className="relative w-full bg-gradient-to-br from-gray-900 via-black to-gray-900 py-20 overflow-hidden">
      {/* Blobs */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500 rounded-full mix-blend-soft-light filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-500 rounded-full mix-blend-soft-light filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-pink-500 rounded-full mix-blend-soft-light filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-black mb-6">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 animate-gradient-x">
              MOMENTS FROM BYTEWAR
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Relive the excitement and innovation from our previous editions
          </p>
        </div>

        <div
          className="relative"
          onMouseEnter={() => {
            plugin.current.stop()
            setIsHovered(true)
          }}
          onMouseLeave={() => {
            plugin.current.reset()
            setIsHovered(false)
          }}
        >
          {/* Carousel container */}
          <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-white/10">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 to-blue-900/20 backdrop-blur-sm"></div>

            <Carousel
              plugins={[plugin.current]}
              opts={{ loop: true }}
              className="w-full"
              ref={carouselRef}
            >
              <CarouselContent>
                {images.map((img, index) => (
                  <CarouselItem key={index} className="relative">
                    <div className="relative w-full h-[400px] sm:h-[500px] md:h-[600px] lg:h-[700px]">
                      <Image
                        src={img.src}
                        alt={img.title}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="object-cover transition duration-700 ease-in-out"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent"></div>

                      <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
                        <div className="max-w-3xl">
                          <h3 className="text-2xl md:text-4xl font-bold text-white mb-3 animate-fadeIn">
                            {img.title}
                          </h3>
                          <p className="text-lg md:text-xl text-gray-300 animate-fadeIn animation-delay-200">
                            {img.desc}
                          </p>
                        </div>
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>

            {/* Hover border effect */}
            <div className="absolute inset-0 rounded-3xl pointer-events-none border border-white/5 shadow-[0_0_30px_10px_rgba(139,92,246,0.3)] opacity-0 hover:opacity-100 transition-opacity duration-500"></div>
          </div>

          {/* Slide Index Display */}
          <div className="absolute top-6 right-6 bg-black/50 backdrop-blur-lg rounded-2xl p-4 border border-white/10">
            <div className="text-2xl font-bold text-white">
              {String(currentSlideIndex + 1).padStart(2, "0")}
              <span className="text-gray-500">/{String(totalSlides).padStart(2, "0")}</span>
            </div>
          </div>

          {/* Pause Icon */}
          {isHovered && (
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-black/70 backdrop-blur-lg rounded-full p-4 border border-white/20 animate-pulse">
              <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 9v6m4-6v6m7-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
          )}
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
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.8s ease-out forwards;
        }
      `}</style>
    </div>
  )
}
