import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { useI18n } from "@/components/i18n-provider"

export default function Faq() {
  const { t } = useI18n()
  const qa = ['q1','q2','q3','q4','q5'] as const
  return (
    <section className="px-4 md:px-8 lg:px-12 py-10 md:py-16 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-6">{t('faq.title')}</h2>
        <Accordion type="single" collapsible className="w-full">
          {qa.map((k, idx) => (
            <AccordionItem key={k} value={k}>
              <AccordionTrigger className="text-left">{t(`faq.${k}.q`)}</AccordionTrigger>
              <AccordionContent className="text-slate-700">
                {t(`faq.${k}.a`)}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
