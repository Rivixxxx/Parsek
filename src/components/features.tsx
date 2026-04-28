"use client"

import React, { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

const features = [
  {
    title: "Гарантия качества",
    description: "Только сертифицированное оборудование от ведущих производителей с официальной гарантией.",
    animation: "shield",
  },
  {
    title: "Быстрый монтаж",
    description: "Установка и настройка оборудования в кратчайшие сроки нашими опытными специалистами.",
    animation: "zap",
  },
  {
    title: "Экономия ГСМ",
    description: "Снижение расходов на топливо до 30% за счет внедрения систем точного мониторинга.",
    animation: "chart",
  },
  {
    title: "Поддержка 24/7",
    description: "Круглосуточная техническая поддержка и оперативное решение любых вопросов.",
    animation: "pulse",
  },
  {
    title: "Индивидуальный подход",
    description: "Разработка решений под специфические задачи вашего бизнеса и типа транспорта.",
    animation: "target",
  },
  {
    title: "Широкий охват",
    description: "Работаем по всей Тамбовской области и соседним регионам ЦФО.",
    animation: "globe",
  },
]

const IconAnimation = ({ type, isHovered }: { type: string; isHovered: boolean }) => {
  switch (type) {
    case "shield":
      return (
        <div className="relative w-16 h-16 flex items-center justify-center">
          <motion.div 
            animate={{ rotate: isHovered ? 360 : 0, scale: isHovered ? 1.2 : 1 }}
            className="absolute inset-0 border-2 border-primary/30 rounded-xl"
          />
          <motion.div 
            animate={{ rotate: isHovered ? -360 : 0, scale: isHovered ? 0.8 : 0.6 }}
            className="absolute inset-0 border-2 border-primary/50 rounded-full"
          />
          <motion.div 
            animate={{ scale: isHovered ? [1, 1.5, 1] : 1 }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="w-4 h-4 bg-primary rounded-full shadow-[0_0_15px_rgba(34,211,238,1)]"
          />
        </div>
      )
    case "zap":
      return (
        <div className="relative w-16 h-16 flex items-center justify-center">
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              animate={{ 
                height: isHovered ? [10, 40, 10] : 20,
                opacity: isHovered ? [0.2, 1, 0.2] : 0.5,
                x: (i - 1) * 15
              }}
              transition={{ repeat: Infinity, duration: 0.5, delay: i * 0.1 }}
              className="w-1 bg-primary rounded-full"
            />
          ))}
        </div>
      )
    case "chart":
      return (
        <div className="relative w-16 h-16 flex items-end justify-center gap-1">
          {[...Array(4)].map((_, i) => (
            <motion.div
              key={i}
              animate={{ 
                height: isHovered ? [10, 40, 20, 50][i] : [20, 15, 25, 10][i],
                backgroundColor: isHovered ? "#22d3ee" : "rgba(34,211,238,0.3)"
              }}
              className="w-2 rounded-t-sm"
            />
          ))}
        </div>
      )
    case "pulse":
      return (
        <div className="relative w-16 h-16 flex items-center justify-center">
          <motion.div
            animate={{ scale: isHovered ? [1, 2] : 1, opacity: isHovered ? [0.5, 0] : 0.5 }}
            transition={{ repeat: Infinity, duration: 1 }}
            className="absolute inset-0 border-2 border-primary rounded-full"
          />
          <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center">
            <motion.div 
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ repeat: Infinity, duration: 0.8 }}
              className="w-3 h-3 bg-white rounded-full"
            />
          </div>
        </div>
      )
    case "target":
      return (
        <div className="relative w-16 h-16 flex items-center justify-center">
          <motion.div 
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
            className="absolute inset-0 border-t-2 border-r-2 border-primary/40 rounded-full"
          />
          <motion.div 
            animate={{ scale: isHovered ? 1.2 : 0.8, rotate: -360 }}
            transition={{ rotate: { repeat: Infinity, duration: 5, ease: "linear" } }}
            className="w-10 h-10 border-b-2 border-l-2 border-primary rounded-full flex items-center justify-center"
          >
            <div className="w-2 h-2 bg-primary rounded-full" />
          </motion.div>
        </div>
      )
    case "globe":
      return (
        <div className="relative w-16 h-16 flex items-center justify-center">
          <motion.div 
            animate={{ rotateY: 360 }}
            transition={{ repeat: Infinity, duration: 4, ease: "linear" }}
            className="w-12 h-12 border-2 border-primary/30 rounded-full flex items-center justify-center"
          >
            <div className="w-12 h-[2px] bg-primary/20" />
            <div className="absolute w-[2px] h-12 bg-primary/20" />
          </motion.div>
          <motion.div 
            animate={{ y: isHovered ? [-5, 5, -5] : 0 }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="absolute w-4 h-4 bg-primary rounded-full shadow-[0_0_20px_rgba(34,211,238,0.8)]"
          />
        </div>
      )
    default:
      return null
  }
}

export function Features() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <section id="features" className="py-24 bg-muted/30 overflow-hidden">
      <div className="container mx-auto px-4 text-center mb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-sm font-bold uppercase tracking-[0.3em] text-primary mb-4">Почему мы</h2>
          <h3 className="text-4xl md:text-5xl font-black">ВАШИ ПРЕИМУЩЕСТВА</h3>
        </motion.div>
      </div>

      <div className="container mx-auto px-4 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <motion.div
            key={feature.title}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group relative p-10 bg-background border border-border rounded-[2.5rem] hover:border-primary/50 transition-all duration-500 overflow-hidden h-full flex flex-col"
          >
            {/* Background Glow */}
            <AnimatePresence>
              {hoveredIndex === index && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.2 }}
                  className="absolute inset-0 bg-primary/[0.03] -z-10"
                />
              )}
            </AnimatePresence>

            <div className="mb-8">
              <IconAnimation type={feature.animation} isHovered={hoveredIndex === index} />
            </div>
            
            <h4 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors">{feature.title}</h4>
            <p className="text-muted-foreground leading-relaxed text-lg">
              {feature.description}
            </p>

            {/* Interactive Corner Decor */}
            <div className="absolute bottom-6 right-6 opacity-20 group-hover:opacity-100 transition-opacity">
               <motion.div 
                 animate={{ rotate: hoveredIndex === index ? 90 : 0 }}
                 className="w-8 h-8 border-r-2 border-b-2 border-primary rounded-br-lg"
               />
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}