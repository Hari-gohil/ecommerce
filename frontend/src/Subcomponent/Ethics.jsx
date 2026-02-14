import React from "react";

const Ethics = () => {
  // Core ethical principles for dynamic rendering
  const ethicalPillars = [
    {
      title: "Transparency",
      description: "Clear, honest communication in every interaction",
      icon: "fa-regular fa-eye",
      color: "from-blue-50 to-white",
      border: "border-blue-100/70",
      iconBg: "bg-blue-100",
      iconColor: "text-blue-700",
    },
    {
      title: "Accountability",
      description: "Owning our impact and continuous improvement",
      icon: "fa-regular fa-clipboard",
      color: "from-amber-50 to-white",
      border: "border-amber-100/70",
      iconBg: "bg-amber-100",
      iconColor: "text-amber-700",
    },
    {
      title: "Integrity",
      description: "Doing the right thing, even when no one watches",
      icon: "fa-regular fa-scale-balanced",
      color: "from-emerald-50 to-white",
      border: "border-emerald-100/70",
      iconBg: "bg-emerald-100",
      iconColor: "text-emerald-700",
    },
    {
      title: "Fairness",
      description: "Equal opportunities for customers and sellers",
      icon: "fa-regular fa-hand-peace",
      color: "from-indigo-50 to-white",
      border: "border-indigo-100/70",
      iconBg: "bg-indigo-100",
      iconColor: "text-indigo-700",
    },
    {
      title: "Respect",
      description: "Valuing every voice in our marketplace",
      icon: "fa-regular fa-heart",
      color: "from-rose-50 to-white",
      border: "border-rose-100/70",
      iconBg: "bg-rose-100",
      iconColor: "text-rose-700",
    },
    {
      title: "Responsibility",
      description: "Sustainable growth for communities and planet",
      icon: "fa-regular fa-seedling",
      color: "from-teal-50 to-white",
      border: "border-teal-100/70",
      iconBg: "bg-teal-100",
      iconColor: "text-teal-700",
    },
  ];

  // Trust commitments / promises
  const commitments = [
    "Every product listing is reviewed for authenticity",
    "Seller verification with complete transparency",
    "Fair pricing with no hidden fees or surge markups",
    "Customer data protected with enterprise-grade security",
    "Open communication channels for feedback and concerns",
    "Continuous improvement through ethical audits",
  ];

  return (
    <div className="bg-gradient-to-b from-slate-50 to-white font-sans antialiased relative">
      {/* Subtle ethical texture - trust signal */}
      <div
        className="fixed inset-0 opacity-[0.015] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 5 L55 30 L30 55 L5 30 Z' fill='none' stroke='%232563eb' stroke-width='0.3' opacity='0.2'/%3E%3C/svg%3E")`,
        }}
      ></div>

      {/* Main container - premium spacing */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 lg:py-20">
        {/* ===== HERO SECTION - Integrity First ===== */}
        <div className="relative bg-gradient-to-br from-white to-blue-50/40 rounded-3xl md:rounded-[3.5rem] p-8 md:p-12 lg:p-16 border border-white/70 shadow-2xl shadow-blue-900/5 overflow-hidden">
          {/* Decorative trust marks - subtle ethical symbol */}
          <span className="absolute -top-16 -left-16 text-[16rem] font-bold text-blue-100/30 select-none leading-none">
            <i className="fa-solid fa-shield-halfling"></i>
          </span>
          <span className="absolute -bottom-16 -right-16 text-[16rem] font-bold text-emerald-100/30 select-none leading-none rotate-12">
            <i className="fa-solid fa-scale-balanced"></i>
          </span>

          <div className="relative z-10 max-w-4xl mx-auto">
            {/* Ethical badge - credibility marker */}
            <div className="flex justify-center mb-8">
              <span className="inline-flex items-center gap-3 px-6 py-2.5 bg-white/90 backdrop-blur-sm rounded-full border border-blue-200 shadow-sm text-base font-semibold text-blue-800">
                <i className="fa-solid fa-circle-check text-blue-600"></i>
                Certified Ethical Marketplace · 2025
              </span>
            </div>

            {/* Main heading with gradient emphasis */}
            <h1 className="text-center text-3xl md:text-4xl lg:text-5xl font-bold leading-tight md:leading-tight text-stone-800">
              <span className="bg-gradient-to-r from-blue-900 to-emerald-800 bg-clip-text text-transparent">
                Our Commitment
              </span>{" "}
              at Mini Mart
            </h1>

            {/* Hero quote - integrity message */}
            <div className="mt-8 relative">
              <i className="fa-solid fa-quote-left absolute -left-6 -top-4 text-4xl text-blue-200/60"></i>
              <p className="text-center text-xl md:text-2xl text-stone-700 max-w-3xl mx-auto font-medium leading-relaxed">
                Trust is the foundation of everything we do. At Mini Mart, we
                believe transparency, accountability, and ethical practices
                create lasting relationships with our customers and partners.
              </p>
            </div>

            <p className="mt-6 text-center text-lg text-stone-600 max-w-3xl mx-auto border-l-4 border-blue-400 pl-6 italic">
              We are committed to doing the right thing—always. By putting
              integrity at the heart of our platform, we strive to build a
              reliable digital marketplace where every interaction reflects
              honesty, respect, and responsibility.
            </p>

            {/* Trust indicators - micro interactions */}
            <div className="flex flex-wrap justify-center gap-3 mt-8">
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-lg border border-stone-200 shadow-sm text-sm">
                <i className="fa-solid fa-lock text-emerald-600"></i> 256-bit
                encrypted
              </span>
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-lg border border-stone-200 shadow-sm text-sm">
                <i className="fa-solid fa-file-shield text-blue-600"></i>{" "}
                Verified sellers
              </span>
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-lg border border-stone-200 shadow-sm text-sm">
                <i className="fa-solid fa-hand-holding-heart text-amber-600"></i>{" "}
                Fair trade assured
              </span>
            </div>
          </div>
        </div>

        {/* ===== OVERVIEW SECTION - Mission & Values ===== */}
        <div className="mt-24 md:mt-28 lg:mt-32">
          {/* Section header with ethical design language */}
          <div className="flex flex-wrap items-end justify-between gap-4 mb-12">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 bg-blue-600 rounded-2xl flex items-center justify-center text-white shadow-lg">
                <i className="fa-regular fa-compass text-2xl"></i>
              </div>
              <div>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-stone-800">
                  Overview
                </h2>
                <p className="text-lg text-stone-500 mt-1">
                  Our ethical compass · since 2015
                </p>
              </div>
            </div>
            <span className="px-6 py-3 bg-gradient-to-r from-blue-600 to-emerald-600 rounded-full text-white font-semibold shadow-md flex items-center gap-2">
              <i className="fa-regular fa-star"></i>
              Trust Score 4.9/5
            </span>
          </div>

          {/* Two-column layout: mission statement + highlights */}
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
            {/* LEFT: Rich editorial content with dropcap */}
            <div className="space-y-6 text-stone-700 text-base md:text-lg leading-relaxed">
              <div className="flex items-start gap-3">
                <span className="text-7xl font-bold text-blue-700/20 mt-2 mr-1 font-serif leading-none">
                  M
                </span>
                <p className="pt-2 font-medium">
                  At Mini Mart, our mission is to make everyday shopping simple,
                  reliable, and accessible for everyone. While growth and
                  innovation drive us forward, we believe that how we grow
                  matters just as much as what we achieve.
                </p>
              </div>

              <div className="pl-6 border-l-4 border-blue-500/70 bg-gradient-to-r from-blue-50/60 to-transparent p-5 rounded-r-2xl">
                <p className="italic">
                  True success comes from doing the right thing. That’s why
                  every decision we make is guided by honesty, responsibility,
                  and respect for our customers, sellers, and communities. We
                  are committed to building a digital marketplace rooted in
                  transparency and fairness.
                </p>
              </div>

              <p>
                Our foundation is built on trust. By embracing ethical practices
                and open communication, we create meaningful relationships with
                everyone we serve. We encourage accountability, continuous
                improvement, and speaking up whenever something doesn’t feel
                right.
              </p>

              <div className="bg-white p-6 rounded-2xl border border-stone-200/80 shadow-md">
                <div className="flex gap-4">
                  <i className="fa-solid fa-quote-right text-3xl text-blue-500/30"></i>
                  <p className="font-semibold text-stone-800">
                    Integrity defines who we are at Mini Mart. Our values shape
                    our vision, inspire our team, and help us create positive
                    impact—empowering businesses, delighting customers, and
                    contributing to India’s evolving digital economy.
                  </p>
                </div>
              </div>

              {/* Ethics hotline - static trust signal */}
              <div className="flex items-center gap-4 pt-2">
                <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center text-amber-700">
                  <i className="fa-regular fa-message text-xl"></i>
                </div>
                <div>
                  <p className="font-semibold text-stone-800">
                    Ethics Helpline
                  </p>
                  <p className="text-sm text-stone-500">
                    Confidential · speakup@minimart.com
                  </p>
                </div>
              </div>
            </div>

            {/* RIGHT: Ethical pillars grid + commitments */}
            <div className="space-y-8">
              {/* Core ethical principles - 6 cards */}
              <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-6 md:p-7 border border-stone-200/70 shadow-xl">
                <h3 className="text-xl font-semibold text-stone-800 flex items-center gap-2 border-b border-stone-200 pb-4 mb-5">
                  <i className="fa-regular fa-diamond text-blue-600"></i>
                  Our Ethical Pillars
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {ethicalPillars.map((pillar, index) => (
                    <div
                      key={index}
                      className={`bg-gradient-to-br ${pillar.color} p-5 rounded-xl border ${pillar.border} transition-all duration-200 hover:shadow-lg hover:scale-[1.02] group`}
                    >
                      <div
                        className={`w-10 h-10 rounded-full ${pillar.iconBg} flex items-center justify-center ${pillar.iconColor} mb-3 group-hover:scale-110 transition`}
                      >
                        <i className={pillar.icon}></i>
                      </div>
                      <h4 className="font-bold text-stone-800">
                        {pillar.title}
                      </h4>
                      <p className="text-sm text-stone-600 mt-1">
                        {pillar.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Trust commitments - checklist style */}
              <div className="bg-gradient-to-br from-slate-50 to-white p-7 rounded-3xl border border-stone-200 shadow-lg">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-700">
                    <i className="fa-regular fa-clipboard-check"></i>
                  </div>
                  <h3 className="text-xl font-semibold text-stone-800">
                    Our Promises
                  </h3>
                </div>

                <div className="space-y-3">
                  {commitments.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <i className="fa-solid fa-circle-check text-emerald-600 mt-1 text-sm"></i>
                      <span className="text-stone-700">{item}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-6 pt-5 border-t border-dashed border-stone-200 text-sm text-stone-500 flex items-center gap-2">
                  <i className="fa-solid fa-shield text-blue-600"></i>
                  <span>Third-party audited annually · ISO 37001</span>
                </div>
              </div>
            </div>
          </div>

          {/* ===== BOTTOM BANNER - Ethical call to action ===== */}
          <div className="mt-20 bg-gradient-to-r from-blue-900 via-indigo-900 to-emerald-900 rounded-3xl p-8 md:p-10 border border-white/20 shadow-2xl relative overflow-hidden">
            {/* Decorative pattern */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-emerald-500/5 rounded-full blur-3xl"></div>

            <div className="relative flex flex-col md:flex-row justify-between items-center gap-6">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-white/20 backdrop-blur rounded-2xl flex items-center justify-center text-white border border-white/30">
                  <i className="fa-regular fa-handshake text-2xl"></i>
                </div>
                <div>
                  <h4 className="text-2xl font-bold text-white">
                    Ethics is our business model
                  </h4>
                  <p className="text-blue-100 max-w-xl">
                    We're building India's most trusted digital marketplace —
                    transparent, fair, and accountable.
                  </p>
                </div>
              </div>

              <span className="bg-white px-8 py-4 rounded-full text-blue-900 font-bold shadow-lg flex items-center gap-3 whitespace-nowrap hover:bg-blue-50 transition cursor-default">
                <i className="fa-regular fa-circle-check text-lg"></i>
                2025 Ethics Report
                <i className="fa-solid fa-arrow-right-long ml-1"></i>
              </span>
            </div>
          </div>

          {/* Footer - ethical signature */}
          <div className="mt-12 text-xs text-stone-400 text-center border-t border-stone-200/60 pt-8 flex justify-center items-center gap-4">
            <i className="fa-solid fa-scale-balanced text-blue-400"></i>
            <span>transparency · accountability · integrity · fairness</span>
            <i className="fa-solid fa-scale-balanced text-blue-400"></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ethics;