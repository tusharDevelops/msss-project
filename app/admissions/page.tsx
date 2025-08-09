'use client'

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/hooks/use-toast"
import SiteHeader from "@/components/site-header"
import { LanguageProvider, useI18n } from "@/components/i18n-provider"

type FormState = {
  fullName: string
  phone: string
  email: string
  program: string
  level: string
  studyLocation: string
  message: string
}

const initialState: FormState = {
  fullName: "",
  phone: "",
  email: "",
  program: "",
  level: "UG",
  studyLocation: "India",
  message: "",
}

export default function AdmissionsPage() {
  return (
    <LanguageProvider>
      <AdmissionsContent />
    </LanguageProvider>
  )
}

function AdmissionsContent() {
  const [data, setData] = useState<FormState>(initialState)
  const [loading, setLoading] = useState(false)
  const { toast } = useToast()
  const { t } = useI18n()

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault()
    setLoading(true)
    try {
      localStorage.setItem("msss_application_draft", JSON.stringify(data))
      const res = await fetch("/api/apply", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      })
      if (!res.ok) throw new Error("Failed to submit")
      toast({ title: t('toast.ok.title'), description: t('toast.ok.desc') })
      setData(initialState)
      localStorage.removeItem("msss_application_draft")
    } catch (err) {
      toast({
        title: t('toast.err.title'),
        description: t('toast.err.desc'),
        variant: "destructive",
      })
    } finally {
      setLoading(false)
    }
  }

  function set<K extends keyof FormState>(key: K, value: FormState[K]) {
    setData((d) => ({ ...d, [key]: value }))
  }

  return (
    <div className="min-h-screen">
      <SiteHeader />
      <div className="relative overflow-hidden border-b bg-white/60 backdrop-blur">
        <div
          className="absolute inset-0 -z-10 bg-[radial-gradient(120px_80px_at_0%_0%,rgba(244,63,94,0.15),transparent),radial-gradient(120px_80px_at_100%_100%,rgba(234,88,12,0.15),transparent)]"
          aria-hidden="true"
        />
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-10">
          <h1 className="text-2xl md:text-4xl font-bold">{t('adm.title')}</h1>
          <p className="text-slate-600 mt-2">
            {t('adm.desc')}
          </p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 md:px-8 py-10">
        <form onSubmit={onSubmit} className="grid gap-6">
          <div className="grid gap-2">
            <Label htmlFor="fullName">{t('form.fullName')}</Label>
            <Input
              id="fullName"
              value={data.fullName}
              onChange={(e) => set("fullName", e.target.value)}
              placeholder=""
              required
            />
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="grid gap-2">
              <Label htmlFor="phone">{t('form.phone')}</Label>
              <Input
                id="phone"
                type="tel"
                value={data.phone}
                onChange={(e) => set("phone", e.target.value)}
                required
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="email">{t('form.email')}</Label>
              <Input
                id="email"
                type="email"
                value={data.email}
                onChange={(e) => set("email", e.target.value)}
              />
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-4">
            <div className="grid gap-2">
              <Label htmlFor="program">{t('form.program')}</Label>
              <Input
                id="program"
                value={data.program}
                onChange={(e) => set("program", e.target.value)}
                placeholder=""
                required
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="level">{t('form.level')}</Label>
              <select
                id="level"
                value={data.level}
                onChange={(e) => set("level", e.target.value)}
                className="h-10 rounded-md border px-3 bg-background"
              >
                <option value="UG">{t('level.UG')}</option>
                <option value="PG">{t('level.PG')}</option>
                <option value="Diploma">{t('level.Diploma')}</option>
                <option value="PhD">{t('level.PhD')}</option>
              </select>
            </div>
            <div className="grid gap-2">
              <Label htmlFor="studyLocation">{t('form.location')}</Label>
              <select
                id="studyLocation"
                value={data.studyLocation}
                onChange={(e) => set("studyLocation", e.target.value)}
                className="h-10 rounded-md border px-3 bg-background"
              >
                <option value="India">{t('loc.India')}</option>
                <option value="Abroad">{t('loc.Abroad')}</option>
                <option value="Either">{t('loc.Either')}</option>
              </select>
            </div>
          </div>

          <div className="grid gap-2">
            <Label htmlFor="message">{t('form.details')}</Label>
            <Textarea
              id="message"
              rows={5}
              value={data.message}
              onChange={(e) => set("message", e.target.value)}
            />
          </div>

          <div className="flex items-center gap-3">
            <Button type="submit" disabled={loading}>
              {loading ? t('form.submitting') : t('form.submit')}
            </Button>
            <a href="#contact" className="text-sm underline">{t('help.need')}</a>
          </div>
        </form>
      </div>
    </div>
  )
}
