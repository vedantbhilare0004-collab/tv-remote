import React from 'react';
import { CheckCircle2, AlertCircle, Tv, Smartphone, Wifi, Shield } from 'lucide-react';
import { COMPATIBLE_TV_SERIES, ANDROID_REQUIREMENTS, APP_CONFIG } from '../config/appConfig';

export const Compatibility: React.FC = () => {
  return (
    <section id="compatibility" className="py-20 md:py-28 border-t border-[#1f232b] bg-[#0c0d10]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="text-xs font-semibold tracking-wider uppercase text-[#c4b18c] mb-2">
            System Requirements
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-[#f7f6f2] [text-wrap:balance]">
            Hardware & firmware compatibility matrix.
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#a7a59d] leading-relaxed [text-wrap:balance]">
            LG Control communicates through standard, documented webOS WebSocket APIs. Review supported television lines and Android platform baselines below.
          </p>
        </div>

        {/* Two-Column Grid: Television Support & Android Device Support */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12">
          
          {/* TV Compatibility (Col 7) */}
          <div className="lg:col-span-7 space-y-4">
            <div className="flex items-center gap-2 pb-2 border-b border-[#232730]">
              <Tv className="w-5 h-5 text-[#d6c59b]" />
              <h3 className="text-lg font-semibold text-[#f7f6f2]">
                Compatible LG Smart Televisions
              </h3>
            </div>

            <p className="text-xs sm:text-sm text-[#8c8a82]">
              Compatible with all LG televisions manufactured between 2016 and 2026 running webOS version 3.0 or newer.
            </p>

            <div className="space-y-3 pt-2">
              {COMPATIBLE_TV_SERIES.map((tv) => (
                <div key={tv.category} className="p-4 rounded-xl bg-[#121419] border border-[#232730] space-y-1.5">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-semibold text-[#f7f6f2]">{tv.category}</span>
                    <span className="text-xs font-mono text-[#c4b18c]">{tv.years}</span>
                  </div>
                  <p className="text-xs text-[#a7a59d] leading-relaxed">
                    {tv.models}
                  </p>
                  <div className="pt-1 flex items-center gap-1.5 text-[11px] text-[#788c68]">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>{tv.supportLevel}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Android Platform Support (Col 5) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-2 pb-2 border-b border-[#232730]">
              <Smartphone className="w-5 h-5 text-[#788c68]" />
              <h3 className="text-lg font-semibold text-[#f7f6f2]">
                Android OS & Hardware
              </h3>
            </div>

            <p className="text-xs sm:text-sm text-[#8c8a82]">
              Stand-alone universal APK compiled with zero Google Play Services dependencies for maximum compatibility and privacy.
            </p>

            <div className="space-y-3 pt-2">
              {ANDROID_REQUIREMENTS.map((req) => (
                <div key={req.label} className="p-3.5 rounded-xl bg-[#121419] border border-[#232730] flex flex-col justify-between">
                  <span className="text-xs font-semibold text-[#c4b18c] uppercase tracking-wider">{req.label}</span>
                  <span className="text-xs text-[#e8e6df] pt-1">{req.value}</span>
                </div>
              ))}
            </div>

          </div>

        </div>

        {/* Network & Setup Pre-requisite Callout */}
        <div className="p-6 rounded-2xl bg-[#14171e] border border-[#232730] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-start gap-3">
            <Wifi className="w-5 h-5 text-[#d6c59b] shrink-0 mt-0.5" />
            <div className="space-y-0.5">
              <div className="text-sm font-semibold text-[#f7f6f2]">
                Local Network Requirements
              </div>
              <div className="text-xs text-[#8c8a82] leading-relaxed">
                Both your TV and Android device must be connected to the same Wi-Fi subnet. To enable power-on via app, go to TV Settings → Connection → Mobile TV On → Turn on via Wi-Fi.
              </div>
            </div>
          </div>

          <a 
            href="#install" 
            className="text-xs font-medium text-[#d6c59b] hover:text-[#e4d8b6] transition-colors whitespace-nowrap shrink-0 flex items-center gap-1.5"
          >
            <span>View Installation Guide</span>
            <span>&rarr;</span>
          </a>
        </div>

      </div>
    </section>
  );
};
