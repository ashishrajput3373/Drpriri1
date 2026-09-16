import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Calendar, Clock, Phone, Send, CheckCircle2, MessageSquare } from 'lucide-react';
import { CLINIC_INFO, SERVICES_LIST } from '../data/clinicData';
import { BookingFormData } from '../types';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultService?: string;
}

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  defaultService = 'General Dermatology',
}) => {
  const [formData, setFormData] = useState<BookingFormData>({
    name: '',
    phone: '',
    service: defaultService,
    date: new Date().toISOString().split('T')[0],
    timeSlot: 'Morning (11:00 AM – 2:30 PM)',
    notes: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [generatedWhatsAppUrl, setGeneratedWhatsAppUrl] = useState('');

  // Lock background scrolling when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      // Sync defaultService if changed
      setFormData((prev) => ({ ...prev, service: defaultService }));
    } else {
      document.body.style.overflow = '';
      setSubmitted(false);
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen, defaultService]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Construct WhatsApp message with formatted appointment booking
    const message =
      `*CONSULTATION REQUEST — DR. PRITI PRAKHAR'S SKIN CARE CLINIC*\n\n` +
      `*Patient Name:* ${formData.name}\n` +
      `*Contact Phone:* ${formData.phone}\n` +
      `*Requested Service:* ${formData.service}\n` +
      `*Preferred Date:* ${formData.date}\n` +
      `*Preferred Slot:* ${formData.timeSlot}\n` +
      (formData.notes ? `*Clinical Notes:* ${formData.notes}\n\n` : `\n`) +
      `Location: Maa Hospital, Line Bazar, Purnia (Consultation Fee: ₹500)`;

    const whatsappUrl = `https://wa.me/${CLINIC_INFO.whatsappNumber}?text=${encodeURIComponent(message)}`;
    setGeneratedWhatsAppUrl(whatsappUrl);
    setSubmitted(true);

    try {
      window.open(whatsappUrl, '_blank');
    } catch {
      // Fallback handled gracefully in UI
    }
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[99999] flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-[#1A1A1A]/75 backdrop-blur-sm"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-xl bg-white border-2 border-amber-300 shadow-2xl rounded-2xl z-10 p-6 sm:p-10 my-8 max-h-[90vh] overflow-y-auto ring-1 ring-amber-200"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-5 right-5 w-9 h-9 flex items-center justify-center text-[#1A1A1A]/60 hover:text-rose-600 hover:bg-rose-50 rounded-full transition-colors"
              aria-label="Close Booking Dialog"
            >
              <X className="w-5 h-5" />
            </button>

            {submitted ? (
              <div className="text-center py-6 sm:py-8 space-y-4">
                <div className="w-16 h-16 rounded-full bg-emerald-100 border-2 border-emerald-400 flex items-center justify-center text-emerald-700 mx-auto shadow-sm">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="font-editorial text-3xl sm:text-4xl text-[#1A1A1A]">
                  Appointment Request Generated
                </h3>
                <p className="text-xs sm:text-sm text-[#1A1A1A]/80 max-w-md mx-auto leading-relaxed">
                  Your appointment details for <strong className="text-emerald-900">{formData.name}</strong> have been compiled for Dr. Priti Prakhar's clinic desk at Maa Hospital, Line Bazar, Purnia.
                </p>

                {/* Direct Action Buttons in case popup blocked */}
                <div className="pt-3 flex flex-col sm:flex-row gap-3 justify-center max-w-md mx-auto">
                  {generatedWhatsAppUrl && (
                    <a
                      href={generatedWhatsAppUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 py-3 px-4 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-xs uppercase tracking-wider font-semibold transition-all shadow-md"
                    >
                      <MessageSquare className="w-4 h-4" />
                      <span>Open WhatsApp Chat</span>
                    </a>
                  )}
                  <a
                    href={`tel:${CLINIC_INFO.phoneRaw}`}
                    className="flex-1 flex items-center justify-center gap-2 py-3 px-4 bg-sky-800 hover:bg-sky-900 text-white rounded-xl text-xs uppercase tracking-wider font-semibold transition-all shadow-md"
                  >
                    <Phone className="w-4 h-4 text-sky-200" />
                    <span>Call Reception</span>
                  </a>
                </div>

                <div className="pt-2">
                  <button
                    onClick={handleReset}
                    className="text-xs text-[#1A1A1A]/60 hover:text-amber-800 underline uppercase tracking-widest pt-2"
                  >
                    Return to Clinic Site
                  </button>
                </div>
              </div>
            ) : (
              <div>
                <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-[10px] uppercase tracking-[0.35em] font-bold border border-amber-300 mb-3">
                  ✦ CONSULTATION INQUIRY
                </span>
                <h3 className="font-editorial italic text-3xl sm:text-4xl text-[#1A1A1A] font-light mb-1">
                  Reserve with Dr. Priti Prakhar
                </h3>
                <p className="text-xs text-[#1A1A1A]/70 mb-6 font-medium">
                  Maa Hospital, Line Bazar, Purnia · Consultation Honorarium: ₹500
                </p>

                <form onSubmit={handleSubmit} className="space-y-4 text-xs">
                  {/* Name */}
                  <div>
                    <label className="block uppercase tracking-wider text-[11px] text-[#1A1A1A]/80 mb-1.5 font-bold">
                      Patient Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Aditi Sharma"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-[#FAF8F5] border border-amber-300/80 rounded-lg px-4 py-3 text-sm text-[#1A1A1A] focus:outline-none focus:border-amber-600 focus:ring-1 focus:ring-amber-500 transition-colors"
                    />
                  </div>

                  {/* Phone */}
                  <div>
                    <label className="block uppercase tracking-wider text-[11px] text-[#1A1A1A]/80 mb-1.5 font-bold">
                      Mobile / WhatsApp Number *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 98010 XXXXX"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full bg-[#FAF8F5] border border-amber-300/80 rounded-lg px-4 py-3 text-sm text-[#1A1A1A] focus:outline-none focus:border-amber-600 focus:ring-1 focus:ring-amber-500 transition-colors"
                    />
                  </div>

                  {/* Service Category */}
                  <div>
                    <label className="block uppercase tracking-wider text-[11px] text-[#1A1A1A]/80 mb-1.5 font-bold">
                      Clinical Focus Area
                    </label>
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full bg-[#FAF8F5] border border-amber-300/80 rounded-lg px-4 py-3 text-sm text-[#1A1A1A] focus:outline-none focus:border-amber-600 focus:ring-1 focus:ring-amber-500 transition-colors"
                    >
                      {SERVICES_LIST.map((s) => (
                        <option key={s.id} value={s.title}>
                          {s.number} — {s.title}
                        </option>
                      ))}
                      <option value="PRP (Platelet-Rich Plasma) Hair Therapy">PRP Hair Regrowth Therapy</option>
                      <option value="Trichoscopy Scalp & Hair Fall Consultation">Trichoscopy Scalp & Hair Fall Consultation</option>
                      <option value="Dandruff & Scalp Psoriasis Treatment">Dandruff & Scalp Psoriasis Treatment</option>
                      <option value="General Consultation">General Physician Consultation</option>
                      {formData.service && !SERVICES_LIST.some(s => s.title === formData.service) && ![
                        'PRP (Platelet-Rich Plasma) Hair Therapy',
                        'Trichoscopy Scalp & Hair Fall Consultation',
                        'Dandruff & Scalp Psoriasis Treatment',
                        'General Consultation'
                      ].includes(formData.service) && (
                        <option value={formData.service}>{formData.service}</option>
                      )}
                    </select>
                  </div>

                  {/* Preferred Date & Slot */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block uppercase tracking-wider text-[11px] text-[#1A1A1A]/80 mb-1.5 font-bold">
                        Preferred Date
                      </label>
                      <input
                        type="date"
                        required
                        value={formData.date}
                        onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                        className="w-full bg-[#FAF8F5] border border-amber-300/80 rounded-lg px-4 py-2.5 text-sm text-[#1A1A1A] focus:outline-none focus:border-amber-600 focus:ring-1 focus:ring-amber-500 transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block uppercase tracking-wider text-[11px] text-[#1A1A1A]/80 mb-1.5 font-bold">
                        Preferred Slot
                      </label>
                      <select
                        value={formData.timeSlot}
                        onChange={(e) => setFormData({ ...formData, timeSlot: e.target.value })}
                        className="w-full bg-[#FAF8F5] border border-amber-300/80 rounded-lg px-4 py-2.5 text-sm text-[#1A1A1A] focus:outline-none focus:border-amber-600 focus:ring-1 focus:ring-amber-500 transition-colors"
                      >
                        <option value="Morning (11:00 AM – 2:30 PM)">Morning (11:00 AM – 2:30 PM)</option>
                        <option value="Afternoon (3:15 PM – 5:00 PM)">Afternoon (3:15 PM – 5:00 PM)</option>
                      </select>
                    </div>
                  </div>

                  {/* Clinical Concern Note */}
                  <div>
                    <label className="block uppercase tracking-wider text-[11px] text-[#1A1A1A]/80 mb-1.5 font-bold">
                      Brief Note on Symptoms / History (Optional)
                    </label>
                    <textarea
                      rows={2}
                      placeholder="e.g. Persistent facial acne for 6 months..."
                      value={formData.notes}
                      onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                      className="w-full bg-[#FAF8F5] border border-amber-300/80 rounded-lg px-4 py-2.5 text-sm text-[#1A1A1A] focus:outline-none focus:border-amber-600 focus:ring-1 focus:ring-amber-500 transition-colors"
                    />
                  </div>

                  {/* Submission */}
                  <div className="pt-4">
                    <button
                      type="submit"
                      className="w-full py-3.5 bg-gradient-to-r from-amber-600 via-rose-600 to-amber-700 hover:from-amber-700 hover:to-rose-700 text-white rounded-xl text-xs uppercase tracking-[0.2em] font-bold transition-all flex items-center justify-center gap-2 shadow-lg cursor-pointer"
                    >
                      <Send className="w-3.5 h-3.5" />
                      <span>Confirm & Send to Clinic Reception</span>
                    </button>
                    <p className="text-[10px] text-center text-[#1A1A1A]/60 mt-2 font-medium">
                      Instant WhatsApp confirmation with Maa Hospital, Line Bazar, Purnia
                    </p>
                  </div>
                </form>
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
