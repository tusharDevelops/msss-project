import { Card, CardContent } from "@/components/ui/card"
import { useI18n } from "@/components/i18n-provider"
import { MapPin } from 'lucide-react'

const universities = [
  { name: "Rajiv Gandhi Proudyogiki Vishwavidyalaya", location: "Bhopal, MP", type: "State University", naac: "A++" },
  { name: "Barkatullah University", location: "Bhopal, MP", type: "State University", naac: "A+" },
  { name: "Devi Ahilya Vishwavidyalaya", location: "Indore, MP", type: "State University", naac: "A++" },
  { name: "Jiwaji University", location: "Gwalior, MP", type: "State University", naac: "A+" },
  { name: "Dr. APJ Abdul Kalam Technical University", location: "Lucknow, UP", type: "State University", naac: "A++" },
  { name: "Chhatrapati Shahu Ji Maharaj University", location: "Kanpur, UP", type: "State University", naac: "A+" },
  { name: "Kurukshetra University", location: "Kurukshetra, Haryana", type: "State University", naac: "A++" },
  { name: "Maharshi Dayanand University", location: "Rohtak, Haryana", type: "State University", naac: "A+" },
] as const

export default function UniversityPartners() {
  const { t } = useI18n()
  return (
    <section className="px-4 md:px-8 lg:px-12 py-10 md:py-16">
      <div className="max-w-7xl mx-auto">
        <div className="text-center space-y-2 mb-8">
          <h2 className="text-2xl md:text-4xl font-bold">{t('univ.title')}</h2>
          <p className="text-slate-600">{t('univ.sub')}</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {universities.map((uni) => (
            <Card key={uni.name} className="border bg-white/70 backdrop-blur">
              <CardContent className="p-4">
                <div className="space-y-2">
                  <div className="font-semibold text-sm leading-tight">{uni.name}</div>
                  <div className="flex items-center gap-1 text-xs text-slate-600">
                    <MapPin className="w-3 h-3" />
                    {uni.location}
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-slate-500">{uni.type}</span>
                    <span className="text-xs bg-amber-100 text-amber-800 px-2 py-0.5 rounded">
                      NAAC {uni.naac}
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
