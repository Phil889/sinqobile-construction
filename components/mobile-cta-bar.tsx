'use client'

import { Phone, MessageCircle } from 'lucide-react'

interface MobileCTABarProps {
  dict: any
}

export function MobileCTABar({ dict }: MobileCTABarProps) {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-primary p-3 md:hidden z-50 shadow-lg">
      <div className="flex gap-2">
        <a
          href="tel:+27828688396"
          className="flex-1 bg-white text-primary px-4 py-3 rounded-lg font-semibold text-center flex items-center justify-center gap-2"
        >
          <Phone size={20} /> {dict.mobileCTA.callNow}
        </a>
        <a
          href="https://wa.me/27719334063"
          className="flex-1 bg-green-500 text-white px-4 py-3 rounded-lg font-semibold text-center flex items-center justify-center gap-2"
        >
          <MessageCircle size={20} /> {dict.mobileCTA.whatsapp}
        </a>
      </div>
    </div>
  )
}