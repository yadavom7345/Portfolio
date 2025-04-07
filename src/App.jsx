import './App.css'
import { useTheme } from './context/ThemeContext'
import Header from './components/Header'
import Hero from './components/Hero'
import Skills from './components/Skills'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  const { darkMode } = useTheme();

  return (
    <div className={`portfolio-container ${darkMode ? 'dark-mode' : 'light-mode'}`}>
      <Header />
      <Hero />
      <Skills />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
