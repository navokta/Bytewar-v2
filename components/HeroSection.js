"use client"

import * as React from "react"
import Autoplay from "embla-carousel-autoplay"
import Image from "next/image"
import photo1 from "../public/photo1.jpg" // use your own images here
import photo2 from "../public/photo2.jpg" // use your own images here
import photo3 from "../public/photo3.jpg" // use your own images here

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
    <Carousel
      plugins={[plugin.current]}
      className="w-full max-w-5xl mx-auto py-12 h-[90vh]"
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
    >
      <CarouselContent>
        {[photo1, photo2, photo3].map((img, index) => (
          <CarouselItem key={index}>
            {/* Parent container with fixed height */}
            <div className="relative w-full h-[400px]">
              {/* Image that fills the parent container */}
              <Image
                src={img}
                alt={`Slide ${index}`}
                layout="fill"
                objectFit="cover"
                className="rounded-xl shadow-md"
              />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      {/* <CarouselPrevious />
      <CarouselNext /> */}
    </Carousel>
  )
}