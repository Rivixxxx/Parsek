"use client"

import React from "react"
import { motion } from "framer-motion"

const images = [
  { src: "/gallery/gallery-1.png", title: "Логистический центр" },
  { src: "/gallery/gallery-2.png", title: "Мониторинг транспорта" },
  { src: "/gallery/gallery-3.png", title: "Установка оборудования" },
  { src: "/gallery/gallery-4.png", title: "Спецтехника" },
  { src: "/gallery/gallery-5.png", title: "Автопарк клиента" },
  { src: "/gallery/gallery-6.png", title: "Контроль топлива" },
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