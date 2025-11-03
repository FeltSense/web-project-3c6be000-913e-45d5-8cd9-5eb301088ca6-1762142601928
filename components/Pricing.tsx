export default function Pricing() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-teal-50 py-20 px-4">
  <div className="max-w-6xl mx-auto">
    {/* Header Section */}
    <div className="text-center mb-16">
      <div className="inline-block mb-4">
        <span className="bg-gradient-to-r from-blue-600 to-teal-600 text-white px-6 py-2 rounded-full text-sm font-semibold tracking-wide shadow-lg">
          ONE-TIME PAYMENT
        </span>
      </div>
      <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
        Transform Your Creative Vision
      </h1>
      <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
        Get instant access to a world-class creative portfolio and full-service capabilities. 
        One payment, lifetime value.
      </p>
    </div>

    {/* Pricing Card */}
    <div className="max-w-lg mx-auto">
      <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100 transform hover:scale-105 transition-transform duration-300">
        {/* Card Header */}
        <div className="bg-gradient-to-br from-blue-600 via-blue-700 to-teal-600 px-8 py-12 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-white opacity-10">
            <div className="absolute top-0 left-0 w-40 h-40 bg-white rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute bottom-0 right-0 w-40 h-40 bg-white rounded-full blur-3xl transform translate-x-1/2 translate-y-1/2"></div>
          </div>
          <div className="relative z-10">
            <h2 className="text-3xl font-bold text-white mb-2">
              Catalyst Creative
            </h2>
            <p className="text-blue-100 mb-8">
              Complete Creative Solution
            </p>
            <div className="flex items-baseline justify-center mb-2">
              <span className="text-6xl font-bold text-white">$29</span>
            </div>
            <p className="text-blue-100 font-medium">
              One-time payment • Lifetime access
            </p>
          </div>
        </div>

        {/* Features List */}
        <div className="px-8 py-10">
          <div className="space-y-5 mb-10">
            <div className="flex items-start gap-4 group">
              <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-br from-blue-500 to-teal-500 flex items-center justify-center mt-0.5 group-hover:scale-110 transition-transform">
                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <p className="text-gray-900 font-semibold">Award-Winning Portfolio</p>
                <p className="text-gray-600 text-sm mt-1">Proven excellence across multiple industries with recognized creative achievements</p>
              </div>
            </div>

            <div className="flex items-start gap-4 group">
              <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-br from-blue-500 to-teal-500 flex items-center justify-center mt-0.5 group-hover:scale-110 transition-transform">
                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <p className="text-gray-900 font-semibold">Full-Service Creative Capabilities</p>
                <p className="text-gray-600 text-sm mt-1">Complete branding, web design, digital marketing, and content creation services</p>
              </div>
            </div>

            <div className="flex items-start gap-4 group">
              <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-br from-blue-500 to-teal-500 flex items-center justify-center mt-0.5 group-hover:scale-110 transition-transform">
                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <p className="text-gray-900 font-semibold">Proven Track Record</p>
                <p className="text-gray-600 text-sm mt-1">Measurable client success with documented results and testimonials</p>
              </div>
            </div>

            <div className="flex items-start gap-4 group">
              <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-br from-blue-500 to-teal-500 flex items-center justify-center mt-0.5 group-hover:scale-110 transition-transform">
                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <p className="text-gray-900 font-semibold">Experienced Creative Team</p>
                <p className="text-gray-600 text-sm mt-1">Skilled specialists bringing diverse expertise to every project</p>
              </div>
            </div>

            <div className="flex items-start gap-4 group">
              <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-br from-blue-500 to-teal-500 flex items-center justify-center mt-0.5 group-hover:scale-110 transition-transform">
                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <p className="text-gray-900 font-semibold">Transparent Collaboration Process</p>
                <p className="text-gray-600 text-sm mt-1">Clear communication and partnership throughout your creative journey</p>
              </div>
            </div>

            <div className="flex items-start gap-4 group">
              <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-br from-blue-500 to-teal-500 flex items-center justify-center mt-0.5 group-hover:scale-110 transition-transform">
                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <p className="text-gray-900 font-semibold">Fast Turnaround Time</p>
                <p className="text-gray-600 text-sm mt-1">Quick delivery without sacrificing quality or attention to detail</p>
              </div>
            </div>
          </div>

          {/* CTA Button */}
          <button 
            onClick={() => window.location.href = 'https://buy.stripe.com/test_cNicN778gcvQ2NZ3gV6Ri00?client_reference_id=3c6be000-913e-45d5-8cd9-5eb301088ca6'}
            className="w-full bg-gradient-to-r from-blue-600 to-teal-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:from-blue-700 hover:to-teal-700 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1"
          >
            Get Started Now - $29
          </button>

          <p className="text-center text-gray-500 text-sm mt-6">
            Secure payment powered by Stripe • Instant access
          </p>
        </div>
      </div>

      {/* Trust Badges */}
      <div className="mt-12 text-center">
        <div className="flex items-center justify-center gap-8 flex-wrap">
          <div className="flex items-center gap-2 text-gray-600">
            <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span className="text-sm font-medium">Secure Payment</span>
          </div>
          <div className="flex items-center gap-2 text-gray-600">
            <svg className="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
              <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
            </svg>
            <span className="text-sm font-medium">Trusted by Professionals</span>
          </div>
          <div className="flex items-center gap-2 text-gray-600">
            <svg className="w-5 h-5 text-teal-600" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
            </svg>
            <span className="text-sm font-medium">Instant Access</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
  );
}