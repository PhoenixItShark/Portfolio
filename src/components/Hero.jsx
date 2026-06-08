import { ArrowRight, Send, Zap, Tag, Award, MapPin } from 'lucide-react'
import { personalInfo } from '../data/projects.js'
import { useTranslation } from '../i18n/LanguageContext.jsx'

export default function Hero() {
  const { t, lang } = useTranslation()
  const scrollTo = (id) => {
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-32 pb-20 px-5 overflow-hidden"
    >
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-32 -left-32 w-[500px] h-[500px] bg-indigo-600/20 rounded-full blur-3xl animate-blob" />
        <div className="absolute top-40 -right-32 w-[450px] h-[450px] bg-purple-600/20 rounded-full blur-3xl animate-blob [animation-delay:-4s]" />
        <div className="absolute bottom-0 left-1/3 w-[400px] h-[400px] bg-pink-600/15 rounded-full blur-3xl animate-blob [animation-delay:-8s]" />
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
            maskImage: 'radial-gradient(ellipse at center, black 30%, transparent 70%)',
            WebkitMaskImage: 'radial-gradient(ellipse at center, black 30%, transparent 70%)',
          }}
        />
      </div>

      <div className="relative max-w-5xl mx-auto text-center">
        <div
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass mb-8 opacity-0 animate-fade-in-up"
          style={{ animationDelay: '0.1s' }}
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75 animate-ping" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
          </span>
          <span className="text-sm text-slate-300">{t('hero.available')}</span>
          <span className="inline-flex items-center gap-1 text-xs text-slate-400">
            <MapPin size={12} /> {personalInfo.locationLocalized[lang]}
          </span>
        </div>

        <h1
          className="text-4xl sm:text-5xl md:text-7xl font-extrabold tracking-tight leading-[1.05] opacity-0 animate-fade-in-up"
          style={{ animationDelay: '0.25s' }}
        >
          <div className="flex flex-col items-center gap-2 sm:gap-3">
            {t('hero.greeting').split(' | ').map((line, i) => (
              <div key={i} className="flex flex-col items-center">
                {i > 0 && (
                  <span className="text-white/20 text-xs sm:text-sm mb-2 sm:mb-3">✦</span>
                )}
                <span className="text-gradient">{line}</span>
              </div>
            ))}
          </div>
        </h1>

        <p
          className="mt-6 text-lg sm:text-xl md:text-2xl font-medium text-slate-300 max-w-3xl mx-auto opacity-0 animate-fade-in-up"
          style={{ animationDelay: '0.4s' }}
        >
          {t('hero.subtitle')}
        </p>

        <p
          className="mt-5 text-base sm:text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed opacity-0 animate-fade-in-up"
          style={{ animationDelay: '0.55s' }}
        >
          {personalInfo.uspLocalized[lang]}
        </p>

        <div
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 opacity-0 animate-fade-in-up"
          style={{ animationDelay: '0.7s' }}
        >
          <button
            onClick={() => scrollTo('#portfolio')}
            className="group inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-medium shadow-lg shadow-indigo-500/30 hover:shadow-indigo-500/50 hover:scale-[1.03] active:scale-95 transition-all w-full sm:w-auto justify-center"
          >
            {t('hero.ctaPrimary')}
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </button>
          <a
            href={personalInfo.telegram}
            target="_blank"
            rel="noreferrer"
            className="group inline-flex items-center gap-2 px-6 py-3.5 rounded-full glass text-slate-100 font-medium hover:bg-white/10 hover:scale-[1.03] active:scale-95 transition-all w-full sm:w-auto justify-center"
          >
            <Send size={18} className="text-sky-400" />
            {t('hero.ctaSecondary')}
          </a>
        </div>

        <div
          className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 max-w-3xl mx-auto opacity-0 animate-fade-in-up"
          style={{ animationDelay: '0.9s' }}
        >
          <AdvantageCard
            icon={<Zap size={20} />}
            title={t('hero.advantages.speed.title')}
            text={t('hero.advantages.speed.text')}
            color="text-amber-300"
            bg="from-amber-500/10 to-amber-500/0"
          />
          <AdvantageCard
            icon={<Tag size={20} />}
            title={t('hero.advantages.price.title')}
            text={t('hero.advantages.price.text')}
            color="text-emerald-300"
            bg="from-emerald-500/10 to-emerald-500/0"
          />
          <AdvantageCard
            icon={<Award size={20} />}
            title={t('hero.advantages.quality.title')}
            text={t('hero.advantages.quality.text')}
            color="text-indigo-300"
            bg="from-indigo-500/10 to-indigo-500/0"
          />
        </div>

        <div
          className="mt-20 flex justify-center opacity-0 animate-fade-in-up"
          style={{ animationDelay: '1.1s' }}
        >
          <button
            onClick={() => scrollTo('#portfolio')}
            aria-label={t('hero.scrollDown')}
            className="w-10 h-16 rounded-full border border-white/10 flex items-start justify-center p-2 hover:border-white/30 transition-colors"
          >
            <span className="w-1.5 h-3 bg-slate-400 rounded-full animate-bounce" />
          </button>
        </div>
      </div>
    </section>
  )
}

function AdvantageCard({ icon, title, text, color, bg }) {
  return (
    <div className="group relative p-5 rounded-2xl glass text-left hover:bg-white/[0.07] hover:-translate-y-1 transition-all">
      <div
        className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${bg} opacity-0 group-hover:opacity-100 transition-opacity`}
      />
      <div className="relative">
        <div className={`inline-flex p-2 rounded-lg bg-white/5 ${color} mb-3`}>
          {icon}
        </div>
        <div className="font-semibold text-slate-100">{title}</div>
        <div className="text-sm text-slate-400 mt-1">{text}</div>
      </div>
    </div>
  )
}
