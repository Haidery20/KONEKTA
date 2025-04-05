import React from 'react';
import { motion } from 'framer-motion';

interface WebDesignPlan {
  name: string;
  price: string;
  features: string[];
  isPopular?: boolean;
}

const webDesignPlans: WebDesignPlan[] = [
  {
    name: 'Basic',
    price: 'TSh 500,000',
    features: [
      '1-Page Website',
      'Basic Design',
      'Mobile Responsive',
      '2 Design Revisions',
      '14-Day Turnaround',
      'Basic SEO Optimization'
    ]
  },
  {
    name: 'Standard',
    price: 'TSh 1,000,000',
    features: [
      '5-Page Website',
      'Custom Design',
      'Mobile Responsive',
      '4 Design Revisions',
      '10-Day Turnaround',
      'Advanced SEO',
      'Social Media Integration',
      'Custom Graphics'
    ],
    isPopular: true
  },
  {
    name: 'Premium',
    price: 'TSh 2,000,000',
    features: [
      'Unlimited Pages',
      'Premium Design',
      'Mobile Responsive',
      'Unlimited Revisions',
      '7-Day Turnaround',
      'Enterprise SEO',
      'Social Media Integration',
      'Custom Graphics',
      'Custom CMS',
      'Ongoing Support'
    ]
  }
];

export default function WebDesignPricing() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="space-y-12"
    >
      <h2 className="text-2xl md:text-3xl font-bold text-[#4a5d4a] text-center mb-6">Web Design</h2>
      
      <div className="grid md:grid-cols-3 gap-8">
        {webDesignPlans.map((plan) => (
          <motion.div
            key={plan.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className={`p-6 rounded-2xl border ${
              plan.isPopular 
                ? 'border-[#4a5d4a] bg-[#4a5d4a]/5' 
                : 'border-gray-200'
            }`}
          >
            {plan.isPopular && (
              <div className="absolute -top-3 -right-3 bg-[#4a5d4a] text-white px-2.5 py-1 rounded-full text-xs">
                Most Popular
              </div>
            )}
            
            <h3 className="text-xl md:text-2xl font-bold text-center mb-4">{plan.name}</h3>
            
            <div className="text-center mb-6">
              <p className="text-3xl md:text-4xl font-bold text-[#4a5d4a]">{plan.price}</p>
              <p className="text-sm md:text-base text-gray-500">one-time fee</p>
            </div>

            <div className="space-y-2.5">
              {plan.features.map((feature, index) => (
                <div key={index} className="flex items-center">
                  <svg className="w-3.5 h-3.5 text-[#4a5d4a] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm md:text-base text-gray-600">{feature}</span>
                </div>
              ))}
            </div>

            <button className="w-full bg-[#4a5d4a] text-white py-2.5 md:py-3 rounded-lg hover:bg-[#3d4d3d] transition-colors mt-6 text-sm md:text-base">
              Get Started
            </button>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
