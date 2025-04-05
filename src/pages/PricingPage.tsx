import React from 'react';
import Layout from '../components/layout/Layout';
import HostingPricing from '../components/pricing/HostingPricing';
import WebDesignPricing from '../components/pricing/WebDesignPricing';
import BulkSMSPricing from '../components/pricing/BulkSMSPricing';

const PricingPage: React.FC = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 bg-[#f8faf8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-[#4a5d4a] mb-6">
              Simple, Transparent Pricing
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-12">
              Choose the perfect plan for your business needs. All our plans come with 24/7 support and regular updates.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="space-y-12">
              <h2 className="text-2xl md:text-3xl font-bold text-[#4a5d4a] text-center mb-6">Web Hosting</h2>
              <HostingPricing />
            </div>
            <div className="space-y-12">
              <h2 className="text-2xl md:text-3xl font-bold text-[#4a5d4a] text-center mb-6">Web Design</h2>
              <WebDesignPricing />
            </div>
            <div className="space-y-12">
              <h2 className="text-2xl md:text-3xl font-bold text-[#4a5d4a] text-center mb-6">Bulk SMS</h2>
              <BulkSMSPricing />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-[#f8faf8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-[#4a5d4a] mb-12">
            Frequently Asked Questions
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-[#4a5d4a] mb-2">What payment methods do you accept?</h3>
              <p className="text-gray-600 mb-6">
                We accept all major credit cards, PayPal, and bank transfers. Monthly subscriptions can also be paid via direct debit.
              </p>
              <h3 className="text-xl font-semibold text-[#4a5d4a] mb-2">Can I upgrade my plan later?</h3>
              <p className="text-gray-600 mb-6">
                Yes, you can easily upgrade or downgrade your plan at any time. Your data will be automatically migrated.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-[#4a5d4a] mb-2">What is your cancellation policy?</h3>
              <p className="text-gray-600 mb-6">
                You can cancel your subscription at any time. You'll have access until the end of your billing period.
              </p>
              <h3 className="text-xl font-semibold text-[#4a5d4a] mb-2">Do you offer custom solutions?</h3>
              <p className="text-gray-600 mb-6">
                Yes, we offer custom solutions for enterprise clients. Contact our sales team for a custom quote.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default PricingPage;
