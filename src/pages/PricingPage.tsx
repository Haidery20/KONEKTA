import React from 'react';
import Layout from '../components/layout/Layout';
import HostingPricing from '../components/pricing/HostingPricing';
import WebDesignPricing from '../components/pricing/WebDesignPricing';
import BulkSMSPricing from '../components/pricing/BulkSMSPricing';

function PricingPage() {
  return (
    <Layout>
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-center text-[#4a5d4a] mb-12">Pricing</h1>
          
          <div className="grid md:grid-cols-3 gap-8">
            <HostingPricing />
            <WebDesignPricing />
            <BulkSMSPricing />
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default PricingPage;
