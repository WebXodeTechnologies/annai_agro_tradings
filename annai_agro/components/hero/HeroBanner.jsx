"use client";

import React, { useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
  {
    src: "/hero/Banner/1.webp",
    alt: "High-quality agro products for B2B exporters",
  },
  {
    src: "/hero/Banner/2.webp",
    alt: "Premium bulk agricultural exports for businesses",
  },
  {
    src: "/hero/Banner/3.webp",
    alt: "Sustainable agro produce for global markets",
  },
  {
    src: "/hero/Banner/4.webp",
    alt: "Trusted agro exporter for business partnerships",
  },
];

const bannerBg = "/hero/Banner/bg-body.png";

const HeroBanner = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      align: "center",
    },
    [
      Autoplay({
        delay: 5000,
        stopOnInteraction: false,
      }),
    ]
  );

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <section className="w-full py-10" role="region" aria-label="Hero Carousel">
      <div ref={emblaRef} className="overflow-hidden relative">
        <div className="flex">
          {slides.map((slide, index) => (
            <div key={index} className="min-w-full">
              <div className="relative w-full aspect-[16/7] sm:aspect-[16/6] lg:aspect-[16/6] rounded-2xl overflow-hidden">
                {/* Background Image */}
                <Image
                  src={bannerBg}
                  alt=""
                  fill
                  className="object-cover absolute inset-0 z-0"
                  priority={index === 0} // only first slide
                  draggable={false}
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 100vw"
                />

                {/* Actual Banner */}
                <Image
                  src={slide.src}
                  alt={slide.alt}
                  fill
                  className="object-contain relative z-10"
                  priority={index === 0} // first slide loads immediately
                  draggable={false}
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 100vw"
                />
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Buttons */}
        <button
          onClick={scrollPrev}
          className="absolute left-3 top-1/2 -translate-y-1/2 z-20 bg-black/30 hover:bg-green-600 text-white p-2 rounded-full transition"
          aria-label="Previous slide"
        >
          <ChevronLeft size={24} />
        </button>
        <button
          onClick={scrollNext}
          className="absolute right-3 top-1/2 -translate-y-1/2 z-20 bg-black/30 hover:bg-green-600 text-white p-2 rounded-full transition"
          aria-label="Next slide"
        >
          <ChevronRight size={24} />
        </button>
      </div>
    </section>
  );
};

export default HeroBanner;
