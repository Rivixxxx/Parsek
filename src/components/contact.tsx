"use client"

import React from "react"
import { motion } from "framer-motion"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { Mail, Phone, MapPin, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import companyData from "@/data/company.json"

const formSchema = z.object({
  name: z.string().min(2, { message: "Имя должно быть не менее 2 символов" }),
  phone: z.string().min(10, { message: "Введите корректный номер телефона" }),
  email: z.string().email({ message: "Введите корректный email" }),
  message: z.string().min(10, { message: "Сообщение должно быть не менее 10 символов" }),
})

export function Contact() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      phone: "",
      email: "",
      message: "",
    },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values)
    alert("Спасибо за заявку! Мы свяжемся с вами в ближайшее время.")
    form.reset()
  }

  return (
    <section id="contact" className="py-24">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-sm font-bold uppercase tracking-[0.3em] text-primary mb-4">Связаться с нами</h2>
            <h3 className="text-4xl md:text-5xl font-black mb-10">ОБСУДИМ ВАШ <br /> ПРОЕКТ?</h3>
            
            <div className="space-y-8 mb-12">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary shrink-0">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground uppercase tracking-widest font-bold mb-1">Телефон</p>
                  <p className="text-xl font-bold">{companyData.contacts.phone}</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary shrink-0">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground uppercase tracking-widest font-bold mb-1">Email</p>
                  <p className="text-xl font-bold">{companyData.contacts.email}</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground uppercase tracking-widest font-bold mb-1">Адрес</p>
                  <p className="text-xl font-bold">{companyData.contacts.address}</p>
                </div>
              </div>
            </div>

            <div className="p-6 bg-muted rounded-2xl border border-border">
              <p className="text-sm font-bold uppercase tracking-widest mb-4">Реквизиты:</p>
              <div className="grid grid-cols-2 gap-4 text-sm text-muted-foreground">
                <div>
                  <p>ИНН: {companyData.contacts.inn}</p>
                  <p>ОГРН: {companyData.contacts.ogrn}</p>
                </div>
                <div>
                  <p>{companyData.name}</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-card border border-border p-8 md:p-12 rounded-[2rem] shadow-xl"
          >
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Имя</FormLabel>
                      <FormControl>
                        <Input id="name-input" placeholder="Иван Иванов" {...field} className="h-12 bg-muted/50" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <div className="grid md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Телефон</FormLabel>
                        <FormControl>
                          <Input placeholder="+7 (___) ___-__-__" {...field} className="h-12 bg-muted/50" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <Input placeholder="example@mail.ru" {...field} className="h-12 bg-muted/50" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Сообщение</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="Расскажите о ваших задачах..." 
                          className="min-h-[120px] bg-muted/50"
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type="submit" className="w-full h-14 text-lg font-bold shadow-[0_0_20px_rgba(34,211,238,0.3)]">
                  Отправить заявку
                  <Send className="ml-2 h-5 w-5" />
                </Button>
              </form>
            </Form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}