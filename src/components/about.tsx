"use client"

import React from "react"
import { motion } from "framer-motion"
import companyData from "@/data/company.json"

export function About() {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-sm font-bold uppercase tracking-[0.3em] text-primary mb-4">О компании</h2>
            <h3 className="text-4xl md:text-5xl font-black mb-6 leading-tight">
              МЫ ОБЕСПЕЧИВАЕМ <br />
              <span className="text-muted-foreground">ПОЛНЫЙ КОНТРОЛЬ</span> ВАШЕГО ПАРКА
            </h3>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              {companyData.description}
            </p>
            <div className="bg-primary/5 border border-primary/20 p-6 rounded-2xl relative overflow-hidden group">
               <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-3xl -mr-16 -mt-16 group-hover:bg-primary/20 transition-all" />
               <p className="text-xl font-medium italic relative z-10">
                 "{companyData.mission}"
               </p>
            </div>
          </motion.div>

          <div className="grid grid-cols-2 gap-4">
            {companyData.stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-card border border-border p-8 rounded-3xl flex flex-col items-center justify-center text-center hover:border-primary/50 transition-colors group"
              >
                <span className="text-4xl md:text-5xl font-black text-primary mb-2 group-hover:scale-110 transition-transform">
                  {stat.value}
                </span>
                <span className="text-xs uppercase tracking-widest text-muted-foreground font-bold">
                  {stat.label}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}