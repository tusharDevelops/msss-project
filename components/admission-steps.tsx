import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { useI18n } from "@/components/i18n-provider"
import Link from "next/link"

const steps = [1,2,3,4,5] as const

export default function AdmissionSteps() {
  const { t } = useI18n()
  return (
    <section className="px-4 md:px-8 lg:px-12 py-10 md:py-16">
      <div className="max-w-7xl mx-auto">
        <div className="text-center space-y-2 mb-8">
          <h2 className="text-2xl md:text-4xl font-bold">{t('steps.title')}</h2>
          <p className="text-slate-600">{t('steps.sub')}</p>
        </div>
        <div className="grid md:grid-cols-5 gap-4">
          {steps.map((i) => (
            <Card key={i} className="border bg-white/70 backdrop-blur relative">
              <CardContent className="p-5">
                <div className="w-8 h-8 rounded-full bg-rose-600 text-white flex items-center justify-center text-sm font-semibold">
                  {i}
                </div>
                <div className="font-semibold mt-3">{t(`steps.s${i}.t`)}</div>
                <p className="text-sm text-slate-600 mt-1">{t(`steps.s${i}.d`)}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mt-8">
          <Button asChild size="lg">
            <Link href="/admissions">{t('cta.apply')}</Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <a href="tel:+918319167473">{t('cta.call')}</a>
          </Button>
          <Button asChild variant="outline" size="lg">
            <a href="https://wa.me/918319167473" target="_blank" rel="noreferrer">{t('cta.whatsapp')}</a>
          </Button>
        </div>
      </div>
    </section>
  )
}
