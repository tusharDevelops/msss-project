"use client"
import SiteHeader from "@/components/site-header"
import Hero from "@/components/hero"
import Highlights from "@/components/highlights"
import Programs from "@/components/programs"
import WhyMSSS from "@/components/why-msss"
import AdmissionSteps from "@/components/admission-steps"
import UniversityPartners from "@/components/university-partners"
import Testimonials from "@/components/testimonials"
import Founder from "@/components/founder"
import AdmissionsCta from "@/components/admissions-cta"
import Faq from "@/components/faq"
import ContactBlock from "@/components/contact"
import { Button } from "@/components/ui/button"
import { ArrowRight, Instagram, Facebook } from 'lucide-react'
import { LanguageProvider, useI18n } from "@/components/i18n-provider"
import FloatingCta from "@/components/floating-cta"

export default function Page() {
  return (
    <LanguageProvider>
      <HomeContent />
    </LanguageProvider>
  )
}

function HomeContent() {
  const { t } = useI18n()
  return (
    <main className="min-h-screen flex flex-col">
      <SiteHeader />
      <Hero />
      <Highlights />
      <section className="px-4 md:px-8 lg:px-12 py-10 md:py-16">
        <Programs />
      </section>
      <WhyMSSS />
      <AdmissionSteps />
      <UniversityPartners />
      <Testimonials />
      <section className="px-4 md:px-8 lg:px-12 py-10 md:py-16 bg-gradient-to-b from-white to-slate-50">
        <Founder />
      </section>
      <section className="px-4 md:px-8 lg:px-12">
        <AdmissionsCta />
      </section>
      <Faq />
      <section className="px-4 md:px-8 lg:px-12 py-10 md:py-16">
        <ContactBlock />
      </section>

      <footer className="mt-auto border-t bg-white/70 backdrop-blur">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center gap-4 justify-between">
            <div className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} {t('brand')} — {t('footer.rights')}
            </div>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-3">
                <a 
                  href="https://www.instagram.com/pankaj.chaursiya.98?igsh=MWY2bXU0cmM5Z3Vnbg%3D%3D&utm_source=qr" 
                  target="_blank" 
                  rel="noreferrer"
                  className="text-slate-600 hover:text-rose-600 transition-colors"
                  aria-label="Follow us on Instagram"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a 
                  href="https://www.facebook.com/share/19WWXp3nSY/?mibextid=wwXIfr" 
                  target="_blank" 
                  rel="noreferrer"
                  className="text-slate-600 hover:text-rose-600 transition-colors"
                  aria-label="Follow us on Facebook"
                >
                  <Facebook className="w-5 h-5" />
                </a>
              </div>
              <Button variant="outline" asChild>
                <a href="/admissions" aria-label={t('cta.apply')}>
                  {t('cta.apply')} <ArrowRight className="w-4 h-4 ml-2" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </footer>

      <FloatingCta />
    </main>
  )
}
