import { Phone, Mail, MapPin, Globe, MessageSquare, Instagram, Facebook } from 'lucide-react'
import { useI18n } from '@/components/i18n-provider'

export default function ContactBlock() {
  const { t } = useI18n()
  return (
    <div id="contact" className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-8 items-start">
      <div className="space-y-3">
        <h3 className="text-2xl font-bold">{t('contact.heading')}</h3>
        <p className="text-slate-600">
          {t('contact.body')}
        </p>
        <ul className="space-y-3 text-slate-800">
          <li className="flex items-start gap-3">
            <MapPin className="w-5 h-5 mt-0.5 text-rose-600" />
            <div><span className="font-medium">{t('contact.address')}:</span> NH 7, Near Shree Petrol Pump, Padra, Rewa (M.P.) - 486001</div>
          </li>
          <li className="flex items-start gap-3">
            <Phone className="w-5 h-5 mt-0.5 text-rose-600" />
            <div className="space-y-1">
              <span className="font-medium">{t('contact.phone')}:</span>{' '}
              <a className="underline" href="tel:+918319167473">+91 8319167473</a>,{' '}
              <a className="underline" href="tel:+918120259961">+91 8120259961</a>
            </div>
          </li>
          <li className="flex items-start gap-3">
            <MessageSquare className="w-5 h-5 mt-0.5 text-rose-600" />
            <div className="space-y-1">
              <span className="font-medium">{t('contact.whatsapp')}:</span>{' '}
              <a className="underline" href="https://wa.me/918319167473" target="_blank" rel="noreferrer">8319167473</a>,{' '}
              <a className="underline" href="https://wa.me/918120259961" target="_blank" rel="noreferrer">8120259961</a>
            </div>
          </li>
          <li className="flex items-start gap-3">
            <Mail className="w-5 h-5 mt-0.5 text-rose-600" />
            <div className="space-y-1">
              <span className="font-medium">{t('contact.email')}:</span>{' '}
              <a className="underline" href="mailto:msssgroup2015@gmail.com">msssgroup2015@gmail.com</a>,{' '}
              <a className="underline" href="mailto:en.pankajchaurasiya@gmail.com">en.pankajchaurasiya@gmail.com</a>
            </div>
          </li>
          <li className="flex items-start gap-3">
            <Globe className="w-5 h-5 mt-0.5 text-rose-600" />
            <div>
              <span className="font-medium">{t('contact.website')}:</span>{' '}
              <a href="http://www.msssrewa.com" target="_blank" rel="noreferrer" className="underline">
                www.msssrewa.com
              </a>
            </div>
          </li>
        </ul>

        <div className="pt-4 border-t">
          <div className="font-medium mb-2">{t('contact.social')}</div>
          <div className="flex items-center gap-3">
            <a 
              href="https://www.instagram.com/pankaj.chaursiya.98?igsh=MWY2bXU0cmM5Z3Vnbg%3D%3D&utm_source=qr" 
              target="_blank" 
              rel="noreferrer"
              className="flex items-center gap-2 text-sm text-slate-700 hover:text-rose-600 transition-colors"
            >
              <Instagram className="w-4 h-4" />
              {t('contact.instagram')}
            </a>
            <a 
              href="https://www.facebook.com/share/19WWXp3nSY/?mibextid=wwXIfr" 
              target="_blank" 
              rel="noreferrer"
              className="flex items-center gap-2 text-sm text-slate-700 hover:text-rose-600 transition-colors"
            >
              <Facebook className="w-4 h-4" />
              {t('contact.facebook')}
            </a>
          </div>
        </div>
      </div>

      <div className="relative w-full rounded-xl overflow-hidden border bg-white shadow-lg">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3654.234567890123!2d81.2345678!3d24.5345678!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjTCsDMyJzA0LjQiTiA4McKwMTQnMDQuNCJF!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin"
          width="100%"
          height="320"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="MSSS Location - NH 7, Near Shree Petrol Pump, Padra, Rewa (M.P.)"
          className="w-full h-80"
        />
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
          <div className="text-white text-sm font-medium">
            {t('contact.mapTitle')}
          </div>
          <div className="text-white/80 text-xs">
            NH 7, Near Shree Petrol Pump, Padra, Rewa (M.P.)
          </div>
        </div>
      </div>
    </div>
  )
}
