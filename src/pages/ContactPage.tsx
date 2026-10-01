import React, { useState } from 'react';

export const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    projectType: 'new-home',
    location: '',
    timeline: 'not-sure',
    budgetGuideline: 'flexible',
    brief: ''
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedData, setSubmittedData] = useState<typeof formData | null>(null);

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.fullName.trim()) {
      errs.fullName = 'Please enter your name.';
    }
    if (!formData.email.trim()) {
      errs.email = 'Please provide an email address.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = 'Please provide a valid email address.';
    }
    if (!formData.location.trim()) {
      errs.location = 'Please state your approximate project location or region.';
    }
    if (!formData.brief.trim()) {
      errs.brief = 'Please share a brief sentence or two about what you envision.';
    } else if (formData.brief.trim().length < 15) {
      errs.brief = 'Please provide a little more detail (at least 15 characters).';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmittedData({ ...formData });
    }, 600);
  };

  const resetForm = () => {
    setSubmittedData(null);
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      projectType: 'new-home',
      location: '',
      timeline: 'not-sure',
      budgetGuideline: 'flexible',
      brief: ''
    });
    setErrors({});
  };

  return (
    <div className="min-h-screen bg-[#F4F1EB] dark:bg-[#121311] pt-36 pb-32 px-4 md:px-8 lg:px-12 text-[#20221F] dark:text-[#F4F1EB] transition-colors duration-500">
      <div className="max-w-6xl mx-auto space-y-20">
        
        {/* Header (Airy & spacious) */}
        <div className="max-w-3xl space-y-4">
          <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#977B58] block">
            Start Your Project
          </span>
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-serif text-[#20221F] dark:text-white tracking-tight leading-[1.1]">
            Begin the Conversation
          </h1>
          <p className="text-base sm:text-lg text-[#20221F]/75 dark:text-white/70 font-sans leading-relaxed font-light pt-2">
            We welcome conversations at any stage of your thinking. Tell us about your site, your property, or how you want to live.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-20 items-start">
          
          {/* Main Enquiry Form Column */}
          <div className="lg:col-span-8 bg-[#FAF8F5] dark:bg-[#1A1C19] border border-[#D8D0C3] dark:border-white/10 p-8 sm:p-12 shadow-xs">
            
            {submittedData ? (
              <div className="space-y-8">
                <div className="p-4 bg-[#EAE5DC] dark:bg-white/10 border-l-4 border-[#977B58] text-xs font-mono text-[#20221F] dark:text-white">
                  PROTOTYPE PREVIEW · VALIDATION SUCCESSFUL
                </div>

                <h2 className="text-3xl sm:text-4xl font-serif text-[#20221F] dark:text-white">
                  Enquiry Form Draft Ready
                </h2>

                <p className="text-base text-[#20221F]/80 dark:text-white/70 leading-relaxed font-sans font-light">
                  Thank you, <span className="font-semibold">{submittedData.fullName}</span>. Your enquiry parameters have been checked and formatted according to our architectural project intake standard.
                </p>

                <div className="bg-[#F4F1EB] dark:bg-[#121311] border border-[#D8D0C3] dark:border-white/10 p-6 space-y-4 text-xs font-mono">
                  <div className="grid grid-cols-2 gap-6 pb-4 border-b border-[#D8D0C3] dark:border-white/10">
                    <div>
                      <span className="text-[#20221F]/60 dark:text-white/50 block">CONTACT</span>
                      <span className="font-medium text-[#20221F] dark:text-white block pt-1">{submittedData.email}</span>
                      {submittedData.phone && <span className="block text-[#20221F]/70 dark:text-white/60 pt-0.5">{submittedData.phone}</span>}
                    </div>
                    <div>
                      <span className="text-[#20221F]/60 dark:text-white/50 block">LOCATION</span>
                      <span className="font-medium text-[#20221F] dark:text-white block pt-1">{submittedData.location}</span>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-6 pb-4 border-b border-[#D8D0C3] dark:border-white/10">
                    <div>
                      <span className="text-[#20221F]/60 dark:text-white/50 block">PROJECT TYPE</span>
                      <span className="font-medium uppercase text-[#20221F] dark:text-white block pt-1">{submittedData.projectType}</span>
                    </div>
                    <div>
                      <span className="text-[#20221F]/60 dark:text-white/50 block">TIMELINE / BUDGET</span>
                      <span className="font-medium text-[#20221F] dark:text-white block pt-1">{submittedData.timeline} · {submittedData.budgetGuideline}</span>
                    </div>
                  </div>

                  <div className="pt-2">
                    <span className="text-[#20221F]/60 dark:text-white/50 block mb-2">SUMMARY BRIEF</span>
                    <p className="text-sm italic font-serif text-[#20221F] dark:text-white bg-white dark:bg-[#1A1C19] p-4 border border-[#D8D0C3] dark:border-white/10 leading-relaxed font-light">
                      "{submittedData.brief}"
                    </p>
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-5 pt-3 font-mono">
                  <a
                    href={`mailto:conversations@dreambuilt-architecture.com?subject=Architectural%20Enquiry%20from%20${encodeURIComponent(submittedData.fullName)}&body=${encodeURIComponent(
                      `Name: ${submittedData.fullName}\nEmail: ${submittedData.email}\nPhone: ${submittedData.phone}\nLocation: ${submittedData.location}\nType: ${submittedData.projectType}\nTimeline: ${submittedData.timeline}\nBrief: ${submittedData.brief}`
                    )}`}
                    className="px-8 py-3.5 bg-[#20221F] dark:bg-[#F4F1EB] text-[#F4F1EB] dark:text-[#121311] text-xs uppercase tracking-wider font-semibold rounded-sm hover:opacity-90 transition-opacity shadow-sm"
                  >
                    Send via your email client →
                  </a>
                  <button
                    onClick={resetForm}
                    className="px-6 py-3.5 border border-[#D8D0C3] dark:border-white/20 text-xs uppercase tracking-wider font-semibold text-[#20221F] dark:text-white hover:bg-white/10 transition-colors rounded-sm cursor-pointer"
                  >
                    Edit Information
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="space-y-8">
                
                <div className="space-y-2">
                  <label htmlFor="fullName" className="text-xs font-mono uppercase tracking-wider text-[#20221F] dark:text-white block font-semibold">
                    Your Name <span className="text-[#977B58]">*</span>
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    placeholder="e.g. David & Sarah Sterling"
                    className={`w-full px-5 py-3.5 bg-white dark:bg-[#121311] border text-sm text-[#20221F] dark:text-white placeholder:text-[#20221F]/30 dark:placeholder:text-white/30 rounded-sm focus:outline-none focus:ring-1 focus:ring-[#977B58] transition-colors ${
                      errors.fullName ? 'border-red-500' : 'border-[#D8D0C3] dark:border-white/20'
                    }`}
                  />
                  {errors.fullName && (
                    <p className="text-xs text-red-500 mt-1 font-mono">{errors.fullName}</p>
                  )}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-xs font-mono uppercase tracking-wider text-[#20221F] dark:text-white block font-semibold">
                      Email Address <span className="text-[#977B58]">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="name@domain.com"
                      className={`w-full px-5 py-3.5 bg-white dark:bg-[#121311] border text-sm text-[#20221F] dark:text-white placeholder:text-[#20221F]/30 dark:placeholder:text-white/30 rounded-sm focus:outline-none focus:ring-1 focus:ring-[#977B58] transition-colors ${
                        errors.email ? 'border-red-500' : 'border-[#D8D0C3] dark:border-white/20'
                      }`}
                    />
                    {errors.email && (
                      <p className="text-xs text-red-500 mt-1 font-mono">{errors.email}</p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="phone" className="text-xs font-mono uppercase tracking-wider text-[#20221F] dark:text-white block">
                      Phone Number (Optional)
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+234 800 000 0000 / +44 7000 000000"
                      className="w-full px-5 py-3.5 bg-white dark:bg-[#121311] border border-[#D8D0C3] dark:border-white/20 text-sm text-[#20221F] dark:text-white placeholder:text-[#20221F]/30 dark:placeholder:text-white/30 rounded-sm focus:outline-none focus:ring-1 focus:ring-[#977B58] transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label htmlFor="projectType" className="text-xs font-mono uppercase tracking-wider text-[#20221F] dark:text-white block font-semibold">
                      Envisaged Project Type
                    </label>
                    <select
                      id="projectType"
                      value={formData.projectType}
                      onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                      className="w-full px-5 py-3.5 bg-white dark:bg-[#121311] border border-[#D8D0C3] dark:border-white/20 text-sm text-[#20221F] dark:text-white rounded-sm focus:outline-none focus:ring-1 focus:ring-[#977B58] transition-colors cursor-pointer"
                    >
                      <option value="new-home">New Contemporary Residence / Villa</option>
                      <option value="renovation-extension">Renovation & Extension</option>
                      <option value="interiors-joinery">Interior Architecture & Joinery</option>
                      <option value="early-appraisal">Early Site Feasibility Appraisal</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="location" className="text-xs font-mono uppercase tracking-wider text-[#20221F] dark:text-white block font-semibold">
                      Project Location / Region <span className="text-[#977B58]">*</span>
                    </label>
                    <input
                      type="text"
                      id="location"
                      value={formData.location}
                      onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                      placeholder="e.g. Lagos, Abuja, Surrey, Coastal"
                      className={`w-full px-5 py-3.5 bg-white dark:bg-[#121311] border text-sm text-[#20221F] dark:text-white placeholder:text-[#20221F]/30 dark:placeholder:text-white/30 rounded-sm focus:outline-none focus:ring-1 focus:ring-[#977B58] transition-colors ${
                        errors.location ? 'border-red-500' : 'border-[#D8D0C3] dark:border-white/20'
                      }`}
                    />
                    {errors.location && (
                      <p className="text-xs text-red-500 mt-1 font-mono">{errors.location}</p>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label htmlFor="timeline" className="text-xs font-mono uppercase tracking-wider text-[#20221F] dark:text-white block">
                      Envisaged Starting Horizon
                    </label>
                    <select
                      id="timeline"
                      value={formData.timeline}
                      onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                      className="w-full px-5 py-3.5 bg-white dark:bg-[#121311] border border-[#D8D0C3] dark:border-white/20 text-sm text-[#20221F] dark:text-white rounded-sm focus:outline-none focus:ring-1 focus:ring-[#977B58] transition-colors cursor-pointer"
                    >
                      <option value="not-sure">Not sure yet / Exploratory</option>
                      <option value="immediate">Immediate (within 1–3 months)</option>
                      <option value="6-months">Next 3–6 months</option>
                      <option value="next-year">Next 12–18 months</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="budgetGuideline" className="text-xs font-mono uppercase tracking-wider text-[#20221F] dark:text-white block">
                      Budget Guideline
                    </label>
                    <select
                      id="budgetGuideline"
                      value={formData.budgetGuideline}
                      onChange={(e) => setFormData({ ...formData, budgetGuideline: e.target.value })}
                      className="w-full px-5 py-3.5 bg-white dark:bg-[#121311] border border-[#D8D0C3] dark:border-white/20 text-sm text-[#20221F] dark:text-white rounded-sm focus:outline-none focus:ring-1 focus:ring-[#977B58] transition-colors cursor-pointer"
                    >
                      <option value="flexible">Flexible / To be advised</option>
                      <option value="under-500k">Indicative: Under 500k</option>
                      <option value="500k-1m">Indicative: 500k – 1.0M</option>
                      <option value="1m-2m">Indicative: 1.0M – 2.0M</option>
                      <option value="2m-plus">Indicative: 2.0M+</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="brief" className="text-xs font-mono uppercase tracking-wider text-[#20221F] dark:text-white block font-semibold">
                    Brief Description of Your Vision <span className="text-[#977B58]">*</span>
                  </label>
                  <textarea
                    id="brief"
                    rows={5}
                    value={formData.brief}
                    onChange={(e) => setFormData({ ...formData, brief: e.target.value })}
                    placeholder="Tell us about the property, your daily routines, natural light preferences, or key challenges you wish to solve..."
                    className={`w-full p-5 bg-white dark:bg-[#121311] border text-sm text-[#20221F] dark:text-white placeholder:text-[#20221F]/30 dark:placeholder:text-white/30 rounded-sm focus:outline-none focus:ring-1 focus:ring-[#977B58] transition-colors resize-y ${
                      errors.brief ? 'border-red-500' : 'border-[#D8D0C3] dark:border-white/20'
                    }`}
                  />
                  {errors.brief && (
                    <p className="text-xs text-red-500 mt-1 font-mono">{errors.brief}</p>
                  )}
                </div>

                <div className="pt-4">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 text-xs font-mono uppercase tracking-widest font-semibold text-[#F4F1EB] dark:text-[#121311] bg-[#20221F] dark:bg-[#F4F1EB] hover:bg-[#68705C] dark:hover:bg-[#D8D0C3] disabled:opacity-60 transition-colors rounded-sm cursor-pointer shadow-md"
                  >
                    {isSubmitting ? 'Validating Enquiry...' : 'Submit Project Enquiry →'}
                  </button>
                </div>

              </form>
            )}

          </div>

          {/* Direct Contact Sidebar (Spacious) */}
          <div className="lg:col-span-4 space-y-10">
            <div className="bg-[#FAF8F5] dark:bg-[#1A1C19] border border-[#D8D0C3] dark:border-white/10 p-8 space-y-8">
              <h3 className="text-2xl font-serif text-[#20221F] dark:text-white pb-4 border-b border-[#D8D0C3] dark:border-white/10">
                Direct Contact
              </h3>
              
              <div className="space-y-6 text-xs text-[#20221F]/80 dark:text-white/70 font-mono">
                <div className="space-y-1">
                  <span className="uppercase text-[#20221F]/50 dark:text-white/40 block">Email Inquiries</span>
                  <a href="mailto:conversations@dreambuilt-architecture.com" className="font-medium text-[#20221F] dark:text-white hover:text-[#977B58] text-sm">
                    conversations@dreambuilt-architecture.com
                  </a>
                </div>

                <div className="space-y-1">
                  <span className="uppercase text-[#20221F]/50 dark:text-white/40 block">Studio Hours</span>
                  <span className="text-[#20221F] dark:text-white block">Monday to Friday: 09:00 – 18:00</span>
                  <span className="text-[#20221F]/60 dark:text-white/50 block text-[11px]">Consultations arranged by appointment</span>
                </div>

                <div className="space-y-1">
                  <span className="uppercase text-[#20221F]/50 dark:text-white/40 block">Response Standard</span>
                  <span className="text-[#20221F] dark:text-white leading-relaxed block">We respond to new briefs within two business days.</span>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};
