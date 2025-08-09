import { useI18n } from "@/components/i18n-provider"
import { Instagram, Facebook, Award, Users, BookOpen, Target } from 'lucide-react'
import { Card, CardContent } from "@/components/ui/card"

export default function Founder() {
  const { t } = useI18n()
  return (
    <div id="founder" className="max-w-7xl mx-auto space-y-12">
      <div className="grid lg:grid-cols-[1.1fr_1fr] gap-8 items-start">
        <div className="space-y-4">
          <div className="text-rose-600 font-semibold">{t('founder.section')}</div>
          <h2 className="text-2xl md:text-4xl font-bold">{t('founder.heading')}</h2>
          <div className="space-y-4 text-slate-700 leading-relaxed">
            <p>{t('founder.p1')}</p>
          </div>
          
          <div className="pt-4 border-t">
            <div className="text-sm font-medium mb-2">{t('founder.connect')}</div>
            <div className="flex items-center gap-4">
              <a 
                href="https://www.instagram.com/pankaj.chaursiya.98?igsh=MWY2bXU0cmM5Z3Vnbg%3D%3D&utm_source=qr" 
                target="_blank" 
                rel="noreferrer"
                className="flex items-center gap-2 text-sm text-slate-700 hover:text-rose-600 transition-colors"
              >
                <Instagram className="w-4 h-4" />
                @pankaj.chaursiya.98
              </a>
              <a 
                href="https://www.facebook.com/share/19WWXp3nSY/?mibextid=wwXIfr" 
                target="_blank" 
                rel="noreferrer"
                className="flex items-center gap-2 text-sm text-slate-700 hover:text-rose-600 transition-colors"
              >
                <Facebook className="w-4 h-4" />
                {t('founder.facebook')}
              </a>
            </div>
          </div>
        </div>

        <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden border bg-white/60 backdrop-blur">
          {/* Decorative panel (no photos) */}
          <div className="w-full h-full bg-[conic-gradient(at_70%_30%,#fecaca,#fde68a,white)]" />
        </div>
      </div>

      {/* USP Section for Academic and Career Counselling */}
      <div className="space-y-6">
        <div className="text-center space-y-2">
          <h3 className="text-2xl md:text-3xl font-bold">{t('usp.title')}</h3>
          <p className="text-slate-600">{t('usp.subtitle')}</p>
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          <Card className="border bg-white/70 backdrop-blur">
            <CardContent className="p-5 text-center">
              <Award className="w-8 h-8 text-rose-600 mx-auto mb-3" />
              <div className="font-semibold mb-2">{t('usp.expertise.title')}</div>
              <p className="text-sm text-slate-600">{t('usp.expertise.desc')}</p>
            </CardContent>
          </Card>
          
          <Card className="border bg-white/70 backdrop-blur">
            <CardContent className="p-5 text-center">
              <Users className="w-8 h-8 text-rose-600 mx-auto mb-3" />
              <div className="font-semibold mb-2">{t('usp.personalized.title')}</div>
              <p className="text-sm text-slate-600">{t('usp.personalized.desc')}</p>
            </CardContent>
          </Card>
          
          <Card className="border bg-white/70 backdrop-blur">
            <CardContent className="p-5 text-center">
              <BookOpen className="w-8 h-8 text-rose-600 mx-auto mb-3" />
              <div className="font-semibold mb-2">{t('usp.comprehensive.title')}</div>
              <p className="text-sm text-slate-600">{t('usp.comprehensive.desc')}</p>
            </CardContent>
          </Card>
          
          <Card className="border bg-white/70 backdrop-blur">
            <CardContent className="p-5 text-center">
              <Target className="w-8 h-8 text-rose-600 mx-auto mb-3" />
              <div className="font-semibold mb-2">{t('usp.success.title')}</div>
              <p className="text-sm text-slate-600">{t('usp.success.desc')}</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
