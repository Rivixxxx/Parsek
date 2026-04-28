"use client"

import React, { useCallback } from "react"
import { motion } from "framer-motion"
import reviewsData from "@/data/reviews.json"
import useEmblaCarousel from 'embla-carousel-react'
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Reviews() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ 
    loop: true, 
    align: 'start',
    slidesToScroll: 1,
    breakpoints: {
      '(min-width: 768px)': { slidesToScroll: 2 },
      '(min-width: 1024px)': { slidesToScroll: 3 }
    }
  })

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi])
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi])

  return (
    <section id="reviews" className="py-24 bg-muted/50 overflow-hidden">
      <div className="container mx-auto px-4 mb-16 flex items-end justify-between">
        <div>
          <h2 className="text-sm font-bold uppercase tracking-[0.3em] text-primary mb-4">Отзывы клиентов</h2>
          <h3 className="text-4xl md:text-5xl font-black">НАМ ДОВЕРЯЮТ</h3>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" size="icon" onClick={scrollPrev} className="rounded-full">
            <ChevronLeft className="h-5 w-5" />
          </Button>
          <Button variant="outline" size="icon" onClick={scrollNext} className="rounded-full">
            <ChevronRight className="h-5 w-5" />
          </Button>
        </div>
      </div>

      <div className="embla px-4 overflow-hidden" ref={emblaRef}>
        <div className="embla__container flex">
          {reviewsData.map((review) => (
            <div key={review.id} className="embla__slide flex-[0_0_100%] min-w-0 md:flex-[0_0_50%] lg:flex-[0_0_33.33%] px-4">
              <div className="h-full bg-card border border-border p-8 rounded-3xl relative flex flex-col justify-between">
                <Quote className="absolute top-4 right-8 h-12 w-12 text-primary/10" />
                
                <div>
                  <div className="flex gap-1 mb-4">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                    ))}
                  </div>
                  <p className="text-lg mb-8 leading-relaxed italic">
                    "{review.text}"
                  </p>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-primary/20">
                    <img src={review.avatar} alt={review.name} className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <p className="font-bold">{review.name}</p>
                    <p className="text-xs text-muted-foreground uppercase tracking-wider">{review.position}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}