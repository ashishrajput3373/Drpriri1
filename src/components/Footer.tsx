import React from 'react';
import { ArrowUp } from 'lucide-react';
import { CLINIC_INFO } from '../data/clinicData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="colophon" className="bg-[#F7F5F0] text-[#1A1A1A] pt-20 pb-36 md:pb-16 border-t border-[#1A1A1A]/10">
      <div className="max-w-7xl mx-auto px-6 sm:px-10">
        {/* Editorial Sign-off */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div>
            <span className="text-[10px] uppercase tracking-[0.35em] text-[#B08D57] font-semibold block mb-3">
              CLINICAL EPILOGUE
            </span>
            <p className="font-editorial italic text-4xl sm:text-6xl text-[#1A1A1A] font-light">
              "We love your skin."
            </p>
          </div>

          <button
            onClick={scrollToTop}
            className="self-start md:self-auto flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-[#1A1A1A]/60 hover:text-[#B08D57] transition-colors group"
          >
            <span>Return to Summit</span>
            <div className="w-8 h-8 rounded-full border border-[#1A1A1A]/20 group-hover:border-[#B08D57] flex items-center justify-center transition-colors">
              <ArrowUp className="w-3.5 h-3.5" />
            </div>
          </button>
        </div>

        {/* Gold hairline divider */}
        <div className="w-full h-[1px] bg-[#B08D57]/40 mb-12" />

        {/* Footer Navigation & Legal Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 text-xs text-[#1A1A1A]/70 leading-relaxed font-light">
          {/* Col 1 */}
          <div>
            <p className="font-editorial italic text-2xl text-[#1A1A1A] font-medium mb-3">
              Dr. Priti Prakhar
            </p>
            <p className="font-medium text-amber-900">MBBS</p>
            <p>Dermatologist · Cosmetologist · Physician</p>
            <p className="mt-2 text-[#1A1A1A]/60">Over 6 years of clinical dedication to patient skin & hair health in Purnia.</p>
          </div>

          {/* Col 2 */}
          <div>
            <p className="text-[11px] uppercase tracking-widest text-amber-800 font-bold mb-3">
              Direct Contact
            </p>
            <p>Line Bazar, Maa Hospital</p>
            <p>Purnia, Bihar 854301</p>
            <a href={`tel:${CLINIC_INFO.phoneRaw}`} className="block mt-2 font-semibold text-[#1A1A1A] hover:text-amber-700">
              📞 {CLINIC_INFO.phone}
            </a>
          </div>

          {/* Col 3 */}
          <div>
            <p className="text-[11px] uppercase tracking-widest text-amber-800 font-bold mb-3">
              Care Hours
            </p>
            <p>Monday – Saturday</p>
            <p className="font-medium text-[#1A1A1A]">11:00 AM – 2:30 PM</p>
            <p className="font-medium text-[#1A1A1A]">3:15 PM – 5:00 PM</p>
            <p className="mt-1 text-[10px] text-amber-800 font-medium">Sunday by appointment</p>
          </div>

          {/* Col 4: Hindi Microcopy & Statement */}
          <div>
            <p className="text-[11px] uppercase tracking-widest text-amber-800 font-bold mb-3">
              पूर्णिया, बिहार
            </p>
            <p className="font-hindi text-sm italic text-amber-950 font-medium mb-2">
              {CLINIC_INFO.hindiTagline}
            </p>
            <p className="text-[11px] text-[#1A1A1A]/60">
              A private practice adhering strictly to ethical medical and dermatological standards.
            </p>
          </div>
        </div>

        {/* Bottom copyright line */}
        <div className="mt-14 pt-8 border-t border-[#1A1A1A]/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-[#1A1A1A]/60 uppercase tracking-widest font-medium">
          <p>© {new Date().getFullYear()} Dr. Priti Prakhar's Skin Care Clinic. All rights reserved.</p>
          <p>Medical Aesthetics & Clinical Dermatology · Line Bazar, Purnia</p>
        </div>
      </div>
    </footer>
  );
};
