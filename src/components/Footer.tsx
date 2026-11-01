import React from 'react';
import { Tv, Download, ExternalLink, ShieldCheck } from 'lucide-react';
import { APP_CONFIG } from '../config/appConfig';

interface FooterProps {
  onOpenPrivacy: () => void;
  onOpenContact: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenPrivacy, onOpenContact }) => {
  return (
    <footer className="border-t border-[#1f232b] bg-[#08090b] text-[#8c8a82] text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        
        {/* Main Footer Row */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          
          {/* Brand Col */}
          <div className="md:col-span-2 space-y-3">
            <div className="flex items-center gap-2.5 text-[#f7f6f2] font-semibold text-base">
              <div className="w-7 h-7 rounded-lg bg-[#181b22] border border-[#2b303c] flex items-center justify-center text-[#d6c59b]">
                <Tv className="w-4 h-4" />
              </div>
              <span>{APP_CONFIG.APP_NAME}</span>
            </div>
            <p className="text-xs text-[#a7a59d] max-w-sm leading-relaxed">
              Precision local network remote control for LG webOS smart televisions. Free of trackers, ads, and intermediary cloud infrastructure.
            </p>
            <div className="pt-1 flex items-center gap-3 font-mono text-[11px] text-[#788c68]">
              <span>Binary: {APP_CONFIG.APP_VERSION}</span>
              <span aria-hidden="true" className="text-[#323742]">·</span>
              <span>Universal Android APK</span>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="space-y-2">
            <div className="text-xs font-semibold text-[#e8e6df] uppercase tracking-wider mb-2">
              Navigation
            </div>
            <ul className="space-y-1.5">
              <li>
                <a href="#overview" className="hover:text-[#f7f6f2] transition-colors">Overview</a>
              </li>
              <li>
                <a href="#features" className="hover:text-[#f7f6f2] transition-colors">Key Features</a>
              </li>
              <li>
                <a href="#preview" className="hover:text-[#f7f6f2] transition-colors">App Screenshots</a>
              </li>
              <li>
                <a href="#how-it-works" className="hover:text-[#f7f6f2] transition-colors">How It Works</a>
              </li>
              <li>
                <a href="#compatibility" className="hover:text-[#f7f6f2] transition-colors">Compatibility Matrix</a>
              </li>
              <li>
                <a href="#install" className="hover:text-[#f7f6f2] transition-colors">Installation Guide</a>
              </li>
            </ul>
          </div>

          {/* Legal & Downloads */}
          <div className="space-y-2">
            <div className="text-xs font-semibold text-[#e8e6df] uppercase tracking-wider mb-2">
              Distribution & Legal
            </div>
            <ul className="space-y-1.5">
              <li>
                <a 
                  href={APP_CONFIG.APK_DOWNLOAD_URL}
                  download={APP_CONFIG.APK_FILENAME}
                  className="text-[#d6c59b] hover:text-[#e4d8b6] font-medium flex items-center gap-1.5 transition-colors"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Download APK ({APP_CONFIG.APK_SIZE})</span>
                </a>
              </li>
              <li>
                <a 
                  href={APP_CONFIG.GITHUB_RELEASES_URL} 
                  target="_blank" 
                  rel="noreferrer noopener"
                  className="hover:text-[#f7f6f2] flex items-center gap-1 transition-colors"
                >
                  <span>GitHub Releases</span>
                  <ExternalLink className="w-3 h-3 text-[#525660]" />
                </a>
              </li>
              <li>
                <button 
                  onClick={onOpenPrivacy} 
                  className="hover:text-[#f7f6f2] text-left transition-colors"
                >
                  Privacy Policy & Data Scope
                </button>
              </li>
              <li>
                <button 
                  onClick={onOpenContact} 
                  className="hover:text-[#f7f6f2] text-left transition-colors"
                >
                  Developer Support Inquiry
                </button>
              </li>
            </ul>
          </div>

        </div>

        {/* Legal Disclaimer & Copyright */}
        <div className="pt-8 border-t border-[#1c2028] flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-[11px] text-[#707580] leading-relaxed">
          <p className="max-w-3xl">
            <strong>Trademark Disclaimer:</strong> LG, webOS, Magic Remote, OLED, QNED, and NanoCell are trademarks or registered trademarks of LG Electronics Inc. LG Control is an independent software project developed for consumer convenience and is not affiliated with, endorsed by, or sponsored by LG Electronics.
          </p>
          <div className="whitespace-nowrap shrink-0 font-mono text-[11px]">
            © {new Date().getFullYear()} LG Control Project
          </div>
        </div>

      </div>
    </footer>
  );
};
