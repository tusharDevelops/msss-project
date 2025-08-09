'use client'

import { Button } from "@/components/ui/button"
import { useI18n } from "@/components/i18n-provider"
import Link from "next/link"
import { Phone, MessageCircle, Instagram, Facebook } from 'lucide-react'

export default function FloatingCta() {
  const { t } = useI18n()
  return (
    <div className="fixed bottom-3 inset-x-3 z-50 md:hidden">
      <div className="bg-white/90 backdrop-blur border rounded-xl shadow-lg p-2 space-y-2">
        <div className="grid grid-cols-3 gap-2">
          <Button asChild size="sm">
            <Link href="/admissions">{t('cta.apply')}</Link>
          </Button>
          <Button asChild size="sm" variant="outline">
            <a href="tel:+918319167473"><Phone className="w-4 h-4 mr-1" />{t('cta.callShort')}</a>
          </Button>
          <Button asChild size="sm" variant="outline">
            <a href="https://wa.me/918319167473" target="_blank" rel="noreferrer">
              <MessageCircle className="w-4 h-4 mr-1" />{t('cta.waShort')}
            </a>
          </Button>
        </div>
        <div className="grid grid-cols-2 gap-2">
          <Button asChild size="sm" variant="outline" className="text-xs">
            <a href="https://www.instagram.com/pankaj.chaursiya.98?igsh=MWY2bXU0cmM5Z3Vnbg%3D%3D&utm_source=qr" target="_blank" rel="noreferrer">
              <Instagram className="w-3 h-3 mr-1" />Instagram
            </a>
          </Button>
          <Button asChild size="sm" variant="outline" className="text-xs">
            <a href="https://www.facebook.com/share/19WWXp3nSY/?mibextid=wwXIfr" target="_blank" rel="noreferrer">
              <Facebook className="w-3 h-3 mr-1" />Facebook
            </a>
          </Button>
        </div>
      </div>
    </div>
  )
}
