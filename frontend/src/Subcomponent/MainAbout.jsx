import React from "react";

const MainAbout = () => {
  // Key milestones / journey data
  const milestones = [
    { year: "2015", event: "Mini Mart founded with a vision to simplify local commerce", icon: "fa-regular fa-store" },
    { year: "2018", event: "Expanded to 50+ cities, 1000+ seller partnerships", icon: "fa-regular fa-city" },
    { year: "2021", event: "Launched secure digital payments & express delivery", icon: "fa-regular fa-bolt" },
    { year: "2024", event: "Empowering 10,000+ small businesses across India", icon: "fa-regular fa-indian-rupee-sign" },
  ];

  // Core pillars / values
  const pillars = [
    { title: "Customer First", description: "Every decision starts with what's best for our customers", icon: "fa-regular fa-heart", color: "from-rose-50 to-white", border: "border-rose-100", iconBg: "bg-rose-100", iconColor: "text-rose-600" },
    { title: "Innovation", description: "Smarter, faster solutions through continuous improvement", icon: "fa-regular fa-lightbulb", color: "from-amber-50 to-white", border: "border-amber-100", iconBg: "bg-amber-100", iconColor: "text-amber-600" },
    { title: "Inclusivity", description: "Opportunities for every seller, every community", icon: "fa-regular fa-users", color: "from-blue-50 to-white", border: "border-blue-100", iconBg: "bg-blue-100", iconColor: "text-blue-600" },
    { title: "Reliability", description: "Secure payments, trusted delivery, seamless experience", icon: "fa-regular fa-shield", color: "from-emerald-50 to-white", border: "border-emerald-100", iconBg: "bg-emerald-100", iconColor: "text-emerald-600" },
  ];

  // Leadership team (founder + vision)
  const leadership = [
    { name: "Gohil Harikrushan", role: "Founder & CEO", quote: "Building technology that empowers every local business to thrive in the digital age.", image: "GH" },
  ];

  return (
    <div className="bg-gradient-to-b from-white to-stone-50/80 font-sans antialiased relative">
      {/* Subtle brand pattern - e-commerce texture */}
      <div className="fixed inset-0 opacity-[0.02] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M40 10 L70 40 L40 70 L10 40 Z' fill='none' stroke='%232563eb' stroke-width='0.3' opacity='0.2'/%3E%3C/svg%3E")`,
        }}>
      </div>

      {/* Main container - premium spacing */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 lg:py-20">
        
        {/* ===== FOUNDER / CEO SECTION - Personal brand statement ===== */}
        <div className="relative bg-gradient-to-br from-white via-blue-50/20 to-indigo-50/20 rounded-3xl md:rounded-[3.5rem] p-8 md:p-12 lg:p-16 border border-white/70 shadow-2xl shadow-stone-200/40 overflow-hidden">
          {/* Decorative elements - brand marks */}
          <span className="absolute -top-24 -right-24 text-[18rem] font-bold text-blue-100/20 select-none leading-none rotate-12">
            <i className="fa-solid fa-quote-right"></i>
          </span>
          <span className="absolute -bottom-24 -left-24 text-[18rem] font-bold text-emerald-100/20 select-none leading-none -rotate-12">
            <i className="fa-solid fa-store"></i>
          </span>

          <div className="relative z-10 flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
            {/* Founder visual - monogram/avatar with premium treatment */}
            <div className="relative shrink-0">
              <div className="w-36 h-36 md:w-44 md:h-44 bg-gradient-to-br from-blue-600 to-emerald-600 rounded-3xl rotate-3 shadow-2xl flex items-center justify-center text-white border-4 border-white/30">
                <span className="text-5xl md:text-6xl font-bold">GH</span>
              </div>
              <div className="absolute -bottom-3 -right-3 w-14 h-14 bg-amber-400 rounded-full border-4 border-white flex items-center justify-center text-white text-2xl shadow-lg">
                <i className="fa-regular fa-crown"></i>
              </div>
            </div>

            {/* Founder message + title */}
            <div className="flex-1 text-center lg:text-left">
              <div className="flex items-center justify-center lg:justify-start gap-3 mb-3">
                <hr className="w-12 h-0.5 bg-gradient-to-r from-blue-600 to-emerald-600 rounded-full border-0" />
                <span className="text-sm uppercase tracking-[0.3em] font-semibold text-stone-500">Founder & CEO</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-stone-800 mb-4">
                Gohil <span className="bg-gradient-to-r from-blue-700 to-emerald-700 bg-clip-text text-transparent">Harikrushan</span>
              </h1>
              
              <p className="text-xl md:text-2xl text-stone-700 leading-relaxed max-w-3xl font-medium">
                "As a growing digital platform, we are committed to building a sustainable and customer-first ecosystem. 
                We focus on innovation, inclusivity, and continuous improvement to create meaningful experiences for everyone we serve."
              </p>
              
              <div className="mt-6 flex flex-wrap justify-center lg:justify-start gap-4">
                <span className="inline-flex items-center gap-2 px-5 py-2.5 bg-white rounded-full border border-stone-200 shadow-sm text-stone-700">
                  <i className="fa-regular fa-lightbulb text-amber-600"></i> Innovation
                </span>
                <span className="inline-flex items-center gap-2 px-5 py-2.5 bg-white rounded-full border border-stone-200 shadow-sm text-stone-700">
                  <i className="fa-regular fa-heart text-rose-600"></i> Customer-first
                </span>
                <span className="inline-flex items-center gap-2 px-5 py-2.5 bg-white rounded-full border border-stone-200 shadow-sm text-stone-700">
                  <i className="fa-regular fa-arrow-trend-up text-emerald-600"></i> Digital transformation
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* ===== MINI MART GROUP - Company story ===== */}
        <div className="mt-24 md:mt-28 lg:mt-32">
          {/* Section header with brand identity */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-emerald-600 rounded-2xl flex items-center justify-center text-white shadow-lg">
                <i className="fa-regular fa-store text-2xl"></i>
              </div>
              <div>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-stone-800">
                  Mini Mart <span className="text-emerald-600">Group</span>
                </h2>
                <p className="text-lg text-stone-500 mt-1">Empowering local commerce since 2015</p>
              </div>
            </div>
            
            {/* Brand stats - trust signals */}
            <div className="flex gap-3">
              <span className="px-5 py-3 bg-white rounded-xl border border-stone-200 shadow-sm flex items-center gap-2">
                <i className="fa-solid fa-shop text-blue-600"></i>
                <span className="font-semibold">10k+</span> sellers
              </span>
              <span className="px-5 py-3 bg-white rounded-xl border border-stone-200 shadow-sm flex items-center gap-2">
                <i className="fa-solid fa-location-dot text-emerald-600"></i>
                <span className="font-semibold">50+</span> cities
              </span>
            </div>
          </div>

          {/* Two-column layout: company description + impact metrics */}
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16">
            {/* LEFT: Rich editorial story with visual markers */}
            <div className="space-y-6 text-stone-700 text-base md:text-lg leading-relaxed">
              <div className="flex items-start gap-3">
                <span className="text-7xl font-bold text-blue-600/20 mt-2 mr-1 font-serif leading-none">M</span>
                <p className="pt-2 font-medium text-stone-800">
                  Mini Mart is a fast-growing digital commerce platform built to simplify everyday shopping 
                  and empower local sellers through technology.
                </p>
              </div>

              <p className="text-stone-600">
                Founded with the vision of making quality products accessible to everyone, Mini Mart connects 
                customers with a wide range of essentials and lifestyle products across multiple categories.
              </p>

              {/* Highlight box - seller empowerment */}
              <div className="bg-gradient-to-r from-blue-50 to-indigo-50/50 p-6 rounded-2xl border-l-8 border-blue-500 shadow-md">
                <div className="flex gap-4">
                  <i className="fa-regular fa-handshake text-3xl text-blue-600"></i>
                  <div>
                    <h4 className="font-bold text-lg text-stone-800 mb-1">Empowering local businesses</h4>
                    <p className="text-stone-600">
                      We support small businesses, merchants, and entrepreneurs by providing them with a powerful 
                      digital marketplace to grow and reach new customers.
                    </p>
                  </div>
                </div>
              </div>

              <p className="text-stone-600">
                Our platform focuses on seamless experiences, secure payments, reliable delivery, and customer-first 
                innovations that make online shopping easy and affordable.
              </p>

              <p className="font-medium text-stone-700 bg-white p-5 rounded-2xl border border-stone-200 shadow-sm">
                <i className="fa-solid fa-quote-left text-emerald-600 mr-2"></i>
                Driven by innovation and inclusivity, Mini Mart is committed to creating opportunities, strengthening 
                local commerce, and building a smarter retail ecosystem.
              </p>

              <p className="text-stone-600">
                We strive to deliver value at every step—helping customers shop better while enabling sellers to 
                build sustainable businesses in India's evolving digital economy.
              </p>
            </div>

            {/* RIGHT: Visual journey & core pillars */}
            <div className="space-y-8">
              {/* Timeline / milestones */}
              <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-7 border border-stone-200/70 shadow-xl">
                <h3 className="text-xl font-semibold text-stone-800 flex items-center gap-2 border-b border-stone-200 pb-4 mb-5">
                  <i className="fa-regular fa-timeline text-blue-600"></i>
                  Our journey
                </h3>
                
                <div className="space-y-5">
                  {milestones.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-4 group">
                      <div className="relative">
                        <div className="w-12 h-12 bg-gradient-to-br from-stone-100 to-white rounded-xl border border-stone-200 flex items-center justify-center text-stone-700 group-hover:border-blue-300 transition">
                          <i className={item.icon}></i>
                        </div>
                        {idx < milestones.length - 1 && (
                          <div className="absolute top-12 left-6 w-0.5 h-10 bg-stone-200"></div>
                        )}
                      </div>
                      <div className="flex-1 pb-4">
                        <span className="inline-block px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-semibold mb-2">
                          {item.year}
                        </span>
                        <p className="text-stone-700">{item.event}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Core pillars - values grid */}
              <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-7 border border-stone-200/70 shadow-xl">
                <h3 className="text-xl font-semibold text-stone-800 flex items-center gap-2 border-b border-stone-200 pb-4 mb-5">
                  <i className="fa-regular fa-gem text-emerald-600"></i>
                  What drives us
                </h3>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {pillars.map((pillar, idx) => (
                    <div 
                      key={idx} 
                      className={`bg-gradient-to-br ${pillar.color} p-5 rounded-xl border ${pillar.border} transition-all duration-200 hover:shadow-lg hover:-translate-y-1 group`}
                    >
                      <div className={`w-10 h-10 rounded-full ${pillar.iconBg} flex items-center justify-center ${pillar.iconColor} mb-3 group-hover:scale-110 transition`}>
                        <i className={pillar.icon}></i>
                      </div>
                      <h4 className="font-bold text-stone-800">{pillar.title}</h4>
                      <p className="text-sm text-stone-600 mt-1">{pillar.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ===== IMPACT BANNER - Call to action / ecosystem ===== */}
        <div className="mt-20 bg-gradient-to-r from-stone-900 via-blue-900 to-emerald-900 rounded-3xl p-8 md:p-12 border border-white/20 shadow-2xl relative overflow-hidden">
          {/* Decorative glow */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl"></div>
          
          <div className="relative z-10 flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex items-center gap-6">
              <div className="w-20 h-20 bg-white/10 backdrop-blur rounded-2xl flex items-center justify-center text-white border border-white/30">
                <i className="fa-regular fa-indian-rupee-sign text-3xl"></i>
              </div>
              <div>
                <h4 className="text-2xl md:text-3xl font-bold text-white">Building India's digital commerce backbone</h4>
                <p className="text-blue-100 text-lg max-w-xl mt-1">
                  From local kiranas to emerging brands — we're enabling a billion aspirations.
                </p>
              </div>
            </div>
            
            <div className="flex gap-4">
              <span className="bg-white/20 backdrop-blur px-6 py-3 rounded-full text-white font-semibold border border-white/30 flex items-center gap-2">
                <i className="fa-regular fa-store"></i> 10k+ sellers
              </span>
              <span className="bg-white px-6 py-3 rounded-full text-blue-900 font-bold shadow-lg flex items-center gap-2">
                <i className="fa-regular fa-circle-right"></i> Join ecosystem
              </span>
            </div>
          </div>
        </div>

        {/* ===== CLOSING NOTE - Vision statement ===== */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-white rounded-full border border-stone-200 shadow-sm text-stone-600">
            <i className="fa-solid fa-quote-left text-emerald-600"></i>
            <span className="font-medium">Bridging people and technology through trust & innovation</span>
            <i className="fa-solid fa-quote-right text-emerald-600"></i>
          </div>
          <p className="text-sm text-stone-400 mt-6">
            © 2025 Mini Mart Group · Empowering local commerce · Made with ❤️ in India
          </p>
        </div>
      </div>
    </div>
  );
};

export default MainAbout;