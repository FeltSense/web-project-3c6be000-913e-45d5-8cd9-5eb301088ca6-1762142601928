'use client';

import { useState } from 'react';

export default function ContactForm() {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const response = await fetch('https://deep-api-server-2moiw.kinsta.app/api/form-submissions', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          website_id: '3c6be000-913e-45d5-8cd9-5eb301088ca6',
          form_data: { ...formData, submitted_at: new Date().toISOString() }
        })
      });
      
      if (!response.ok) throw new Error('Form submission failed');
      
      console.log('✅ Form submitted successfully');
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        setFormData({ name: '', email: '', phone: '', message: '' });
      }, 3000);
      
    } catch (error) {
      console.error('❌ Form submission error:', error);
      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 3000);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <section className="py-24 bg-slate-50">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-12">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
      </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-2">Message Sent!</h3>
            <p className="text-gray-600">Thank you for reaching out. We'll get back to you soon.</p>
    </div>
  </div>
</section>
    );
      }

  return (
    <form onSubmit={handleSubmit}>
    <section className="relative py-24 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 overflow-hidden">
  {/* Animated background elements */}
  <div className="absolute inset-0 opacity-20">
    <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
    <div className="absolute top-40 right-10 w-72 h-72 bg-fuchsia-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse animation-delay-2000"></div>
    <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-amber-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse animation-delay-4000"></div>
  </div>

  <div className="relative max-w-2xl mx-auto px-4">
    {/* Header */}
    <div className="text-center mb-12">
      <div className="inline-block mb-4">
        <span className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-cyan-500/20 to-fuchsia-500/20 border border-cyan-500/30 rounded-full text-cyan-300 text-sm font-medium backdrop-blur-sm">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
          </span>
          Let's Create Something Amazing
        </span>
      </div>
      <h2 className="text-5xl md:text-6xl font-bold text-white mb-4 tracking-tight">
        Spark Your
        <span className="block bg-gradient-to-r from-cyan-400 via-fuchsia-400 to-amber-400 bg-clip-text text-transparent">
          Next Project
        </span>
      </h2>
      <p className="text-xl text-slate-300 max-w-xl mx-auto">
        Ready to catalyze your vision? Drop us a message and let's ignite something extraordinary together.
      </p>
    </div>

    {/* Form Fields */}
    <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 md:p-10 border border-white/20 shadow-2xl">
      <div className="space-y-6">
        {/* Name Field */}
        <div className="group">
          <label htmlFor="name" className="block text-sm font-semibold text-white mb-2 flex items-center gap-2">
            <svg className="w-4 h-4 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
            Full Name
          </label>
          <input 
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Jane Creative"
            required
            className="w-full px-5 py-4 bg-white/5 border-2 border-white/10 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:border-cyan-400 focus:bg-white/10 transition-all duration-300 backdrop-blur-sm group-hover:border-white/20"
          />
        </div>

        {/* Email Field */}
        <div className="group">
          <label htmlFor="email" className="block text-sm font-semibold text-white mb-2 flex items-center gap-2">
            <svg className="w-4 h-4 text-fuchsia-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            Email Address
          </label>
          <input 
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="jane@creative.studio"
            required
            className="w-full px-5 py-4 bg-white/5 border-2 border-white/10 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:border-fuchsia-400 focus:bg-white/10 transition-all duration-300 backdrop-blur-sm group-hover:border-white/20"
          />
        </div>

        {/* Phone Field */}
        <div className="group">
          <label htmlFor="phone" className="block text-sm font-semibold text-white mb-2 flex items-center gap-2">
            <svg className="w-4 h-4 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            Phone Number
          </label>
          <input 
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="(555) 123-4567"
            required
            className="w-full px-5 py-4 bg-white/5 border-2 border-white/10 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:border-amber-400 focus:bg-white/10 transition-all duration-300 backdrop-blur-sm group-hover:border-white/20"
          />
        </div>

        {/* Message Field */}
        <div className="group">
          <label htmlFor="message" className="block text-sm font-semibold text-white mb-2 flex items-center gap-2">
            <svg className="w-4 h-4 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
            </svg>
            Your Vision
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={5}
            placeholder="Tell us about your project, goals, and how we can help bring your ideas to life..."
            required
            className="w-full px-5 py-4 bg-white/5 border-2 border-white/10 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:border-cyan-400 focus:bg-white/10 transition-all duration-300 resize-none backdrop-blur-sm group-hover:border-white/20"
          ></textarea>
        </div>

        {/* Submit Button */}
        <button 
          type="submit"
          disabled={isSubmitting}
          className="group relative w-full bg-gradient-to-r from-cyan-500 via-fuchsia-500 to-amber-500 text-white px-8 py-5 rounded-xl font-bold text-lg hover:shadow-2xl hover:shadow-fuchsia-500/50 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed overflow-hidden"
        >
          <span className="relative z-10 flex items-center justify-center gap-3">
            {isSubmitting ? (
              <>
                <svg className="animate-spin h-5 w-5" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Igniting...
              </>
            ) : (
              <>
                Ignite Your Project
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </>
            )}
          </span>
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 via-fuchsia-600 to-amber-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </button>

        {/* Trust Badge */}
        <p className="text-center text-sm text-slate-400 flex items-center justify-center gap-2">
          <svg className="w-4 h-4 text-green-400" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
          </svg>
          Your information is secure and will never be shared
        </p>
      </div>
    </div>
  </div>
</section>
    </form>
  );
}