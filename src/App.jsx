import { useEffect } from 'react'
import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import Portfolio from './components/Portfolio.jsx'
import Footer from './components/Footer.jsx'
import { LanguageProvider, useLanguage } from './i18n/LanguageContext.jsx'

function Shell() {
  const { lang } = useLanguage()

  useEffect(() => {
    const elements = document.querySelectorAll('.reveal')
    if (!elements.length) return
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    )
    elements.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [lang])

  return (
    <div className="relative min-h-screen">
      <Header />
      <main>
        <Hero />
        <Portfolio />
      </main>
      <Footer />
    </div>
  )
}

export default function App() {
  return (
    <LanguageProvider>
      <Shell />
    </LanguageProvider>
  )
}
