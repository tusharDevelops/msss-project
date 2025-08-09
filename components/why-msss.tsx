import { ShieldCheck, GraduationCap, PhoneCall, Globe2, Landmark, BookOpenCheck } from 'lucide-react'
import { Card, CardContent } from "@/components/ui/card"
import { useI18n } from "@/components/i18n-provider"

const FEATURES = [
  { icon: ShieldCheck, titleKey: "a1.t", descKey: "a1.d" },
  { icon: GraduationCap, titleKey: "a2.t", descKey: "a2.d" },
  { icon: PhoneCall, titleKey: "a3.t", descKey: "a3.d" },
  { icon: Globe2, titleKey: "a4.t", descKey: "a4.d" },
  { icon: Landmark, titleKey: "a5.t", descKey: "a5.d" },
  { icon: BookOpenCheck, titleKey: "a6.t", descKey: "a6.d" },
] as const

export default function WhyMSSS() {
  const { t } = useI18n()
  return (
    <section className="px-4 md:px-8 lg:px-12 py-10 md:py-16 bg-gradient-to-b from-white to-slate-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center space-y-2 mb-8">
          <h2 className="text-2xl md:text-4xl font-bold">{t('why.title')}</h2>
          <p className="text-slate-600">{t('why.sub')}</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {FEATURES.map(({ icon: Icon, titleKey, descKey }) => (
            <Card key={titleKey} className="border bg-white/70 backdrop-blur">
              <CardContent className="p-5">
                <Icon className="w-6 h-6 text-rose-600 mb-3" />
                <div className="font-semibold">{t(`why.${titleKey}`)}</div>
                <p className="text-sm text-slate-600 mt-1">{t(`why.${descKey}`)}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
