import React from 'react';
import { Phone, MessageSquare, Calendar } from 'lucide-react';
import { CLINIC_INFO } from '../data/clinicData';

interface MobileStickyBarProps {
  onOpenBooking: () => void;
}

export const MobileStickyBar: React.FC<MobileStickyBarProps> = ({ onOpenBooking }) => {
  const whatsappUrl = `https://wa.me/${CLINIC_INFO.whatsappNumber}?text=${encodeURIComponent(
    `Hello Dr. Priti Prakhar, I would like to book an appointment at your Skin Care Clinic in Line Bazar, Purnia.`
  )}`;

  return (
    <div
      id="mobile-action-bar"
      className="fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-amber-200/80 px-4 py-3 md:hidden shadow-[0_-4px_20px_rgba(0,0,0,0.08)]"
    >
      <div className="flex items-center gap-2 max-w-md mx-auto">
        {/* Call Button */}
        <a
          href={`tel:${CLINIC_INFO.phoneRaw}`}
          id="mobile-call-cta"
          className="flex-1 flex items-center justify-center gap-1.5 py-3 px-2 bg-sky-700 active:bg-sky-800 text-white rounded-xl text-xs uppercase tracking-wider font-semibold shadow-xs"
        >
          <Phone className="w-3.5 h-3.5 text-sky-200" />
          <span>Call</span>
        </a>

        {/* WhatsApp Button */}
        <a
          href={whatsappUrl}
          id="mobile-whatsapp-cta"
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex items-center justify-center gap-1.5 py-3 px-2 bg-emerald-600 active:bg-emerald-700 text-white rounded-xl text-xs uppercase tracking-wider font-semibold shadow-xs"
        >
          <MessageSquare className="w-3.5 h-3.5 text-emerald-200" />
          <span>WhatsApp</span>
        </a>

        {/* Book Button */}
        <button
          onClick={onOpenBooking}
          id="mobile-book-modal-trigger"
          className="flex-1 flex items-center justify-center gap-1.5 py-3 px-2 bg-rose-600 active:bg-rose-700 text-white rounded-xl text-xs uppercase tracking-wider font-semibold shadow-xs"
        >
          <Calendar className="w-3.5 h-3.5 text-rose-200" />
          <span>Book</span>
        </button>
      </div>
    </div>
  );
};
