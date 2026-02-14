import React from "react";
import { Button } from "../components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../components/ui/card";

const stories = [
  {
    id: 1,
    title: "Revolutionizing Logistics",
    description:
      "How Mini Mart is redefining smart supply chains with technology and faster deliveries.",
    extendedContent:
      "When Mini Mart launched in 2015, same-day delivery was a dream. Today, it's our benchmark. By deploying AI-driven route optimization and partnering with 500+ local fulfillment centers, we've reduced average delivery time from 5 days to under 24 hours. Our dark stores use predictive inventory to stock items before customers even search. The result? 40% faster deliveries and a logistics network that scales with India's ambitions.",
    image: "https://images.unsplash.com/photo-1601598851547-4302969d0614",
    category: "Innovation",
    readTime: "4 min read",
    impact: "40% faster deliveries",
    metrics: [
      { label: "Fulfillment centers", value: "500+" },
      { label: "Cities covered", value: "250+" },
      { label: "Daily shipments", value: "2.5M" },
    ],
    quote: "Speed is no longer a luxury — it's a right.",
    author: "Priya Sharma, Head of Supply Chain",
  },
  {
    id: 2,
    title: "Connecting Communities",
    description:
      "Delivering across cities, towns, and villages while empowering local sellers.",
    extendedContent:
      "For years, small-town sellers lacked access to national markets. Mini Mart changed that. Through Project Kirana Connect, we've onboarded 5,000+ local merchants — from a spice seller in Kolhapur to a handicraft cooperative in Mizoram. These entrepreneurs now reach customers in Mumbai, Delhi, and beyond. We provide logistics, photography, and pricing support at zero upfront cost. Their average monthly revenue has grown 3.5x within six months of joining.",
    image: "https://images.unsplash.com/photo-1580674285054-bed31e145f59",
    category: "Community",
    readTime: "5 min read",
    impact: "5,000+ sellers onboarded",
    metrics: [
      { label: "Tier 2/3 cities", value: "180+" },
      { label: "Avg. revenue growth", value: "3.5x" },
      { label: "Jobs created", value: "12,000+" },
    ],
    quote: "We weren't just selling products — we were building livelihoods.",
    author: "Ravi Menon, Seller Success Lead",
  },
  {
    id: 3,
    title: "Empowering the Future",
    description:
      "Mini Mart's commitment to skills, inclusion, and innovation for a better tomorrow.",
    extendedContent:
      "The Mini Mart Skills Academy launched in 2022 with a single goal: create 100,000 digital commerce careers by 2027. Today, 10,000+ young Indians — over 60% women — have completed certified courses in logistics management, digital marketing, and seller support. Graduates work across our ecosystem; some have launched their own businesses. The program is free, multilingual, and designed with input from NIESBUD and state skill missions.",
    image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d",
    category: "Empowerment",
    readTime: "6 min read",
    impact: "10,000+ youth trained",
    metrics: [
      { label: "Female participation", value: "62%" },
      { label: "Placement rate", value: "78%" },
      { label: "Partner colleges", value: "45+" },
    ],
    quote: "A job is dignity. A skill is freedom.",
    author: "Anjali Desai, CSR Director",
  },
  {
    id: 4,
    title: "Sustainable Commerce",
    description:
      "Building eco-friendly packaging solutions for a greener, cleaner e-commerce future.",
    extendedContent:
      "Every Mini Mart order today ships in 100% plastic-free, FSC-certified packaging. Our switch to compostable mailers and recycled paper tape eliminates 800 tons of plastic waste annually. But we didn't stop there. We're piloting returnable packaging in Bengaluru and partnering with rePurpose Global to offset carbon on every delivery. Customers can now choose 'Eco Delivery' at checkout — slower, but climate-positive.",
    image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09",
    category: "Sustainability",
    readTime: "3 min read",
    impact: "80% plastic-free",
    metrics: [
      { label: "Plastic eliminated", value: "800 tons/yr" },
      { label: "FSC-certified", value: "100%" },
      { label: "Carbon offset", value: "25K tons" },
    ],
    quote: "Green commerce isn't a trend. It's our only future.",
    author: "Meera Nair, Sustainability Officer",
  },
  {
    id: 5,
    title: "Digital Inclusion",
    description:
      "Bringing first-time internet users into the digital economy with simple, trusted tools.",
    extendedContent:
      "Over 2 million Indians made their first online purchase on Mini Mart. Many were hesitant — worried about payments, unfamiliar with apps. We rebuilt our platform in 8 regional languages, introduced cash-on-delivery with zero markup, and launched 'Mini Mart Lite' — a 2MB app for entry-level smartphones. Our voice-search feature in Hindi and Tamil lets users shop without typing. The next billion customers are here, and we're ready.",
    image: "https://images.unsplash.com/photo-1573164713988-8665fc963095",
    category: "Inclusion",
    readTime: "4 min read",
    impact: "2M+ new users",
    metrics: [
      { label: "Regional languages", value: "8" },
      { label: "COD share", value: "65%" },
      { label: "Lite app users", value: "850K" },
    ],
    quote: "The internet belongs to everyone — in every language.",
    author: "Vikram Singh, Product Lead",
  },
  {
    id: 6,
    title: "Seller Success",
    description:
      "From local kirana to national brand — stories of growth on Mini Mart.",
    extendedContent:
      "Meet Ramesh Gupta, who ran a small electronics shop in Lucknow. Two years ago, he joined Mini Mart. Today, his brand 'Gupta Electronics' ships 500 orders daily and employs 12 people. His story isn't unique. Over 1,200 sellers have crossed ₹1 crore in lifetime sales on our platform. We've enabled this through zero-commission Sundays, instant payment settlements, and free catalog photography. Small inventory, big dreams — now within reach.",
    image: "https://images.unsplash.com/photo-1607344645866-009c320b63e0",
    category: "Growth",
    readTime: "7 min read",
    impact: "300% avg. growth",
    metrics: [
      { label: "Cr+ club sellers", value: "1,200+" },
      { label: "Avg. GMV growth", value: "300%" },
      { label: "Instant settlements", value: "₹24Cr/mo" },
    ],
    quote: "We don't just host sellers — we grow with them.",
    author: "Neha Reddy, Merchant Experience",
  },
  {
    id: 7,
    title: "AI for Good",
    description:
      "How machine learning is personalizing shopping for millions.",
    extendedContent:
      "Mini Mart's recommendation engine isn't just about 'what you might like' — it's about reducing choice overload. Our AI learns from browsing patterns, past purchases, and even local festival trends. During Diwali 2024, personalized suggestions drove 35% higher conversion with 40% fewer returns. We're also testing visual search: upload a photo of a product, and our AI finds the closest match. Intelligent, intuitive, and invisible.",
    image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb",
    category: "Technology",
    readTime: "5 min read",
    impact: "35% higher conversion",
    metrics: [
      { label: "Models deployed", value: "12" },
      { label: "Daily predictions", value: "50M+" },
      { label: "Return reduction", value: "40%" },
    ],
    quote: "AI should feel like magic — not math.",
    author: "Arjun Mehta, Chief Data Scientist",
  },
  {
    id: 8,
    title: "Rural Reach",
    description:
      "Taking e-commerce to India's last mile with innovative delivery models.",
    extendedContent:
      "How do you deliver to a village with no street address? Mini Mart's 'Rural POD' network partners with local tea shops, kiranas, and even post offices to serve as pickup points. Customers in 800+ remote villages now collect orders within walking distance. Our hub-and-spoke model uses electric rickshaws for final-mile delivery, cutting costs by 60%. The result: e-commerce, now truly everywhere.",
    image: "https://images.unsplash.com/photo-1605001011156-cbf0b0f67a51",
    category: "Access",
    readTime: "6 min read",
    impact: "800+ villages served",
    metrics: [
      { label: "Pickup points", value: "2,400+" },
      { label: "Last-mile cost", value: "-60%" },
      { label: "EV fleet", value: "350+" },
    ],
    quote: "If you can receive a letter, you can receive an order.",
    author: "Dhruv Kumar, Rural Operations",
  },
  {
    id: 9,
    title: "Women Entrepreneurs",
    description:
      "Building India's largest network of women-led small businesses.",
    extendedContent:
      "When Sunita Devi from Bihar started making pickles at home, she never imagined selling to customers in Chennai. Today, her brand 'Achari' does ₹2.5 lakh monthly on Mini Mart. She's one of 3,500+ women entrepreneurs in our 'SheCommerce' program, which provides zero-commission onboarding, dedicated account managers, and community mentorship. These women aren't just selling — they're employing, inspiring, and leading.",
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e",
    category: "Inclusion",
    readTime: "7 min read",
    impact: "3,500+ women sellers",
    metrics: [
      { label: "Avg. monthly sales", value: "₹1.8L" },
      { label: "Repeat customers", value: "72%" },
      { label: "States represented", value: "22" },
    ],
    quote: "Behind every product is a woman rewriting her future.",
    author: "Kavita Iyer, SheCommerce Lead",
  },
];

