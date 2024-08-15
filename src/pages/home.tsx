import About from '../components/about'
import Contact from '../components/contact'
import Exducacion from '../components/education'
import Experiences from '../components/experiences'
import Hero from '../components/hero'
import Projects from '../components/projects-section'
import Skills from '../components/skills'

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Exducacion />
      <Experiences />
      <Contact />
    </>
  )
}
