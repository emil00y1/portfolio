import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import WorkSection from "@/components/WorkSection";
import LibrariesSection from "@/components/LibrariesSection";
import HowIWorkSection from "@/components/HowIWorkSection";
import AboutSection from "@/components/AboutSection";
export default function Home() {
  return (
    <>
      <Nav />
      <main id="main-content">
        <Hero />
        <WorkSection />
        <HowIWorkSection />
        <AboutSection />
        <LibrariesSection />
      </main>
    </>
  );
}
