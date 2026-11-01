import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';

interface FaqItem {
  question: string;
  answer: string;
}

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs: FaqItem[] = [
    {
      question: "Is LG Control an official application by LG Electronics?",
      answer: "No. LG Control is an independent software tool designed for LG Smart TV owners who want a pure, ad-free, and tracker-free remote. It connects via standard, documented webOS WebSocket APIs supported by LG televisions."
    },
    {
      question: "Why is the application distributed as an Android APK rather than on Google Play?",
      answer: "Direct APK distribution eliminates mandatory Google Play billing and tracking SDK dependencies. It allows the project to deliver rapid firmware fixes directly to users, keeps the binary lightweight (under 15 MB), and ensures complete support for de-Googled Android environments like GrapheneOS and LineageOS."
    },
    {
      question: "Does my Android phone need an Infrared (IR) Blaster?",
      answer: "No. LG Control communicates exclusively over your local Wi-Fi network. Because it uses standard network protocols, you do not need line-of-sight to the TV, and it works seamlessly from any room covered by your Wi-Fi router."
    },
    {
      question: "Does LG Control track what I watch or transmit my data?",
      answer: "No. The application contains zero telemetry, zero analytics SDKs, and zero advertising trackers. Communication occurs purely between your phone's IP address and your TV's IP address on your local home network. No data ever leaves your router."
    },
    {
      question: "Can this app turn my TV on when it is completely powered off?",
      answer: "Yes, using Wake-on-LAN (WoL). To enable cold boot over Wi-Fi, ensure your TV has 'Mobile TV On' or 'Turn on via Wi-Fi' enabled under webOS Settings → Connection / Network → Mobile TV On."
    },
    {
      question: "What should I do if my TV is not automatically detected?",
      answer: "Verify that both your phone and television are connected to the exact same Wi-Fi router and frequency band. Also check your router settings to ensure 'AP Client Isolation' is turned off. If needed, LG Control also lets you enter your TV's local IP address manually."
    },
    {
      question: "Will this app work on Android tablets and foldable phones?",
      answer: "Yes. The UI automatically scales across standard smartphone screens, tall aspect ratios, foldable inner displays, and Android tablets."
    }
  ];

  return (
    <section id="faq" className="py-20 md:py-28 border-t border-[#1f232b] bg-[#090a0d]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="text-xs font-semibold tracking-wider uppercase text-[#c4b18c] mb-2">
            Frequently Asked Questions
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-[#f7f6f2] [text-wrap:balance]">
            Answers to common technical questions.
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#a7a59d] leading-relaxed [text-wrap:balance]">
            Clear, transparent details on permissions, networking, and device support.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-3">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="rounded-xl bg-[#121419] border border-[#232730] overflow-hidden transition-colors"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full px-6 py-4 sm:py-5 flex items-center justify-between text-left gap-4 hover:bg-[#161820] transition-colors"
                  aria-expanded={isOpen}
                >
                  <span className="text-sm sm:text-base font-semibold text-[#f7f6f2]">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-4 h-4 text-[#c4b18c] shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-6 pb-5 pt-1 text-xs sm:text-sm text-[#a7a59d] leading-relaxed border-t border-[#1c2029]">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
