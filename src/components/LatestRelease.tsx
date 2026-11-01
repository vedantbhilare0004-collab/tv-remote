import React, { useState } from 'react';
import { 
  Download, 
  Copy, 
  Check, 
  ExternalLink, 
  Calendar, 
  FileBox, 
  Smartphone, 
  Layers, 
  ChevronDown,
  ShieldCheck
} from 'lucide-react';
import { APP_CONFIG, RELEASES_HISTORY } from '../config/appConfig';

export const LatestRelease: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [showOlderReleases, setShowOlderReleases] = useState(false);

  const handleCopySha = () => {
    if (typeof navigator !== 'undefined' && navigator.clipboard) {
      navigator.clipboard.writeText(APP_CONFIG.SHA256_CHECKSUM);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  return (
    <section id="release" className="py-20 md:py-28 border-t border-[#1f232b] bg-[#0c0d10]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="text-xs font-semibold tracking-wider uppercase text-[#c4b18c] mb-2">
            Release Verification
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-[#f7f6f2] [text-wrap:balance]">
            Latest build & binary specifications.
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#a7a59d] leading-relaxed [text-wrap:balance]">
            Each build is compiled with strict reproducible release flags and signed cryptographically for uncompromised local execution.
          </p>
        </div>

        {/* Release Summary Box */}
        <div className="rounded-2xl bg-[#121419] border border-[#232730] p-6 sm:p-8 lg:p-10 shadow-xl mb-10">
          
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-8 border-b border-[#1f232c]">
            <div className="space-y-2">
              <div className="flex items-center gap-3">
                <span className="text-2xl sm:text-3xl font-extrabold text-[#f7f6f2] font-mono">
                  {APP_CONFIG.APP_VERSION}
                </span>
                <span className="text-xs px-2.5 py-1 rounded-md bg-[#788c68]/20 text-[#788c68] border border-[#788c68]/30 font-medium">
                  Current Stable
                </span>
              </div>
              <p className="text-sm text-[#a7a59d]">
                Released on <span className="text-[#e8e6df] font-medium">{APP_CONFIG.RELEASE_DATE}</span> for Android.
              </p>
            </div>

            {/* Direct Download Action Button */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <a
                href={APP_CONFIG.APK_DOWNLOAD_URL}
                download={APP_CONFIG.APK_FILENAME}
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3 text-sm font-semibold text-[#0c0d10] bg-[#d6c59b] hover:bg-[#e4d8b6] rounded-xl transition-all shadow-md shadow-[#d6c59b]/15 whitespace-nowrap shrink-0 group active:scale-[0.98]"
              >
                <Download className="w-4 h-4 transition-transform group-hover:-translate-y-0.5" />
                <span>Download {APP_CONFIG.APK_FILENAME}</span>
                <span className="text-xs font-mono font-normal">({APP_CONFIG.APK_SIZE})</span>
              </a>

              <a
                href={APP_CONFIG.GITHUB_RELEASES_URL}
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex items-center justify-center gap-2 px-4 py-3 text-sm font-medium text-[#a7a59d] hover:text-[#f7f6f2] bg-[#161820] hover:bg-[#1e222a] border border-[#2b303c] rounded-xl transition-colors whitespace-nowrap shrink-0"
              >
                <span>GitHub Releases</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Technical Specifications Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 py-8 border-b border-[#1f232c] text-xs">
            <div>
              <div className="text-[#8c8a82] mb-1 font-mono uppercase tracking-wider">Package Name</div>
              <div className="font-mono text-[#e8e6df] truncate">{APP_CONFIG.PACKAGE_NAME}</div>
            </div>
            <div>
              <div className="text-[#8c8a82] mb-1 font-mono uppercase tracking-wider">File Size</div>
              <div className="font-mono text-[#e8e6df] tabular-nums">{APP_CONFIG.APK_SIZE}</div>
            </div>
            <div>
              <div className="text-[#8c8a82] mb-1 font-mono uppercase tracking-wider">Min Android</div>
              <div className="font-mono text-[#e8e6df]">{APP_CONFIG.MIN_ANDROID_VERSION.split('(')[0]}</div>
            </div>
            <div>
              <div className="text-[#8c8a82] mb-1 font-mono uppercase tracking-wider">Target SDK</div>
              <div className="font-mono text-[#e8e6df]">{APP_CONFIG.TARGET_ANDROID}</div>
            </div>
          </div>

          {/* SHA-256 Checksum Card */}
          <div className="pt-6 space-y-2">
            <div className="flex items-center justify-between text-xs">
              <span className="text-[#8c8a82] font-mono uppercase tracking-wider">SHA-256 Checksum (Integrity Verification)</span>
              <button
                onClick={handleCopySha}
                className="inline-flex items-center gap-1.5 text-xs text-[#d6c59b] hover:text-[#e4d8b6] transition-colors"
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-[#788c68]" />
                    <span className="text-[#788c68]">Hash Copied</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>Copy Checksum</span>
                  </>
                )}
              </button>
            </div>
            <div className="p-3 rounded-lg bg-[#0a0b0e] border border-[#1f232c] font-mono text-[11px] sm:text-xs text-[#a7a59d] break-all select-all">
              {APP_CONFIG.SHA256_CHECKSUM}
            </div>
          </div>

          {/* Current Changelog Highlights */}
          <div className="pt-8">
            <h4 className="text-sm font-semibold text-[#f7f6f2] mb-3">
              Changelog for {APP_CONFIG.APP_VERSION}
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-[#a7a59d]">
              {RELEASES_HISTORY[0].highlights.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#788c68] shrink-0 mt-2" />
                  <span className="leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Older Releases Toggle & Accordion */}
        <div className="border border-[#1f232b] rounded-xl bg-[#101217] overflow-hidden">
          <button
            onClick={() => setShowOlderReleases(!showOlderReleases)}
            className="w-full px-6 py-4 flex items-center justify-between text-left text-xs sm:text-sm font-medium text-[#e8e6df] hover:bg-[#14171e] transition-colors"
          >
            <span>Previous Release Archive ({RELEASES_HISTORY.length - 1} previous versions)</span>
            <ChevronDown className={`w-4 h-4 text-[#8c8a82] transition-transform ${showOlderReleases ? 'rotate-180' : ''}`} />
          </button>

          {showOlderReleases && (
            <div className="px-6 pb-6 pt-2 border-t border-[#1c2029] space-y-6">
              {RELEASES_HISTORY.slice(1).map((rel) => (
                <div key={rel.version} className="space-y-2">
                  <div className="flex items-center gap-3">
                    <span className="text-sm font-bold font-mono text-[#f7f6f2]">{rel.version}</span>
                    <span className="text-xs text-[#8c8a82]">{rel.date}</span>
                    <span className="text-xs font-mono text-[#788c68]">{rel.apkSize}</span>
                  </div>
                  <p className="text-xs text-[#a7a59d]">{rel.summary}</p>
                  <ul className="space-y-1 text-xs text-[#8c8a82] pl-3">
                    {rel.highlights.map((h, i) => (
                      <li key={i}>· {h}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          )}
        </div>

      </div>
    </section>
  );
};
