import Hero from '@/components/Hero';
import About from '@/components/About';
import Experience from '@/components/Experience';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import { getSiteProfile } from '@/lib/content';

export default async function Home() {
  const profile = await getSiteProfile();

  return (
    <main>
      <Hero profile={profile} />
      <About />
      <Experience />
      <Skills />
      <Projects />
      <Contact />
    </main>
  );
}
