import Hero from '@/components/Hero'
import About from '@/components/About'
import Experience from '@/components/Experience'
import Education from '@/components/Education'
import Projects from '@/components/Projects'
import Skills from '@/components/Skills'
import Contact from '@/components/Contact'
import Background from '@/components/Background'
import Navigation from '@/components/Navigation'

export default function Home() {
  return (
    <div className="relative min-h-screen">
      <Background />
      <Navigation />
      <main className="relative z-10">
        <Hero />
        <About />
        <Experience />
        <Education />
        <Skills />
        <Projects />
        <Contact />
      </main>
    </div>
  )
}
