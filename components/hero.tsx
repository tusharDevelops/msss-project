import { Button } from "@/components/ui/button"
import Link from "next/link"
import { useI18n } from "@/components/i18n-provider"
import Image from "next/image"

export default function Hero() {
  const { t } = useI18n()
  return (
    <section className="relative overflow-hidden">
      <div
        className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_10%,rgba(244,63,94,0.25),transparent_35%),radial-gradient(circle_at_80%_0%,rgba(234,88,12,0.25),transparent_40%),linear-gradient(to_bottom,white,white)]"
        aria-hidden="true"
      />
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12 py-12 md:py-20 grid lg:grid-cols-2 gap-8 items-center">
        <div className="space-y-6">
          <span className="inline-flex text-xs font-semibold uppercase tracking-wider text-rose-600 bg-rose-50 border border-rose-200 px-2 py-1 rounded-full">
            {t('hero.tag')}
          </span>
          <div className="flex items-start gap-4">
            <div className="relative w-16 h-16 md:w-20 md:h-20 rounded-full overflow-hidden bg-white ring-2 ring-rose-200 flex-shrink-0">
              <Image
                src="/images/msss-logo.png"
                alt="MSSS Logo"
                width={80}
                height={80}
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h1 className="text-3xl md:text-5xl font-bold leading-tight">
                {t('hero.title')}
                <span className="block text-rose-700 text-2xl md:text-3xl mt-1">
                  {t('brand.hindi')}
                </span>
              </h1>
            </div>
          </div>
          <p className="text-slate-600 text-base md:text-lg">
            {t('hero.subtitle')}
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <Button asChild size="lg">
              <Link href="/admissions">{t('cta.apply')}</Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <a href="#programs">{t('cta.browse')}</a>
            </Button>
          </div>
          <div className="text-sm text-slate-600">
            {t('hero.foot')}
          </div>
        </div>

        <div className="relative w-full aspect-[16/10] md:aspect-[16/9] rounded-2xl overflow-hidden border bg-white/60 backdrop-blur shadow-lg">
          {/* Decorative gradient block instead of image to keep site lightweight */}
          <div className="w-full h-full bg-gradient-to-tr from-rose-200 via-amber-100 to-white flex items-center justify-center">
            <div className="relative w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden bg-white/80 ring-4 ring-white/50">
              <Image
                src="/images/msss-logo.png"
                alt="MSSS - Manav Shiksha Sewa Sansthan"
                width={160}
                height={160}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
