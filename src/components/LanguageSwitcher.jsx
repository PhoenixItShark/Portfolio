import { useEffect, useRef, useState } from 'react'
import { Globe, Check } from 'lucide-react'
import { SUPPORTED_LANGUAGES, useLanguage } from '../i18n/LanguageContext.jsx'

export default function LanguageSwitcher() {
  const { lang, setLang } = useLanguage()
  const [open, setOpen] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    if (!open) return
    const onClick = (e) => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false)
    }
    const onKey = (e) => {
      if (e.key === 'Escape') setOpen(false)
    }
    document.addEventListener('mousedown', onClick)
    document.addEventListener('keydown', onKey)
    return () => {
      document.removeEventListener('mousedown', onClick)
      document.removeEventListener('keydown', onKey)
    }
  }, [open])

  const current = SUPPORTED_LANGUAGES.find((l) => l.code === lang) || SUPPORTED_LANGUAGES[0]

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-label="Language"
        aria-haspopup="listbox"
        aria-expanded={open}
        className="inline-flex items-center gap-1.5 px-3 py-2 rounded-full glass text-sm font-medium text-slate-200 hover:bg-white/10 hover:scale-[1.03] active:scale-95 transition-all"
      >
        <Globe size={15} className="text-slate-400" />
        <span className="tabular-nums">{current.short}</span>
      </button>

      <div
        role="listbox"
        className={`absolute right-0 mt-2 min-w-[160px] p-1.5 rounded-xl glass origin-top-right z-50 transition-all duration-200 ${
          open
            ? 'opacity-100 scale-100 translate-y-0 pointer-events-auto'
            : 'opacity-0 scale-95 -translate-y-1 pointer-events-none'
        }`}
      >
        {SUPPORTED_LANGUAGES.map((l) => {
          const isActive = l.code === lang
          return (
            <button
              key={l.code}
              type="button"
              role="option"
              aria-selected={isActive}
              onClick={() => {
                setLang(l.code)
                setOpen(false)
              }}
              className={`w-full flex items-center justify-between gap-3 px-3 py-2 rounded-lg text-sm transition-colors ${
                isActive
                  ? 'bg-white/10 text-white'
                  : 'text-slate-300 hover:bg-white/5 hover:text-white'
              }`}
            >
              <span className="flex items-center gap-2">
                <span className="font-mono text-xs text-slate-500 w-6">{l.short}</span>
                <span className="font-medium">{l.label}</span>
              </span>
              {isActive && <Check size={14} className="text-indigo-400" />}
            </button>
          )
        })}
      </div>
    </div>
  )
}
