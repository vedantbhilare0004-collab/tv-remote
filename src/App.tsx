/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ProductIntro } from './components/ProductIntro';
import { Features } from './components/Features';
import { AppScreenshots } from './components/AppScreenshots';
import { HowItWorks } from './components/HowItWorks';
import { Compatibility } from './components/Compatibility';
import { InstallationGuide } from './components/InstallationGuide';
import { LatestRelease } from './components/LatestRelease';
import { FAQ } from './components/FAQ';
import { Footer } from './components/Footer';
import { PrivacyModal } from './components/PrivacyModal';
import { ContactModal } from './components/ContactModal';

export default function App() {
  const [privacyOpen, setPrivacyOpen] = useState(false);
  const [contactOpen, setContactOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#0c0d10] text-[#e8e6df] font-['Plus_Jakarta_Sans',sans-serif] selection:bg-[#788c68]/30 selection:text-[#f7f6f2]">
      
      {/* Navigation Bar */}
      <Navbar 
        onOpenPrivacy={() => setPrivacyOpen(true)}
        onOpenContact={() => setContactOpen(true)}
      />

      {/* Main Content Area */}
      <main>
        {/* 1. Hero Section with Prominent Download APK & Live Mockup */}
        <Hero />

        {/* 2. Product Introduction & Architectural Foundations */}
        <ProductIntro />

        {/* 3. Core Features (D-Pad, Volume, YouTube search, Media, Apps) */}
        <Features />

        {/* 4. App Screenshots & Interactive Device Mockups */}
        <AppScreenshots />

        {/* 5. How It Works (Connect, Pair, Control) */}
        <HowItWorks />

        {/* 6. Compatibility Matrix (webOS TVs & Android OS) */}
        <Compatibility />

        {/* 7. Installation Guide (Step-by-step APK & Unknown Sources) */}
        <InstallationGuide />

        {/* 8. Latest Release (Config parameters, SHA-256 copy, Changelog) */}
        <LatestRelease />

        {/* 9. FAQ Section */}
        <FAQ />
      </main>

      {/* 10. Footer with Trademark Disclaimer & Legal Links */}
      <Footer 
        onOpenPrivacy={() => setPrivacyOpen(true)}
        onOpenContact={() => setContactOpen(true)}
      />

      {/* Accessible Modals */}
      <PrivacyModal 
        isOpen={privacyOpen}
        onClose={() => setPrivacyOpen(false)}
      />

      <ContactModal 
        isOpen={contactOpen}
        onClose={() => setContactOpen(false)}
      />

    </div>
  );
}
