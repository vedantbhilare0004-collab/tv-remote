import React from 'react';
import { X, ShieldCheck, Lock, EyeOff, ServerOff } from 'lucide-react';
import { APP_CONFIG } from '../config/appConfig';

interface PrivacyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PrivacyModal: React.FC<PrivacyModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-sm animate-fadeIn">
      <div 
        className="relative w-full max-w-2xl max-h-[85vh] overflow-y-auto rounded-2xl bg-[#121419] border border-[#2b303c] p-6 sm:p-8 text-[#e8e6df] shadow-2xl"
        role="dialog"
        aria-modal="true"
        aria-labelledby="privacy-title"
      >
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-lg text-[#a7a59d] hover:text-[#f7f6f2] hover:bg-[#1a1e27] border border-[#232730] transition-colors"
          aria-label="Close Privacy Policy"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Modal Header */}
        <div className="flex items-center gap-3 mb-6 pb-4 border-b border-[#1f232b]">
          <div className="w-10 h-10 rounded-xl bg-[#181b22] border border-[#2b303c] flex items-center justify-center text-[#788c68]">
            <ShieldCheck className="w-5 h-5" />
          </div>
          <div>
            <h3 id="privacy-title" className="text-xl font-bold text-[#f7f6f2]">
              Privacy Policy & Security Standards
            </h3>
            <div className="text-xs text-[#8c8a82]">
              LG Control · Effective {APP_CONFIG.PRIVACY_POLICY_LAST_UPDATED}
            </div>
          </div>
        </div>

        {/* Privacy Content */}
        <div className="space-y-6 text-xs sm:text-sm text-[#a7a59d] leading-relaxed">
          
          <div className="space-y-2">
            <h4 className="text-sm font-semibold text-[#f7f6f2] flex items-center gap-2">
              <EyeOff className="w-4 h-4 text-[#d6c59b]" />
              <span>1. Zero Personal Data Collection</span>
            </h4>
            <p>
              LG Control does not collect, log, aggregate, store, or transmit any personal data. We do not ask for your name, email address, phone number, location, or payment credentials. There are no accounts, profiles, or registration workflows.
            </p>
          </div>

          <div className="space-y-2">
            <h4 className="text-sm font-semibold text-[#f7f6f2] flex items-center gap-2">
              <ServerOff className="w-4 h-4 text-[#788c68]" />
              <span>2. Pure Local Network Routing</span>
            </h4>
            <p>
              All communication between your Android smartphone and your television occurs exclusively across your local area network (LAN) via direct WebSocket on standard webOS ports. No command packet is ever sent through external proxy servers or cloud infrastructure.
            </p>
          </div>

          <div className="space-y-2">
            <h4 className="text-sm font-semibold text-[#f7f6f2] flex items-center gap-2">
              <Lock className="w-4 h-4 text-[#c4b18c]" />
              <span>3. Android OS Permissions Explanation</span>
            </h4>
            <p>
              The app requests only the minimum technical permissions mandated by the Android operating system to talk to devices on your local Wi-Fi:
            </p>
            <ul className="list-disc pl-5 space-y-1 text-xs text-[#8c8a82]">
              <li><strong className="text-[#e8e6df]">android.permission.INTERNET:</strong> Required to establish local TCP/WebSocket sockets with your TV's internal IP.</li>
              <li><strong className="text-[#e8e6df]">android.permission.ACCESS_NETWORK_STATE / ACCESS_WIFI_STATE:</strong> Required to detect whether your phone is connected to Wi-Fi.</li>
              <li><strong className="text-[#e8e6df]">android.permission.VIBRATE:</strong> Optional tactile haptic click when pressing remote buttons.</li>
            </ul>
          </div>

          <div className="space-y-2">
            <h4 className="text-sm font-semibold text-[#f7f6f2]">
              4. Third-Party Code & Advertising
            </h4>
            <p>
              LG Control contains zero third-party advertising SDKs, zero crash analytics libraries, and zero marketing pixels. The binary is clean and auditable.
            </p>
          </div>

          <div className="space-y-2">
            <h4 className="text-sm font-semibold text-[#f7f6f2]">
              5. Trademark Disclaimer
            </h4>
            <p className="text-xs text-[#707580]">
              LG, webOS, and related marks are trademarks of LG Electronics Inc. LG Control is an independent software tool not endorsed by, directly affiliated with, maintained, or sponsored by LG Electronics.
            </p>
          </div>

        </div>

        {/* Modal Footer */}
        <div className="mt-8 pt-4 border-t border-[#1f232b] flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2.5 text-xs font-semibold text-[#0c0d10] bg-[#d6c59b] hover:bg-[#e4d8b6] rounded-lg transition-colors"
          >
            I Understand
          </button>
        </div>

      </div>
    </div>
  );
};
