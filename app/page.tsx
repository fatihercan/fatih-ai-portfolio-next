import Nav from '@/components/Nav';
import Hero from '@/components/Hero';
import { Positioning, Expertise, Experience, AICases, Skills, Education, Contact } from '@/components/Sections';

export default function Home(){
 return <main>
  <Nav />
  <Hero />
  <Positioning />
  <Expertise />
  <Experience />
  <AICases />
  <Skills />
  <Education />
  <Contact />
  <footer className="px-6 pb-10 text-center text-sm text-slate-500">© 2026 Fatih Ercan — Bridging language, education, and artificial intelligence.</footer>
 </main>
}
