import React from 'react';
import { Wifi, ShieldCheck, Zap, Smartphone } from 'lucide-react';

export const ProductIntro: React.FC = () => {
  return (
    <section className="py-16 md:py-24 border-t border-[#1f232b] bg-[#0c0d10]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Editorial Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="text-xs font-semibold tracking-wider uppercase text-[#c4b18c] mb-2">
            Architecture & Philosophy
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-[#f7f6f2] [text-wrap:balance]">
            Re-engineering the television remote as a fast, private software tool.
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#a7a59d] leading-relaxed [text-wrap:balance]">
            Most commercial TV remote apps flood your screen with interstitial ads, demand account logins, and bounce every volume press through distant cloud servers. LG Control was built with the opposite philosophy: direct local peer communication, zero telemetry, and instantaneous physical response.
          </p>
        </div>

        {/* 4 Architectural Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          
          <div className="p-6 rounded-xl bg-[#121419] border border-[#232730] flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-lg bg-[#181b22] border border-[#2b303c] flex items-center justify-center text-[#d6c59b] mb-4">
                <Wifi className="w-5 h-5" />
              </div>
              <h3 className="text-base font-semibold text-[#f7f6f2] mb-1.5">
                Local WebSocket Protocol
              </h3>
              <p className="text-xs sm:text-sm text-[#8c8a82] leading-relaxed">
                Connects directly to your LG webOS TV over your local Wi-Fi router. Every packet travels only within your living room with sub-20ms latency.
              </p>
            </div>
            <div className="mt-6 pt-3 border-t border-[#1d212a] text-[11px] font-mono text-[#788c68]">
              No intermediate servers
            </div>
          </div>

          <div className="p-6 rounded-xl bg-[#121419] border border-[#232730] flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-lg bg-[#181b22] border border-[#2b303c] flex items-center justify-center text-[#788c68] mb-4">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="text-base font-semibold text-[#f7f6f2] mb-1.5">
                Zero Tracking or Analytics
              </h3>
              <p className="text-xs sm:text-sm text-[#8c8a82] leading-relaxed">
                No telemetry SDKs, no advertising trackers, and no background profiling. The app requires no Google account, email, or sign-in.
              </p>
            </div>
            <div className="mt-6 pt-3 border-t border-[#1d212a] text-[11px] font-mono text-[#c4b18c]">
              100% telemetry-free
            </div>
          </div>

          <div className="p-6 rounded-xl bg-[#121419] border border-[#232730] flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-lg bg-[#181b22] border border-[#2b303c] flex items-center justify-center text-[#d6c59b] mb-4">
                <Zap className="w-5 h-5" />
              </div>
              <h3 className="text-base font-semibold text-[#f7f6f2] mb-1.5">
                Wake-on-LAN Capability
              </h3>
              <p className="text-xs sm:text-sm text-[#8c8a82] leading-relaxed">
                Wake compatible LG smart TVs straight out of deep standby using standardized Wi-Fi magic broadcast packets.
              </p>
            </div>
            <div className="mt-6 pt-3 border-t border-[#1d212a] text-[11px] font-mono text-[#788c68]">
              Clean cold-start boot
            </div>
          </div>

          <div className="p-6 rounded-xl bg-[#121419] border border-[#232730] flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-lg bg-[#181b22] border border-[#2b303c] flex items-center justify-center text-[#c4b18c] mb-4">
                <Smartphone className="w-5 h-5" />
              </div>
              <h3 className="text-base font-semibold text-[#f7f6f2] mb-1.5">
                Android Native Fluidity
              </h3>
              <p className="text-xs sm:text-sm text-[#8c8a82] leading-relaxed">
                Engineered for natural thumb reach, subtle physical vibration clicks, AMOLED black power conservation, and instant app switching.
              </p>
            </div>
            <div className="mt-6 pt-3 border-t border-[#1d212a] text-[11px] font-mono text-[#c4b18c]">
              Android 8.0 to Android 15
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
