import { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import AboutUs from "@/components/AboutUs";
import Services from "@/components/Services";
import Consolidation from "@/components/Consolidation";
import RouteMapWrapper from "@/components/RouteMapWrapper";
import Partners from "@/components/Partners";
import Mission from "@/components/Mission";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Logikent - Transport & Logistics Services in Uzbekistan",
  description: "Your Trusted Partner in Logistics Solutions. Air, sea, road freight, customs clearance, cargo consolidation from China, Turkey, EU, UAE to Uzbekistan. Door-to-door delivery.",
};

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Consolidation />
      <RouteMapWrapper />
      <Partners />
      <AboutUs />
      <Mission />
      <Contact />
      <Footer />
    </main>
  );
}
