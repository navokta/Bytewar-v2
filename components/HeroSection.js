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

export default function ImageCarousel() {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  )

  return (
    <div className="w-full bg-gray-900 relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-10 left-10 w-48 h-48 rounded-full bg-purple-500 opacity-10 blur-3xl"></div>
      <div className="absolute bottom-10 right-10 w-64 h-64 rounded-full bg-blue-500 opacity-10 blur-3xl"></div>

      <div className="relative z-10 max-w-6xl mx-auto py-12 px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-8">
          Explore Our Gallery
        </h2>

        <Carousel
          plugins={[plugin.current]}
          className="w-full"
          onMouseEnter={plugin.current.stop}
          onMouseLeave={plugin.current.reset}
        >
          <CarouselContent>
            {[photo1, photo2, photo3].map((img, index) => (
              <CarouselItem key={index}>
                <div className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px]">
                  <Image
                    src={img}
                    alt={`Slide ${index}`}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-xl shadow-2xl transition duration-500 ease-in-out transform hover:scale-105"
                  />
                  {/* Overlay for better text contrast */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-30 rounded-xl"></div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </div>
  );
}