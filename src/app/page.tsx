import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { About } from "@/components/about";
import { Features } from "@/components/features";
import { Products } from "@/components/products";
import { Gallery } from "@/components/gallery";
import { Reviews } from "@/components/reviews";
import { FAQ } from "@/components/faq";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Features />
      <Products />
      <Gallery />
      <Reviews />
      <FAQ />
      <Contact />
      <Footer />
    </main>
  );
}