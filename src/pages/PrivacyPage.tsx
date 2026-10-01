import React from 'react';
import { useRouter } from '../context/RouterContext';

export const PrivacyPage: React.FC = () => {
  const { navigate } = useRouter();

  return (
    <div className="min-h-screen bg-[#F4F1EB] pt-28 pb-24 px-4 md:px-8 lg:px-12 text-[#20221F]">
      <div className="max-w-4xl mx-auto space-y-12">
        
        <header className="space-y-4">
          <span className="text-xs font-mono uppercase tracking-widest text-[#977B58] block">
            Legal & Governance
          </span>
          <h1 className="text-3xl sm:text-5xl font-serif font-light text-[#20221F]">
            Privacy & Data Governance
          </h1>
          <p className="text-sm text-[#20221F]/70 font-mono">
            Last Updated: January 2025 · DreamBuilt Architectural Practice
          </p>
        </header>

        <div className="space-y-8 text-sm text-[#20221F]/80 leading-relaxed font-sans font-light">
          <section className="space-y-3">
            <h2 className="text-xl font-serif text-[#20221F]">1. Information We Collect</h2>
            <p>
              When you submit a project enquiry through our website, we collect your name, email address, optional contact telephone number, project location, and brief project requirements. We use this information solely to evaluate project feasibility and respond to your architectural enquiry.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-serif text-[#20221F]">2. Cookies & Analytics</h2>
            <p>
              DreamBuilt respects visitor privacy. Our website does not utilize invasive third-party ad-tracking cookies, behavioural retargeting, or data brokers. Essential local storage is used only to preserve interface settings (such as 3D visual preferences and reduced motion preferences).
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-serif text-[#20221F]">3. Confidentiality of Client Briefs & Plans</h2>
            <p>
              Architectural ideas, site locations, and property titles shared with DreamBuilt are treated under professional architectural confidentiality standards. We never sell, lease, or distribute prospective client data.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-serif text-[#20221F]">4. Contact & Inquiries</h2>
            <p>
              For any questions regarding your data or to request deletion of past enquiry records, please contact our data officer at: <a href="mailto:privacy@dreambuilt-architecture.com" className="text-[#977B58] underline">privacy@dreambuilt-architecture.com</a>.
            </p>
          </section>
        </div>

        <div className="pt-6 border-t border-[#D8D0C3]">
          <button
            onClick={() => navigate('/')}
            className="px-5 py-2.5 bg-[#20221F] text-white text-xs uppercase tracking-wider font-semibold rounded-sm"
          >
            ← Return to Home
          </button>
        </div>

      </div>
    </div>
  );
};
