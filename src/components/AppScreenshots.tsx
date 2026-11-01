import React, { useState } from 'react';
import { 
  Tv, 
  Smartphone, 
  Layers, 
  MousePointer, 
  Wifi, 
  KeyRound, 
  Volume2, 
  VolumeX, 
  Power, 
  Home, 
  ArrowLeft, 
  Search, 
  Sliders,
  CheckCircle2,
  ExternalLink,
  ChevronRight
} from 'lucide-react';

interface ScreenDef {
  id: string;
  tabTitle: string;
  screenTitle: string;
  description: string;
  badge: string;
}

export const AppScreenshots: React.FC = () => {
  const [activeTab, setActiveTab] = useState<number>(0);

  const screens: ScreenDef[] = [
    {
      id: 'remote',
      tabTitle: 'Main Remote',
      screenTitle: 'Ergonomic Primary Remote View',
      description: 'Thumb-accessible directional pad, graduated volume rocker, instant mute, and essential navigation buttons styled in deep obsidian for AMOLED battery efficiency.',
      badge: 'Screen 01 of 04'
    },
    {
      id: 'apps',
      tabTitle: 'App Launcher',
      screenTitle: 'Installed TV Apps & HDMI Hub',
      description: 'Quickly launch any streaming service installed on your LG TV or switch HDMI input sources without navigating the full television dashboard.',
      badge: 'Screen 02 of 04'
    },
    {
      id: 'trackpad',
      tabTitle: 'Virtual Trackpad',
      screenTitle: 'Magic Pointer Simulation',
      description: 'Turns your phone screen into a smooth, precision touchpad. Swipe to glide the on-screen cursor across browser windows and complex TV menus.',
      badge: 'Screen 03 of 04'
    },
    {
      id: 'pairing',
      tabTitle: 'Pairing & Setup',
      screenTitle: 'Network Discovery & 6-Digit PIN',
      description: 'Zero-configuration mDNS local network discovery. Detects every LG TV on your Wi-Fi and establishes a trusted cryptographic handshake.',
      badge: 'Screen 04 of 04'
    }
  ];

  return (
    <section id="preview" className="py-20 md:py-28 border-t border-[#1f232b] bg-[#0c0d10]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-semibold tracking-wider uppercase text-[#c4b18c] mb-2">
            Visual Experience
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-[#f7f6f2] [text-wrap:balance]">
            Designed for tactile confidence and effortless clarity.
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#a7a59d] leading-relaxed [text-wrap:balance]">
            Explore the interface states of LG Control. High-contrast typography, generous touch targets, and a distraction-free dark layout.
          </p>
          
          {/* Transparent Placeholder Notice (as requested by user) */}
          <div className="mt-4 inline-flex items-center gap-2 text-xs text-[#a7a59d] bg-[#14161d] border border-[#232730] px-3.5 py-1.5 rounded-lg">
            <span className="w-1.5 h-1.5 rounded-full bg-[#c4b18c]" />
            <span>Interactive Device Mockups · UI representation based on Android client release v1.4.2</span>
          </div>
        </div>

        {/* Tab Selector Buttons */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 border-b border-[#1f232b]">
          {screens.map((screen, idx) => (
            <button
              key={screen.id}
              onClick={() => setActiveTab(idx)}
              className={`px-4 py-2 text-xs sm:text-sm font-medium rounded-lg transition-all whitespace-nowrap shrink-0 ${
                activeTab === idx
                  ? 'bg-[#d6c59b] text-[#0c0d10] font-semibold shadow-sm'
                  : 'bg-[#14171e] text-[#a7a59d] hover:text-[#f7f6f2] hover:bg-[#1a1e27] border border-[#232730]'
              }`}
            >
              {screen.tabTitle}
            </button>
          ))}
        </div>

        {/* Main Showcase Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Column: Device Mockup */}
          <div className="lg:col-span-5 flex justify-center">
            
            {/* Phone Bezel Frame */}
            <div className="relative w-72 sm:w-80 rounded-[40px] bg-[#14171d] border-4 border-[#2c323f] p-3 shadow-2xl shadow-black">
              
              {/* Screen Shell */}
              <div className="rounded-[30px] bg-[#090a0d] border border-[#1e232c] h-[580px] p-4 flex flex-col justify-between overflow-hidden relative select-none">
                
                {/* Android Status Bar */}
                <div className="flex items-center justify-between text-[10px] font-mono text-[#8c8a82] pb-3 border-b border-[#181c24]">
                  <span>09:41</span>
                  <div className="flex items-center gap-2">
                    <Wifi className="w-3 h-3 text-[#788c68]" />
                    <span>86%</span>
                  </div>
                </div>

                {/* DYNAMIC SCREEN CONTENT BASED ON ACTIVE TAB */}
                {activeTab === 0 && (
                  /* SCREEN 1: MAIN REMOTE */
                  <div className="flex-1 flex flex-col justify-between py-3 space-y-3">
                    
                    {/* Device Selector Header */}
                    <div className="flex items-center justify-between bg-[#12151b] p-2.5 rounded-xl border border-[#202530]">
                      <div>
                        <div className="text-[10px] uppercase tracking-wider text-[#c4b18c]">Connected Display</div>
                        <div className="text-xs font-semibold text-[#f7f6f2]">LG OLED65C3PSA</div>
                      </div>
                      <div className="w-8 h-8 rounded-lg bg-red-950/30 text-red-400 border border-red-900/40 flex items-center justify-center">
                        <Power className="w-3.5 h-3.5" />
                      </div>
                    </div>

                    {/* Volume and Channel Block */}
                    <div className="grid grid-cols-2 gap-2">
                      <div className="bg-[#12151b] p-3 rounded-xl border border-[#202530] flex flex-col items-center justify-between h-28">
                        <span className="text-[10px] uppercase font-semibold text-[#8c8a82]">VOL</span>
                        <div className="text-xs font-bold text-[#f7f6f2]">+</div>
                        <div className="text-xs font-mono text-[#d6c59b]">24</div>
                        <div className="text-xs font-bold text-[#f7f6f2]">-</div>
                      </div>
                      <div className="bg-[#12151b] p-3 rounded-xl border border-[#202530] flex flex-col items-center justify-between h-28">
                        <span className="text-[10px] uppercase font-semibold text-[#8c8a82]">CH</span>
                        <div className="text-xs font-bold text-[#f7f6f2]">▲</div>
                        <div className="text-xs font-mono text-[#a7a59d]">07</div>
                        <div className="text-xs font-bold text-[#f7f6f2]">▼</div>
                      </div>
                    </div>

                    {/* D-Pad Simulation */}
                    <div className="flex justify-center py-2">
                      <div className="w-40 h-40 rounded-full bg-[#13161d] border-2 border-[#242a36] relative flex items-center justify-center shadow-lg">
                        <span className="absolute top-2 text-[#c4b18c] text-xs font-bold">▲</span>
                        <span className="absolute bottom-2 text-[#c4b18c] text-xs font-bold">▼</span>
                        <span className="absolute left-2 text-[#c4b18c] text-xs font-bold">◀</span>
                        <span className="absolute right-2 text-[#c4b18c] text-xs font-bold">▶</span>
                        <div className="w-16 h-16 rounded-full bg-[#1e232e] border border-[#333b4d] flex items-center justify-center text-xs font-bold text-[#f7f6f2] shadow">
                          OK
                        </div>
                      </div>
                    </div>

                    {/* Bottom Nav Icons */}
                    <div className="grid grid-cols-4 gap-2 pt-1 border-t border-[#181c24]">
                      <div className="p-2 bg-[#12151b] rounded-lg border border-[#202530] text-center text-[#a7a59d] text-[10px]">Back</div>
                      <div className="p-2 bg-[#12151b] rounded-lg border border-[#202530] text-center text-[#d6c59b] text-[10px]">Home</div>
                      <div className="p-2 bg-[#12151b] rounded-lg border border-[#202530] text-center text-[#a7a59d] text-[10px]">Mute</div>
                      <div className="p-2 bg-[#12151b] rounded-lg border border-[#202530] text-center text-[#a7a59d] text-[10px]">Menu</div>
                    </div>

                  </div>
                )}

                {activeTab === 1 && (
                  /* SCREEN 2: APPS & SOURCES */
                  <div className="flex-1 flex flex-col justify-between py-3 space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="text-xs font-semibold text-[#f7f6f2]">App Launcher</div>
                      <span className="text-[10px] text-[#788c68] font-mono">9 Synced Apps</span>
                    </div>

                    {/* App Tiles Grid */}
                    <div className="grid grid-cols-3 gap-2.5">
                      {[
                        { name: 'YouTube', color: 'bg-red-950/40 border-red-800 text-red-300' },
                        { name: 'Netflix', color: 'bg-[#211616] border-[#442323] text-red-400' },
                        { name: 'Prime', color: 'bg-[#121f2d] border-[#1d3752] text-blue-300' },
                        { name: 'Disney+', color: 'bg-[#151c33] border-[#22315b] text-indigo-300' },
                        { name: 'Apple TV', color: 'bg-[#191919] border-[#333] text-gray-200' },
                        { name: 'Spotify', color: 'bg-[#122416] border-[#1e4226] text-emerald-300' },
                        { name: 'Browser', color: 'bg-[#141b22] border-[#253342] text-cyan-300' },
                        { name: 'Plex', color: 'bg-[#291e14] border-[#4b3520] text-amber-300' },
                        { name: 'Photos', color: 'bg-[#1c1826] border-[#3b3152] text-purple-300' }
                      ].map((app) => (
                        <div key={app.name} className={`p-2.5 rounded-xl border flex flex-col items-center justify-center text-center ${app.color}`}>
                          <div className="w-6 h-6 rounded bg-black/40 flex items-center justify-center mb-1 text-[11px] font-bold">
                            {app.name[0]}
                          </div>
                          <span className="text-[10px] font-medium">{app.name}</span>
                        </div>
                      ))}
                    </div>

                    {/* Input Selection List */}
                    <div className="bg-[#12151b] p-3 rounded-xl border border-[#202530] space-y-1.5">
                      <div className="text-[10px] uppercase font-semibold text-[#8c8a82]">HDMI Switcher</div>
                      <div className="flex items-center justify-between text-xs text-[#e8e6df]">
                        <span>HDMI 1: PlayStation 5</span>
                        <ChevronRight className="w-3.5 h-3.5 text-[#525660]" />
                      </div>
                      <div className="flex items-center justify-between text-xs text-[#d6c59b]">
                        <span>HDMI 2: eARC Soundbar (Active)</span>
                        <span className="w-1.5 h-1.5 rounded-full bg-[#788c68]" />
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === 2 && (
                  /* SCREEN 3: VIRTUAL TRACKPAD */
                  <div className="flex-1 flex flex-col justify-between py-3 space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="text-xs font-semibold text-[#f7f6f2]">Magic Pointer Mode</div>
                      <span className="text-[10px] text-[#c4b18c] font-mono">Sens: Medium</span>
                    </div>

                    {/* Touch Area */}
                    <div className="flex-1 rounded-2xl bg-[#12151b] border-2 border-dashed border-[#2b313d] flex flex-col items-center justify-center p-4 text-center">
                      <div className="w-10 h-10 rounded-full bg-[#1b1f28] flex items-center justify-center text-[#d6c59b] mb-2">
                        <MousePointer className="w-5 h-5" />
                      </div>
                      <div className="text-xs font-medium text-[#f7f6f2]">Touchpad Surface</div>
                      <div className="text-[11px] text-[#707580] mt-1 max-w-[180px]">
                        Glide thumb to steer the pointer on webOS. Tap anywhere to click.
                      </div>
                    </div>

                    {/* Scroll Wheel Bar & Actions */}
                    <div className="grid grid-cols-2 gap-2">
                      <div className="bg-[#12151b] p-2.5 rounded-xl border border-[#202530] text-center text-xs font-medium text-[#e8e6df]">
                        Left Click
                      </div>
                      <div className="bg-[#12151b] p-2.5 rounded-xl border border-[#202530] text-center text-xs font-medium text-[#e8e6df]">
                        Right Click
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === 3 && (
                  /* SCREEN 4: PAIRING & DISCOVERY */
                  <div className="flex-1 flex flex-col justify-between py-3 space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="text-xs font-semibold text-[#f7f6f2]">Network Discovery</div>
                      <span className="text-[10px] text-[#788c68] font-mono">Subnet Scanned</span>
                    </div>

                    {/* Detected TVs */}
                    <div className="space-y-2">
                      <div className="p-3 rounded-xl bg-[#151a22] border border-[#2d3443] flex items-center justify-between">
                        <div>
                          <div className="text-xs font-semibold text-[#f7f6f2]">LG OLED65C3PSA</div>
                          <div className="text-[10px] text-[#8c8a82] font-mono">192.168.1.140 · Living Room</div>
                        </div>
                        <CheckCircle2 className="w-4 h-4 text-[#788c68]" />
                      </div>

                      <div className="p-3 rounded-xl bg-[#12151b] border border-[#202530] flex items-center justify-between opacity-70">
                        <div>
                          <div className="text-xs font-semibold text-[#a7a59d]">LG 55NANO85UNA</div>
                          <div className="text-[10px] text-[#707580] font-mono">192.168.1.182 · Bedroom</div>
                        </div>
                        <span className="text-[10px] text-[#c4b18c] font-medium">Ready</span>
                      </div>
                    </div>

                    {/* PIN Entry Box */}
                    <div className="bg-[#12151b] p-3 rounded-xl border border-[#202530] space-y-2 text-center">
                      <div className="text-[10px] uppercase font-semibold text-[#c4b18c]">Enter 6-Digit TV PIN</div>
                      <div className="flex items-center justify-center gap-1.5 font-mono text-sm tracking-widest text-[#f7f6f2]">
                        <span className="w-6 h-8 rounded bg-[#1b1f28] flex items-center justify-center border border-[#2b313e]">7</span>
                        <span className="w-6 h-8 rounded bg-[#1b1f28] flex items-center justify-center border border-[#2b313e]">2</span>
                        <span className="w-6 h-8 rounded bg-[#1b1f28] flex items-center justify-center border border-[#2b313e]">9</span>
                        <span className="w-6 h-8 rounded bg-[#1b1f28] flex items-center justify-center border border-[#2b313e]">4</span>
                        <span className="w-6 h-8 rounded bg-[#1b1f28] flex items-center justify-center border border-[#2b313e]">1</span>
                        <span className="w-6 h-8 rounded bg-[#1b1f28] flex items-center justify-center border border-[#2b313e]">8</span>
                      </div>
                      <div className="text-[10px] text-[#707580]">
                        Displayed on your television screen
                      </div>
                    </div>
                  </div>
                )}

                {/* Bottom Android Gesture Pill */}
                <div className="w-24 h-1 bg-[#323846] rounded-full mx-auto" />

              </div>

            </div>

          </div>

          {/* Right Column: Screen Feature Explanations */}
          <div className="lg:col-span-7 space-y-6">
            
            <div className="space-y-2">
              <div className="text-xs font-mono text-[#c4b18c]">
                {screens[activeTab].badge}
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-[#f7f6f2]">
                {screens[activeTab].screenTitle}
              </h3>
              <p className="text-sm sm:text-base text-[#a7a59d] leading-relaxed">
                {screens[activeTab].description}
              </p>
            </div>

            {/* Feature Highlights for Current Screen */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              
              <div className="p-4 rounded-xl bg-[#121419] border border-[#232730]">
                <div className="text-xs font-semibold text-[#e8e6df] mb-1">
                  Sub-20ms Responsiveness
                </div>
                <div className="text-xs text-[#8c8a82]">
                  Direct TCP socket communication over local 2.4/5GHz Wi-Fi eliminates input lag.
                </div>
              </div>

              <div className="p-4 rounded-xl bg-[#121419] border border-[#232730]">
                <div className="text-xs font-semibold text-[#e8e6df] mb-1">
                  True AMOLED Dark Theme
                </div>
                <div className="text-xs text-[#8c8a82]">
                  Deep obsidian palette keeps screen luminance low during evening viewing sessions.
                </div>
              </div>

              <div className="p-4 rounded-xl bg-[#121419] border border-[#232730]">
                <div className="text-xs font-semibold text-[#e8e6df] mb-1">
                  Tactile Haptic Feedback
                </div>
                <div className="text-xs text-[#8c8a82]">
                  Subtle vibration kicks simulate physical remote button presses in your hand.
                </div>
              </div>

              <div className="p-4 rounded-xl bg-[#121419] border border-[#232730]">
                <div className="text-xs font-semibold text-[#e8e6df] mb-1">
                  Auto-Reconnection
                </div>
                <div className="text-xs text-[#8c8a82]">
                  Remembers your TV's static or DHCP IP and restores connection immediately upon launch.
                </div>
              </div>

            </div>

            {/* Quick Switch Prompt */}
            <div className="pt-2 flex items-center gap-3 text-xs text-[#8c8a82]">
              <span>Click the tabs above to explore all 4 views</span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
