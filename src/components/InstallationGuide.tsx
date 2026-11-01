import React from 'react';
import { 
  Download, 
  FolderDown, 
  ShieldAlert, 
  CheckCircle, 
  Smartphone, 
  ArrowRight,
  ShieldCheck,
  FileCode2
} from 'lucide-react';
import { APP_CONFIG } from '../config/appConfig';

export const InstallationGuide: React.FC = () => {
  return (
    <section id="install" className="py-20 md:py-28 border-t border-[#1f232b] bg-[#090a0d]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="text-xs font-semibold tracking-wider uppercase text-[#c4b18c] mb-2">
            Installation Walkthrough
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-[#f7f6f2] [text-wrap:balance]">
            How to install the Android APK on your phone.
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#a7a59d] leading-relaxed [text-wrap:balance]">
            Direct APK sideloading gives you complete ownership over your software without app store bloat. Follow these 4 straightforward steps.
          </p>
        </div>

        {/* 4 Installation Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          
          {/* Step 1 */}
          <div className="p-6 rounded-2xl bg-[#121419] border border-[#232730] flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-10 h-10 rounded-xl bg-[#181b22] border border-[#2b303c] flex items-center justify-center text-[#d6c59b]">
                  <Download className="w-5 h-5" />
                </div>
                <span className="text-xs font-mono font-bold text-[#c4b18c]">STEP 01</span>
              </div>
              <h3 className="text-base font-semibold text-[#f7f6f2] mb-2">
                Download the APK
              </h3>
              <p className="text-xs sm:text-sm text-[#8c8a82] leading-relaxed">
                Tap the Download button on this page. Your browser will download the official package file (<span className="text-[#e8e6df] font-mono text-[11px]">{APP_CONFIG.APK_FILENAME}</span>).
              </p>
            </div>
            <div className="mt-6 pt-3 border-t border-[#1c2029] text-[11px] text-[#788c68] font-mono">
              Direct GitHub asset download
            </div>
          </div>

          {/* Step 2 */}
          <div className="p-6 rounded-2xl bg-[#121419] border border-[#232730] flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-10 h-10 rounded-xl bg-[#181b22] border border-[#2b303c] flex items-center justify-center text-[#788c68]">
                  <FolderDown className="w-5 h-5" />
                </div>
                <span className="text-xs font-mono font-bold text-[#c4b18c]">STEP 02</span>
              </div>
              <h3 className="text-base font-semibold text-[#f7f6f2] mb-2">
                Open Downloaded File
              </h3>
              <p className="text-xs sm:text-sm text-[#8c8a82] leading-relaxed">
                When the download finishes, tap the completed download notification in your notification shade, or open your phone's <em>Files / Downloads</em> folder.
              </p>
            </div>
            <div className="mt-6 pt-3 border-t border-[#1c2029] text-[11px] text-[#a7a59d] font-mono">
              Size: {APP_CONFIG.APK_SIZE}
            </div>
          </div>

          {/* Step 3 */}
          <div className="p-6 rounded-2xl bg-[#121419] border border-[#232730] flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-10 h-10 rounded-xl bg-[#181b22] border border-[#2b303c] flex items-center justify-center text-[#d6c59b]">
                  <ShieldAlert className="w-5 h-5" />
                </div>
                <span className="text-xs font-mono font-bold text-[#c4b18c]">STEP 03</span>
              </div>
              <h3 className="text-base font-semibold text-[#f7f6f2] mb-2">
                Allow Unknown Apps
              </h3>
              <p className="text-xs sm:text-sm text-[#8c8a82] leading-relaxed">
                If Android prompts <em>"For your security, your phone is not allowed to install unknown apps"</em>, tap <strong>Settings</strong> and toggle <strong>"Allow from this source"</strong>.
              </p>
            </div>
            <div className="mt-6 pt-3 border-t border-[#1c2029] text-[11px] text-[#788c68] font-mono">
              Standard Android safeguard
            </div>
          </div>

          {/* Step 4 */}
          <div className="p-6 rounded-2xl bg-[#121419] border border-[#232730] flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-10 h-10 rounded-xl bg-[#181b22] border border-[#2b303c] flex items-center justify-center text-[#788c68]">
                  <CheckCircle className="w-5 h-5" />
                </div>
                <span className="text-xs font-mono font-bold text-[#c4b18c]">STEP 04</span>
              </div>
              <h3 className="text-base font-semibold text-[#f7f6f2] mb-2">
                Install & Connect
              </h3>
              <p className="text-xs sm:text-sm text-[#8c8a82] leading-relaxed">
                Tap <strong>Install</strong> on the system package prompt. Once installation finishes, tap <strong>Open</strong> to start discovering your LG webOS TV over Wi-Fi.
              </p>
            </div>
            <div className="mt-6 pt-3 border-t border-[#1c2029] text-[11px] text-[#c4b18c] font-mono">
              Ready for pairing in 3 seconds
            </div>
          </div>

        </div>

        {/* Detailed Advisory on Unknown Sources Security */}
        <div className="p-6 sm:p-8 rounded-2xl bg-[#13151b] border border-[#282d38] space-y-4">
          <div className="flex items-center gap-3">
            <ShieldCheck className="w-6 h-6 text-[#788c68] shrink-0" />
            <h4 className="text-base font-semibold text-[#f7f6f2]">
              Why does Android ask for "Unknown sources" permission?
            </h4>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs sm:text-sm text-[#a7a59d] leading-relaxed">
            <div>
              <p>
                In the Android operating system, any application installed outside of the proprietary Google Play Store is categorized as an "unknown source." This is a security precaution to prevent automatic background installs by rogue websites.
              </p>
              <p className="mt-2">
                Because LG Control is distributed directly to users without middleman platforms, Google Play's installer delegates the install permission to whichever browser or file app you used to download the file.
              </p>
            </div>

            <div className="space-y-3 bg-[#0d0e12] p-4 rounded-xl border border-[#1f232c]">
              <div className="text-xs font-semibold text-[#e8e6df] uppercase tracking-wider">
                Integrity & Safety Guarantees
              </div>
              <ul className="space-y-2 text-xs text-[#8c8a82]">
                <li className="flex items-start gap-2">
                  <span className="text-[#788c68] font-bold">✓</span>
                  <span>Cryptographically signed with official v2 + v3 APK keys.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#788c68] font-bold">✓</span>
                  <span>Zero trackers, no analytics SDKs, and no background services.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#788c68] font-bold">✓</span>
                  <span>Auditable SHA-256 checksum published below for manual verification.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
