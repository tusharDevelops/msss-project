'use client'

import { createContext, useContext, useEffect, useMemo, useState } from 'react'
import { dict, type Lang } from '@/lib/i18n'
import { Button } from '@/components/ui/button'
import { Languages } from 'lucide-react'

type Ctx = {
  lang: Lang
  setLang: (l: Lang) => void
  t: (key: string, vars?: Record<string, string | number>) => string
}

const I18nContext = createContext<Ctx | null>(null)

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Lang>('en')

  // Load preference
  useEffect(() => {
    const stored = typeof window !== 'undefined' ? (localStorage.getItem('msss_lang') as Lang | null) : null
    if (stored === 'en' || stored === 'hi') setLang(stored)
  }, [])

  // Persist preference
  useEffect(() => {
    if (typeof window !== 'undefined') localStorage.setItem('msss_lang', lang)
  }, [lang])

  function t(key: string, vars?: Record<string, string | number>) {
    const table = dict[lang] || {}
    const fallback = dict.en[key] ?? key
    let text = table[key] ?? fallback
    if (vars) {
      for (const k of Object.keys(vars)) {
        text = text.replace(new RegExp(`{${k}}`, 'g'), String(vars[k]))
      }
    }
    return text
  }

  const value = useMemo(() => ({ lang, setLang, t }), [lang])

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>
}

export function useI18n() {
  const ctx = useContext(I18nContext)
  if (!ctx) throw new Error('useI18n must be used within <LanguageProvider>')
  return ctx
}

export function LangToggle({ className }: { className?: string }) {
  const { lang, setLang, t } = useI18n()
  const next = lang === 'en' ? 'hi' : 'en'
  return (
    <Button
      type="button"
      variant="outline"
      className={className}
      onClick={() => setLang(next)}
      aria-label={t('toggle.aria')}
      title={t('toggle.title')}
    >
      <Languages className="w-4 h-4 mr-2" />
      {lang === 'en' ? 'हिन्दी' : 'English'}
    </Button>
  )
}
