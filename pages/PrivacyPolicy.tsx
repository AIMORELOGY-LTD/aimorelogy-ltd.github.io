
import React, { useEffect } from 'react';

const PrivacyPolicy: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-white min-h-screen py-20">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="mb-12 border-b border-gray-100 pb-8">
          <h1 className="text-4xl font-black text-gray-900 uppercase mb-4">Privacy Policy</h1>
          <p className="text-gray-500 text-sm">Last Updated: March 10, 2025</p>
        </div>

        <div className="prose prose-lg text-gray-600 max-w-none">
          <p>
            AIMORELOGY LIMITED and its affiliates ("AIMORELOGY", "we", "us", or "our") are committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our products and services.
          </p>
          <p>
            Please read this privacy policy carefully. If you do not agree with the terms of this privacy policy, please do not access the site.
          </p>

          <h3 className="text-gray-900 font-bold uppercase text-xl mt-8 mb-4">1. Collection of Your Information</h3>
          <p>
            We may collect information about you in a variety of ways. The information we may collect on the Site includes:
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li>
              <strong>Personal Data:</strong> Personally identifiable information, such as your name, shipping address, email address, and telephone number, that you voluntarily give to us when you register with the Site or when you choose to participate in various activities related to the Site.
            </li>
            <li>
              <strong>Derivative Data:</strong> Information our servers automatically collect when you access the Site, such as your IP address, your browser type, your operating system, your access times, and the pages you have viewed directly before and after accessing the Site.
            </li>
          </ul>

          <h3 className="text-gray-900 font-bold uppercase text-xl mt-8 mb-4">2. Use of Your Information</h3>
          <p>
            Having accurate information about you permits us to provide you with a smooth, efficient, and customized experience. Specifically, we may use information collected about you via the Site to:
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li>Create and manage your account.</li>
            <li>Process your orders and deliver products (e.g., CV184XH Flight Controllers).</li>
            <li>Email you regarding your account or order.</li>
            <li>Respond to product and customer service requests.</li>
            <li>Compile anonymous statistical data and analysis for use internally.</li>
            <li>Send you a newsletter (if you have opted in).</li>
          </ul>

          <h3 className="text-gray-900 font-bold uppercase text-xl mt-8 mb-4">3. Disclosure of Your Information</h3>
          <p>
            We may share information we have collected about you in certain situations. Your information may be disclosed as follows:
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li>
              <strong>By Law or to Protect Rights:</strong> If we believe the release of information about you is necessary to respond to legal process, to investigate or remedy potential violations of our policies, or to protect the rights, property, and safety of others.
            </li>
            <li>
              <strong>Third-Party Service Providers:</strong> We may share your information with third parties that perform services for us or on our behalf, including payment processing, data analysis, email delivery, hosting services, customer service, and marketing assistance.
            </li>
          </ul>

          <h3 className="text-gray-900 font-bold uppercase text-xl mt-8 mb-4">4. Security of Your Information</h3>
          <p>
            We use administrative, technical, and physical security measures to help protect your personal information. While we have taken reasonable steps to secure the personal information you provide to us, please be aware that despite our efforts, no security measures are perfect or impenetrable, and no method of data transmission can be guaranteed against any interception or other type of misuse.
          </p>

          <h3 className="text-gray-900 font-bold uppercase text-xl mt-8 mb-4">5. Contact Us</h3>
          <p>
            If you have questions or comments about this Privacy Policy, please contact us at:
          </p>
          <div className="bg-gray-50 p-6 border border-gray-200 mt-4 rounded-sm">
            <p className="font-bold text-gray-900">AIMORELOGY LIMITED</p>
            <p>Room H2 4/F, Century Industrial Centre</p>
            <p>33-35 Au Pui Wan Street Fotan, Sha Tin, Hong Kong</p>
            <p className="mt-4"><span className="font-bold">Email:</span> info@aimorelogy.com</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
