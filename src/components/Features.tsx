import React from 'react';
import { 
  Compass, 
  Volume2, 
  Search, 
  PlaySquare, 
  Layers, 
  Power,
  Tv,
  ArrowRight,
  Sparkles
} from 'lucide-react';

export const Features: React.FC = () => {
  return (
    <section id="features" className="py-20 md:py-28 border-t border-[#1f232b] bg-[#090a0d]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="text-xs font-semibold tracking-wider uppercase text-[#c4b18c] mb-2">
            Engineered Capabilities
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-[#f7f6f2] [text-wrap:balance]">
            Every essential TV control. None of the remote bloat.
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#a7a59d] leading-relaxed [text-wrap:balance]">
            Crafted to replace the bulky physical Magic Remote with precision gestures, rapid text input, and fluid streaming controls.
          </p>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          
          {/* Feature 1: TV Navigation (Col-span-1 or 2 on desktop) */}
          <div className="p-7 rounded-2xl bg-[#121419] border border-[#232730] flex flex-col justify-between group hover:border-[#333a48] transition-colors">
            <div>
              <div className="w-11 h-11 rounded-xl bg-[#181b22] border border-[#2b303c] flex items-center justify-center text-[#d6c59b] mb-5">
                <Compass className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-semibold text-[#f7f6f2] mb-2">
                01. Precision D-Pad Navigation
              </h3>
              <p className="text-xs sm:text-sm text-[#8c8a82] leading-relaxed">
                Fluid four-direction directional pad with central OK selector and quick Back / Home buttons. Includes optional haptic micro-vibrations for tactile confirmation on every click.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-[#1c2029] flex items-center justify-between text-xs text-[#a7a59d]">
              <span>Directional + Swipe gestures</span>
              <span className="font-mono text-[#788c68]">Haptic feedback</span>
            </div>
          </div>

          {/* Feature 2: Volume Control & Mute */}
          <div className="p-7 rounded-2xl bg-[#121419] border border-[#232730] flex flex-col justify-between group hover:border-[#333a48] transition-colors">
            <div>
              <div className="w-11 h-11 rounded-xl bg-[#181b22] border border-[#2b303c] flex items-center justify-center text-[#788c68] mb-5">
                <Volume2 className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-semibold text-[#f7f6f2] mb-2">
                02. Volume Rocker & Instant Mute
              </h3>
              <p className="text-xs sm:text-sm text-[#8c8a82] leading-relaxed">
                Step-by-step volume adjustment and one-touch mute toggle. Also supports controlling television volume directly using your phone's physical hardware volume rocker while the app is active.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-[#1c2029] flex items-center justify-between text-xs text-[#a7a59d]">
              <span>Hardware key integration</span>
              <span className="font-mono text-[#c4b18c]">One-tap mute</span>
            </div>
          </div>

          {/* Feature 3: YouTube Search & Keyboard Bridge */}
          <div className="p-7 rounded-2xl bg-[#121419] border border-[#232730] flex flex-col justify-between group hover:border-[#333a48] transition-colors">
            <div>
              <div className="w-11 h-11 rounded-xl bg-[#181b22] border border-[#2b303c] flex items-center justify-center text-[#d6c59b] mb-5">
                <Search className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-semibold text-[#f7f6f2] mb-2">
                03. YouTube Search & Fast Typing
              </h3>
              <p className="text-xs sm:text-sm text-[#8c8a82] leading-relaxed">
                Never peck through awkward on-screen alphabet grids again. Dispatch video search queries, URLs, and account credentials directly using your phone's full touchscreen keyboard or voice-to-text.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-[#1c2029] flex items-center justify-between text-xs text-[#a7a59d]">
              <span>Android Gboard integration</span>
              <span className="font-mono text-[#788c68]">Voice-to-text</span>
            </div>
          </div>

          {/* Feature 4: Media Playback & Seeking */}
          <div className="p-7 rounded-2xl bg-[#121419] border border-[#232730] flex flex-col justify-between group hover:border-[#333a48] transition-colors">
            <div>
              <div className="w-11 h-11 rounded-xl bg-[#181b22] border border-[#2b303c] flex items-center justify-center text-[#c4b18c] mb-5">
                <PlaySquare className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-semibold text-[#f7f6f2] mb-2">
                04. Media Playback & Scrubbing
              </h3>
              <p className="text-xs sm:text-sm text-[#8c8a82] leading-relaxed">
                Dedicated transport bar with instant Play, Pause, 10-second rewind, forward leap, and track skipping for video streamers, music apps, and media players on webOS.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-[#1c2029] flex items-center justify-between text-xs text-[#a7a59d]">
              <span>Full transport controls</span>
              <span className="font-mono text-[#788c68]">Zero buffer lag</span>
            </div>
          </div>

          {/* Feature 5: TV App Launching & Source Hub */}
          <div className="p-7 rounded-2xl bg-[#121419] border border-[#232730] flex flex-col justify-between group hover:border-[#333a48] transition-colors">
            <div>
              <div className="w-11 h-11 rounded-xl bg-[#181b22] border border-[#2b303c] flex items-center justify-center text-[#d6c59b] mb-5">
                <Layers className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-semibold text-[#f7f6f2] mb-2">
                05. Instant App Launcher
              </h3>
              <p className="text-xs sm:text-sm text-[#8c8a82] leading-relaxed">
                One-tap shortcuts to switch between Netflix, YouTube, Disney+, Prime Video, Apple TV, Spotify, and the webOS web browser without returning to the home screen.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-[#1c2029] flex items-center justify-between text-xs text-[#a7a59d]">
              <span>Direct webOS App IDs</span>
              <span className="font-mono text-[#c4b18c]">HDMI 1–4 switch</span>
            </div>
          </div>

          {/* Feature 6: Power Control & Wake-on-LAN */}
          <div className="p-7 rounded-2xl bg-[#121419] border border-[#232730] flex flex-col justify-between group hover:border-[#333a48] transition-colors">
            <div>
              <div className="w-11 h-11 rounded-xl bg-[#181b22] border border-[#2b303c] flex items-center justify-center text-red-400 mb-5">
                <Power className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-semibold text-[#f7f6f2] mb-2">
                06. Power Standby & Wake-on-LAN
              </h3>
              <p className="text-xs sm:text-sm text-[#8c8a82] leading-relaxed">
                Turn your television off cleanly into standby, and wake it back up over Wi-Fi using standardized WoL broadcast packets when you are ready to watch again.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-[#1c2029] flex items-center justify-between text-xs text-[#a7a59d]">
              <span>Cold boot over Wi-Fi</span>
              <span className="font-mono text-[#788c68]">Configurable WoL</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
