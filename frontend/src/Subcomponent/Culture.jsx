import React from 'react';

// Culture page – Mini Mart e-commerce brand story
// Fully responsive, rich UI with Tailwind CSS + React + Vite
const Culture = () => {
  // Core values data for clean mapping
  const coreValues = [
    {
      name: 'Innovation',
      icon: 'fa-regular fa-lightbulb',
      description: 'Bold ideas, creative ownership',
      bg: 'from-emerald-50 to-white',
      border: 'border-emerald-100/70',
      iconBg: 'bg-emerald-100',
      iconColor: 'text-emerald-700',
    },
    {
      name: 'Customer Focus',
      icon: 'fa-regular fa-user',
      description: 'Empathy in every decision',
      bg: 'from-sky-50 to-white',
      border: 'border-sky-100/70',
      iconBg: 'bg-sky-100',
      iconColor: 'text-sky-700',
    },
    {
      name: 'Integrity',
      icon: 'fa-regular fa-scale-balanced',
      description: 'Transparent, honest, fair',
      bg: 'from-amber-50 to-white',
      border: 'border-amber-100/70',
      iconBg: 'bg-amber-100',
      iconColor: 'text-amber-700',
    },
    {
      name: 'Collaboration',
      icon: 'fa-regular fa-handshake',
      description: 'Together we rise',
      bg: 'from-indigo-50 to-white',
      border: 'border-indigo-100/70',
      iconBg: 'bg-indigo-100',
      iconColor: 'text-indigo-700',
    },
  ];

  // Team promises / perks
  const promises = [
    'Take ownership of meaningful challenges',
    'Continuously learn and evolve',
    'Work alongside passionate talent',
    'Thrive in supportive environment',
  ];

  return (
    <div className="bg-gradient-to-b from-stone-50 to-amber-50/30 font-sans antialiased">
      {/* Subtle noise texture overlay – optional, adds depth */}
      <div className="fixed inset-0 opacity-[0.02] pointer-events-none" 
           style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.05'/%3E%3C/svg%3E")` }}>
      </div>

      {/* Main container – elegant max-width with generous padding */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 lg:py-20">
        
        {/* ===== HERO SECTION – iconic quote, visual anchor ===== */}
        <div className="relative bg-gradient-to-br from-white to-amber-50/80 rounded-3xl md:rounded-[3.5rem] p-8 md:p-12 lg:p-16 border border-white/70 shadow-2xl shadow-stone-200/40 overflow-hidden">
          {/* Decorative giant quotation marks – pure CSS elegance */}
          <span className="absolute -top-10 left-4 md:left-8 text-[14rem] md:text-[20rem] font-bold text-amber-200/30 select-none leading-none font-serif" aria-hidden="true">“</span>
          <span className="absolute -bottom-24 right-4 md:right-8 text-[14rem] md:text-[20rem] font-bold text-amber-200/20 select-none leading-none font-serif" aria-hidden="true">”</span>
          
          <div className="relative z-10 max-w-4xl mx-auto">
            {/* Culture badge / micro interaction */}
            <div className="flex flex-wrap justify-center gap-2 mb-6">
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-white/90 backdrop-blur-sm rounded-full border border-stone-200 shadow-sm text-sm font-medium text-emerald-800">
                <i className="fa-regular fa-heart text-emerald-600"></i> Respect
              </span>
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-white/90 backdrop-blur-sm rounded-full border border-stone-200 shadow-sm text-sm font-medium text-sky-800">
                <i className="fa-regular fa-users text-sky-600"></i> Inclusion
              </span>
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-white/90 backdrop-blur-sm rounded-full border border-stone-200 shadow-sm text-sm font-medium text-indigo-800">
                <i className="fa-regular fa-handshake text-indigo-600"></i> Collaboration
              </span>
            </div>

            {/* Main quote – with gradient emphasis */}
            <h1 className="text-center text-2xl md:text-3xl lg:text-4xl font-medium leading-relaxed md:leading-tight text-stone-800">
              <span className="bg-gradient-to-r from-emerald-900 to-teal-800 bg-clip-text text-transparent font-bold">
                At Mini Mart,
              </span>{' '}
              our culture is built on respect, inclusion, and collaboration. We celebrate diverse perspectives and create an environment where every team member feels valued and empowered.
            </h1>
            
            <p className="mt-6 text-center text-lg md:text-xl text-stone-600 max-w-3xl mx-auto">
              By putting people at the heart of everything we do, we foster innovation, growth, and a shared commitment to delivering meaningful impact for our customers and communities.
            </p>
          </div>
        </div>

        {/* ===== PEOPLE & CULTURE – editorial + visual grid ===== */}
        <div className="mt-24 md:mt-28 lg:mt-32">
          {/* Header with leaf accent and brand badge */}
          <div className="flex flex-wrap items-end justify-between gap-4 mb-10">
            <div className="flex items-center gap-3">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-stone-800">
                People <span className="text-emerald-700">&</span> Culture
              </h2>
              <i className="fa-solid fa-leaf text-3xl md:text-4xl text-emerald-600/70 ml-1"></i>
            </div>
            <span className="px-5 py-2.5 bg-white border border-stone-200 rounded-full text-sm font-semibold text-emerald-800 shadow-sm flex items-center gap-2">
              <i className="fa-regular fa-circle-check text-emerald-600"></i> 
              Five core values
            </span>
          </div>

          {/* 2-col layout: narrative + values grid */}
          <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
            {/* LEFT COLUMN – rich text storytelling */}
            <div className="lg:col-span-2 space-y-6 text-stone-700 text-base md:text-lg leading-relaxed">
              {/* Dropcap and intro */}
              <div className="flex items-start gap-2">
                <span className="text-6xl font-bold text-emerald-700/20 mt-2 mr-1 font-serif">“</span>
                <p className="first-letter:text-6xl first-letter:font-bold first-letter:text-emerald-800 first-letter:mr-3 first-letter:float-left first-letter:leading-none">
                  At Mini Mart, we are committed to creating value for our customers, partners, team members, and the communities we serve. We believe people do their best work when they are empowered to grow in their own way—whether through creativity, impact, learning, well-being, or leadership.
                </p>
              </div>
              
              {/* Highlighted values block */}
              <div className="pl-6 border-l-4 border-emerald-600/70 bg-gradient-to-r from-emerald-50/80 to-transparent p-5 rounded-r-2xl italic text-stone-700">
                Our people-first culture is guided by core values of{' '}
                <span className="font-semibold text-emerald-800">
                  Innovation, Customer Focus, Integrity, Collaboration, and Inclusion.
                </span>{' '}
                These values shape everything we do and are reflected in our promises to our team.
              </div>
              
              {/* Promises list with icons */}
              <div className="grid sm:grid-cols-2 gap-3 pt-2">
                {promises.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <i className="fa-solid fa-bolt text-emerald-600 mt-1 text-lg"></i>
                    <span className="text-stone-700">{item}</span>
                  </div>
                ))}
              </div>
              
              {/* Final paragraph with icon */}
              <div className="flex gap-3 items-start pt-2">
                <i className="fa-regular fa-building-columns text-emerald-700 mt-1 text-xl shrink-0"></i>
                <p>
                  We strive to build a workplace where diverse ideas are welcomed, contributions are recognized, and everyone feels inspired to make a difference. At Mini Mart, we don’t just build technology — we build careers, connections, and a culture that empowers people to grow together.
                </p>
              </div>
              
              {/* Mini stat badges (trust signals for e‑comm) */}
              <div className="flex flex-wrap gap-3 pt-4">
                <div className="bg-white px-5 py-3 rounded-xl border border-stone-200 shadow-sm flex items-center gap-3">
                  <i className="fa-solid fa-user-check text-emerald-600"></i>
                  <span className="font-medium">87% employee satisfaction</span>
                </div>
                <div className="bg-white px-5 py-3 rounded-xl border border-stone-200 shadow-sm flex items-center gap-3">
                  <i className="fa-solid fa-arrows-spread text-emerald-600"></i>
                  <span className="font-medium">12+ inclusion networks</span>
                </div>
              </div>
            </div>

            {/* RIGHT COLUMN – core values & promises grid (elevated cards) */}
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-6 md:p-7 border border-stone-200/70 shadow-xl shadow-stone-200/30">
              <div className="flex items-center gap-2 border-b border-stone-200 pb-4 mb-5">
                <i className="fa-regular fa-gem text-emerald-700 text-xl"></i>
                <h3 className="text-xl font-semibold text-stone-800">Our promises in action</h3>
              </div>
              
              {/* Core values cards – dynamic from array */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {coreValues.map((value, index) => (
                  <div 
                    key={index} 
                    className={`bg-gradient-to-br ${value.bg} p-5 rounded-2xl border ${value.border} transition-all duration-200 hover:shadow-md hover:scale-[1.02]`}
                  >
                    <div className={`w-10 h-10 rounded-full ${value.iconBg} flex items-center justify-center ${value.iconColor} mb-3`}>
                      <i className={value.icon}></i>
                    </div>
                    <h4 className="font-bold text-stone-800">{value.name}</h4>
                    <p className="text-sm text-stone-600 mt-1">{value.description}</p>
                  </div>
                ))}
                
                {/* Inclusion – spans 2 columns on small+ */}
                <div className="sm:col-span-2 bg-gradient-to-br from-purple-50 to-white p-5 rounded-2xl border border-purple-100/70 flex items-center gap-4 transition-all hover:shadow-md">
                  <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center text-purple-700 shrink-0">
                    <i className="fa-regular fa-heart"></i>
                  </div>
                  <div>
                    <h4 className="font-bold text-stone-800">Inclusion & Belonging</h4>
                    <p className="text-sm text-stone-600">Every voice matters, every story celebrated</p>
                  </div>
                </div>
              </div>
              
              {/* Learning & growth footer */}
              <div className="mt-6 pt-5 border-t border-dashed border-stone-200 text-sm text-stone-500 flex items-center gap-2">
                <i className="fa-solid fa-seedling text-emerald-600"></i>
                <span>Continuous learning · Well-being · Career growth</span>
              </div>
            </div>
          </div>

          {/* ===== COMMUNITY BANNER – e‑commerce brand heart ===== */}
          <div className="mt-16 md:mt-20 bg-gradient-to-r from-stone-100 to-amber-50/80 rounded-3xl p-8 md:p-10 border border-stone-200/60 flex flex-col md:flex-row justify-between items-center gap-6 shadow-lg">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 bg-emerald-800 rounded-2xl flex items-center justify-center text-white shadow-md">
                <i className="fa-regular fa-store text-2xl"></i>
              </div>
              <div>
                <h4 className="text-xl font-bold text-stone-800">More than a workplace</h4>
                <p className="text-stone-600 max-w-xl">
                  We don’t just build technology — we build careers, connections, and a culture that empowers people to grow together.
                </p>
              </div>
            </div>
            
            {/* Static "Join us" badge – e‑comm vibe */}
            <span className="bg-white px-7 py-3.5 rounded-full text-emerald-800 font-semibold border border-emerald-200 shadow-sm flex items-center gap-2 whitespace-nowrap hover:bg-emerald-50 transition cursor-default">
              <i className="fa-regular fa-bag-shopping"></i> 
              Join the team
              <i className="fa-solid fa-arrow-right-long ml-1 text-sm"></i>
            </span>
          </div>
          
          {/* Footer note – culture signature */}
          <div className="mt-12 text-xs text-stone-400 text-center border-t border-stone-200/60 pt-8 flex justify-center items-center gap-3">
            <i className="fa-regular fa-snowflake text-emerald-600/60"></i>
            <span>respect · inclusion · collaboration · since 2015</span>
            <i className="fa-regular fa-snowflake text-emerald-600/60"></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Culture;