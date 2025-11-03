'use client';

import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white overflow-hidden">
  {/* Animated background elements */}
  <div className="absolute inset-0 opacity-10">
    <div className="absolute top-20 left-10 w-72 h-72 bg-electric-cyan rounded-full blur-3xl animate-pulse"></div>
    <div className="absolute bottom-20 right-10 w-96 h-96 bg-catalyst-magenta rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-energy-yellow rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
  </div>

  {/* Subtle grid pattern */}
  <div className="absolute inset-0 opacity-5" style={{
    backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
    backgroundSize: '50px 50px'
  }}></div>

  <div className="relative max-w-7xl mx-auto px-6 py-16 lg:py-20">
    {/* Main footer content */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
      
      {/* Brand column */}
      <div className="lg:col-span-1">
        <div className="flex items-center gap-3 mb-6 group">
          <div className="relative">
            <div className="w-12 h-12 bg-gradient-to-br from-electric-cyan via-catalyst-magenta to-energy-yellow rounded-lg transform rotate-45 group-hover:rotate-[225deg] transition-transform duration-500"></div>
            <div className="absolute inset-0 w-12 h-12 bg-gradient-to-br from-electric-cyan via-catalyst-magenta to-energy-yellow rounded-lg blur-lg opacity-50 group-hover:opacity-75 transition-opacity"></div>
          </div>
          <span className="text-2xl font-bold bg-gradient-to-r from-electric-cyan via-catalyst-magenta to-energy-yellow bg-clip-text text-transparent">
            Catalyst Creative
          </span>
        </div>
        <p className="text-slate-300 text-sm leading-relaxed mb-6">
          Sparking transformation through bold ideas and innovative solutions. We turn creative vision into powerful reality.
        </p>
        <div className="flex gap-3">
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-lg bg-white/5 hover:bg-electric-cyan/20 border border-white/10 hover:border-electric-cyan/50 flex items-center justify-center transition-all duration-300 group">
            <svg className="w-5 h-5 text-slate-400 group-hover:text-electric-cyan transition-colors" fill="currentColor" viewBox="0 0 24 24">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
            </svg>
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-lg bg-white/5 hover:bg-electric-cyan/20 border border-white/10 hover:border-electric-cyan/50 flex items-center justify-center transition-all duration-300 group">
            <svg className="w-5 h-5 text-slate-400 group-hover:text-electric-cyan transition-colors" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-lg bg-white/5 hover:bg-catalyst-magenta/20 border border-white/10 hover:border-catalyst-magenta/50 flex items-center justify-center transition-all duration-300 group">
            <svg className="w-5 h-5 text-slate-400 group-hover:text-catalyst-magenta transition-colors" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
          </a>
          <a href="https://dribbble.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-lg bg-white/5 hover:bg-catalyst-magenta/20 border border-white/10 hover:border-catalyst-magenta/50 flex items-center justify-center transition-all duration-300 group">
            <svg className="w-5 h-5 text-slate-400 group-hover:text-catalyst-magenta transition-colors" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0C5.375 0 0 5.375 0 12s5.375 12 12 12 12-5.375 12-12S18.625 0 12 0zm8.5 12c0 .41-.03.814-.088 1.211-1.38-.353-2.983-.566-4.664-.566-1.027 0-2.02.09-2.969.254-.123-.313-.244-.627-.373-.934-2.845.933-5.453 2.406-7.598 4.293C3.547 14.754 3 13.437 3 12c0-2.414.95-4.607 2.496-6.227 1.055 1.418 2.758 3.09 5.004 4.598-.094.234-.188.469-.277.707-2.246-.844-4.664-1.313-7.223-1.313-.41 0-.816.016-1.219.047C2.03 8.814 2 8.41 2 8c0-4.963 4.037-9 9-9 2.414 0 4.607.95 6.227 2.496-1.418 1.055-3.09 2.758-4.598 5.004.234.094.469.188.707.277.844-2.246 1.313-4.664 1.313-7.223 0-.41-.016-.816-.047-1.219C15.186 2.97 15.59 3 16 3c4.963 0 9 4.037 9 9z"/>
            </svg>
          </a>
        </div>
      </div>

      {/* Quick Links */}
      <div>
        <h3 className="text-sm font-semibold uppercase tracking-wider mb-6 text-electric-cyan">Quick Links</h3>
        <ul className="space-y-3">
          <li>
            <Link href="/" className="text-slate-300 hover:text-white transition-colors duration-200 flex items-center gap-2 group">
              <span className="w-1.5 h-1.5 rounded-full bg-electric-cyan opacity-0 group-hover:opacity-100 transition-opacity"></span>
              Home
            </Link>
          </li>
          <li>
            <Link href="/about" className="text-slate-300 hover:text-white transition-colors duration-200 flex items-center gap-2 group">
              <span className="w-1.5 h-1.5 rounded-full bg-electric-cyan opacity-0 group-hover:opacity-100 transition-opacity"></span>
              About Us
            </Link>
          </li>
          <li>
            <Link href="/services" className="text-slate-300 hover:text-white transition-colors duration-200 flex items-center gap-2 group">
              <span className="w-1.5 h-1.5 rounded-full bg-electric-cyan opacity-0 group-hover:opacity-100 transition-opacity"></span>
              Services
            </Link>
          </li>
          <li>
            <a href="#portfolio" className="text-slate-300 hover:text-white transition-colors duration-200 flex items-center gap-2 group">
              <span className="w-1.5 h-1.5 rounded-full bg-electric-cyan opacity-0 group-hover:opacity-100 transition-opacity"></span>
              Portfolio
            </a>
          </li>
          <li>
            <a href="#careers" className="text-slate-300 hover:text-white transition-colors duration-200 flex items-center gap-2 group">
              <span className="w-1.5 h-1.5 rounded-full bg-electric-cyan opacity-0 group-hover:opacity-100 transition-opacity"></span>
              Careers
            </a>
          </li>
        </ul>
      </div>

      {/* Services */}
      <div>
        <h3 className="text-sm font-semibold uppercase tracking-wider mb-6 text-catalyst-magenta">Services</h3>
        <ul className="space-y-3">
          <li>
            <a href="#branding" className="text-slate-300 hover:text-white transition-colors duration-200 flex items-center gap-2 group">
              <span className="w-1.5 h-1.5 rounded-full bg-catalyst-magenta opacity-0 group-hover:opacity-100 transition-opacity"></span>
              Brand Strategy
            </a>
          </li>
          <li>
            <a href="#design" className="text-slate-300 hover:text-white transition-colors duration-200 flex items-center gap-2 group">
              <span className="w-1.5 h-1.5 rounded-full bg-catalyst-magenta opacity-0 group-hover:opacity-100 transition-opacity"></span>
              Creative Design
            </a>
          </li>
          <li>
            <a href="#digital" className="text-slate-300 hover:text-white transition-colors duration-200 flex items-center gap-2 group">
              <span className="w-1.5 h-1.5 rounded-full bg-catalyst-magenta opacity-0 group-hover:opacity-100 transition-opacity"></span>
              Digital Marketing
            </a>
          </li>
          <li>
            <a href="#development" className="text-slate-300 hover:text-white transition-colors duration-200 flex items-center gap-2 group">
              <span className="w-1.5 h-1.5 rounded-full bg-catalyst-magenta opacity-0 group-hover:opacity-100 transition-opacity"></span>
              Web Development
            </a>
          </li>
          <li>
            <a href="#consulting" className="text-slate-300 hover:text-white transition-colors duration-200 flex items-center gap-2 group">
              <span className="w-1.5 h-1.5 rounded-full bg-catalyst-magenta opacity-0 group-hover:opacity-100 transition-opacity"></span>
              Creative Consulting
            </a>
          </li>
        </ul>
      </div>

      {/* Contact */}
      <div>
        <h3 className="text-sm font-semibold uppercase tracking-wider mb-6 text-energy-yellow">Get in Touch</h3>
        <ul className="space-y-4">
          <li className="flex items-start gap-3">
            <svg className="w-5 h-5 text-energy-yellow mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <span className="text-slate-300 text-sm">
              123 Creative Boulevard<br />
              Innovation District, NY 10001
            </span>
          </li>
          <li className="flex items-center gap-3">
            <svg className="w-5 h-5 text-energy-yellow flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            <a href="mailto:hello@catalystcreative.com" className="text-slate-300 hover:text-white transition-colors text-sm">
              hello@catalystcreative.com
            </a>
          </li>
          <li className="flex items-center gap-3">
            <svg className="w-5 h-5 text-energy-yellow flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            <a href="tel:+15551234567" className="text-slate-300 hover:text-white transition-colors text-sm">
              +1 (555) 123-4567
            </a>
          </li>
        </ul>
      </div>
    </div>

    {/* Divider with gradient */}
    <div className="h-px bg-gradient-to-r from-transparent via-white/20 to-transparent mb-8"></div>

    {/* Bottom bar */}
    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
      <p className="text-slate-400 text-sm text-center md:text-left">
        © {new Date().getFullYear()} Catalyst Creative. All rights reserved.
      </p>
      <div className="flex flex-wrap justify-center gap-6 text-sm">
        <a href="#privacy" className="text-slate-400 hover:text-white transition-colors">Privacy Policy</a>
        <a href="#terms" className="text-slate-400 hover:text-white transition-colors">Terms of Service</a>
        <a href="#cookies" className="text-slate-400 hover:text-white transition-colors">Cookie Policy</a>
      </div>
    </div>
  </div>

  {/* Subtle bottom glow */}
  <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-electric-cyan via-catalyst-magenta to-energy-yellow opacity-50"></div>
</footer>
  );
}