import { Card, CardContent } from "@/components/ui/card"
import { useI18n } from "@/components/i18n-provider"
import { Star } from 'lucide-react'

const testimonials = [
  { key: "t1", name: "Priya Sharma", course: "B.Tech CSE", year: "2023", rating: 5 },
  { key: "t2", name: "Rahul Verma", course: "MBA Finance", year: "2023", rating: 5 },
  { key: "t3", name: "Anjali Singh", course: "B.Sc Nursing", year: "2022", rating: 5 },
  { key: "t4", name: "Vikash Kumar", course: "BBA", year: "2023", rating: 4 },
] as const

export default function Testimonials() {
  const { t } = useI18n()
  return (
    <section className="px-4 md:px-8 lg:px-12 py-10 md:py-16 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center space-y-2 mb-8">
          <h2 className="text-2xl md:text-4xl font-bold">{t('test.title')}</h2>
          <p className="text-slate-600">{t('test.sub')}</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {testimonials.map((test) => (
            <Card key={test.key} className="border bg-white/70 backdrop-blur">
              <CardContent className="p-5">
                <div className="flex items-center gap-1 mb-2">
                  {Array.from({ length: test.rating }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-sm text-slate-700 mb-3">"{t(`test.${test.key}.quote`)}"</p>
                <div className="text-xs">
                  <div className="font-semibold">{test.name}</div>
                  <div className="text-slate-500">{test.course} • {test.year}</div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
