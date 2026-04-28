"use client"

import React from "react"
import Link from "next/link"
import companyData from "@/data/company.json"

export function Footer() {
  return (
    <footer className="bg-muted py-12 border-t border-border">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-6 group">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold">П</span>
              </div>
              <span className="text-xl font-black tracking-tighter uppercase">Парсек</span>
            </Link>
            <p className="max-w-md text-muted-foreground leading-relaxed">
              {companyData.description}
            </p>
          </div>
          
          <div>
            <h4 className="font-bold mb-6 uppercase tracking-widest text-sm">Навигация</h4>
            <ul className="space-y-4">
              <li><Link href="#about" className="text-muted-foreground hover:text-primary transition-colors">О компании</Link></li>
              <li><Link href="#features" className="text-muted-foreground hover:text-primary transition-colors">Преимущества</Link></li>
              <li><Link href="#products" className="text-muted-foreground hover:text-primary transition-colors">Оборудование</Link></li>
              <li><Link href="#contact" className="text-muted-foreground hover:text-primary transition-colors">Контакты</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold mb-6 uppercase tracking-widest text-sm">Правовая информация</h4>
            <ul className="space-y-4">
              <li className="text-muted-foreground text-sm">ИНН: {companyData.contacts.inn}</li>
              <li className="text-muted-foreground text-sm">ОГРН: {companyData.contacts.ogrn}</li>
              <li><Link href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm">Политика конфиденциальности</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} {companyData.name}. Все права защищены.</p>
          <p>Разработано с акцентом на технологии 2026</p>
        </div>
      </div>
    </footer>
  )
}