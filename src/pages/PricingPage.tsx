import React, { useState } from 'react';
import Layout from '../components/layout/Layout';
import HostingPricing from '../components/pricing/HostingPricing';
import WebDesignPricing from '../components/pricing/WebDesignPricing';
import BulkSMSPricing from '../components/pricing/BulkSMSPricing';
import { motion } from 'framer-motion';
import { Shield, CreditCard, Banknote, Receipt, DollarSign, X } from 'lucide-react';

interface PaymentMethod {
  icon: JSX.Element;
  name: string;
  description: string;
  details: string[];
}

interface PaymentModalProps {
  isOpen: boolean;
  onClose: () => void;
  method: PaymentMethod | null;
}

const paymentMethods: PaymentMethod[] = [
  {
    icon: <CreditCard className="w-6 h-6" />,
    name: 'Credit/Debit Cards',
    description: 'Visa, Mastercard, and local Tanzanian cards',
    details: [
      'Accepted cards: Visa, Mastercard, Verve',
      'Local Tanzanian cards supported',
      'Secure payment processing',
      'Instant payment confirmation'
    ]
  },
  {
    icon: <Banknote className="w-6 h-6" />,
    name: 'Mobile Money',
    description: 'TigoPesa, M-Pesa, Airtel Money',
    details: [
      'Available 24/7',
      'Quick and secure transactions',
      'Real-time payment confirmation',
      'No minimum transaction amount'
    ]
  },
  {
    icon: <Receipt className="w-6 h-6" />,
    name: 'Bank Transfer',
    description: 'Direct bank transfers to our account',
    details: [
      'Bank details will be provided',
      'Please include reference number',
      'Processing time: 2-3 business days',
      'Confirmation required'
    ]
  },
  {
    icon: <DollarSign className="w-6 h-6" />,
    name: 'Cash Payment',
    description: 'In-person cash payments at our office',
    details: [
      'Office hours: 9 AM - 5 PM',
      'Weekdays only',
      'Please schedule an appointment',
      'Cash only'
    ]
  }
];

const PaymentModal: React.FC<PaymentModalProps> = ({ isOpen, onClose, method }) => {
  if (!isOpen || !method) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.95, opacity: 0 }}
        className="bg-white rounded-lg max-w-md w-full p-6 relative"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
        >
          <X className="w-6 h-6" />
        </button>
        
        <div className="text-center mb-6">
          <div className="mb-4">{method.icon}</div>
          <h3 className="text-xl font-bold text-gray-900 mb-2">{method.name}</h3>
          <p className="text-gray-600">{method.description}</p>
        </div>

        <div className="space-y-4">
          {method.details.map((detail, index) => (
            <div key={index} className="flex items-start">
              <svg className="w-4 h-4 text-[#4a5d4a] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span className="text-sm text-gray-600">{detail}</span>
            </div>
          ))}
        </div>

        <div className="mt-6">
          <button
            onClick={() => {
              // TODO: Implement payment processing logic
              console.log('Processing payment with:', method.name);
              onClose();
            }}
            className="w-full bg-[#4a5d4a] text-white py-3 rounded-lg hover:bg-[#3d4d3d] transition-colors"
          >
            Proceed with {method.name}
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
};

const PricingPage: React.FC = () => {
  const [selectedMethod, setSelectedMethod] = useState<PaymentMethod | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handlePaymentClick = (method: PaymentMethod) => {
    setSelectedMethod(method);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedMethod(null);
  };

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
            {/* Web Hosting */}
            <div className="space-y-6">
              <h2 className="text-2xl md:text-3xl font-bold text-[#4a5d4a] text-center mb-6">Web Hosting</h2>
              <div className="grid grid-cols-1 gap-6">
                <HostingPricing />
              </div>
            </div>

            {/* Web Design */}
            <div className="space-y-6">
              <h2 className="text-2xl md:text-3xl font-bold text-[#4a5d4a] text-center mb-6">Web Design</h2>
              <div className="grid grid-cols-1 gap-6">
                <WebDesignPricing />
              </div>
            </div>

            {/* Bulk SMS */}
            <div className="space-y-6">
              <h2 className="text-2xl md:text-3xl font-bold text-[#4a5d4a] text-center mb-6">Bulk SMS</h2>
              <div className="grid grid-cols-1 gap-6">
                <BulkSMSPricing />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Payment Methods */}
      <section className="py-20 bg-[#f8faf8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-[#4a5d4a] mb-12">
            Payment Methods
          </h2>
          <div className="bg-white rounded-xl shadow-lg p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {paymentMethods.map((method, index) => (
                <motion.button
                  key={index}
                  onClick={() => handlePaymentClick(method)}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-gray-50 p-6 rounded-lg text-center hover:bg-gray-100 transition-colors cursor-pointer"
                >
                  <div className="mb-4">{method.icon}</div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{method.name}</h3>
                  <p className="text-gray-600">{method.description}</p>
                </motion.button>
              ))}
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

      <PaymentModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        method={selectedMethod}
      />
    </Layout>
  );
};

export default PricingPage;
