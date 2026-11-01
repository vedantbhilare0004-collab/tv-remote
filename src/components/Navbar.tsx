import React, { useState } from 'react';
import { Tv, Download, Menu, X } from 'lucide-react';
import { APP_CONFIG } from '../config/appConfig';

interface NavbarProps {
  onOpenPrivacy: () => void;
  onOpenContact: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenPrivacy, onOpenContact }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full border-b border-[#232730] bg-[#0c0d10]/90 backdrop-blur-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-8 px-4 sm:px-6 lg:px-8 h-16">
        
        {/* Zone 1: Single Brand Wordmark */}
        <a 
          href="#" 
          className="flex items-center gap-2.5 text-base sm:text-lg font-semibold tracking-tight text-[#f7f6f2] hover:text-[#d6c59b] transition-colors whitespace-nowrap shrink-0 group"
        >
          <div className="w-8 h-8 rounded-lg bg-[#181b22] border border-[#2b303c] flex items-center justify-center text-[#d6c59b] group-hover:border-[#788c68] transition-colors">
            <Tv className="w-4 h-4" />
          </div>
          <span>LG Control</span>
        </a>

        {/* Zone 2: 5 Concise Single-Line Navigation Links */}
        <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-[#a7a59d]">
          <a href="#overview" className="hover:text-[#f7f6f2] transition-colors whitespace-nowrap shrink-0">
            Overview
          </a>
          <a href="#features" className="hover:text-[#f7f6f2] transition-colors whitespace-nowrap shrink-0">
            Features
          </a>
          <a href="#preview" className="hover:text-[#f7f6f2] transition-colors whitespace-nowrap shrink-0">
            Screenshots
          </a>
          <a href="#how-it-works" className="hover:text-[#f7f6f2] transition-colors whitespace-nowrap shrink-0">
            How It Works
          </a>
          <a href="#compatibility" className="hover:text-[#f7f6f2] transition-colors whitespace-nowrap shrink-0">
            Compatibility
          </a>
          <a href="#install" className="hover:text-[#f7f6f2] transition-colors whitespace-nowrap shrink-0">
            Install Guide
          </a>
          <a href="#release" className="hover:text-[#f7f6f2] transition-colors whitespace-nowrap shrink-0">
            Release
          </a>
        </nav>

        {/* Zone 3: Single Primary Action */}
        <div className="flex items-center gap-3 shrink-0">
          <a
            href={APP_CONFIG.APK_DOWNLOAD_URL}
            download={APP_CONFIG.APK_FILENAME}
            className="flex items-center gap-2 px-4 py-2 text-xs sm:text-sm font-medium text-[#0c0d10] bg-[#d6c59b] hover:bg-[#e4d8b6] rounded-lg transition-colors whitespace-nowrap shrink-0 shadow-sm shadow-[#d6c59b]/10"
            title={`Download ${APP_CONFIG.APK_FILENAME} (${APP_CONFIG.APK_SIZE})`}
          >
            <Download className="w-3.5 h-3.5" />
            <span>Download APK</span>
          </a>

          {/* Mobile hamburger toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg text-[#a7a59d] hover:text-[#f7f6f2] hover:bg-[#181b22] border border-[#232730] transition-colors"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* Mobile dropdown drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-[#232730] bg-[#0f1115] px-4 py-4 space-y-2">
          <a
            href="#overview"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 text-sm font-medium text-[#e6e4dc] hover:bg-[#181b22] rounded-md"
          >
            Overview
          </a>
          <a
            href="#features"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 text-sm font-medium text-[#e6e4dc] hover:bg-[#181b22] rounded-md"
          >
            Features
          </a>
          <a
            href="#preview"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 text-sm font-medium text-[#e6e4dc] hover:bg-[#181b22] rounded-md"
          >
            Screenshots & Mockups
          </a>
          <a
            href="#how-it-works"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 text-sm font-medium text-[#e6e4dc] hover:bg-[#181b22] rounded-md"
          >
            How It Works
          </a>
          <a
            href="#compatibility"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 text-sm font-medium text-[#e6e4dc] hover:bg-[#181b22] rounded-md"
          >
            Compatibility Matrix
          </a>
          <a
            href="#install"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 text-sm font-medium text-[#e6e4dc] hover:bg-[#181b22] rounded-md"
          >
            Installation Guide
          </a>
          <a
            href="#release"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 text-sm font-medium text-[#e6e4dc] hover:bg-[#181b22] rounded-md"
          >
            Latest Release ({APP_CONFIG.APP_VERSION})
          </a>
          <div className="pt-2 border-t border-[#232730] flex items-center justify-between text-xs text-[#8c8a82]">
            <button onClick={() => { setMobileMenuOpen(false); onOpenPrivacy(); }} className="hover:text-[#f7f6f2]">
              Privacy Policy
            </button>
            <button onClick={() => { setMobileMenuOpen(false); onOpenContact(); }} className="hover:text-[#f7f6f2]">
              Support Inquiry
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