const Stories = () => {
  // Featured story (first one)
  const featuredStory = stories[0];
  const remainingStories = stories.slice(1);

  return (
    <div className="bg-gradient-to-b from-white to-stone-50 font-sans antialiased">
      {/* Subtle brand pattern */}
      <div
        className="fixed inset-0 opacity-[0.02] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 10 L50 30 L30 50 L10 30 Z' fill='none' stroke='%232563eb' stroke-width='0.3' opacity='0.2'/%3E%3C/svg%3E")`,
        }}
      ></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 lg:py-20">
        {/* ===== HEADER SECTION ===== */}
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-50 rounded-full border border-amber-200 mb-6">
            <i className="fa-regular fa-sparkles text-amber-600"></i>
            <span className="text-sm font-semibold text-amber-800">
              Impact Stories · 2025
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-stone-800 mb-4">
            Stories that{" "}
            <span className="bg-gradient-to-r from-blue-700 to-emerald-700 bg-clip-text text-transparent">
              inspire
            </span>
          </h1>

          <p className="text-xl text-stone-600 max-w-3xl mx-auto">
            From logistics innovation to community empowerment — discover how
            Mini Mart is shaping the future of digital commerce.
          </p>

          {/* Stats row */}
          <div className="flex flex-wrap justify-center gap-6 mt-10">
            <div className="flex items-center gap-3 bg-white px-6 py-3 rounded-xl border border-stone-200 shadow-sm">
              <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-600">
                <i className="fa-regular fa-store"></i>
              </div>
              <div className="text-left">
                <p className="text-2xl font-bold text-stone-800">50k+</p>
                <p className="text-xs text-stone-500">Sellers empowered</p>
              </div>
            </div>
            <div className="flex items-center gap-3 bg-white px-6 py-3 rounded-xl border border-stone-200 shadow-sm">
              <div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-600">
                <i className="fa-regular fa-location-dot"></i>
              </div>
              <div className="text-left">
                <p className="text-2xl font-bold text-stone-800">500+</p>
                <p className="text-xs text-stone-500">Cities & towns</p>
              </div>
            </div>
            <div className="flex items-center gap-3 bg-white px-6 py-3 rounded-xl border border-stone-200 shadow-sm">
              <div className="w-10 h-10 bg-amber-100 rounded-full flex items-center justify-center text-amber-600">
                <i className="fa-regular fa-clock"></i>
              </div>
              <div className="text-left">
                <p className="text-2xl font-bold text-stone-800">10M+</p>
                <p className="text-xs text-stone-500">Happy customers</p>
              </div>
            </div>
          </div>
        </div>

        {/* ===== FEATURED STORY ===== */}
        <div className="mb-16">
          <div className="flex items-center gap-2 mb-6">
            <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
            <span className="text-sm font-semibold uppercase tracking-wider text-stone-500">
              Featured story
            </span>
          </div>

          <Card className="relative overflow-hidden border-0 shadow-2xl bg-gradient-to-r from-stone-900 to-stone-800 text-white rounded-3xl">
            <div className="absolute inset-0 opacity-40">
              <img
                src={featuredStory.image}
                alt={featuredStory.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-emerald-900/90"></div>
            </div>

            <div className="relative z-10 grid md:grid-cols-2 gap-8 p-8 md:p-12">
              <div className="flex flex-col justify-center">
                <span className="inline-flex items-center gap-2 px-3 py-1 bg-white/20 backdrop-blur rounded-full text-white text-sm w-fit mb-4 border border-white/30">
                  <i className="fa-regular fa-bolt"></i>
                  {featuredStory.category}
                </span>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                  {featuredStory.title}
                </h2>
                <p className="text-lg text-stone-200 mb-4">
                  {featuredStory.description}
                </p>
                <p className="text-base text-stone-300 leading-relaxed mb-6">
                  {featuredStory.extendedContent}
                </p>

                <div className="flex items-center gap-4 mb-6">
                  <span className="flex items-center gap-1 text-sm text-stone-300">
                    <i className="fa-regular fa-clock"></i>{" "}
                    {featuredStory.readTime}
                  </span>
                  <span className="w-1 h-1 bg-stone-500 rounded-full"></span>
                  <span className="flex items-center gap-1 text-sm text-emerald-300">
                    <i className="fa-regular fa-chart-line"></i>{" "}
                    {featuredStory.impact}
                  </span>
                </div>

                {/* Metrics row */}
                <div className="flex flex-wrap gap-4 mb-6">
                  {featuredStory.metrics.map((metric, idx) => (
                    <div key={idx} className="bg-white/10 backdrop-blur px-4 py-2 rounded-lg border border-white/20">
                      <p className="text-lg font-bold text-white">{metric.value}</p>
                      <p className="text-xs text-stone-300">{metric.label}</p>
                    </div>
                  ))}
                </div>

                {/* Quote */}
                <div className="border-l-4 border-emerald-400 pl-4 italic">
                  <p className="text-stone-200">"{featuredStory.quote}"</p>
                  <p className="text-sm text-stone-400 mt-1">— {featuredStory.author}</p>
                </div>
              </div>

              <div className="hidden md:flex items-end justify-end">
                <div className="bg-white/10 backdrop-blur p-6 rounded-2xl border border-white/20">
                  <i className="fa-regular fa-quote-right text-4xl text-white/60"></i>
                  <p className="text-lg font-medium text-white mt-2">
                    "Innovation at the speed of trust"
                  </p>
                  <p className="text-sm text-stone-300 mt-1">
                    — Gohil Harikrushan, Founder
                  </p>
                </div>
              </div>
            </div>
          </Card>
        </div>

        {/* ===== STORIES GRID ===== */}
        <div className="mb-12">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-emerald-600 rounded-full"></span>
              <h2 className="text-2xl md:text-3xl font-bold text-stone-800">
                All impact stories
              </h2>
            </div>

            <div className="flex gap-2">
              <Button
                variant="outline"
                size="sm"
                className="rounded-full border-stone-200"
              >
                Latest
              </Button>
              <Button
                variant="outline"
                size="sm"
                className="rounded-full border-stone-200"
              >
                <i className="fa-regular fa-filter"></i>
                Filter
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {remainingStories.map((story) => (
              <Card
                key={story.id}
                className="group relative overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 rounded-2xl bg-white flex flex-col h-full"
              >
                {/* Image container with overlay */}
                <div className="relative h-48 overflow-hidden shrink-0">
                  <img
                    src={story.image}
                    alt={story.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>

                  {/* Category badge */}
                  <span className="absolute top-4 left-4 px-3 py-1 bg-white/90 backdrop-blur rounded-full text-xs font-semibold text-stone-800 shadow-md">
                    {story.category}
                  </span>

                  {/* Impact badge */}
                  <span className="absolute top-4 right-4 px-3 py-1 bg-emerald-500/90 backdrop-blur rounded-full text-xs font-semibold text-white">
                    {story.impact}
                  </span>
                </div>

                <CardHeader className="pb-2 shrink-0">
                  <CardTitle className="text-xl font-bold text-stone-800 group-hover:text-blue-600 transition">
                    {story.title}
                  </CardTitle>
                  <CardDescription className="text-stone-600 mt-1">
                    {story.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="pt-0 pb-3 flex-1">
                  <p className="text-sm text-stone-600 leading-relaxed line-clamp-4">
                    {story.extendedContent}
                  </p>
                  
                  {/* Mini metrics - compact for cards */}
                  <div className="flex flex-wrap gap-2 mt-4">
                    {story.metrics.slice(0, 2).map((metric, idx) => (
                      <span key={idx} className="text-xs bg-stone-100 px-2 py-1 rounded-full text-stone-700">
                        <span className="font-semibold">{metric.value}</span> {metric.label}
                      </span>
                    ))}
                  </div>
                </CardContent>

                <CardFooter className="flex justify-between items-center pt-2 pb-5 px-6 border-t border-stone-100 shrink-0">
                  <span className="text-xs text-stone-500 flex items-center gap-1">
                    <i className="fa-regular fa-clock"></i> {story.readTime}
                  </span>
                  
                  {/* Quote teaser - replaces button */}
                  <span className="text-xs text-stone-500 italic truncate max-w-[180px]">
                    "{story.quote.substring(0, 30)}..."
                  </span>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>

        {/* ===== CTA BANNER ===== */}
        <div className="mt-16 bg-gradient-to-r from-blue-600 via-indigo-600 to-emerald-600 rounded-3xl p-8 md:p-12 text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-black/10 rounded-full blur-3xl"></div>

          <div className="relative z-10 text-center md:text-left md:flex items-center justify-between gap-8">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold mb-2">
                Have a story to share?
              </h3>
              <p className="text-blue-100 text-lg max-w-2xl">
                We're always looking to spotlight the amazing journeys of our
                sellers, partners, and communities.
              </p>
            </div>
            <div className="mt-6 md:mt-0 flex gap-3 justify-center md:justify-end">
              <Button className="bg-white text-blue-700 hover:bg-stone-100 rounded-full px-8 py-6 text-base font-semibold shadow-xl">
                <i className="fa-regular fa-pen-to-square mr-2"></i>
                Submit your story
              </Button>
              <Button
                variant="outline"
                className="border-white/30 text-white hover:bg-white/20 rounded-full px-6 py-6"
              >
                <i className="fa-regular fa-envelope"></i>
              </Button>
            </div>
          </div>
        </div>

        {/* ===== FOOTER NOTE ===== */}
        <div className="mt-12 text-center text-sm text-stone-500">
          <p>
            <i className="fa-regular fa-circle-check text-emerald-600 mr-1"></i>
            Every story is verified and shared with consent. Updated monthly.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Stories;