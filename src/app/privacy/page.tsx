"use client"

import React from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowLeft } from "lucide-react"
import companyData from "@/data/company.json"

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen bg-background py-20">
      <div className="container mx-auto px-4 max-w-4xl">
        <Link 
          href="/" 
          className="inline-flex items-center gap-2 text-primary hover:underline mb-12"
        >
          <ArrowLeft className="w-4 h-4" />
          Вернуться на главную
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="prose dark:prose-invert max-w-none"
        >
          <h1 className="text-4xl font-black mb-8">Политика конфиденциальности</h1>
          
          <p className="text-muted-foreground mb-6">
            Настоящая Политика конфиденциальности персональных данных действует в отношении всей информации, 
            которую сайт {companyData.name} (далее — Сайт) может получить о Пользователе во время использования Сайта.
          </p>

          <h2 className="text-2xl font-bold mt-10 mb-4">1. Определение терминов</h2>
          <p>В настоящей Политике конфиденциальности используются следующие термины:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>«Персональные данные» — любая информация, относящаяся к прямо или косвенно определенному или определяемому физическому лицу.</li>
            <li>«Обработка персональных данных» — любое действие (операция) или совокупность действий, совершаемых с использованием средств автоматизации или без использования таких средств с персональными данными.</li>
          </ul>

          <h2 className="text-2xl font-bold mt-10 mb-4">2. Предмет политики конфиденциальности</h2>
          <p>
            Пользователь, оставляя заявку на Сайте, принимает настоящую Политику и дает согласие на обработку своих персональных данных:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Фамилия, имя;</li>
            <li>Контактный телефон;</li>
            <li>Адрес электронной почты (e-mail);</li>
            <li>Наименование организации.</li>
          </ul>

          <h2 className="text-2xl font-bold mt-10 mb-4">3. Цели сбора персональной информации</h2>
          <p>Персональные данные Пользователя Сайт может использовать в целях:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Идентификации Пользователя для оформления заявки на поставку оборудования.</li>
            <li>Установления с Пользователем обратной связи, включая направление уведомлений, запросов, касающихся использования Сайта, оказания услуг.</li>
            <li>Подготовки индивидуальных коммерческих предложений.</li>
          </ul>

          <h2 className="text-2xl font-bold mt-10 mb-4">4. Способы и сроки обработки</h2>
          <p>
            Обработка персональных данных Пользователя осуществляется без ограничения срока, любым законным способом, 
            в том числе в информационных системах персональных данных с использованием средств автоматизации или без использования таких средств.
          </p>

          <h2 className="text-2xl font-bold mt-10 mb-4">5. Обязательства сторон</h2>
          <p>
            Мы принимаем необходимые организационные и технические меры для защиты персональной информации Пользователя 
            от неправомерного или случайного доступа, уничтожения, изменения, блокирования, копирования, распространения, 
            а также от иных неправомерных действий третьих лиц.
          </p>

          <h2 className="text-2xl font-bold mt-10 mb-4">6. Дополнительные условия</h2>
          <p>
            Действующая Политика конфиденциальности размещена на странице по адресу: {companyData.websiteUrl}/privacy
          </p>
          <p className="mt-8">Обновлено: 28 апреля 2026 г.</p>
          
          <div className="mt-12 p-8 bg-muted rounded-3xl border border-border">
            <h3 className="text-xl font-bold mb-4">Реквизиты оператора данных:</h3>
            <p className="mb-2"><strong>{companyData.fullName}</strong></p>
            <p>ИНН: {companyData.contacts.inn}</p>
            <p>ОГРН: {companyData.contacts.ogrn}</p>
            <p>Адрес: {companyData.contacts.address}</p>
          </div>
        </motion.div>
      </div>
    </main>
  )
}