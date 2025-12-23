
import React, { useEffect } from 'react';

const TermsOfService: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-white min-h-screen py-20">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="mb-12 border-b border-gray-100 pb-8">
          <h1 className="text-4xl font-black text-gray-900 uppercase mb-4">Terms of Service</h1>
          <p className="text-gray-500 text-sm">Last Updated: March 10, 2025</p>
        </div>

        <div className="prose prose-lg text-gray-600 max-w-none">
          <p>
            These Terms of Service ("Terms") govern your use of the website operated by AIMORELOGY LIMITED ("Company," "we," or "us") and the purchase of our products and services. By accessing or using our website, you agree to be bound by these Terms.
          </p>

          <h3 className="text-gray-900 font-bold uppercase text-xl mt-8 mb-4">1. Use License</h3>
          <p>
            Permission is granted to temporarily download one copy of the materials (information or software) on AIMORELOGY's website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license, you may not:
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li>Modify or copy the materials;</li>
            <li>Use the materials for any commercial purpose, or for any public display (commercial or non-commercial);</li>
            <li>Attempt to decompile or reverse engineer any software contained on AIMORELOGY's website;</li>
            <li>Remove any copyright or other proprietary notations from the materials; or</li>
            <li>Transfer the materials to another person or "mirror" the materials on any other server.</li>
          </ul>

          <h3 className="text-gray-900 font-bold uppercase text-xl mt-8 mb-4">2. Disclaimer</h3>
          <p>
            The materials on AIMORELOGY's website are provided on an 'as is' basis. AIMORELOGY makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
          </p>

          <h3 className="text-gray-900 font-bold uppercase text-xl mt-8 mb-4">3. Limitations</h3>
          <p>
            In no event shall AIMORELOGY or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on AIMORELOGY's website, even if AIMORELOGY or an authorized representative has been notified orally or in writing of the possibility of such damage.
          </p>

          <h3 className="text-gray-900 font-bold uppercase text-xl mt-8 mb-4">4. Product Usage & Safety</h3>
          <p>
            Our products, including Flight Controllers and Edge AI modules, are designed for industrial and professional use.
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li>You agree to use our products in compliance with all applicable local laws and aviation regulations.</li>
            <li>AIMORELOGY is not responsible for any damage, injury, or legal liability resulting from the misuse, improper installation, or modification of our hardware or software.</li>
            <li>Users are responsible for ensuring that any autonomous systems deployed using our technology are operated safely.</li>
          </ul>

          <h3 className="text-gray-900 font-bold uppercase text-xl mt-8 mb-4">5. Governing Law</h3>
          <p>
            These terms and conditions are governed by and construed in accordance with the laws of Hong Kong SAR and you irrevocably submit to the exclusive jurisdiction of the courts in that location.
          </p>

          <h3 className="text-gray-900 font-bold uppercase text-xl mt-8 mb-4">6. Changes to Terms</h3>
          <p>
            We reserve the right, at our sole discretion, to modify or replace these Terms at any time. By continuing to access or use our Service after those revisions become effective, you agree to be bound by the revised terms.
          </p>
        </div>
      </div>
    </div>
  );
};

export default TermsOfService;
