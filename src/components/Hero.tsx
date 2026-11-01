import React from 'react';
import { Download, ShieldCheck, HelpCircle, ArrowDown } from 'lucide-react';
import { APP_CONFIG } from '../config/appConfig';
import { InteractiveRemoteMockup } from './InteractiveRemoteMockup';

export const Hero: React.FC = () => {
  return (
    <section id="overview" className="relative pt-12 pb-20 md:pt-20 md:pb-28 overflow-hidden">
      
      {/* Subtle atmospheric ambient glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#788c68]/8 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute top-1/3 left-1/3 w-[450px] h-[250px] bg-[#d6c59b]/5 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Kicker & Metadata */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          
          {/* Clean Unboxed Metadata (Zero-Pill Discipline) */}
          <div className="flex items-center justify-center gap-2 text-xs text-[#a7a59d] tracking-wide">
            <span className="text-[#c4b18c] font-medium">LG webOS Ecosystem</span>
            <span aria-hidden="true" className="text-[#454a54]">·</span>
            <span>Android APK Distribution</span>
            <span aria-hidden="true" className="text-[#454a54]">·</span>
            <span className="text-[#e8e6df] font-mono tabular-nums">{APP_CONFIG.APP_VERSION}</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-[#f7f6f2] [text-wrap:balance] leading-[1.12]">
            The Pure, Minimal Remote for LG webOS Smart TVs.
          </h1>

          {/* Subtitle / Description */}
          <p className="text-base sm:text-lg text-[#a7a59d] max-w-2xl mx-auto [text-wrap:balance] leading-relaxed pt-1">
            Fast, private local Wi-Fi control for LG OLED, QNED, and NanoCell televisions.
            Zero cloud relay, no third-party telemetry, and instant sub-20ms responsiveness engineered natively for Android.
          </p>

          {/* Primary Action Zone */}
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
            
            {/* Download for Android Button */}
            <a
              href={APP_CONFIG.APK_DOWNLOAD_URL}
              download={APP_CONFIG.APK_FILENAME}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-7 py-3.5 text-sm sm:text-base font-semibold text-[#0c0d10] bg-[#d6c59b] hover:bg-[#e4d8b6] rounded-xl transition-all shadow-lg shadow-[#d6c59b]/15 hover:shadow-[#d6c59b]/25 whitespace-nowrap shrink-0 group active:scale-[0.98]"
            >
              <Download className="w-4 h-4 transition-transform group-hover:-translate-y-0.5" />
              <span>Download for Android</span>
              <span className="text-xs px-2 py-0.5 rounded bg-[#0c0d10]/15 font-mono font-medium">
                {APP_CONFIG.APK_SIZE}
              </span>
            </a>

            {/* How to Install Button */}
            <a
              href="#install"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-medium text-[#e8e6df] bg-[#16181f] hover:bg-[#1e222a] border border-[#2b303c] rounded-xl transition-colors whitespace-nowrap shrink-0"
            >
              <HelpCircle className="w-4 h-4 text-[#a7a59d]" />
              <span>Installation Steps</span>
            </a>

          </div>

          {/* Unknown Sources Android Advisory */}
          <div className="pt-2 max-w-xl mx-auto">
            <div className="flex items-start justify-center gap-2 text-xs text-[#8c8a82] bg-[#121419]/80 border border-[#232730] px-4 py-2.5 rounded-lg text-left sm:text-center">
              <ShieldCheck className="w-4 h-4 text-[#788c68] shrink-0 mt-0.5" />
              <span>
                <strong className="text-[#e8e6df] font-medium">Direct APK:</strong> Android will prompt you to permit <em>"Install unknown apps"</em> from your browser. This standard security check ensures safe manual installation.
              </span>
            </div>
          </div>

          {/* Key Specs Row */}
          <div className="pt-4 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-[#8c8a82] font-mono tabular-nums">
            <span>Requires {APP_CONFIG.MIN_ANDROID_VERSION.split('(')[0]}</span>
            <span aria-hidden="true" className="text-[#343842]">/</span>
            <span>Target: {APP_CONFIG.TARGET_ANDROID}</span>
            <span aria-hidden="true" className="text-[#343842]">/</span>
            <span>Local WebSocket Protocol</span>
          </div>

        </div>

        {/* Hero Interactive Showcase */}
        <div className="mt-12 sm:mt-16">
          <InteractiveRemoteMockup />
        </div>

      </div>

    </section>
  );
};
