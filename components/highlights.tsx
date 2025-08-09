import { Card, CardContent } from "@/components/ui/card"
import { useI18n } from "@/components/i18n-provider"

const items = [
  { key: "s1", value: "28,000+", fallback: "28,000+" },
  { key: "s2", value: "150+", fallback: "150+" },
  { key: "s3", value: "A++", fallback: "A++" },
  { key: "s4", value: "15+", fallback: "15+" },
] as const

export default function Highlights() {
  const { t } = useI18n()
  return (
    <section className="px-4 md:px-8 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="text-center space-y-2 mb-6">
          <h2 className="text-xl md:text-2xl font-semibold">{t('high.title')}</h2>
          <p className="text-slate-600">{t('high.sub')}</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {items.map((it) => (
            <Card key={it.key} className="border bg-white/70 backdrop-blur">
              <CardContent className="p-5 text-center">
                <div className="text-2xl md:text-3xl font-bold text-rose-600">{it.value}</div>
                <div className="text-sm text-slate-600 mt-1">{t(`high.${it.key}.label`)}</div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
