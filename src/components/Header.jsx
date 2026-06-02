import { useEffect, useState } from 'react'
import { Menu, X, Code2 } from 'lucide-react'
import LanguageSwitcher from './LanguageSwitcher.jsx'
import { useTranslation } from '../i18n/LanguageContext.jsx'
import { personalInfo } from '../data/projects.js'

export default function Header() {
  const { t, lang } = useTranslation()
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState('#home')
  const [open, setOpen] = useState(false)

  const links = [
    { href: '#home',      label: t('nav.home') },
    { href: '#portfolio', label: t('nav.portfolio') },
    { href: '#contacts',  label: t('nav.contacts') },
  ]

  useEffect(() => {
    setActive('#home')
  }, [lang])

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 16)
      const sections = links.map((l) => document.querySelector(l.href)).filter(Boolean)
      const scrollPos = window.scrollY + window.innerHeight / 3
      for (const section of sections) {
        if (
          section.offsetTop <= scrollPos &&
          section.offsetTop + section.offsetHeight > scrollPos
        ) {
          setActive(`#${section.id}`)
        }
      }
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [lang])

  const handleNav = (e, href) => {
    e.preventDefault()
    setOpen(false)
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-[#0a0a0f]/70 backdrop-blur-xl border-b border-white/5 py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 flex items-center justify-between">
        <a
          href="#home"
          onClick={(e) => handleNav(e, '#home')}
          className="group flex items-center gap-2.5"
        >
          <span className="relative grid place-items-center w-9 h-9 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 font-bold text-white shadow-lg shadow-indigo-500/30 group-hover:scale-105 transition-transform">
            І
          </span>
          <span className="hidden sm:block font-semibold text-slate-100 tracking-tight">
            {personalInfo.nameLocalized[lang] || personalInfo.name}
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-1 p-1 rounded-full glass">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleNav(e, link.href)}
              className={`relative px-4 py-2 text-sm font-medium rounded-full transition-colors ${
                active === link.href ? 'text-white' : 'text-slate-400 hover:text-white'
              }`}
            >
              {active === link.href && (
                <span className="absolute inset-0 rounded-full bg-gradient-to-r from-indigo-500/30 to-purple-500/30 border border-white/10" />
              )}
              <span className="relative">{link.label}</span>
            </a>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-2">
          <LanguageSwitcher />
          <a
            href="https://t.me/PhoenixItShark"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 text-white text-sm font-medium shadow-lg shadow-indigo-500/30 hover:shadow-indigo-500/50 hover:scale-[1.03] active:scale-95 transition-all"
          >
            <Code2 size={16} />
            {t('nav.contactCta')}
          </a>
        </div>

        <button
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? t('nav.closeMenu') : t('nav.openMenu')}
          className="md:hidden p-2 rounded-lg glass text-slate-100"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      <div
        className={`md:hidden overflow-hidden transition-[max-height,opacity] duration-500 ${
          open ? 'max-h-96 opacity-100 mt-3' : 'max-h-0 opacity-0'
        }`}
      >
        <nav className="max-w-7xl mx-5 px-4 py-4 rounded-2xl glass flex flex-col gap-1">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleNav(e, link.href)}
              className={`px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                active === link.href
                  ? 'bg-white/10 text-white'
                  : 'text-slate-300 hover:bg-white/5'
              }`}
            >
              {link.label}
            </a>
          ))}
          <div className="flex items-center justify-between gap-2 pt-2">
            <a
              href="https://t.me/PhoenixItShark"
              target="_blank"
              rel="noreferrer"
              className="flex-1 px-3 py-2.5 rounded-lg text-sm font-medium text-center bg-gradient-to-r from-indigo-500 to-purple-600 text-white"
            >
              {t('nav.contactTelegram')}
            </a>
            <LanguageSwitcher />
          </div>
        </nav>
      </div>
    </header>
  )
}
