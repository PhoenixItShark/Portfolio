import { Phone, Send, MapPin, Instagram, Facebook, Github, Linkedin } from 'lucide-react'
import { personalInfo } from '../data/projects.js'
import { useTranslation } from '../i18n/LanguageContext.jsx'

const socials = [
  { key: 'Instagram', Icon: Instagram, hover: 'hover:text-pink-400', href: 'https://www.instagram.com/phoenix.dev.odessa/' },
  { key: 'Facebook',  Icon: Facebook,  hover: 'hover:text-blue-400', href: '#' },
  { key: 'GitHub',    Icon: Github,    hover: 'hover:text-slate-100', href: '#' },
  { key: 'LinkedIn',  Icon: Linkedin,  hover: 'hover:text-sky-400', href: '#' },
]

export default function Footer() {
  const { t, lang } = useTranslation()
  const year = new Date().getFullYear()
  const cityName = personalInfo.locationLocalized[lang]
  const countryName = personalInfo.countryLocalized[lang]

  return (
    <footer
      id="contacts"
      className="relative pt-20 sm:pt-28 pb-10 px-5 border-t border-white/5"
    >
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-indigo-500/40 to-transparent" />

      <div className="max-w-6xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="reveal inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass text-xs uppercase tracking-widest text-slate-300 mb-5">
            <Send size={13} />
            {t('footer.badge')}
          </div>
          <h2 className="reveal text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-slate-100">
            {t('footer.titleStart')}{' '}
            <span className="text-gradient">{t('footer.titleAccent')}</span>
          </h2>
          <p className="reveal mt-4 text-slate-400 text-base sm:text-lg">
            {t('footer.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5">
          <a
            href={`tel:${personalInfo.phoneRaw}`}
            className="reveal group flex items-center gap-4 p-5 sm:p-6 rounded-2xl glass hover:bg-white/[0.07] hover:-translate-y-1 transition-all"
          >
            <span className="grid place-items-center w-12 h-12 rounded-xl bg-emerald-500/10 text-emerald-400 group-hover:scale-110 transition-transform">
              <Phone size={20} />
            </span>
            <div className="min-w-0">
              <div className="text-xs uppercase tracking-wider text-slate-500">{t('footer.phone')}</div>
              <div className="font-semibold text-slate-100 mt-0.5 truncate">
                {personalInfo.phone}
              </div>
            </div>
          </a>

          <a
            href={personalInfo.telegram}
            target="_blank"
            rel="noreferrer"
            className="reveal group flex items-center gap-4 p-5 sm:p-6 rounded-2xl glass hover:bg-white/[0.07] hover:-translate-y-1 transition-all"
            style={{ transitionDelay: '80ms' }}
          >
            <span className="grid place-items-center w-12 h-12 rounded-xl bg-sky-500/10 text-sky-400 group-hover:scale-110 transition-transform">
              <Send size={20} />
            </span>
            <div className="min-w-0">
              <div className="text-xs uppercase tracking-wider text-slate-500">{t('footer.telegram')}</div>
              <div className="font-semibold text-slate-100 mt-0.5 truncate">
                {personalInfo.telegramHandle}
              </div>
            </div>
          </a>

          <div
            className="reveal group flex items-center gap-4 p-5 sm:p-6 rounded-2xl glass"
            style={{ transitionDelay: '160ms' }}
          >
            <span className="grid place-items-center w-12 h-12 rounded-xl bg-rose-500/10 text-rose-400 group-hover:scale-110 transition-transform">
              <MapPin size={20} />
            </span>
            <div className="min-w-0">
              <div className="text-xs uppercase tracking-wider text-slate-500">{t('footer.city')}</div>
              <div className="font-semibold text-slate-100 mt-0.5 truncate">
                {cityName}, {countryName}
              </div>
            </div>
          </div>
        </div>

        <div className="reveal mt-12 flex flex-col sm:flex-row items-center justify-between gap-6">
          <p className="text-sm text-slate-400 text-center sm:text-left">
            {t('footer.tagline')}
          </p>

          <div className="flex items-center gap-2">
            {socials.map(({ key, Icon, hover, href }) => (
              <a
                key={key}
                href={href}
                target={href !== '#' ? '_blank' : undefined}
                rel={href !== '#' ? 'noreferrer' : undefined}
                aria-label={t('footer.socialAria', { name: key })}
                onClick={href === '#' ? (e) => e.preventDefault() : undefined}
                className={`grid place-items-center w-10 h-10 rounded-full glass text-slate-500 ${hover} hover:bg-white/10 hover:-translate-y-0.5 transition-all`}
              >
                <Icon size={17} />
              </a>
            ))}
          </div>
        </div>

        <div className="reveal mt-10 pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500">
          <p>© {year} {personalInfo.firstNameLocalized[lang]}. {t('footer.rights')}</p>
          <p>
            {t('footer.madeWith')} <span className="text-rose-400">♥</span> {lang === 'en' ? `in ${cityName}` : `у ${cityName}`}
          </p>
        </div>
      </div>
    </footer>
  )
}
