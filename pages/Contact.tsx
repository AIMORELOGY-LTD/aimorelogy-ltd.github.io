import React, { useEffect, useState } from 'react';
import { Mail, Phone, MapPin, Send, MessageCircle } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { sendContactEmail } from '../utils/emailjs';
import { useLang } from '../i18n-routing';

const Contact: React.FC = () => {
  const { t } = useTranslation();
  const lang = useLang();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    document.title = t('contact.metaTitle');
  }, [t]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const { firstName, lastName, email, phone, message } = formData;
    const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

    if (!isValidEmail) {
      setStatus('error');
      setErrorMessage(t('contact.form.invalidEmail'));
      return;
    }

    if (!message.trim()) {
      setStatus('error');
      setErrorMessage(t('contact.form.required'));
      return;
    }

    setStatus('sending');
    setErrorMessage('');

    const result = await sendContactEmail({
      name: `${firstName} ${lastName}`.trim(),
      email,
      phone,
      message,
      source: 'contact',
      lang
    });

    if (!result.ok) {
      setStatus('error');
      setErrorMessage(result.error === 'missing_endpoint' ? t('contact.form.missingEndpoint') : t('contact.form.error'));
      return;
    }

    setStatus('success');
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      message: ''
    });
  };

  return (
    <div className="bg-white min-h-screen py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-0 shadow-2xl">
          
          {/* Info Section */}
          <div className="bg-gray-900 p-10 md:p-14 flex flex-col justify-between">
            <div>
              <div className="w-12 h-1 bg-[#4f4398] mb-8"></div>
              <h2 className="text-4xl font-black text-white uppercase mb-6">{t('contact.title')}</h2>
              <p className="text-gray-300 mb-10 text-lg leading-relaxed">
                {t('contact.subtitle')}
              </p>
              
              <div className="space-y-8">
                {/* Sales Contacts */}
                <div className="flex items-start gap-5 group border-b border-gray-800 pb-6">
                  <Phone size={24} className="text-[#4f4398] mt-1 shrink-0" />
                  <div className="w-full">
                    <h3 className="font-bold text-white text-lg uppercase mb-4">{t('contact.salesSupport')}</h3>
                    
                    <div className="grid grid-cols-1 gap-4">
                      <div>
                        <p className="text-white font-bold">Yiran Ke</p>
                        <p className="text-gray-400 font-mono text-sm mb-1">+86 176 0665 4980</p>
                        <div className="flex items-center gap-2 text-xs text-[#76b900] font-bold uppercase">
                          <MessageCircle size={12} /> {t('contact.channels')}
                        </div>
                      </div>
                      
                      <div>
                        <p className="text-white font-bold">Jeff Xie</p>
                        <p className="text-gray-400 font-mono text-sm mb-1">+86 189 3306 3380</p>
                        <div className="flex items-center gap-2 text-xs text-[#76b900] font-bold uppercase">
                          <MessageCircle size={12} /> {t('contact.channels')}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Email */}
                <div className="flex items-start gap-5 group border-b border-gray-800 pb-6">
                  <Mail size={24} className="text-[#4f4398] mt-1 shrink-0" />
                  <div>
                    <h3 className="font-bold text-white text-lg uppercase mb-1">{t('contact.corporateEmail')}</h3>
                    <a href="mailto:info@aimorelogy.com" className="text-gray-300 hover:text-white transition-colors">info@aimorelogy.com</a>
                  </div>
                </div>
                
                {/* Locations */}
                <div className="flex items-start gap-5 group">
                  <MapPin size={24} className="text-[#4f4398] mt-1 shrink-0" />
                  <div className="space-y-6">
                    <div>
                      <h3 className="font-bold text-white text-lg uppercase mb-2">{t('contact.locations.shenzhen.title')}</h3>
                      <p className="text-white text-sm font-bold mb-1">{t('contact.locations.shenzhen.company')}</p>
                      <p className="text-gray-400 text-sm leading-relaxed">
                        {t('contact.locations.shenzhen.address')}
                      </p>
                    </div>
                    
                    <div>
                      <h3 className="font-bold text-white text-lg uppercase mb-2">{t('contact.locations.hk.title')}</h3>
                      <p className="text-white text-sm font-bold mb-1">{t('contact.locations.hk.company')}</p>
                      <p className="text-gray-400 text-sm leading-relaxed uppercase">
                        {t('contact.locations.hk.addressLine1')}<br/>
                        {t('contact.locations.hk.addressLine2')}<br/>
                        {t('contact.locations.hk.addressLine3')}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Form Section */}
          <div className="bg-gray-50 p-10 md:p-14 border border-gray-100 flex flex-col justify-center">
            <h3 className="text-2xl font-bold text-gray-900 uppercase mb-8">{t('contact.form.title')}</h3>
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold text-gray-500 uppercase tracking-wider">{t('contact.form.firstName')}</label>
                  <input 
                    type="text" 
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                    className="w-full bg-white border border-gray-300 text-gray-900 px-4 py-3 focus:outline-none focus:border-[#4f4398] focus:ring-1 focus:ring-[#4f4398] transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-gray-500 uppercase tracking-wider">{t('contact.form.lastName')}</label>
                  <input 
                    type="text" 
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                    className="w-full bg-white border border-gray-300 text-gray-900 px-4 py-3 focus:outline-none focus:border-[#4f4398] focus:ring-1 focus:ring-[#4f4398] transition-all"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-xs font-bold text-gray-500 uppercase tracking-wider">{t('contact.form.email')}</label>
                <input 
                  type="email" 
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full bg-white border border-gray-300 text-gray-900 px-4 py-3 focus:outline-none focus:border-[#4f4398] focus:ring-1 focus:ring-[#4f4398] transition-all"
                />
              </div>

               <div className="space-y-2">
                <label className="text-xs font-bold text-gray-500 uppercase tracking-wider">{t('contact.form.phone')}</label>
                <input 
                  type="tel" 
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full bg-white border border-gray-300 text-gray-900 px-4 py-3 focus:outline-none focus:border-[#4f4398] focus:ring-1 focus:ring-[#4f4398] transition-all"
                />
              </div>
              
              <div className="space-y-2">
                <label className="text-xs font-bold text-gray-500 uppercase tracking-wider">{t('contact.form.message')}</label>
                <textarea 
                  rows={5}
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full bg-white border border-gray-300 text-gray-900 px-4 py-3 focus:outline-none focus:border-[#4f4398] focus:ring-1 focus:ring-[#4f4398] transition-all resize-none"
                ></textarea>
              </div>
              
              <button 
                type="submit"
                disabled={status === 'sending'}
                className="w-full bg-[#4f4398] hover:bg-[#3e3479] text-white font-bold uppercase py-4 tracking-wider transition-colors flex justify-center items-center gap-2 shadow-lg disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {status === 'sending' ? t('contact.form.sending') : t('contact.form.send')} <Send size={18} />
              </button>
              {status === 'success' && (
                <p className="text-xs text-[#76b900] font-bold uppercase text-center">{t('contact.form.success')}</p>
              )}
              {status === 'error' && (
                <p className="text-xs text-red-500 font-bold uppercase text-center">{errorMessage || t('contact.form.error')}</p>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
