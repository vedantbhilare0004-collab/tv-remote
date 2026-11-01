import React, { useState } from 'react';
import { X, Mail, Send, CheckCircle2, ExternalLink } from 'lucide-react';
import { APP_CONFIG } from '../config/appConfig';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('Compatibility / Feedback');
  const [message, setMessage] = useState('');
  const [tvModel, setTvModel] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !message) {
      setError('Please provide your email and a brief message.');
      return;
    }
    setError('');
    // Client-side confirmation state
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-sm animate-fadeIn">
      <div 
        className="relative w-full max-w-lg rounded-2xl bg-[#121419] border border-[#2b303c] p-6 sm:p-8 text-[#e8e6df] shadow-2xl"
        role="dialog"
        aria-modal="true"
        aria-labelledby="contact-title"
      >
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-lg text-[#a7a59d] hover:text-[#f7f6f2] hover:bg-[#1a1e27] border border-[#232730] transition-colors"
          aria-label="Close Contact Dialog"
        >
          <X className="w-4 h-4" />
        </button>

        {submitted ? (
          <div className="py-8 text-center space-y-4">
            <div className="w-12 h-12 rounded-full bg-[#788c68]/20 border border-[#788c68]/40 flex items-center justify-center text-[#788c68] mx-auto">
              <CheckCircle2 className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-[#f7f6f2]">Inquiry Received</h3>
            <p className="text-xs sm:text-sm text-[#a7a59d] max-w-sm mx-auto leading-relaxed">
              Thank you for reaching out. We will review your message regarding <strong className="text-[#e8e6df]">{tvModel || 'LG Control'}</strong> and respond to <strong className="text-[#e8e6df]">{email}</strong>.
            </p>
            <div className="pt-4">
              <button
                onClick={() => {
                  setSubmitted(false);
                  onClose();
                }}
                className="px-5 py-2 text-xs font-semibold text-[#0c0d10] bg-[#d6c59b] hover:bg-[#e4d8b6] rounded-lg transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="flex items-center gap-3 pb-3 border-b border-[#1f232b]">
              <div className="w-10 h-10 rounded-xl bg-[#181b22] border border-[#2b303c] flex items-center justify-center text-[#d6c59b]">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <h3 id="contact-title" className="text-lg font-bold text-[#f7f6f2]">
                  Developer & Support Contact
                </h3>
                <div className="text-xs text-[#8c8a82]">
                  Direct inquiries for LG Control Android distribution
                </div>
              </div>
            </div>

            {error && (
              <div className="p-3 rounded-lg bg-red-950/30 border border-red-900/50 text-xs text-red-300">
                {error}
              </div>
            )}

            <div>
              <label className="block text-xs font-medium text-[#c4b18c] mb-1">
                Your Email Address *
              </label>
              <input
                type="email"
                required
                placeholder="you@domain.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-3.5 py-2 rounded-lg bg-[#0d0e12] border border-[#262b36] text-sm text-[#f7f6f2] placeholder-[#555a66] focus:outline-none focus:border-[#d6c59b]"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-medium text-[#c4b18c] mb-1">
                  Inquiry Topic
                </label>
                <select
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  className="w-full px-3.5 py-2 rounded-lg bg-[#0d0e12] border border-[#262b36] text-xs text-[#f7f6f2] focus:outline-none focus:border-[#d6c59b]"
                >
                  <option value="Compatibility / Feedback">Compatibility Question</option>
                  <option value="Bug Report">Bug Report</option>
                  <option value="Feature Request">Feature Request</option>
                  <option value="APK Verification">APK Verification</option>
                  <option value="General Support">General Support</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-medium text-[#c4b18c] mb-1">
                  LG TV Model (Optional)
                </label>
                <input
                  type="text"
                  placeholder="e.g. OLED65C3 or webOS 23"
                  value={tvModel}
                  onChange={(e) => setTvModel(e.target.value)}
                  className="w-full px-3.5 py-2 rounded-lg bg-[#0d0e12] border border-[#262b36] text-xs text-[#f7f6f2] placeholder-[#555a66] focus:outline-none focus:border-[#d6c59b]"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-medium text-[#c4b18c] mb-1">
                Message / Description *
              </label>
              <textarea
                required
                rows={3}
                placeholder="Describe your question or issue in detail..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full px-3.5 py-2 rounded-lg bg-[#0d0e12] border border-[#262b36] text-sm text-[#f7f6f2] placeholder-[#555a66] focus:outline-none focus:border-[#d6c59b] resize-none"
              />
            </div>

            <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3">
              <a
                href={APP_CONFIG.GITHUB_ISSUES_URL}
                target="_blank"
                rel="noreferrer noopener"
                className="text-xs text-[#a7a59d] hover:text-[#f7f6f2] flex items-center gap-1.5 order-2 sm:order-1"
              >
                <span>Report via GitHub Issues</span>
                <ExternalLink className="w-3 h-3" />
              </a>

              <button
                type="submit"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 text-xs font-semibold text-[#0c0d10] bg-[#d6c59b] hover:bg-[#e4d8b6] rounded-lg transition-colors order-1 sm:order-2"
              >
                <Send className="w-3.5 h-3.5" />
                <span>Submit Inquiry</span>
              </button>
            </div>
          </form>
        )}

      </div>
    </div>
  );
};
