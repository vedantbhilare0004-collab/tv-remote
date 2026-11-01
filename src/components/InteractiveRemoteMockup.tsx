import React, { useState } from 'react';
import { 
  Tv, 
  Volume2, 
  VolumeX, 
  Volume1, 
  Power, 
  Home, 
  ArrowLeft, 
  Sliders, 
  Play, 
  Pause, 
  RotateCcw, 
  Search, 
  Wifi, 
  Radio, 
  Check, 
  Info
} from 'lucide-react';

export const InteractiveRemoteMockup: React.FC = () => {
  // Remote & TV state simulation
  const [isTvOn, setIsTvOn] = useState(true);
  const [volume, setVolume] = useState(18);
  const [isMuted, setIsMuted] = useState(false);
  const [activeApp, setActiveApp] = useState<'home' | 'youtube' | 'netflix' | 'inputs'>('home');
  const [activeNavIndex, setActiveNavIndex] = useState(1);
  const [lastAction, setLastAction] = useState<string>('Connected to Living Room OLED (192.168.1.140)');
  const [feedbackPing, setFeedbackPing] = useState(false);

  const triggerHaptic = (actionName: string) => {
    if (typeof window !== 'undefined' && 'vibrate' in navigator) {
      try {
        navigator.vibrate(15);
      } catch {
        // Ignored
      }
    }
    setLastAction(actionName);
    setFeedbackPing(true);
    setTimeout(() => setFeedbackPing(false), 300);
  };

  const handlePower = () => {
    triggerHaptic(isTvOn ? 'Power Standby Signal Sent' : 'Wake-on-LAN Magic Packet Sent');
    setIsTvOn(!isTvOn);
  };

  const handleVolUp = () => {
    if (!isTvOn) return;
    setIsMuted(false);
    setVolume(prev => {
      const next = Math.min(prev + 1, 100);
      triggerHaptic(`Volume Up: ${next}`);
      return next;
    });
  };

  const handleVolDown = () => {
    if (!isTvOn) return;
    setIsMuted(false);
    setVolume(prev => {
      const next = Math.max(prev - 1, 0);
      triggerHaptic(`Volume Down: ${next}`);
      return next;
    });
  };

  const handleMute = () => {
    if (!isTvOn) return;
    setIsMuted(prev => {
      const next = !prev;
      triggerHaptic(next ? 'Audio Muted' : `Audio Unmuted (${volume})`);
      return next;
    });
  };

  const handleDirection = (dir: 'up' | 'down' | 'left' | 'right') => {
    if (!isTvOn) return;
    if (dir === 'left') {
      setActiveNavIndex(prev => (prev > 0 ? prev - 1 : 4));
      triggerHaptic('Navigate Left');
    } else if (dir === 'right') {
      setActiveNavIndex(prev => (prev < 4 ? prev + 1 : 0));
      triggerHaptic('Navigate Right');
    } else if (dir === 'up') {
      triggerHaptic('Cursor Up');
    } else {
      triggerHaptic('Cursor Down');
    }
  };

  const handleSelect = () => {
    if (!isTvOn) return;
    const apps: ('home' | 'youtube' | 'netflix' | 'inputs')[] = ['home', 'youtube', 'netflix', 'inputs', 'home'];
    setActiveApp(apps[activeNavIndex]);
    triggerHaptic(`Selected ${apps[activeNavIndex].toUpperCase()}`);
  };

  return (
    <div className="relative w-full max-w-4xl mx-auto rounded-2xl bg-[#0f1115] border border-[#232730] p-4 sm:p-6 lg:p-8 shadow-2xl">
      
      {/* Top Bar Indicator for the Interactive Sandbox */}
      <div className="flex flex-wrap items-center justify-between gap-3 pb-4 mb-6 border-b border-[#1f232b] text-xs">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#788c68] inline-block" />
          <span className="text-[#a7a59d]">Interactive Live Simulator</span>
          <span className="text-[#525660]" aria-hidden="true">·</span>
          <span className="text-[#d6c59b] font-mono tabular-nums">Sub-18ms Local WebSocket</span>
        </div>
        <div className="text-[#8c8a82] font-mono text-[11px] truncate max-w-xs">
          {lastAction}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        
        {/* Left Column: Simulated LG OLED TV Screen */}
        <div className="lg:col-span-7 space-y-4">
          <div className="flex items-center justify-between text-xs text-[#8c8a82]">
            <span className="font-medium text-[#c4b18c]">LG OLED TV (webOS 24)</span>
            <span className="font-mono text-[11px]">HDMI 2 (eARC) · 4K HDR</span>
          </div>

          {/* TV Bezel Container */}
          <div className="relative aspect-video rounded-xl bg-[#07080a] border-4 border-[#1c1f26] p-2 shadow-inner overflow-hidden flex flex-col justify-between">
            
            {/* Screen State */}
            {isTvOn ? (
              <div className="h-full w-full flex flex-col justify-between relative bg-gradient-to-b from-[#101217] via-[#0b0c0f] to-[#08090b] p-3 text-white">
                
                {/* TV Header Status */}
                <div className="flex items-center justify-between text-[11px] text-[#8c8a82] pb-2 border-b border-[#1b1f28]">
                  <div className="flex items-center gap-2">
                    <Tv className="w-3.5 h-3.5 text-[#d6c59b]" />
                    <span className="font-medium text-[#e8e6df]">Living Room OLED</span>
                  </div>
                  <div className="flex items-center gap-2 font-mono text-[10px]">
                    <Wifi className="w-3 h-3 text-[#788c68]" />
                    <span>5 GHz · 192.168.1.140</span>
                  </div>
                </div>

                {/* Central TV Screen View */}
                <div className="flex-1 flex flex-col items-center justify-center py-4 text-center">
                  {activeApp === 'home' && (
                    <div className="space-y-1.5 animate-fadeIn">
                      <div className="text-xs uppercase tracking-wider text-[#a7a59d]">LG Home Dashboard</div>
                      <div className="text-lg font-medium text-[#f7f6f2]">Ready for Content</div>
                      <div className="text-[11px] text-[#707580]">Use phone D-Pad or tap YouTube/Netflix below</div>
                    </div>
                  )}

                  {activeApp === 'youtube' && (
                    <div className="space-y-2 animate-fadeIn bg-[#181a20]/80 p-4 rounded-lg border border-[#262b35] max-w-sm">
                      <div className="flex items-center justify-center gap-2 text-red-500 font-semibold text-xs tracking-wide">
                        <Play className="w-4 h-4 fill-red-500" />
                        <span>YouTube for webOS</span>
                      </div>
                      <div className="text-xs text-[#e8e6df] font-medium">4K Nature Documentary Showcase</div>
                      <div className="text-[10px] text-[#8c8a82]">Direct keyboard search bridge enabled</div>
                    </div>
                  )}

                  {activeApp === 'netflix' && (
                    <div className="space-y-2 animate-fadeIn bg-[#181a20]/80 p-4 rounded-lg border border-[#262b35] max-w-sm">
                      <div className="text-red-600 font-black text-sm tracking-widest">NETFLIX</div>
                      <div className="text-xs text-[#e8e6df] font-medium">Continuing: Cinematic Audio Experience</div>
                      <div className="text-[10px] text-[#8c8a82]">Dolby Vision · Atmos Passthrough</div>
                    </div>
                  )}

                  {activeApp === 'inputs' && (
                    <div className="space-y-2 animate-fadeIn bg-[#181a20]/80 p-4 rounded-lg border border-[#262b35] max-w-sm">
                      <div className="text-xs font-semibold text-[#d6c59b]">Input Selection Hub</div>
                      <div className="text-xs text-[#e8e6df]">HDMI 1 · HDMI 2 (eARC Soundbar) · HDMI 3 (Console)</div>
                    </div>
                  )}

                  {/* On-Screen Volume Toast Overlay */}
                  <div className="mt-3 flex items-center gap-3 bg-[#13161c]/90 px-3 py-1.5 rounded-full border border-[#2b303c] shadow-lg">
                    {isMuted ? (
                      <VolumeX className="w-3.5 h-3.5 text-red-400" />
                    ) : volume > 30 ? (
                      <Volume2 className="w-3.5 h-3.5 text-[#d6c59b]" />
                    ) : (
                      <Volume1 className="w-3.5 h-3.5 text-[#d6c59b]" />
                    )}
                    <span className="text-xs font-mono tabular-nums text-[#f7f6f2]">
                      {isMuted ? 'MUTED' : `VOL ${volume}`}
                    </span>
                    <div className="w-20 h-1.5 bg-[#20242e] rounded-full overflow-hidden">
                      <div 
                        className={`h-full transition-all duration-150 ${isMuted ? 'bg-red-400/50' : 'bg-[#d6c59b]'}`} 
                        style={{ width: isMuted ? '0%' : `${volume}%` }} 
                      />
                    </div>
                  </div>
                </div>

                {/* Simulated webOS Bottom App Launcher Ribbon */}
                <div className="pt-2 border-t border-[#1b1f28] flex items-center justify-center gap-2 overflow-x-auto py-1">
                  {[
                    { label: 'Home', key: 'home' },
                    { label: 'YouTube', key: 'youtube' },
                    { label: 'Netflix', key: 'netflix' },
                    { label: 'Inputs', key: 'inputs' },
                    { label: 'Browser', key: 'browser' }
                  ].map((item, idx) => (
                    <button
                      key={item.label}
                      onClick={() => {
                        setActiveNavIndex(idx);
                        if (item.key !== 'browser') setActiveApp(item.key as any);
                        triggerHaptic(`Launched ${item.label}`);
                      }}
                      className={`px-2.5 py-1 text-[10px] font-medium rounded transition-all whitespace-nowrap ${
                        activeNavIndex === idx 
                          ? 'bg-[#d6c59b] text-[#0c0d10] font-semibold scale-105 shadow-sm' 
                          : 'bg-[#181b22] text-[#a7a59d] hover:bg-[#20242d] hover:text-[#e8e6df]'
                      }`}
                    >
                      {item.label}
                    </button>
                  ))}
                </div>

              </div>
            ) : (
              /* TV Off / Standby Screen */
              <div className="h-full w-full flex flex-col items-center justify-center bg-[#07080a] text-center p-6 space-y-2">
                <div className="w-2 h-2 rounded-full bg-red-600/80 animate-pulse" />
                <div className="text-xs text-[#525660] font-mono">STANDBY / READY FOR WAKE-ON-LAN</div>
                <div className="text-[11px] text-[#707580]">
                  Tap the Power button on the phone remote to send wake packet
                </div>
              </div>
            )}
          </div>

          <div className="flex items-center justify-between text-[11px] text-[#707580] pt-1">
            <span>Direct local network control</span>
            <span>No IR blaster required</span>
          </div>
        </div>

        {/* Right Column: Simulated Android Phone Device Running LG Control */}
        <div className="lg:col-span-5 flex justify-center">
          
          {/* Phone Frame */}
          <div className="relative w-64 rounded-[32px] bg-[#121419] border-2 border-[#2b303c] p-3 shadow-2xl shadow-black/80">
            
            {/* Phone Screen Area */}
            <div className="rounded-[24px] bg-[#0c0d10] border border-[#1e222a] p-3 flex flex-col justify-between select-none">
              
              {/* Phone Status Bar */}
              <div className="flex items-center justify-between text-[9px] font-mono text-[#8c8a82] pb-2 border-b border-[#1b1f28]">
                <span>10:24</span>
                <div className="flex items-center gap-1.5">
                  <Wifi className="w-2.5 h-2.5 text-[#788c68]" />
                  <span>LG Control</span>
                </div>
              </div>

              {/* TV Quick Selector in App */}
              <div className="py-2 flex items-center justify-between border-b border-[#1b1f28]">
                <div className="flex items-center gap-1.5">
                  <div className={`w-1.5 h-1.5 rounded-full ${isTvOn ? 'bg-[#788c68]' : 'bg-red-500'}`} />
                  <span className="text-[11px] font-medium text-[#f7f6f2] truncate">OLED Living Room</span>
                </div>
                <button
                  onClick={handlePower}
                  className={`p-1.5 rounded-md transition-colors ${
                    isTvOn 
                      ? 'bg-[#232732] text-red-400 hover:bg-red-950/40' 
                      : 'bg-[#788c68]/20 text-[#788c68] hover:bg-[#788c68]/30'
                  }`}
                  title="Toggle TV Power / Wake-on-LAN"
                >
                  <Power className="w-3.5 h-3.5" />
                </button>
              </div>

              {/* Volume & Mute Row */}
              <div className="py-2.5 grid grid-cols-3 gap-1.5 text-center">
                <button
                  onClick={handleVolDown}
                  className="py-1.5 bg-[#171a21] hover:bg-[#20242e] active:scale-95 text-[#e8e6df] rounded-lg border border-[#232732] text-xs font-semibold transition-transform"
                >
                  VOL -
                </button>
                <button
                  onClick={handleMute}
                  className={`py-1.5 rounded-lg border text-xs font-medium flex items-center justify-center transition-colors ${
                    isMuted 
                      ? 'bg-red-950/40 border-red-800 text-red-400' 
                      : 'bg-[#171a21] hover:bg-[#20242e] border-[#232732] text-[#d6c59b]'
                  }`}
                >
                  {isMuted ? <VolumeX className="w-3.5 h-3.5" /> : <Volume2 className="w-3.5 h-3.5" />}
                </button>
                <button
                  onClick={handleVolUp}
                  className="py-1.5 bg-[#171a21] hover:bg-[#20242e] active:scale-95 text-[#e8e6df] rounded-lg border border-[#232732] text-xs font-semibold transition-transform"
                >
                  VOL +
                </button>
              </div>

              {/* Directional Pad (D-Pad) */}
              <div className="py-2 flex items-center justify-center">
                <div className="relative w-36 h-36 rounded-full bg-[#15181f] border border-[#262b36] p-2 flex items-center justify-center shadow-inner">
                  
                  {/* Up */}
                  <button
                    onClick={() => handleDirection('up')}
                    className="absolute top-1.5 w-10 h-7 flex items-center justify-center text-[#c4b18c] hover:text-[#f7f6f2] hover:bg-[#202530] rounded-t-lg transition-colors text-xs font-bold"
                  >
                    ▲
                  </button>
                  
                  {/* Down */}
                  <button
                    onClick={() => handleDirection('down')}
                    className="absolute bottom-1.5 w-10 h-7 flex items-center justify-center text-[#c4b18c] hover:text-[#f7f6f2] hover:bg-[#202530] rounded-b-lg transition-colors text-xs font-bold"
                  >
                    ▼
                  </button>

                  {/* Left */}
                  <button
                    onClick={() => handleDirection('left')}
                    className="absolute left-1.5 w-7 h-10 flex items-center justify-center text-[#c4b18c] hover:text-[#f7f6f2] hover:bg-[#202530] rounded-l-lg transition-colors text-xs font-bold"
                  >
                    ◀
                  </button>

                  {/* Right */}
                  <button
                    onClick={() => handleDirection('right')}
                    className="absolute right-1.5 w-7 h-10 flex items-center justify-center text-[#c4b18c] hover:text-[#f7f6f2] hover:bg-[#202530] rounded-r-lg transition-colors text-xs font-bold"
                  >
                    ▶
                  </button>

                  {/* Center OK */}
                  <button
                    onClick={handleSelect}
                    className="w-14 h-14 rounded-full bg-[#20242f] hover:bg-[#d6c59b] hover:text-[#0c0d10] active:scale-95 text-[#f7f6f2] border border-[#303644] text-[11px] font-bold transition-all shadow-md flex items-center justify-center"
                  >
                    OK
                  </button>
                </div>
              </div>

              {/* Navigation Bar: Back, Home, Input */}
              <div className="py-2 grid grid-cols-3 gap-1.5">
                <button
                  onClick={() => {
                    setActiveApp('home');
                    triggerHaptic('Return / Back');
                  }}
                  className="py-1.5 bg-[#171a21] hover:bg-[#20242e] active:scale-95 text-[#a7a59d] hover:text-[#f7f6f2] rounded-lg border border-[#232732] flex items-center justify-center text-xs"
                  title="Back"
                >
                  <ArrowLeft className="w-3.5 h-3.5" />
                </button>
                <button
                  onClick={() => {
                    setActiveApp('home');
                    triggerHaptic('webOS Home');
                  }}
                  className="py-1.5 bg-[#171a21] hover:bg-[#20242e] active:scale-95 text-[#d6c59b] rounded-lg border border-[#232732] flex items-center justify-center text-xs"
                  title="Home Dashboard"
                >
                  <Home className="w-3.5 h-3.5" />
                </button>
                <button
                  onClick={() => {
                    setActiveApp('inputs');
                    triggerHaptic('Input Selection');
                  }}
                  className="py-1.5 bg-[#171a21] hover:bg-[#20242e] active:scale-95 text-[#a7a59d] hover:text-[#f7f6f2] rounded-lg border border-[#232732] flex items-center justify-center text-xs"
                  title="HDMI Inputs"
                >
                  <Sliders className="w-3.5 h-3.5" />
                </button>
              </div>

              {/* Quick App Shortcut Row */}
              <div className="pt-2 grid grid-cols-2 gap-1.5 border-t border-[#1b1f28]">
                <button
                  onClick={() => {
                    setActiveApp('youtube');
                    setActiveNavIndex(1);
                    triggerHaptic('Launch YouTube app');
                  }}
                  className="py-1 px-2 rounded bg-red-950/20 hover:bg-red-900/30 border border-red-900/40 text-[10px] font-semibold text-red-300 flex items-center justify-center gap-1 transition-colors"
                >
                  <Search className="w-2.5 h-2.5" />
                  <span>YouTube</span>
                </button>
                <button
                  onClick={() => {
                    setActiveApp('netflix');
                    setActiveNavIndex(2);
                    triggerHaptic('Launch Netflix app');
                  }}
                  className="py-1 px-2 rounded bg-[#1f1a1a] hover:bg-[#2d2222] border border-[#3d2727] text-[10px] font-semibold text-red-400 flex items-center justify-center transition-colors"
                >
                  Netflix
                </button>
              </div>

            </div>

            {/* Subtle Phone Hardware Accents */}
            <div className="absolute -left-[5px] top-20 w-[3px] h-8 bg-[#303644] rounded-l" />
            <div className="absolute -left-[5px] top-32 w-[3px] h-8 bg-[#303644] rounded-l" />
            <div className="absolute -right-[5px] top-24 w-[3px] h-10 bg-[#303644] rounded-r" />
          </div>

        </div>

      </div>

    </div>
  );
};
