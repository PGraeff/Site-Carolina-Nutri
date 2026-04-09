import { FloatingWhatsApp } from "@/components/layout/FloatingWhatsApp";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { About } from "@/components/sections/About";
import { Contact } from "@/components/sections/Contact";
import { Hero } from "@/components/sections/Hero";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { Plans } from "@/components/sections/Plans";

export default function Home() {
  return (
    <>
      <Header />
      <main id="conteudo-principal">
        <Hero />
        <About />
        <Plans />
        <HowItWorks />
        <Contact />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}
