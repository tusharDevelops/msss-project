import { Button } from "@/components/ui/button"
import Link from "next/link"
import { useI18n } from "@/components/i18n-provider"

export default function AdmissionsCta() {
  const { t } = useI18n()
  return (
    <div className="relative overflow-hidden rounded-2xl border bg-white/60 backdrop-blur my-10">
      <div
        className="absolute inset-0 -z-10 bg-[conic-gradient(from_180deg_at_50%_50%,rgba(244,63,94,0.15),rgba(234,88,12,0.15),transparent_60%)]"
        aria-hidden="true"
      />
      <div className="grid lg:grid-cols-[2fr_1fr] gap-6 p-6 md:p-10">
        <div className="space-y-3">
          <h3 className="text-2xl md:text-3xl font-bold">{t('admCta.heading')}</h3>
          <p className="text-slate-700">
            {t('admCta.body')}
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <Button asChild size="lg">
              <Link href="/admissions">{t('cta.apply')}</Link>
            </Button>
            <Button variant="outline" asChild size="lg">
              <a href="#contact">{t('cta.talk')}</a>
            </Button>
          </div>
        </div>
        <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden border bg-white">
          {/* Decorative card (no images) */}
          <div className="w-full h-full bg-gradient-to-br from-rose-50 via-amber-50 to-white" />
        </div>
      </div>
    </div>
  )
}
