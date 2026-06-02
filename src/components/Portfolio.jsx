import { Briefcase, Sparkles } from 'lucide-react'
import { projects, personalInfo } from '../data/projects.js'
import ProjectCard from './ProjectCard.jsx'
import { useTranslation } from '../i18n/LanguageContext.jsx'

export default function Portfolio() {
  const { t, lang } = useTranslation()

  return (
    <section id="portfolio" className="relative py-24 sm:py-32 px-5">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-14 sm:mb-20">
          <div className="reveal inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass text-xs uppercase tracking-widest text-slate-300 mb-5">
            <Briefcase size={13} />
            {t('portfolio.badge')}
          </div>
          <h2 className="reveal text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-slate-100">
            {t('portfolio.titleStart')}{' '}
            <span className="text-gradient">{t('portfolio.titleAccent')}</span>
          </h2>
          <p className="reveal mt-4 text-slate-400 text-base sm:text-lg">
            {t('portfolio.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        <div className="reveal mt-14 sm:mt-20 text-center">
          <a
            href={personalInfo.telegram}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-medium shadow-lg shadow-indigo-500/30 hover:shadow-indigo-500/50 hover:scale-[1.03] active:scale-95 transition-all"
          >
            <Sparkles size={16} />
            {t('portfolio.cta')}
          </a>
        </div>
      </div>
    </section>
  )
}
