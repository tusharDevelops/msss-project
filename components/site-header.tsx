'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Menu, X } from 'lucide-react'
import { LangToggle, useI18n } from '@/components/i18n-provider'
import Image from 'next/image'

export default function SiteHeader() {
  const [open, setOpen] = useState(false)
  const { t } = useI18n()
  const nav = [
    { href: '/', label: t('nav.home') },
    { href: '/admissions', label: t('nav.admissions') },
    { href: '#programs', label: t('nav.programs') },
    { href: '#founder', label: t('nav.founder') },
    { href: '#contact', label: t('nav.contact') },
  ]

  return (
    <header className="sticky top-0 z-40 w-full p-2.5 border-b bg-white/70 backdrop-blur">
      <div className="max-w-7xl mx-auto px-4 md:px-8 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <div className="relative w-10 h-10 rounded-full overflow-hidden bg-white ring-1 ring-slate-200">
            <Image
              src="/images/msss-logo.png"
              alt="MSSS Logo"
              width={40}
              height={40}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="leading-tight">
            <div className="text-xs text-rose-700 font-medium">{t('brand.hindi')}</div>
            <div className="text-sm md:text-base font-semibold">{t('brand')}</div>
          </div>
        </Link>

        <nav className="hidden md:flex items-center gap-4">
          {nav.map((n) => (
            <Link key={n.href} href={n.href} className="text-sm text-slate-700 hover:text-slate-900">
              {n.label}
            </Link>
          ))}
          <LangToggle />
          <Button asChild>
            <Link href="/admissions">{t('cta.apply')}</Link>
          </Button>
        </nav>

        <div className="md:hidden flex items-center gap-2">
          <LangToggle />
          <button
            className="inline-flex items-center justify-center w-10 h-10 rounded-md border"
            aria-label="Toggle Menu"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t bg-white">
          <div className="px-4 py-3 flex flex-col">
            {nav.map((n) => (
              <Link
                key={n.href}
                href={n.href}
                onClick={() => setOpen(false)}
                className="py-2 text-slate-700 hover:text-slate-900"
              >
                {n.label}
              </Link>
            ))}
            <Button asChild className="mt-2">
              <Link href="/admissions" onClick={() => setOpen(false)}>
                {t('cta.apply')}
              </Link>
            </Button>
          </div>
        </div>
      )}
    </header>
  )
}
