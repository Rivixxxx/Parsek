"use client"

import React from "react"
import { motion } from "framer-motion"

const images = [
  { src: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=800", title: "Логистический центр" },
  { src: "https://images.unsplash.com/photo-1506015391300-4802dc74de2e?auto=format&fit=crop&q=80&w=800", title: "Мониторинг транспорта" },
  { src: "https://images.unsplash.com/photo-1590496793929-36417d3117de?auto=format&fit=crop&q=80&w=800", title: "Установка оборудования" },
  { src: "https://images.unsplash.com/photo-1519003722824-194d4455a60c?auto=format&fit=crop&q=80&w=800", title: "Спецтехника" },
  { src: "https://images.unsplash.com/photo-1494412574643-ff11b865c1c3?auto=format&fit=crop&q=80&w=800", title: "Автопарк клиента" },
  { src: "https://images.unsplash.com/photo-1580674271209-40509a3ecd05?auto=format&fit=crop&q=80&w=800", title: "Контроль топлива" },
]

export function Gallery() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 mb-16 text-center">
        <h2 className="text-sm font-bold uppercase tracking-[0.3em] text-primary mb-4">Наши объекты</h2>
        <h3 className="text-4xl md:text-5xl font-black">ГАЛЕРЕЯ ПОСТАВОК</h3>
      </div>

      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {images.map((img, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group relative h-80 overflow-hidden rounded-3xl cursor-pointer"
          >
            <img 
              src={img.src} 
              alt={img.title} 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-8">
               <p className="text-white font-bold text-xl translate-y-4 group-hover:translate-y-0 transition-transform">
                 {img.title}
               </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}