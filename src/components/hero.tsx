"use client"

import React from "react"
import { motion } from "framer-motion"
import { buttonVariants } from "@/components/ui/button"
import { ArrowRight, Satellite } from "lucide-react"
import { Starfield } from "./starfield"
import { cn } from "@/lib/utils"

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Effect */}
      <div className="absolute inset-0 z-0 bg-background">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/20 via-transparent to-background z-10" />
        <Starfield />
      </div>

      <div className="container relative z-20 mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/30 bg-primary/10 text-primary text-xs font-bold uppercase tracking-widest mb-6"
        >
          <Satellite className="w-4 h-4 animate-bounce" />
          Оптовые поставки промышленного оборудования
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl md:text-8xl font-black tracking-tighter mb-6 bg-clip-text text-transparent bg-gradient-to-b from-foreground to-foreground/50 leading-tight"
        >
          НАДЁЖНЫЕ РЕШЕНИЯ <br />
          <span className="text-primary drop-shadow-[0_0_15px_rgba(34,211,238,0.5)]">ДЛЯ ВАШЕГО БИЗНЕСА</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="max-w-2xl mx-auto text-lg md:text-xl text-muted-foreground mb-10"
        >
          Прямые поставки электротехнического оборудования, машин и аппаратуры. Технологические решения для вашего предприятия.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a 
            href="#contact" 
            className={cn(
              buttonVariants({ size: "lg" }),
              "h-14 px-8 text-lg font-bold group shadow-[0_0_20px_rgba(34,211,238,0.4)] flex items-center justify-center gap-2"
            )}
          >
            Получить КП
            <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </a>
          <a 
            href="#products" 
            className={cn(
              buttonVariants({ size: "lg", variant: "outline" }),
              "h-14 px-8 text-lg font-bold border-primary/30 hover:bg-primary/5 flex items-center justify-center gap-2"
            )}
          >
            Смотреть каталог
          </a>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">Scroll</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-primary to-transparent" />
      </motion.div>
    </section>
  )
}