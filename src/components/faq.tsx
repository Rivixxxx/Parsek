"use client"

import React from "react"
import { motion } from "framer-motion"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
  {
    question: "Нужно ли устанавливать тахограф на мой тип транспорта?",
    answer: "Согласно законодательству РФ, тахографы обязательны для грузовиков массой более 3.5 тонн (категории N2, N3) и автобусов (категории M2, M3). Мы поможем точно определить необходимость установки для вашего автопарка."
  },
  {
    question: "Как часто нужно проводить калибровку тахографа?",
    answer: "Калибровка (тарировка) тахографа с блоком СКЗИ проводится раз в 3 года, либо при смене собственника, замене госномера, ремонте коробки передач или изменении диаметра шин."
  },
  {
    question: "Можно ли отслеживать расход топлива в реальном времени?",
    answer: "Да, наши системы GPS/ГЛОНАСС мониторинга в связке с высокоточными датчиками уровня топлива (ДУТ) позволяют видеть остаток, заправки и сливы топлива в режиме реального времени через мобильное приложение или ПК."
  },
  {
    question: "Какова гарантия на оборудование и монтаж?",
    answer: "Мы предоставляем официальную гарантию производителя на оборудование (обычно от 12 до 36 месяцев) и собственную гарантию на монтажные работы в течение 1 года."
  },
  {
    question: "Работаете ли вы с НДС?",
    answer: "Да, ООО «ПАРСЕК» работает с полным НДС (20%), что удобно для юридических лиц и позволяет получить налоговый вычет."
  }
]

export function FAQ() {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold uppercase tracking-[0.3em] text-primary mb-4">Часто задаваемые вопросы</h2>
          <h3 className="text-4xl md:text-5xl font-black">FAQ</h3>
        </div>

        <Accordion type="single" className="w-full">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <AccordionItem value={`item-${index}`} className="border-border/50 px-6 bg-background rounded-2xl mb-4">
                <AccordionTrigger className="text-left font-bold text-lg hover:text-primary transition-colors py-6">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base leading-relaxed pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            </motion.div>
          ))}
        </Accordion>
      </div>
    </section>
  )
}