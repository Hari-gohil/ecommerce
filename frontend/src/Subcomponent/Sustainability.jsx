import React from "react";

const Sustainability = () => {
  // Sustainability initiatives data
  const initiatives = [
    {
      title: "Eco-Friendly Packaging",
      description: "100% plastic-free, FSC-certified packaging materials across all shipments. Compostable mailers and recycled paper tape.",
      icon: "fa-regular fa-box",
      color: "from-emerald-50 to-white",
      border: "border-emerald-100",
      iconBg: "bg-emerald-100",
      iconColor: "text-emerald-700",
      metric: "800 tons",
      metricLabel: "plastic eliminated",
    },
    {
      title: "Green Logistics",
      description: "Electric vehicle fleet for last-mile delivery, route optimization to reduce carbon footprint, and carbon offset partnerships.",
      icon: "fa-regular fa-truck",
      color: "from-blue-50 to-white",
      border: "border-blue-100",
      iconBg: "bg-blue-100",
      iconColor: "text-blue-700",
      metric: "60%",
      metricLabel: "lower emissions",
    },
    {
      title: "Responsible Operations",
      description: "Energy-efficient warehouses, solar-powered fulfillment centers, and zero-waste initiatives across our facilities.",
      icon: "fa-regular fa-solar-panel",
      color: "from-amber-50 to-white",
      border: "border-amber-100",
      iconBg: "bg-amber-100",
      iconColor: "text-amber-700",
      metric: "45%",
      metricLabel: "renewable energy",
    },
    {
      title: "Seller Sustainability",
      description: "Training and incentives for eco-friendly practices, sustainable sourcing guidelines, and green certification support.",
      icon: "fa-regular fa-handshake",
      color: "from-teal-50 to-white",
      border: "border-teal-100",
      iconBg: "bg-teal-100",
      iconColor: "text-teal-700",
      metric: "2,500+",
      metricLabel: "green sellers",
    },
    {
      title: "Community Impact",
      description: "Tree plantation drives, waste management workshops, and environmental education programs in local communities.",
      icon: "fa-regular fa-tree",
      color: "from-green-50 to-white",
      border: "border-green-100",
      iconBg: "bg-green-100",
      iconColor: "text-green-700",
      metric: "50,000+",
      metricLabel: "trees planted",
    },
    {
      title: "Circular Commerce",
      description: "Product recycling programs, refurbished electronics marketplace, and take-back initiatives for used goods.",
      icon: "fa-regular fa-arrows-rotate",
      color: "from-purple-50 to-white",
      border: "border-purple-100",
      iconBg: "bg-purple-100",
      iconColor: "text-purple-700",
      metric: "120 tons",
      metricLabel: "e-waste recycled",
    },
  ];

  // Sustainability goals / timeline
  const goals = [
    { year: "2025", target: "100% plastic-free packaging", status: "achieved", icon: "fa-regular fa-circle-check" },
    { year: "2026", target: "50% EV fleet for last-mile delivery", status: "in-progress", icon: "fa-regular fa-bolt" },
    { year: "2027", target: "Carbon neutral operations", status: "in-progress", icon: "fa-regular fa-leaf" },
    { year: "2030", target: "Net zero emissions across value chain", status: "future", icon: "fa-regular fa-flag" },
  ];

  // Partner logos (placeholder - would be actual logos)
  const partners = [
    { name: "rePurpose Global", focus: "Carbon offset" },
    { name: "FSC", focus: "Sustainable forestry" },
    { name: "Climate Neutral", focus: "Certification" },
    { name: "Swachh Bharat", focus: "Waste management" },
  ];

  return (
    <div className="bg-gradient-to-b from-white to-emerald-50/30 font-sans antialiased relative">
      {/* Subtle leaf pattern background */}
      <div
        className="fixed inset-0 opacity-[0.02] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M40 20 L55 40 L40 60 L25 40 Z' fill='none' stroke='%2310b981' stroke-width='0.5' opacity='0.2'/%3E%3C/svg%3E")`,
        }}
      ></div>

      {/* Main container - premium spacing */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 lg:py-20">
        
        {/* ===== HERO SECTION - Mission Statement ===== */}
        <div className="relative bg-gradient-to-br from-white via-emerald-50/30 to-teal-50/30 rounded-3xl md:rounded-[3.5rem] p-8 md:p-12 lg:p-16 border border-white/70 shadow-2xl shadow-emerald-900/10 overflow-hidden">
          {/* Decorative elements - nature inspired */}
          <span className="absolute -top-24 -right-24 text-[18rem] font-bold text-emerald-100/30 select-none leading-none rotate-12">
            <i className="fa-regular fa-leaf"></i>
          </span>
          <span className="absolute -bottom-24 -left-24 text-[18rem] font-bold text-teal-100/30 select-none leading-none -rotate-12">
            <i className="fa-regular fa-globe"></i>
          </span>

          <div className="relative z-10 max-w-4xl mx-auto text-center">
            {/* Sustainability badge */}
            <div className="flex justify-center mb-8">
              <span className="inline-flex items-center gap-3 px-6 py-2.5 bg-white/90 backdrop-blur-sm rounded-full border border-emerald-200 shadow-sm text-base font-semibold text-emerald-800">
                <i className="fa-solid fa-seedling text-emerald-600"></i>
                Committed to a greener future · Since 2015
              </span>
            </div>

            {/* Main quote with gradient emphasis */}
            <div className="relative">
              <i className="fa-solid fa-quote-left absolute -left-8 -top-4 text-5xl text-emerald-200/60"></i>
              <h1 className="text-2xl md:text-3xl lg:text-4xl font-medium leading-relaxed md:leading-tight text-stone-800">
                <span className="bg-gradient-to-r from-emerald-800 to-teal-700 bg-clip-text text-transparent font-bold">
                  At Mini Mart, everyone plays a role
                </span>{" "}
                in shaping a better future. We believe digital commerce can be a powerful force for good—supporting local businesses, strengthening communities, and creating meaningful change.
              </h1>
            </div>
            
            <p className="mt-8 text-lg md:text-xl text-stone-600 max-w-3xl mx-auto border-l-4 border-emerald-400 pl-6 italic text-left">
              Our mission is to grow responsibly, care for people, and build a platform that contributes positively to society and the world around us.
            </p>

            {/* Impact counter badges */}
            <div className="flex flex-wrap justify-center gap-4 mt-10">
              <div className="bg-white px-6 py-4 rounded-xl border border-stone-200 shadow-sm flex items-center gap-3">
                <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-700">
                  <i className="fa-regular fa-box text-xl"></i>
                </div>
                <div className="text-left">
                  <p className="text-2xl font-bold text-stone-800">800+</p>
                  <p className="text-xs text-stone-500">tons plastic-free</p>
                </div>
              </div>
              <div className="bg-white px-6 py-4 rounded-xl border border-stone-200 shadow-sm flex items-center gap-3">
                <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-700">
                  <i className="fa-regular fa-tree text-xl"></i>
                </div>
                <div className="text-left">
                  <p className="text-2xl font-bold text-stone-800">50k+</p>
                  <p className="text-xs text-stone-500">trees planted</p>
                </div>
              </div>
              <div className="bg-white px-6 py-4 rounded-xl border border-stone-200 shadow-sm flex items-center gap-3">
                <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-700">
                  <i className="fa-regular fa-truck-bolt text-xl"></i>
                </div>
                <div className="text-left">
                  <p className="text-2xl font-bold text-stone-800">60%</p>
                  <p className="text-xs text-stone-500">lower emissions</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ===== SUSTAINABILITY SECTION - Main content ===== */}
        <div className="mt-24 md:mt-28 lg:mt-32">
          {/* Section header with brand identity */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 bg-gradient-to-br from-emerald-600 to-teal-600 rounded-2xl flex items-center justify-center text-white shadow-lg">
                <i className="fa-regular fa-leaf text-2xl"></i>
              </div>
              <div>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-stone-800">
                  Sustainability
                </h2>
                <p className="text-lg text-stone-500 mt-1">Our commitment to people and planet</p>
              </div>
            </div>
            
            {/* SDG badge */}
            <span className="px-5 py-3 bg-white rounded-xl border border-stone-200 shadow-sm flex items-center gap-2 w-fit">
              <i className="fa-regular fa-circle-check text-emerald-600"></i>
              <span className="font-semibold">UN SDG aligned</span>
            </span>
          </div>

          {/* Two-column layout: Mission statement + goals */}
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16">
            {/* LEFT: Rich editorial content */}
            <div className="space-y-6 text-stone-700 text-base md:text-lg leading-relaxed">
              <div className="flex items-start gap-3">
                <span className="text-7xl font-bold text-emerald-600/20 mt-2 mr-1 font-serif leading-none">S</span>
                <p className="pt-2 font-medium text-stone-800">
                  At Mini Mart, we believe in using the power of digital commerce to create positive impact for people and the planet. 
                  Our mission goes beyond convenience—we are committed to building value responsibly while contributing to a healthier 
                  society and a greener future.
                </p>
              </div>

              <p className="text-stone-600">
                Sustainability is embedded into our business approach. We continuously work to integrate responsible practices 
                across our operations, focusing on long-term impact through innovation, collaboration, and meaningful partnerships.
              </p>

              {/* Highlight box - eco packaging */}
              <div className="bg-gradient-to-r from-emerald-50 to-teal-50/50 p-6 rounded-2xl border-l-8 border-emerald-500 shadow-md">
                <div className="flex gap-4">
                  <i className="fa-regular fa-box text-3xl text-emerald-600"></i>
                  <div>
                    <h4 className="font-bold text-lg text-stone-800 mb-1">Eco-friendly packaging initiative</h4>
                    <p className="text-stone-600">
                      We are taking steps toward building a responsible value chain by reducing environmental impact across logistics 
                      and operations. Our initiatives include promoting eco-friendly packaging, supporting energy-efficient solutions, 
                      encouraging responsible waste management, and working closely with our partners to adopt sustainable practices.
                    </p>
                  </div>
                </div>
              </div>

              <p className="text-stone-600">
                As online shopping continues to evolve, Mini Mart aims to make sustainability accessible—helping customers make 
                informed choices while supporting sellers who care about ethical and environmentally conscious business.
              </p>

              <div className="bg-white p-6 rounded-2xl border border-stone-200 shadow-md">
                <div className="flex gap-4">
                  <i className="fa-solid fa-quote-right text-3xl text-emerald-500/30"></i>
                  <p className="font-semibold text-stone-800 italic">
                    "Through collaboration with communities, partners, and organizations, we strive to create shared value, 
                    encourage learning, and contribute toward a more sustainable digital ecosystem. We recognize that this journey 
                    requires commitment and collective action, and we are dedicated to fostering a culture where everyone moves 
                    forward together."
                  </p>
                </div>
              </div>
            </div>

            {/* RIGHT: Goals + Stats */}
            <div className="space-y-8">
              {/* Sustainability goals timeline */}
              <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-7 border border-stone-200/70 shadow-xl">
                <h3 className="text-xl font-semibold text-stone-800 flex items-center gap-2 border-b border-stone-200 pb-4 mb-5">
                  <i className="fa-regular fa-calendar-circle-plus text-emerald-600"></i>
                  2030 Roadmap
                </h3>
                
                <div className="space-y-5">
                  {goals.map((goal, idx) => (
                    <div key={idx} className="flex items-start gap-4 group">
                      <div className="relative">
                        <div className={`w-12 h-12 rounded-xl flex items-center justify-center 
                          ${goal.status === 'achieved' ? 'bg-emerald-100 text-emerald-700' : 
                            goal.status === 'in-progress' ? 'bg-amber-100 text-amber-700' : 
                            'bg-stone-100 text-stone-500'}`}>
                          <i className={goal.icon}></i>
                        </div>
                        {idx < goals.length - 1 && (
                          <div className="absolute top-12 left-6 w-0.5 h-10 bg-stone-200"></div>
                        )}
                      </div>
                      <div className="flex-1 pb-4">
                        <div className="flex items-center gap-2 mb-1">
                          <span className="font-bold text-stone-800">{goal.year}</span>
                          <span className={`text-xs px-2 py-0.5 rounded-full 
                            ${goal.status === 'achieved' ? 'bg-emerald-100 text-emerald-800' : 
                              goal.status === 'in-progress' ? 'bg-amber-100 text-amber-800' : 
                              'bg-stone-100 text-stone-600'}`}>
                            {goal.status === 'achieved' ? 'Achieved' : 
                             goal.status === 'in-progress' ? 'In progress' : 'Future goal'}
                          </span>
                        </div>
                        <p className="text-stone-700">{goal.target}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Quick stats card */}
              <div className="bg-gradient-to-br from-emerald-900 to-teal-900 rounded-3xl p-7 text-white shadow-xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl"></div>
                <div className="relative z-10">
                  <h4 className="text-lg font-semibold mb-4 flex items-center gap-2">
                    <i className="fa-regular fa-bolt"></i>
                    Our impact so far
                  </h4>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-3xl font-bold">100%</p>
                      <p className="text-xs text-emerald-100 mt-1">Plastic-free owned ops</p>
                    </div>
                    <div>
                      <p className="text-3xl font-bold">45%</p>
                      <p className="text-xs text-emerald-100 mt-1">Renewable energy</p>
                    </div>
                    <div>
                      <p className="text-3xl font-bold">2.5k+</p>
                      <p className="text-xs text-emerald-100 mt-1">Green sellers</p>
                    </div>
                    <div>
                      <p className="text-3xl font-bold">120t</p>
                      <p className="text-xs text-emerald-100 mt-1">E-waste recycled</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ===== INITIATIVES GRID ===== */}
        <div className="mt-20">
          <div className="flex items-center gap-2 mb-8">
            <span className="w-2 h-2 bg-emerald-600 rounded-full"></span>
            <h3 className="text-2xl md:text-3xl font-bold text-stone-800">
              Our sustainability initiatives
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {initiatives.map((item, idx) => (
              <div 
                key={idx} 
                className={`bg-gradient-to-br ${item.color} p-6 rounded-2xl border ${item.border} shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group`}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className={`w-14 h-14 rounded-xl ${item.iconBg} flex items-center justify-center ${item.iconColor} group-hover:scale-110 transition`}>
                    <i className={`${item.icon} text-2xl`}></i>
                  </div>
                  <span className="bg-white px-3 py-1 rounded-full text-xs font-semibold text-emerald-700 border border-emerald-200">
                    {item.metric}
                  </span>
                </div>
                <h4 className="text-xl font-bold text-stone-800 mb-2">{item.title}</h4>
                <p className="text-stone-600 text-sm leading-relaxed mb-3">
                  {item.description}
                </p>
                <p className="text-xs text-emerald-700 font-medium">
                  {item.metricLabel}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* ===== PARTNERS SECTION ===== */}
        <div className="mt-20 bg-white rounded-3xl p-8 md:p-10 border border-stone-200 shadow-lg">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-stone-800 mb-2">Collaborating for impact</h3>
            <p className="text-stone-600 max-w-2xl mx-auto">
              We work with leading organizations to accelerate our sustainability journey
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {partners.map((partner, idx) => (
              <div key={idx} className="text-center p-4">
                <div className="w-16 h-16 bg-stone-100 rounded-2xl flex items-center justify-center mx-auto mb-3 text-stone-700">
                  <i className="fa-regular fa-building text-2xl"></i>
                </div>
                <p className="font-semibold text-stone-800">{partner.name}</p>
                <p className="text-xs text-stone-500 mt-1">{partner.focus}</p>
              </div>
            ))}
          </div>
        </div>

        {/* ===== CALL TO ACTION BANNER ===== */}
        <div className="mt-20 bg-gradient-to-r from-emerald-800 via-teal-800 to-emerald-800 rounded-3xl p-8 md:p-12 text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-emerald-600/20 rounded-full blur-3xl"></div>
          
          <div className="relative z-10 flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex items-center gap-6">
              <div className="w-20 h-20 bg-white/10 backdrop-blur rounded-2xl flex items-center justify-center text-white border border-white/30">
                <i className="fa-regular fa-hand-holding-heart text-3xl"></i>
              </div>
              <div>
                <h4 className="text-2xl md:text-3xl font-bold">Join our green journey</h4>
                <p className="text-emerald-100 text-lg max-w-xl mt-1">
                  Every order, every partnership, every step counts.
                </p>
              </div>
            </div>
            
            <div className="flex gap-4">
              <span className="bg-white/20 backdrop-blur px-6 py-3 rounded-full text-white font-semibold border border-white/30 flex items-center gap-2">
                <i className="fa-regular fa-file-pdf"></i>
                Sustainability Report 2025
              </span>
              <span className="bg-white px-6 py-3 rounded-full text-emerald-900 font-bold shadow-lg flex items-center gap-2">
                <i className="fa-regular fa-leaf"></i>
                Take action
              </span>
            </div>
          </div>
        </div>

        {/* ===== FOOTER NOTE ===== */}
        <div className="mt-12 text-center text-sm text-stone-500 border-t border-stone-200 pt-8">
          <div className="flex flex-wrap items-center justify-center gap-4">
            <span>© 2025 Mini Mart · Sustainability</span>
            <span className="w-1 h-1 bg-stone-300 rounded-full"></span>
            <span className="flex items-center gap-1">
              <i className="fa-regular fa-certificate text-emerald-600"></i>
              B Corp pending · 2026
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sustainability;