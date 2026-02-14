import React from "react";

const Policy = () => {
  // Policy sections data for clean rendering
  const policySections = [
    {
      id: "info-collect",
      title: "Information We Collect",
      icon: "fa-regular fa-clipboard-list",
      content: (
        <>
          <p className="text-stone-600 leading-relaxed">
            You may browse our Platform without providing any personal information. However,
            when you voluntarily contact us or interact with certain features, we may collect
            basic personal details such as your name, email address, or any information you
            choose to share.
          </p>
          <p className="text-stone-600 leading-relaxed mt-3">
            We may also automatically collect limited technical information such as IP address,
            browser type, and device information to help improve platform performance and
            security.
          </p>
        </>
      ),
    },
    {
      id: "use-info",
      title: "Use of Information",
      icon: "fa-regular fa-chart-line",
      content: (
        <>
          <p className="text-stone-600 leading-relaxed mb-2">
            We use collected information to:
          </p>
          <ul className="space-y-2 text-stone-600">
            <li className="flex items-start gap-3">
              <span className="w-5 h-5 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 text-xs mt-0.5 shrink-0">✓</span>
              <span>Improve our website and services</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-5 h-5 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 text-xs mt-0.5 shrink-0">✓</span>
              <span>Respond to your queries or requests</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-5 h-5 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 text-xs mt-0.5 shrink-0">✓</span>
              <span>Analyze usage trends</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-5 h-5 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 text-xs mt-0.5 shrink-0">✓</span>
              <span>Maintain platform security</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-5 h-5 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 text-xs mt-0.5 shrink-0">✓</span>
              <span>Comply with legal obligations</span>
            </li>
          </ul>
          <p className="text-stone-600 leading-relaxed mt-3">
            Your information is used only for legitimate business purposes.
          </p>
        </>
      ),
    },
    {
      id: "cookies",
      title: "Cookies",
      icon: "fa-regular fa-cookie",
      content: (
        <p className="text-stone-600 leading-relaxed">
          Mini Mart may use cookies to enhance user experience and understand website traffic.
          Cookies do not store personal data. You can disable cookies in your browser settings,
          but this may affect some website functionality.
        </p>
      ),
    },
    {
      id: "sharing",
      title: "Sharing of Information",
      icon: "fa-regular fa-handshake",
      content: (
        <>
          <p className="text-stone-600 leading-relaxed font-medium text-emerald-700">
            We do not sell or rent your personal information to third parties.
          </p>
          <p className="text-stone-600 leading-relaxed mt-3 mb-2">
            Information may be shared only:
          </p>
          <ul className="space-y-2 text-stone-600">
            <li className="flex items-start gap-3">
              <span className="w-5 h-5 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600 text-xs mt-0.5 shrink-0">→</span>
              <span>With trusted partners for service support</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-5 h-5 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600 text-xs mt-0.5 shrink-0">→</span>
              <span>To comply with legal requirements</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-5 h-5 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600 text-xs mt-0.5 shrink-0">→</span>
              <span>To prevent fraud or misuse of the Platform</span>
            </li>
          </ul>
          <p className="text-stone-600 leading-relaxed mt-3">
            All sharing is done responsibly and in accordance with applicable laws.
          </p>
        </>
      ),
    },
    {
      id: "external-links",
      title: "Links to External Websites",
      icon: "fa-regular fa-link",
      content: (
        <p className="text-stone-600 leading-relaxed">
          Our Platform may contain links to third-party websites. Mini Mart is not responsible
          for their privacy practices. We encourage users to review external privacy policies
          before sharing information.
        </p>
      ),
    },
    {
      id: "security",
      title: "Security Measures",
      icon: "fa-regular fa-shield",
      content: (
        <p className="text-stone-600 leading-relaxed">
          We maintain reasonable technical and organizational safeguards to protect your data.
          However, no online system is completely secure, and users acknowledge inherent
          internet risks.
        </p>
      ),
    },
    {
      id: "children",
      title: "Children's Privacy",
      icon: "fa-regular fa-family",
      content: (
        <p className="text-stone-600 leading-relaxed">
          Mini Mart does not knowingly collect personal information from individuals under
          18 years of age. If such information is unintentionally collected, it will be
          deleted upon notification.
        </p>
      ),
    },
    {
      id: "retention",
      title: "Data Retention",
      icon: "fa-regular fa-clock",
      content: (
        <p className="text-stone-600 leading-relaxed">
          Personal data is retained only as long as necessary for business or legal purposes.
        </p>
      ),
    },
    {
      id: "rights",
      title: "Your Rights",
      icon: "fa-regular fa-scale-balanced",
      content: (
        <p className="text-stone-600 leading-relaxed">
          You may request access, correction, or deletion of your personal data by contacting
          us. We aim to respond within a reasonable timeframe.
        </p>
      ),
    },
    {
      id: "consent",
      title: "Your Consent",
      icon: "fa-regular fa-check-circle",
      content: (
        <p className="text-stone-600 leading-relaxed">
          By using our Platform, you consent to the collection and use of information as
          outlined in this policy.
        </p>
      ),
    },
    {
      id: "changes",
      title: "Changes to This Policy",
      icon: "fa-regular fa-pen-to-square",
      content: (
        <p className="text-stone-600 leading-relaxed">
          Mini Mart may update this Privacy Policy from time to time. Changes will be posted
          on this page.
        </p>
      ),
    },
  ];

  // Last updated date
  const lastUpdated = "March 15, 2025";

  return (
    <div className="bg-gradient-to-b from-white to-stone-50 font-sans antialiased">
      {/* Subtle privacy pattern - trust texture */}
      <div
        className="fixed inset-0 opacity-[0.02] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 10 L50 30 L30 50 L10 30 Z' fill='none' stroke='%232563eb' stroke-width='0.3' opacity='0.2'/%3E%3C/svg%3E")`,
        }}
      ></div>

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 lg:py-20">
        {/* ===== HEADER SECTION - Trust badge + title ===== */}
        <div className="text-center mb-12 md:mb-16">
          {/* Privacy seal / badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 rounded-full border border-blue-100 mb-6">
            <i className="fa-solid fa-shield text-blue-600"></i>
            <span className="text-sm font-semibold text-blue-800">GDPR Compliant · ISO 27001</span>
          </div>

          {/* Main title with gradient */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-stone-800 mb-4">
            Privacy <span className="bg-gradient-to-r from-blue-700 to-emerald-700 bg-clip-text text-transparent">Policy</span>
          </h1>
          
          {/* Brand signature */}
          <div className="flex items-center justify-center gap-3 text-stone-500">
            <i className="fa-regular fa-store text-xl"></i>
            <span className="text-xl font-medium">Mini Mart</span>
          </div>

          {/* Last updated + trust statement */}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-4 text-sm">
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-lg border border-stone-200 shadow-sm">
              <i className="fa-regular fa-calendar text-blue-600"></i>
              Last updated: {lastUpdated}
            </span>
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-lg border border-stone-200 shadow-sm">
              <i className="fa-regular fa-circle-check text-emerald-600"></i>
              Your privacy matters
            </span>
          </div>
        </div>

        {/* ===== INTRODUCTION CARD - Trust foundation ===== */}
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50/50 rounded-2xl p-6 md:p-8 mb-12 border border-blue-100/50 shadow-md">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center text-white shadow-lg shrink-0 mt-1">
              <i className="fa-regular fa-hand-holding-heart text-xl"></i>
            </div>
            <div>
              <p className="text-stone-700 text-lg leading-relaxed">
                <span className="font-bold text-blue-800">At Mini Mart, we value your trust</span> and are committed to protecting your privacy. 
                This Privacy Policy explains how we collect, use, store, and safeguard your information when you visit or interact 
                with the Mini Mart website (“Platform”).
              </p>
              <div className="mt-4 p-4 bg-white/80 backdrop-blur rounded-xl border-l-4 border-amber-500 text-amber-800">
                <i className="fa-regular fa-circle-info mr-2"></i>
                <span className="font-medium">
                  By accessing or using our Platform, you agree to the terms of this Privacy Policy. 
                  If you do not agree, please refrain from using our services.
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* ===== POLICY SECTIONS GRID - Clean, scannable layout ===== */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {policySections.map((section, index) => (
            <div
              key={section.id}
              className="bg-white rounded-2xl p-6 border border-stone-200/70 shadow-md hover:shadow-lg transition-all duration-200 hover:-translate-y-1 flex flex-col h-full"
            >
              {/* Section header with icon */}
              <div className="flex items-start gap-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-100 to-emerald-100 rounded-xl flex items-center justify-center text-blue-700 shrink-0">
                  <i className={`${section.icon} text-lg`}></i>
                </div>
                <h2 className="text-xl font-bold text-stone-800 pt-1">{section.title}</h2>
              </div>
              
              {/* Section content */}
              <div className="text-stone-600 text-sm md:text-base flex-1">
                {section.content}
              </div>

              {/* Subtle decorative element */}
              <div className="mt-4 pt-3 border-t border-dashed border-stone-200 text-xs text-stone-400 flex justify-end">
                <span>Mini Mart · Privacy</span>
              </div>
            </div>
          ))}
        </div>

        {/* ===== BOTTOM TRUST BANNER - Contact & compliance ===== */}
        <div className="mt-16 bg-gradient-to-r from-stone-800 to-stone-900 rounded-2xl p-8 text-white relative overflow-hidden">
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl"></div>
          
          <div className="relative z-10 flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 bg-white/10 backdrop-blur rounded-xl flex items-center justify-center text-white border border-white/30">
                <i className="fa-regular fa-envelope text-2xl"></i>
              </div>
              <div>
                <h3 className="text-xl font-bold">Questions about your data?</h3>
                <p className="text-stone-300">Our privacy team is here to help — 24/7</p>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-3">
              <span className="bg-white/20 backdrop-blur px-5 py-2.5 rounded-full text-white border border-white/30 flex items-center gap-2 text-sm md:text-base">
                <i className="fa-regular fa-lock"></i>
                privacy@minimart.com
              </span>
              <span className="bg-white px-5 py-2.5 rounded-full text-stone-900 font-semibold flex items-center gap-2 shadow-lg text-sm md:text-base">
                <i className="fa-regular fa-shield"></i>
                Report a concern
              </span>
            </div>
          </div>
        </div>

        {/* ===== FOOTER NOTE - Policy version ===== */}
        <div className="mt-12 text-center text-xs text-stone-400 border-t border-stone-200 pt-8">
          <div className="flex flex-wrap items-center justify-center gap-4">
            <span>© 2025 Mini Mart</span>
            <span className="w-1 h-1 bg-stone-300 rounded-full"></span>
            <span>Version 2.4 · Privacy Policy</span>
            <span className="w-1 h-1 bg-stone-300 rounded-full"></span>
            <span className="flex items-center gap-1">
              <i className="fa-regular fa-certificate text-blue-500"></i>
              Certified secure
            </span>
          </div>
          <p className="mt-4 text-stone-400/80 max-w-2xl mx-auto">
            This policy is legally binding and complies with applicable data protection laws including GDPR and India's Digital Personal Data Protection Act.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Policy;