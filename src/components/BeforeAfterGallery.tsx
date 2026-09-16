import React, { useState, useRef } from 'react';
import { motion } from 'motion/react';
import { ArrowLeft, ArrowRight, Eye, Sparkles } from 'lucide-react';
import { CASE_STUDIES } from '../data/clinicData';

export const BeforeAfterGallery: React.FC = () => {
  const [activeCaseIndex, setActiveCaseIndex] = useState(0);
  const [splitSliderPos, setSplitSliderPos] = useState(50);
  const [viewMode, setViewMode] = useState<'split' | 'before' | 'after'>('split');
  const sliderRef = useRef<HTMLDivElement>(null);

  const activeCase = CASE_STUDIES[activeCaseIndex];

  const handleNext = () => {
    setActiveCaseIndex((prev) => (prev + 1) % CASE_STUDIES.length);
    setSplitSliderPos(50);
    setViewMode('split');
  };

  const handlePrev = () => {
    setActiveCaseIndex((prev) => (prev - 1 + CASE_STUDIES.length) % CASE_STUDIES.length);
    setSplitSliderPos(50);
    setViewMode('split');
  };

  const updateSliderFromEvent = (clientX: number) => {
    if (!sliderRef.current) return;
    const rect = sliderRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    const percent = Math.round((x / rect.width) * 100);
    setSplitSliderPos(percent);
    setViewMode('split');
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    updateSliderFromEvent(e.clientX);
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    if (e.touches[0]) {
      updateSliderFromEvent(e.touches[0].clientX);
    }
  };

  // Determine current clip percentage based on viewMode
  const effectiveSplitPercent =
    viewMode === 'before' ? 100 : viewMode === 'after' ? 0 : splitSliderPos;

  return (
    <section
      id="results"
      className="py-24 sm:py-36 bg-gradient-to-b from-[#F7F5F0] via-[#FAF4EE] to-[#F7F5F0] relative overflow-hidden scroll-mt-24 sm:scroll-mt-28"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-6 border-b border-[#1A1A1A]/10">
          <div>
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100/80 border border-emerald-300 text-emerald-900 text-[11px] uppercase tracking-[0.35em] font-semibold mb-3">
              ✦ CLINICAL EVIDENCE · RESULTS
            </span>
            <h2 className="font-editorial italic text-4xl sm:text-6xl text-[#1A1A1A] font-light">
              Dermatological Outcomes
            </h2>
          </div>

          <div className="flex items-center gap-4 mt-6 md:mt-0">
            <span className="text-xs uppercase tracking-widest text-[#1A1A1A]/70 font-semibold">
              Case {String(activeCaseIndex + 1).padStart(2, '0')} of {String(CASE_STUDIES.length).padStart(2, '0')}
            </span>
            <div className="flex gap-2">
              <button
                onClick={handlePrev}
                aria-label="Previous Case"
                className="w-10 h-10 rounded-lg bg-white border border-[#1A1A1A]/20 hover:border-amber-500 hover:text-amber-700 flex items-center justify-center text-[#1A1A1A] transition-all shadow-xs"
              >
                <ArrowLeft className="w-4 h-4" />
              </button>
              <button
                onClick={handleNext}
                aria-label="Next Case"
                className="w-10 h-10 rounded-lg bg-white border border-[#1A1A1A]/20 hover:border-amber-500 hover:text-amber-700 flex items-center justify-center text-[#1A1A1A] transition-all shadow-xs"
              >
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Featured Case Comparison Studio */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Column: Interactive Split Viewer */}
          <div className="lg:col-span-7 flex flex-col">
            {/* View Mode Mode Toggles for touch and fast inspection */}
            <div className="flex items-center justify-between gap-2 mb-3">
              <div className="flex items-center gap-1.5 bg-white p-1 rounded-xl border border-amber-200/80 text-xs shadow-xs">
                <button
                  type="button"
                  onClick={() => setViewMode('before')}
                  className={`px-3 py-1.5 rounded-lg uppercase tracking-wider text-[10px] font-semibold transition-all ${
                    viewMode === 'before'
                      ? 'bg-rose-700 text-white shadow-xs'
                      : 'text-rose-900/70 hover:text-rose-900 hover:bg-rose-50'
                  }`}
                >
                  Baseline (Before)
                </button>
                <button
                  type="button"
                  onClick={() => setViewMode('split')}
                  className={`px-3 py-1.5 rounded-lg uppercase tracking-wider text-[10px] font-semibold transition-all ${
                    viewMode === 'split'
                      ? 'bg-amber-600 text-white shadow-xs'
                      : 'text-amber-900/70 hover:text-amber-900 hover:bg-amber-50'
                  }`}
                >
                  Interactive Split
                </button>
                <button
                  type="button"
                  onClick={() => setViewMode('after')}
                  className={`px-3 py-1.5 rounded-lg uppercase tracking-wider text-[10px] font-semibold transition-all ${
                    viewMode === 'after'
                      ? 'bg-emerald-700 text-white shadow-xs'
                      : 'text-emerald-900/70 hover:text-emerald-900 hover:bg-emerald-50'
                  }`}
                >
                  Post-Treatment (After)
                </button>
              </div>

              <span className="hidden sm:inline px-3 py-1 rounded-full bg-amber-50 border border-amber-200 text-[11px] text-amber-900 font-medium">
                Protocol: {activeCase.duration}
              </span>
            </div>

            <div
              ref={sliderRef}
              onMouseMove={handleMouseMove}
              onTouchMove={handleTouchMove}
              onClick={(e) => updateSliderFromEvent(e.clientX)}
              className="relative aspect-[4/3] sm:aspect-[16/10] overflow-hidden rounded-2xl border border-[#1A1A1A]/15 bg-[#E8E4DA] shadow-xl cursor-ew-resize select-none touch-none ring-1 ring-amber-100"
            >
              {/* After Image (Full Color Post Treatment) */}
              <img
                src={activeCase.afterImage}
                alt={`${activeCase.title} - Post Treatment Outcome`}
                className="absolute inset-0 w-full h-full object-cover clinical-monochrome pointer-events-none"
                referrerPolicy="no-referrer"
                loading="eager"
              />

              {/* Before Image with CSS clipPath */}
              <div
                className="absolute inset-0 pointer-events-none transition-[clip-path] duration-75"
                style={{
                  clipPath: `inset(0 ${100 - effectiveSplitPercent}% 0 0)`,
                  WebkitClipPath: `inset(0 ${100 - effectiveSplitPercent}% 0 0)`,
                }}
              >
                <img
                  src={activeCase.beforeImage}
                  alt={`${activeCase.title} - Baseline Clinical State`}
                  className="absolute inset-0 w-full h-full object-cover clinical-monochrome pointer-events-none"
                  referrerPolicy="no-referrer"
                  loading="eager"
                />
              </div>

              {/* Dividing Slider Handle */}
              {viewMode === 'split' && (
                <div
                  className="absolute top-0 bottom-0 w-[3px] bg-amber-400 shadow-2xl pointer-events-none transition-all duration-75"
                  style={{ left: `${effectiveSplitPercent}%` }}
                >
                  <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-9 h-9 rounded-full bg-amber-600 text-white border-2 border-white flex items-center justify-center shadow-lg">
                    <span className="text-[10px] tracking-tighter font-mono font-bold">◄►</span>
                  </div>
                </div>
              )}

              {/* Persistent Badges */}
              <div className="absolute top-4 left-4 bg-rose-800/90 text-white text-[10px] uppercase tracking-[0.2em] font-semibold px-3 py-1.5 rounded-md pointer-events-none shadow-sm">
                Before: Baseline
              </div>
              <div className="absolute top-4 right-4 bg-emerald-800/90 text-white text-[10px] uppercase tracking-[0.2em] font-semibold px-3 py-1.5 rounded-md pointer-events-none shadow-sm">
                After: {activeCase.duration}
              </div>

              {/* Bottom Instruction */}
              <div className="absolute bottom-3 left-1/2 -translate-x-1/2 bg-black/75 backdrop-blur-xs text-white text-[10px] tracking-wider px-4 py-1.5 rounded-full pointer-events-none whitespace-nowrap font-medium">
                Drag or tap across photo to compare results
              </div>
            </div>
          </div>

          {/* Right Column: Editorial Case Study Notes */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className="px-2.5 py-0.5 rounded-md bg-amber-100 text-amber-800 text-xs uppercase tracking-[0.25em] font-bold border border-amber-300">
                  {activeCase.caseNumber}
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                <span className="text-xs tracking-wider text-[#1A1A1A]/70 font-medium">
                  {activeCase.duration}
                </span>
              </div>

              <h3 className="font-editorial text-3xl sm:text-4xl text-[#1A1A1A] font-light mb-4">
                {activeCase.title}
              </h3>

              <div className="space-y-4 text-sm text-[#1A1A1A]/85 font-normal leading-relaxed border-t border-[#1A1A1A]/10 pt-4">
                <div>
                  <p className="text-[10px] uppercase tracking-[0.25em] text-rose-700 font-semibold mb-1">
                    Presenting Condition
                  </p>
                  <p className="font-medium text-[#1A1A1A]">{activeCase.concern}</p>
                </div>

                <div>
                  <p className="text-[10px] uppercase tracking-[0.25em] text-emerald-700 font-semibold mb-1">
                    Prescribed Protocol
                  </p>
                  <p className="font-normal text-[#1A1A1A]/90">{activeCase.treatment}</p>
                </div>

                <div className="bg-gradient-to-r from-amber-50 via-rose-50/50 to-amber-50 p-4 rounded-xl border border-amber-200/80 shadow-xs">
                  <p className="text-[10px] uppercase tracking-[0.25em] text-amber-800 font-bold mb-1">
                    Clinical Observation
                  </p>
                  <p className="font-serif italic text-base text-[#1A1A1A]">
                    "{activeCase.notes}"
                  </p>
                </div>
              </div>
            </div>

            {/* Quick Case Switcher Dots & Titles */}
            <div className="mt-8 pt-6 border-t border-[#1A1A1A]/10 flex flex-col gap-2">
              <span className="text-[10px] uppercase tracking-[0.25em] text-[#1A1A1A]/60 font-semibold">
                Switch Case Files:
              </span>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {CASE_STUDIES.map((c, idx) => (
                  <button
                    key={c.id}
                    onClick={() => {
                      setActiveCaseIndex(idx);
                      setSplitSliderPos(50);
                      setViewMode('split');
                    }}
                    className={`py-2 px-3 text-left rounded-lg border text-xs transition-all ${
                      activeCaseIndex === idx
                        ? 'border-amber-400 bg-amber-100/70 text-amber-950 font-bold shadow-xs'
                        : 'border-[#1A1A1A]/10 bg-white/70 text-[#1A1A1A]/70 hover:border-amber-300 hover:bg-white'
                    }`}
                  >
                    <p className="text-[9px] uppercase tracking-wider text-amber-700 font-bold">0{idx + 1}</p>
                    <p className="truncate font-medium">{c.title.split(' ')[0]}</p>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
