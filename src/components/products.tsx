"use client"

import React, { useEffect, useRef } from "react"
import { motion } from "framer-motion"
import productsData from "@/data/products.json"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

export function Products() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const cards = containerRef.current?.querySelectorAll(".product-card")
    if (cards) {
      gsap.fromTo(cards, 
        { y: 100, opacity: 0 },
        { 
          y: 0, 
          opacity: 1, 
          duration: 1, 
          stagger: 0.2,
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
          }
        }
      )
    }

    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill())
    }
  }, [])

  return (
    <section id="products" className="py-24 overflow-hidden">
      <div className="container mx-auto px-4 mb-16">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div>
            <h2 className="text-sm font-bold uppercase tracking-[0.3em] text-primary mb-4">Наш ассортимент</h2>
            <h3 className="text-4xl md:text-5xl font-black">КАТЕГОРИИ ОБОРУДОВАНИЯ</h3>
          </div>
          <p className="max-w-md text-muted-foreground">
            Широкий выбор оригинального оборудования от ведущих брендов с полной технической поддержкой.
          </p>
        </div>
      </div>

      <div ref={containerRef} className="container mx-auto px-4 grid md:grid-cols-2 gap-8">
        {productsData.map((category, index) => (
          <div key={category.id} className="product-card">
            <Card className="h-full border-border bg-gradient-to-br from-card to-muted/20 hover:border-primary/40 transition-all group overflow-hidden relative">
              <div className="absolute -right-12 -bottom-12 w-64 h-64 bg-primary/5 rounded-full blur-3xl group-hover:bg-primary/10 transition-all" />
              
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                   <Badge variant="outline" className="border-primary/30 text-primary">Премиум сегмент</Badge>
                   <span className="text-4xl opacity-10 font-black">0{index + 1}</span>
                </div>
                <CardTitle className="text-2xl font-black">{category.title}</CardTitle>
                <CardDescription className="text-base pt-2">{category.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {category.items.map((item) => (
                    <span 
                      key={item} 
                      className="px-3 py-1 bg-background border border-border rounded-full text-xs font-medium hover:border-primary/50 transition-colors"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        ))}
      </div>
    </section>
  )
}