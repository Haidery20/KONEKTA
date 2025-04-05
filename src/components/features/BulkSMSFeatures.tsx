import React from 'react';

const BulkSMSFeatures = () => {
  const features = [
    {
      title: 'Enterprise API',
      description: 'Integrate SMS functionality into your applications with our powerful REST API.',
      icon: '🔌',
    },
    {
      title: 'High Delivery Rate',
      description: 'Industry-leading delivery rates with real-time delivery reports and status updates.',
      icon: '✅',
    },
    {
      title: 'Multiple Sender IDs',
      description: 'Use custom sender IDs to build brand recognition and improve message delivery.',
      icon: '📱',
    },
    {
      title: 'Advanced Analytics',
      description: 'Track message delivery, open rates, and engagement with detailed analytics dashboard.',
      icon: '📊',
    },
    {
      title: 'Scheduled Sending',
      description: 'Schedule messages to be sent at specific times or recurring intervals.',
      icon: '⏰',
    },
    {
      title: '24/7 Support',
      description: 'Dedicated support team available around the clock to assist with any issues.',
      icon: '👨‍💻',
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h2 className="text-4xl font-bold text-center text-[#4a5d4a] mb-12">Bulk SMS Features</h2>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all"
          >
            <div className="text-4xl mb-4 text-[#4a5d4a]">{feature.icon}</div>
            <h3 className="text-xl font-semibold text-[#4a5d4a] mb-2">{feature.title}</h3>
            <p className="text-gray-600">{feature.description}</p>
          </div>
        ))}
      </div>

      <div className="mt-16">
        <h3 className="text-2xl font-bold text-[#4a5d4a] mb-6">Technical Features</h3>
        <div className="grid grid-cols-2 gap-6">
          <div>
            <h4 className="text-lg font-semibold text-[#4a5d4a] mb-2">API & Integration</h4>
            <ul className="space-y-2">
              <li className="flex items-center">
                <svg className="w-5 h-5 text-[#4a5d4a] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                REST API
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 text-[#4a5d4a] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Webhooks
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 text-[#4a5d4a] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                SDKs
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-[#4a5d4a] mb-2">Advanced Features</h4>
            <ul className="space-y-2">
              <li className="flex items-center">
                <svg className="w-5 h-5 text-[#4a5d4a] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Message Templates
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 text-[#4a5d4a] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Campaign Management
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 text-[#4a5d4a] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Contact Lists
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="mt-12 text-center">
        <button className="bg-[#4a5d4a] text-white px-8 py-3 rounded-lg hover:bg-[#3d4d3d] transition-colors">
          Get Started with Bulk SMS
        </button>
      </div>
    </div>
  );
};

export default BulkSMSFeatures;
