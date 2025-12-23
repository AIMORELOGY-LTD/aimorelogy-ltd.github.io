
import React, { useEffect } from 'react';

const CookiePolicy: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-white min-h-screen py-20">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="mb-12 border-b border-gray-100 pb-8">
          <h1 className="text-4xl font-black text-gray-900 uppercase mb-4">Cookie Policy</h1>
          <p className="text-gray-500 text-sm">Last Updated: March 10, 2025</p>
        </div>

        <div className="prose prose-lg text-gray-600 max-w-none">
          <p>
            This Cookie Policy explains what cookies are, how AIMORELOGY uses cookies on our website, and your choices regarding cookies.
          </p>

          <h3 className="text-gray-900 font-bold uppercase text-xl mt-8 mb-4">1. What Are Cookies?</h3>
          <p>
            Cookies are small text files that are sent to your web browser by a website you visit. A cookie file is stored in your web browser and allows the Service or a third-party to recognize you and make your next visit easier and the Service more useful to you.
          </p>

          <h3 className="text-gray-900 font-bold uppercase text-xl mt-8 mb-4">2. How We Use Cookies</h3>
          <p>
            When you use and access the Service, we may place a number of cookies files in your web browser. We use cookies for the following purposes:
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li>
              <strong>Essential Cookies:</strong> To enable certain functions of the Service, such as authentication and security.
            </li>
            <li>
              <strong>Analytics Cookies:</strong> To provide analytics and understand how our website is used (e.g., Google Analytics).
            </li>
            <li>
              <strong>Preference Cookies:</strong> To store your preferences, such as language settings.
            </li>
          </ul>

          <h3 className="text-gray-900 font-bold uppercase text-xl mt-8 mb-4">3. Third-Party Cookies</h3>
          <p>
            In addition to our own cookies, we may also use various third-parties cookies to report usage statistics of the Service, deliver advertisements on and through the Service, and so on.
          </p>

          <h3 className="text-gray-900 font-bold uppercase text-xl mt-8 mb-4">4. Your Choices</h3>
          <p>
            If you'd like to delete cookies or instruct your web browser to delete or refuse cookies, please visit the help pages of your web browser.
          </p>
          <p className="mt-4">
            Please note, however, that if you delete cookies or refuse to accept them, you might not be able to use all of the features we offer, you may not be able to store your preferences, and some of our pages might not display properly.
          </p>

          <div className="mt-8 bg-gray-50 p-6 border border-gray-200">
             <h4 className="font-bold text-gray-900 mb-2">Browser Help Pages:</h4>
             <ul className="text-sm space-y-1">
               <li><a href="#" className="text-[#4f4398] hover:underline">Chrome</a></li>
               <li><a href="#" className="text-[#4f4398] hover:underline">Internet Explorer / Edge</a></li>
               <li><a href="#" className="text-[#4f4398] hover:underline">Firefox</a></li>
               <li><a href="#" className="text-[#4f4398] hover:underline">Safari</a></li>
             </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookiePolicy;
