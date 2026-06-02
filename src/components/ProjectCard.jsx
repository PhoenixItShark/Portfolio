import { useEffect, useRef, useState } from 'react'
import { ExternalLink, Maximize2 } from 'lucide-react'
import { useTranslation } from '../i18n/LanguageContext.jsx'

export default function ProjectCard({ project, index }) {
  const { t, lang } = useTranslation()
  const { url, accent } = project
  const title = project.title[lang]
  const description = project.description[lang]
  const tags = project.tags[lang]

  const wrapperRef = useRef(null)
  const [scale, setScale] = useState(0.5)
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    const el = wrapperRef.current
    if (!el) return
    const update = () => {
      const width = el.clientWidth
      if (width > 0) setScale(width / 1280)
    }
    update()
    const ro = new ResizeObserver(update)
    ro.observe(el)
    return () => ro.disconnect()
  }, [])

  return (
    <article
      className="group relative flex flex-col rounded-2xl overflow-hidden glass hover:bg-white/[0.07] hover:-translate-y-1.5 transition-all duration-500 reveal"
      style={{ transitionDelay: `${index * 80}ms` }}
    >
      <div className="relative h-1">
        <div className={`absolute inset-0 bg-gradient-to-r ${accent}`} />
      </div>

      <div className="relative p-4 sm:p-5">
        <div
          ref={wrapperRef}
          className="relative w-full aspect-[16/10] rounded-xl overflow-hidden bg-[#0a0a0f] border border-white/5"
        >
          <div
            className="origin-top-left"
            style={{
              width: 1280,
              height: 800,
              transform: `scale(${scale})`,
              transition: 'transform 0.4s ease',
            }}
          >
            <iframe
              src={url}
              title={title}
              loading="lazy"
              onLoad={() => setLoaded(true)}
              className="w-full h-full pointer-events-none bg-[#0a0a0f]"
              tabIndex={-1}
            />
          </div>

          {!loaded && (
            <div className="absolute inset-0 flex items-center justify-center bg-[#0a0a0f]">
              <div className="flex flex-col items-center gap-3">
                <div className="w-8 h-8 border-2 border-white/10 border-t-indigo-400 rounded-full animate-spin" />
                <span className="text-xs text-slate-500">{t('portfolio.loadingPreview')}</span>
              </div>
            </div>
          )}

          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0f]/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />

          <a
            href={url}
            target="_blank"
            rel="noreferrer"
            aria-label={t('project.openAria', { title })}
            className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-white text-slate-900 text-sm font-medium shadow-xl scale-95 group-hover:scale-100 transition-transform">
              <Maximize2 size={16} />
              {t('portfolio.openPreview')}
            </span>
          </a>
        </div>

        <div className="mt-5 flex items-start justify-between gap-3">
          <div className="min-w-0">
            <h3 className="text-lg sm:text-xl font-semibold text-slate-100 truncate">
              {title}
            </h3>
            <div className="mt-1.5 flex flex-wrap gap-1.5">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="text-[11px] uppercase tracking-wider font-medium px-2 py-0.5 rounded-md bg-white/5 text-slate-400 border border-white/5"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        <p className="mt-3 text-sm text-slate-400 leading-relaxed line-clamp-3">
          {description}
        </p>

        <div className="mt-5 flex items-center justify-between">
          <a
            href={url}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-slate-200 hover:text-white group/link"
          >
            {t('portfolio.viewLive')}
            <ExternalLink
              size={14}
              className="group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform"
            />
          </a>
          <span className="text-xs text-slate-500 font-mono">
            {String(index + 1).padStart(2, '0')}
          </span>
        </div>
      </div>
    </article>
  )
}
