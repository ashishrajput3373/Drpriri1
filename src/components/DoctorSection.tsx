import React from 'react';
import { motion } from 'motion/react';
import { Award, GraduationCap, Clock, Stethoscope } from 'lucide-react';
import { CLINIC_INFO } from '../data/clinicData';

export const DoctorSection: React.FC = () => {
  const credentialItems = [
    {
      icon: Stethoscope,
      label: 'Designation',
      primary: 'Dermatologist · Cosmetologist · General Physician',
      secondary: 'Specialist care for clinical skin disorders and aesthetic rejuvenation.',
      color: 'sky',
      badgeBg: 'bg-sky-50',
      badgeBorder: 'border-sky-200',
      iconColor: 'text-sky-600',
      tagText: 'text-sky-800',
    },
    {
      icon: GraduationCap,
      label: 'Education',
      primary: 'MBBS',
      secondary: 'Comprehensive medical foundation with dedicated dermatological focus.',
      color: 'indigo',
      badgeBg: 'bg-indigo-50',
      badgeBorder: 'border-indigo-200',
      iconColor: 'text-indigo-600',
      tagText: 'text-indigo-800',
    },
    {
      icon: Clock,
      label: 'Experience',
      primary: '6+ Years of Clinical Practice',
      secondary: 'Trusted across Purnia, Katihar, Saharsa, and the Kosi region.',
      color: 'amber',
      badgeBg: 'bg-amber-50',
      badgeBorder: 'border-amber-200',
      iconColor: 'text-amber-600',
      tagText: 'text-amber-800',
    },
    {
      icon: Award,
      label: 'Clinic Philosophy',
      primary: 'Ethical, Patient-Centered Medical Standards',
      secondary: 'Zero aggressive upselling. Prescriptions and procedures guided solely by histology.',
      color: 'emerald',
      badgeBg: 'bg-emerald-50',
      badgeBorder: 'border-emerald-200',
      iconColor: 'text-emerald-600',
      tagText: 'text-emerald-800',
    },
  ];

  return (
    <section
      id="specialist"
      className="py-24 sm:py-32 bg-gradient-to-b from-[#F7F5F0] via-[#FAF4ED] to-[#F7F5F0] relative overflow-hidden scroll-mt-24 sm:scroll-mt-28"
    >
      {/* Colorful ambient orbs */}
      <div className="absolute top-1/3 -right-20 w-80 h-80 rounded-full bg-rose-200/30 blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 -left-20 w-80 h-80 rounded-full bg-amber-200/30 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-10">
        {/* Section Header hairline */}
        <motion.div
          initial={{ scaleX: 0, originX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="w-full h-[1px] bg-gradient-to-r from-transparent via-[#B08D57] to-transparent mb-16"
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left: Second Portrait with warm frame */}
          <div className="lg:col-span-5 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
              className="relative p-3 sm:p-5 bg-gradient-to-br from-white via-[#FFF9F5] to-[#FAF2EB] border border-[#B08D57]/30 shadow-2xl rounded-2xl ring-1 ring-amber-100"
            >
              {/* Archival mat border effect */}
              <div className="relative aspect-[3/4] overflow-hidden bg-[#EAE6DD] rounded-xl">
                <img
                  src="/src/assets/images/clinic_consultation_1789258782968.jpg"
                  alt="Dr. Priti Prakhar consulting patient at Maa Hospital, Line Bazar, Purnia"
                  className="w-full h-full object-cover scale-[1.01] hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />
              </div>

              {/* Gallery Plaque Caption with emerald status badge */}
              <div className="mt-4 pt-3 border-t border-[#1A1A1A]/10 flex items-center justify-between text-[11px] text-[#1A1A1A]/70">
                <div className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="uppercase tracking-[0.2em] font-medium text-emerald-800">In-Clinic Consultations</span>
                </div>
                <span className="font-serif italic text-[#B08D57]">Maa Hospital, Purnia</span>
              </div>
            </motion.div>
          </div>

          {/* Right: Museum Gallery Wall Label Layout */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* Gallery wall header */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="mb-8"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100/70 border border-amber-300 text-amber-900 text-[10px] uppercase tracking-[0.25em] font-semibold mb-3">
                ✦ Practicing Dermatologist & Cosmetologist
              </div>
              <h2 className="font-editorial italic text-4xl sm:text-5xl lg:text-6xl text-[#1A1A1A] font-light tracking-tight">
                Dr. Priti Prakhar
              </h2>
              <p className="font-hindi text-sm text-amber-900/80 mt-1 italic font-medium">
                त्वचा रोग एवं सौंदर्य विशेषज्ञ · पूर्णिया
              </p>
            </motion.div>

            {/* Museum Wall Plaque Box with colorful items */}
            <div className="border border-[#B08D57]/30 bg-white/80 backdrop-blur-xs p-6 sm:p-8 relative rounded-2xl shadow-sm">
              {/* Plaque Corner Rivets */}
              <span className="absolute top-3 left-3 w-1.5 h-1.5 rounded-full bg-[#B08D57]" />
              <span className="absolute top-3 right-3 w-1.5 h-1.5 rounded-full bg-[#B08D57]" />
              <span className="absolute bottom-3 left-3 w-1.5 h-1.5 rounded-full bg-[#B08D57]" />
              <span className="absolute bottom-3 right-3 w-1.5 h-1.5 rounded-full bg-[#B08D57]" />

              <div className="space-y-6">
                {credentialItems.map((item, idx) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.9,
                      delay: 0.15 + idx * 0.15,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                    className="border-b border-[#1A1A1A]/10 pb-5 last:border-none last:pb-0"
                  >
                    <div className="flex items-center gap-2 mb-1.5">
                      <span className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-md text-[10px] uppercase tracking-[0.2em] font-semibold border ${item.badgeBg} ${item.badgeBorder} ${item.tagText}`}>
                        <item.icon className={`w-3 h-3 ${item.iconColor}`} />
                        {item.label}
                      </span>
                    </div>
                    <p className="font-editorial text-xl sm:text-2xl text-[#1A1A1A] font-medium leading-tight">
                      {item.primary}
                    </p>
                    <p className="text-xs sm:text-sm text-[#1A1A1A]/75 mt-1 font-light leading-relaxed">
                      {item.secondary}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Doctor statement quote in a warm amber card */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.6 }}
              className="mt-8 p-5 rounded-xl bg-gradient-to-r from-amber-50/90 via-rose-50/60 to-amber-50/90 border border-amber-200/70 shadow-xs"
            >
              <p className="font-editorial italic text-lg sm:text-xl text-amber-950/90 leading-relaxed">
                "True dermatological elegance does not mask the skin—it heals its structure so that natural vitality reveals itself."
              </p>
              <p className="text-xs uppercase tracking-wider text-amber-700 font-semibold mt-2">
                — Dr. Priti Prakhar, MBBS
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
