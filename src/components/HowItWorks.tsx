import React from 'react';
import { Wifi, KeyRound, Tv2, ArrowRight } from 'lucide-react';

export const HowItWorks: React.FC = () => {
  return (
    <section id="how-it-works" className="py-20 md:py-28 border-t border-[#1f232b] bg-[#090a0d]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="text-xs font-semibold tracking-wider uppercase text-[#c4b18c] mb-2">
            Setup Workflow
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-[#f7f6f2] [text-wrap:balance]">
            From download to full TV control in under 60 seconds.
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#a7a59d] leading-relaxed [text-wrap:balance]">
            No online user accounts to create, no verification emails, and no complex network routing. Complete peer-to-peer pairing over your home router.
          </p>
        </div>

        {/* 3 Step Sequence */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          
          {/* Step 1 */}
          <div className="p-7 rounded-2xl bg-[#121419] border border-[#232730] flex flex-col justify-between relative">
            <div>
              <div className="flex items-center justify-between mb-5">
                <div className="w-12 h-12 rounded-xl bg-[#181b22] border border-[#2b303c] flex items-center justify-center text-[#d6c59b]">
                  <Wifi className="w-6 h-6" />
                </div>
                <span className="text-2xl font-mono font-bold text-[#323846]">01</span>
              </div>
              
              <h3 className="text-lg font-semibold text-[#f7f6f2] mb-2">
                Connect to Same Wi-Fi
              </h3>
              <p className="text-xs sm:text-sm text-[#8c8a82] leading-relaxed">
                Ensure your Android phone or tablet and your LG webOS television are connected to the same local Wi-Fi router (2.4GHz or 5GHz band).
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-[#1c2029] text-xs text-[#a7a59d]">
              <span className="text-[#788c68] font-mono">Tip:</span> Ensure AP Client Isolation is disabled on your router.
            </div>
          </div>

          {/* Step 2 */}
          <div className="p-7 rounded-2xl bg-[#121419] border border-[#232730] flex flex-col justify-between relative">
            <div>
              <div className="flex items-center justify-between mb-5">
                <div className="w-12 h-12 rounded-xl bg-[#181b22] border border-[#2b303c] flex items-center justify-center text-[#788c68]">
                  <KeyRound className="w-6 h-6" />
                </div>
                <span className="text-2xl font-mono font-bold text-[#323846]">02</span>
              </div>

              <h3 className="text-lg font-semibold text-[#f7f6f2] mb-2">
                Pair Your Device
              </h3>
              <p className="text-xs sm:text-sm text-[#8c8a82] leading-relaxed">
                Open LG Control. Your TV will appear automatically on screen. Tap to connect and either accept the pairing dialog on your TV or enter the displayed 6-digit PIN.
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-[#1c2029] text-xs text-[#a7a59d]">
              <span className="text-[#c4b18c] font-mono">One-time:</span> Credentials are saved locally on your phone.
            </div>
          </div>

          {/* Step 3 */}
          <div className="p-7 rounded-2xl bg-[#121419] border border-[#232730] flex flex-col justify-between relative">
            <div>
              <div className="flex items-center justify-between mb-5">
                <div className="w-12 h-12 rounded-xl bg-[#181b22] border border-[#2b303c] flex items-center justify-center text-[#c4b18c]">
                  <Tv2 className="w-6 h-6" />
                </div>
                <span className="text-2xl font-mono font-bold text-[#323846]">03</span>
              </div>

              <h3 className="text-lg font-semibold text-[#f7f6f2] mb-2">
                Instant Fluid Control
              </h3>
              <p className="text-xs sm:text-sm text-[#8c8a82] leading-relaxed">
                You're ready. Navigate streaming menus with the D-pad, adjust volume with your phone's buttons, search YouTube with your keyboard, and launch apps in 1 tap.
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-[#1c2029] text-xs text-[#a7a59d]">
              <span className="text-[#788c68] font-mono">Speed:</span> Sub-20ms packet execution over local LAN.
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
