'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-xl border-b border-neutral-200/50">
  <div className="max-w-7xl mx-auto px-6 lg:px-8">
    <div className="flex items-center justify-between h-20">
      {/* Logo */}
      <Link href="/" className="flex items-center gap-3 group">
        <div className="relative">
          <div className="w-10 h-10 bg-gradient-to-br from-primary-500 via-accent-500 to-secondary-500 rounded-lg rotate-6 group-hover:rotate-12 transition-transform duration-300"></div>
          <div className="absolute inset-0 w-10 h-10 bg-gradient-to-tr from-accent-400 to-primary-400 rounded-lg -rotate-6 group-hover:-rotate-12 transition-transform duration-300 opacity-60"></div>
        </div>
        <span className="text-2xl font-bold bg-gradient-to-r from-neutral-900 via-primary-600 to-accent-600 bg-clip-text text-transparent">
          Catalyst Creative
        </span>
      </Link>

      {/* Desktop Navigation */}
      <div className="hidden md:flex items-center gap-1">
        <Link 
          href="/" 
          className="px-5 py-2.5 text-neutral-700 hover:text-primary-600 font-medium rounded-lg hover:bg-primary-50/50 transition-all duration-200 relative group"
        >
          Home
          <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-primary-500 to-accent-500 group-hover:w-8 transition-all duration-300"></span>
        </Link>
        <Link 
          href="/about" 
          className="px-5 py-2.5 text-neutral-700 hover:text-primary-600 font-medium rounded-lg hover:bg-primary-50/50 transition-all duration-200 relative group"
        >
          About
          <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-primary-500 to-accent-500 group-hover:w-8 transition-all duration-300"></span>
        </Link>
        <Link 
          href="/services" 
          className="px-5 py-2.5 text-neutral-700 hover:text-primary-600 font-medium rounded-lg hover:bg-primary-50/50 transition-all duration-200 relative group"
        >
          Services
          <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-primary-500 to-accent-500 group-hover:w-8 transition-all duration-300"></span>
        </Link>
      </div>

      {/* CTA Button */}
      <div className="hidden md:block">
        <Link 
          href="/services"
          className="px-6 py-2.5 bg-gradient-to-r from-primary-500 via-accent-500 to-secondary-500 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-primary-500/25 hover:scale-105 transition-all duration-300 relative overflow-hidden group"
        >
          <span className="relative z-10">Start a Project</span>
          <div className="absolute inset-0 bg-gradient-to-r from-primary-600 via-accent-600 to-secondary-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </Link>
      </div>

      {/* Mobile Menu Button */}
      <button 
        onClick={() => {}}
        className="md:hidden p-2 text-neutral-700 hover:text-primary-600 hover:bg-primary-50/50 rounded-lg transition-colors duration-200"
        aria-label="Toggle menu"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>
    </div>
  </div>

  {/* Mobile Menu */}
  <div className="md:hidden border-t border-neutral-200/50 bg-white/95 backdrop-blur-xl">
    <div className="px-6 py-4 space-y-1">
      <Link 
        href="/" 
        className="block px-4 py-3 text-neutral-700 hover:text-primary-600 hover:bg-primary-50/50 rounded-lg font-medium transition-all duration-200"
      >
        Home
      </Link>
      <Link 
        href="/about" 
        className="block px-4 py-3 text-neutral-700 hover:text-primary-600 hover:bg-primary-50/50 rounded-lg font-medium transition-all duration-200"
      >
        About
      </Link>
      <Link 
        href="/services" 
        className="block px-4 py-3 text-neutral-700 hover:text-primary-600 hover:bg-primary-50/50 rounded-lg font-medium transition-all duration-200"
      >
        Services
      </Link>
      <Link 
        href="/services"
        className="block px-4 py-3 mt-2 bg-gradient-to-r from-primary-500 via-accent-500 to-secondary-500 text-white text-center font-semibold rounded-lg hover:shadow-lg hover:shadow-primary-500/25 transition-all duration-300"
      >
        Start a Project
      </Link>
    </div>
  </div>
</nav>
  );
}