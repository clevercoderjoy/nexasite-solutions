import React from 'react'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from './ui/carousel'
import Autoplay from "embla-carousel-autoplay"
import Image from 'next/image'

const CarouselContainer = () => {
  return (
    <Carousel
      opts={{ loop: true }}
      plugins={[Autoplay({ delay: 3000, stopOnInteraction: false })]}
      className="w-full max-w-5xl mx-auto bg-[#f3f4f6]">
      <CarouselContent>
        <CarouselItem>
          <div className="p-4 bg-white rounded-lg shadow-md text-center">
            <h3 className="font-semibold text-lg">Item 1</h3>
            <Image src="/assets/images/carousel-1.svg" alt="Image 1" width={300} height={200} className="rounded-lg mb-2" />
            <p className="text-sm text-gray-500">Description 1</p>
          </div>
        </CarouselItem>
        <CarouselItem>
          <div className="p-4 bg-white rounded-lg shadow-md text-center">
            <h3 className="font-semibold text-lg">Item 2</h3>
            <Image src="/assets/images/carousel-2.svg" alt="Image 1" width={300} height={200} className="rounded-lg mb-2" />
            <p className="text-sm text-gray-500">Description 2</p>
          </div>
        </CarouselItem>
        <CarouselItem>
          <div className="p-4 bg-white rounded-lg shadow-md text-center">
            <h3 className="font-semibold text-lg">Item 3</h3>
            <Image src="/assets/images/carousel-3.svg" alt="Image 1" width={300} height={200} className="rounded-lg mb-2" />
            <p className="text-sm text-gray-500">Description 3</p>
          </div>
        </CarouselItem>
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>

  )
}

export default CarouselContainer