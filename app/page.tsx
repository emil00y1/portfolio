import Cursor from "@/components/Cursor";
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import WorkSection from "@/components/WorkSection";
import LibrariesSection from "@/components/LibrariesSection";
import HowIWorkSection from "@/components/HowIWorkSection";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Cursor />
      <Nav />
      <main>
        <Hero />
        <WorkSection />
        <HowIWorkSection />
        <AboutSection />
        <LibrariesSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
