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
    question: "Какое электротехническое оборудование вы поставляете?",
    answer: "Мы специализируемся на оптовых поставках низковольтного и высоковольтного оборудования: автоматические выключатели, контакторы, преобразователи частоты, электродвигатели, а также контрольно-измерительные приборы и кабельную продукцию от ведущих производителей."
  },
  {
    question: "Предоставляете ли вы техническую документацию и сертификаты?",
    answer: "Да, всё поставляемое оборудование сопровождается полным комплектом документов: паспорта изделий, руководства по эксплуатации и сертификаты соответствия ТР ТС (технического регламента Таможенного союза)."
  },
  {
    question: "Возможна ли поставка оборудования под заказ?",
    answer: "Безусловно. Мы работаем как с позициями в наличии на складе, так и подбираем сложные спецификации под конкретные проекты автоматизации или модернизации производства напрямую от заводов-изготовителей."
  },
  {
    question: "Каковы условия оплаты и работаете ли вы с НДС?",
    answer: "ООО «ПАРСЕК» работает по безналичному расчету с полным НДС (20%). Для постоянных клиентов и крупных заказов возможны гибкие условия оплаты и графики платежей."
  },
  {
    question: "Осуществляете ли вы доставку в регионы?",
    answer: "Мы организуем логистику по всей территории Тамбовской области и ЦФО. Сотрудничаем с ведущими транспортными компаниями для оперативной доставки оборудования до склада заказчика."
  }
]

export function FAQ() {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold uppercase tracking-[0.3em] text-primary mb-4">Часто задаваемые вопросы</h2>
          <h3 className="text-4xl md:text-5xl font-black italic">FAQ</h3>
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
              <AccordionItem value={`item-${index}`} className="border-border/50 px-6 bg-background rounded-2xl mb-4 overflow-hidden border">
                <AccordionTrigger className="text-left font-bold text-lg hover:text-primary transition-colors py-6 focus:outline-none">
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