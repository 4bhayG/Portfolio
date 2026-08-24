import { SiteNav } from "@/components/SiteNav";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Experience } from "@/components/Experience";
import { Projects } from "@/components/Projects";
import { LeetCodeStats } from "@/components/LeetCodeStats";
import { Skills } from "@/components/Skills";
import { Achievements } from "@/components/Achievements";
import { Education } from "@/components/Education";
import { Contact } from "@/components/Contact";
import { SiteFooter } from "@/components/SiteFooter";
import { Starfield } from "@/components/Starfield";

/**
 * Section order is also the argument: who I am, what I did at Cisco,
 * what I built, evidence of practice, tooling, everything else, how to reach me.
 *
 * Each section uses a different layout family so the page never falls into
 * the repeated-block rhythm that reads as templated.
 */
export default function Home() {
  return (
    <>
      <Starfield />
      <SiteNav />
      <main className="relative z-10 flex-1">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <LeetCodeStats />
        <Skills />
        <Achievements />
        <Education />
        <Contact />
      </main>
      <SiteFooter />
    </>
  );
}
