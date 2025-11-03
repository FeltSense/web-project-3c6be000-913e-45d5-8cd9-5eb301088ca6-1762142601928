export default function Services() {
  return (
    <section className="py-24 bg-gradient-to-br from-slate-50 via-white to-blue-50 relative overflow-hidden">
  {/* Animated background elements */}
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    <div className="absolute top-20 left-10 w-72 h-72 bg-electric-cyan/5 rounded-full blur-3xl animate-float"></div>
    <div className="absolute bottom-20 right-10 w-96 h-96 bg-catalyst-magenta/5 rounded-full blur-3xl animate-float-delayed"></div>
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-energy-yellow/3 rounded-full blur-3xl animate-pulse-slow"></div>
  </div>

  <div className="container-custom relative z-10">
    {/* Section Header */}
    <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in-up">
      <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-electric-cyan/10 to-catalyst-magenta/10 rounded-full mb-6 border border-electric-cyan/20">
        <div className="w-2 h-2 bg-electric-cyan rounded-full animate-pulse"></div>
        <span className="text-sm font-semibold text-slate-700 tracking-wide uppercase">What We Do</span>
      </div>
      
      <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-slate-900 via-electric-cyan to-catalyst-magenta bg-clip-text text-transparent leading-tight">
        Services That Spark
        <span className="block mt-2">Transformation</span>
      </h2>
      
      <p className="text-xl text-slate-600 leading-relaxed">
        We're not just another creative agency. We're the catalyst that transforms your vision into reality, 
        delivering measurable results that exceed expectations.
      </p>
    </div>

    {/* Services Grid */}
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
      
      {/* Service 1 - Award-Winning Portfolio */}
      <div className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-slate-100 hover:border-electric-cyan/30 animate-fade-in-up" style={{animationDelay: '0.1s'}}>
        <div className="flex flex-col md:flex-row h-full">
          <div className="md:w-2/5 relative overflow-hidden">
            <img 
              src="https://picsum.photos/seed/catalyst-creative-service-1/800/600" 
              alt="Award-winning creative work showcased across multiple screens and devices"
              className="w-full h-64 md:h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-electric-cyan/20 to-catalyst-magenta/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="absolute top-4 left-4 bg-energy-yellow text-slate-900 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide shadow-lg">
              Award-Winning
            </div>
          </div>
          
          <div className="md:w-3/5 p-8 flex flex-col justify-center">
            <div className="w-14 h-14 bg-gradient-to-br from-electric-cyan to-catalyst-magenta rounded-2xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300 shadow-lg">
              <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
              </svg>
            </div>
            
            <h3 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-electric-cyan transition-colors duration-300">
              Award-Winning Portfolio
            </h3>
            
            <p className="text-slate-600 leading-relaxed mb-4">
              Our work speaks volumes. With recognition across multiple industries and prestigious awards, 
              we've proven our ability to create campaigns that don't just look good—they deliver results.
            </p>
            
            <div className="flex items-center gap-2 text-electric-cyan font-semibold group-hover:gap-4 transition-all duration-300">
              <span>View Our Work</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Service 2 - Full-Service Capabilities */}
      <div className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-slate-100 hover:border-catalyst-magenta/30 animate-fade-in-up" style={{animationDelay: '0.2s'}}>
        <div className="flex flex-col md:flex-row h-full">
          <div className="md:w-2/5 relative overflow-hidden">
            <img 
              src="https://picsum.photos/seed/catalyst-creative-service-2/800/600" 
              alt="Creative team collaborating on branding and digital design projects"
              className="w-full h-64 md:h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-catalyst-magenta/20 to-energy-yellow/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="absolute top-4 left-4 bg-catalyst-magenta text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide shadow-lg">
              Full-Service
            </div>
          </div>
          
          <div className="md:w-3/5 p-8 flex flex-col justify-center">
            <div className="w-14 h-14 bg-gradient-to-br from-catalyst-magenta to-energy-yellow rounded-2xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300 shadow-lg">
              <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h4a1 1 0 011 1v7a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM14 5a1 1 0 011-1h4a1 1 0 011 1v7a1 1 0 01-1 1h-4a1 1 0 01-1-1V5zM4 16a1 1 0 011-1h4a1 1 0 011 1v3a1 1 0 01-1 1H5a1 1 0 01-1-1v-3zM14 16a1 1 0 011-1h4a1 1 0 011 1v3a1 1 0 01-1 1h-4a1 1 0 01-1-1v-3z" />
              </svg>
            </div>
            
            <h3 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-catalyst-magenta transition-colors duration-300">
              Full-Service Creative
            </h3>
            
            <p className="text-slate-600 leading-relaxed mb-4">
              From branding and web design to digital marketing and content creation, we're your one-stop 
              creative powerhouse. Seamless integration across all touchpoints, unified vision throughout.
            </p>
            
            <div className="flex items-center gap-2 text-catalyst-magenta font-semibold group-hover:gap-4 transition-all duration-300">
              <span>Explore Services</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Service 3 - Proven Track Record */}
      <div className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-slate-100 hover:border-energy-yellow/50 animate-fade-in-up" style={{animationDelay: '0.3s'}}>
        <div className="flex flex-col md:flex-row h-full">
          <div className="md:w-2/5 relative overflow-hidden">
            <img 
              src="https://picsum.photos/seed/catalyst-creative-service-3/800/600" 
              alt="Data analytics and success metrics displayed on modern dashboard"
              className="w-full h-64 md:h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-energy-yellow/20 to-electric-cyan/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="absolute top-4 left-4 bg-energy-yellow text-slate-900 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide shadow-lg">
              Results-Driven
            </div>
          </div>
          
          <div className="md:w-3/5 p-8 flex flex-col justify-center">
            <div className="w-14 h-14 bg-gradient-to-br from-energy-yellow to-electric-cyan rounded-2xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300 shadow-lg">
              <svg className="w-7 h-7 text-slate-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            </div>
            
            <h3 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-energy-yellow transition-colors duration-300">
              Proven Track Record
            </h3>
            
            <p className="text-slate-600 leading-relaxed mb-4">
              Numbers don't lie. Our clients see an average 250% ROI on creative campaigns, with measurable 
              increases in engagement, conversions, and brand recognition. Success is our standard.
            </p>
            
            <div className="flex items-center gap-2 text-energy-yellow font-semibold group-hover:gap-4 transition-all duration-300">
              <span>See Case Studies</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Service 4 - Expert Team */}
      <div className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-slate-100 hover:border-electric-cyan/30 animate-fade-in-up" style={{animationDelay: '0.4s'}}>
        <div className="flex flex-col md:flex-row h-full">
          <div className="md:w-2/5 relative overflow-hidden">
            <img 
              src="https://picsum.photos/seed/catalyst-creative-service-4/800/600" 
              alt="Diverse team of creative specialists working together in modern office"
              className="w-full h-64 md:h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-electric-cyan/20 to-energy-yellow/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="absolute top-4 left-4 bg-electric-cyan text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide shadow-lg">
              Expert Team
            </div>
          </div>
          
          <div className="md:w-3/5 p-8 flex flex-col justify-center">
            <div className="w-14 h-14 bg-gradient-to-br from-electric-cyan via-catalyst-magenta to-energy-yellow rounded-2xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300 shadow-lg">
              <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            
            <h3 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-electric-cyan transition-colors duration-300">
              Experienced Specialists
            </h3>
            
            <p className="text-slate-600 leading-relaxed mb-4">
              Our team brings decades of combined experience across design, strategy, development, and marketing. 
              Each specialist is a master of their craft, united by a passion for creative excellence.
            </p>
            
            <div className="flex items-center gap-2 text-electric-cyan font-semibold group-hover:gap-4 transition-all duration-300">
              <span>Meet The Team</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </div>
          </div>
        </div>
      </div>

    </div>

    {/* Bottom CTA */}
    <div className="text-center mt-16 animate-fade-in-up" style={{animationDelay: '0.5s'}}>
      <div className="inline-flex flex-col sm:flex-row gap-4 items-center">
        <button className="btn-primary group px-8 py-4 text-lg">
          Start Your Project
          <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
          </svg>
        </button>
        
        <button className="px-8 py-4 text-lg font-semibold text-slate-700 hover:text-electric-cyan transition-colors duration-300 flex items-center gap-2 group">
          <span>Schedule a Consultation</span>
          <svg className="w-5 h-5 group-hover:rotate-45 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </button>
      </div>
    </div>
  </div>
</section>
  );
}