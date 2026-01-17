
import React, { useState } from 'react';
import { Send, Phone, MapPin, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';
import { RoutePath } from '../types';
import { useTranslation } from 'react-i18next';
import { useLang, withLang } from '../i18n-routing';
import { sendContactEmail } from '../utils/emailjs';

// --- Custom Social Icons ---

const WhatsAppIcon = () => (
  <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.008-.57-.008-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
  </svg>
);

const WeChatIcon = () => (
  <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
     <path d="M8.5,14c-4.2,0-7.5-3-7.5-7s3.3-7,7.5-7s7.5,3,7.5,7S12.7,14,8.5,14z M5.6,5.3c-0.4,0-0.7,0.3-0.7,0.6c0,0.3,0.3,0.6,0.7,0.6c0.4,0,0.7-0.3,0.7-0.6C6.3,5.6,6,5.3,5.6,5.3z M10.4,5.3c-0.4,0-0.7,0.3-0.7,0.6c0,0.3,0.3,0.6,0.7,0.6c0.4,0,0.7-0.3,0.7-0.6C11.1,5.6,10.8,5.3,10.4,5.3z M16.7,6.4c-3.6,0-6.4,2.5-6.4,5.6c0,3.1,2.9,5.6,6.4,5.6c0.7,0,1.5-0.1,2.2-0.3l1.8,1c0.3,0.2,0.6,0,0.6-0.3l-0.2-1.7c1.3-1.1,2-2.6,2-4.2C23.1,9,20.3,6.4,16.7,6.4z M14.6,9.8c-0.3,0-0.6-0.2-0.6-0.5c0-0.3,0.3-0.5,0.6-0.5c0.3,0,0.6,0.2,0.6,0.5C15.2,9.6,14.9,9.8,14.6,9.8z M18.4,9.8c-0.3,0-0.6-0.2-0.6-0.5c0-0.3,0.3-0.5,0.6-0.5c0.3,0,0.6,0.2,0.6,0.5C19,9.6,18.7,9.8,18.4,9.8z"/>
  </svg>
);

const WeComIcon = () => (
  <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
      <path d="M14.6,9.8c-0.3,0-0.6-0.2-0.6-0.5c0-0.3,0.3-0.5,0.6-0.5c0.3,0,0.6,0.2,0.6,0.5C15.2,9.6,14.9,9.8,14.6,9.8z M18.4,9.8c-0.3,0-0.6-0.2-0.6-0.5c0-0.3,0.3-0.5,0.6-0.5c0.3,0,0.6,0.2,0.6,0.5C19,9.6,18.7,9.8,18.4,9.8z M12,2C6.5,2,2,6,2,11c0,2.6,1.2,4.9,3.3,6.5c-0.2,0.8-0.7,2.1-1.3,2.5c0,0,0,0,0,0c1.7,0,3.5-0.9,4.3-1.6c1.1,0.4,2.3,0.6,3.6,0.6c5.5,0,10-4,10-9S17.5,2,12,2z"/>
  </svg>
);

const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
    <path d="M7 3h10a4 4 0 014 4v10a4 4 0 01-4 4H7a4 4 0 01-4-4V7a4 4 0 014-4zm0 2a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2H7zm5 2.5a4.5 4.5 0 110 9 4.5 4.5 0 010-9zm0 2a2.5 2.5 0 100 5 2.5 2.5 0 000-5zM17.5 6a1 1 0 110 2 1 1 0 010-2z"/>
  </svg>
);

// --- Social Link Component with Hover QR ---
interface SocialLinkProps {
  icon: React.ReactNode;
  label: string;
  qrCode?: string;
  qrClassName?: string;
  href?: string;
  hoverColor: string;
  enableHoverColor?: boolean;
}

const SocialLink: React.FC<SocialLinkProps> = ({ icon, label, qrCode, qrClassName, href, hoverColor, enableHoverColor = true }) => {
  const [isHovered, setIsHovered] = useState(false);
  const showHoverColor = enableHoverColor && isHovered;

  const content = (
    <>
      <div 
        className="text-white transition-colors duration-300" 
        style={{ color: showHoverColor ? hoverColor : 'white' }}
      >
        {icon}
      </div>
      
      {/* QR Code Popup */}
      {qrCode && isHovered && (
        <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-4 z-50 animate-fadeIn">
            <div className="bg-white p-2 rounded-sm shadow-xl border border-gray-100">
                <img src={qrCode} alt={`${label} QR`} className={qrClassName || "w-auto h-auto object-contain"} />
            </div>
            {/* Triangle Arrow */}
            <div className="w-3 h-3 bg-white transform rotate-45 absolute -bottom-1.5 left-1/2 -translate-x-1/2 border-r border-b border-gray-100"></div>
        </div>
      )}
    </>
  );

  if (href) {
    return (
      <a
        className="relative group cursor-pointer"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        href={href}
        target="_blank"
        rel="noreferrer"
        aria-label={label}
      >
        {content}
      </a>
    );
  }

  return (
    <div
      className="relative group cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      aria-label={label}
    >
      {content}
    </div>
  );
};

const Footer: React.FC = () => {
  const { t } = useTranslation();
  const lang = useLang();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    jobTitle: '',
    phone: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const quickLinks = [
    { key: 'afc', path: RoutePath.PRODUCT_AFC },
    { key: 'bm1688', path: '/products/sophgo/bm1688/' },
    { key: 'cv186x', path: '/products/sophgo/cv186x/' },
    { key: 'cv184x', path: '/products/sophgo/cv184x/' },
    { key: 'cv181x', path: '/products/sophgo/cv181x/' },
    { key: 'cv180x', path: '/products/sophgo/cv180x/' },
    { key: 'esp32s3', path: '/products/espressif/esp32s3/' },
    { key: 'stm32f405', path: '/products/stm/stm32f405/' },
    { key: 'stm32f722', path: '/products/stm/stm32f722/' },
    { key: 'stm32f767', path: '/products/stm/stm32f767/' },
    { key: 'aiTracking', path: RoutePath.TECHNOLOGY_AI_TRACKING },
    { key: 'dshot', path: RoutePath.TECHNOLOGY_DSHOT },
    { key: 'aiCamera', path: RoutePath.SOLUTION_AI_CAMERA }
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const { name, email, company, jobTitle, phone, message } = formData;
    const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

    if (!isValidEmail) {
      setStatus('error');
      setErrorMessage(t('footer.form.invalidEmail'));
      return;
    }

    setStatus('sending');
    setErrorMessage('');

    const result = await sendContactEmail({
      name,
      email,
      company,
      jobTitle,
      phone,
      message,
      source: 'footer',
      lang
    });

    if (!result.ok) {
      setStatus('error');
      setErrorMessage(result.error === 'missing_endpoint' ? t('footer.form.missingEndpoint') : t('footer.form.error'));
      return;
    }

    setStatus('success');
    setFormData({
      name: '',
      email: '',
      company: '',
      jobTitle: '',
      phone: '',
      message: ''
    });
  };

  return (
    <footer id="footer" className="bg-[#111111] text-gray-400">
      
      {/* 1. PRE-FOOTER: CONTACT & INQUIRY SECTION */}
      <div className="border-t border-gray-900 bg-[#161616]">
        <div className="container mx-auto px-6 py-16">
          <div className="flex flex-col lg:flex-row gap-16">
            
            {/* Contact Info Column */}
            <div className="lg:w-1/3 space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-white uppercase mb-4">{t('footer.getInTouch')}</h3>
                <p className="text-sm leading-relaxed text-gray-400">
                  {t('footer.getInTouchDesc')}
                </p>
              </div>

              <div className="space-y-4">
                 <div className="flex items-start gap-3">
                   <div className="bg-[#4f4398] p-2 rounded-sm text-white"><Mail size={16} /></div>
                   <div>
                      <p className="text-white font-bold">{t('footer.salesSupport')}</p>
                      <a href="mailto:sales@aimorelogy.com" className="block text-sm hover:text-[#4f4398] transition-colors">sales@aimorelogy.com</a>
                      <a href="mailto:supports@aimorelogy.com" className="block text-sm hover:text-[#4f4398] transition-colors">supports@aimorelogy.com</a>
                   </div>
                 </div>
                 
                 <div className="flex items-start gap-3">
                   <div className="bg-[#4f4398] p-2 rounded-sm text-white"><MapPin size={16} /></div>
                   <div>
                      <p className="text-white font-bold">{t('footer.shenzhen')}</p>
                      <p className="text-sm text-gray-500">{t('footer.address')}</p>
                   </div>
                 </div>
              </div>
            </div>

            {/* Compact Form Column */}
            <div className="lg:w-2/3">
              <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
                 <input 
                   type="text" 
                   name="name"
                   placeholder={t('footer.form.fullName')}
                   value={formData.name}
                   onChange={handleChange}
                   required
                   className="bg-[#222] border border-gray-800 text-white px-4 py-3 text-sm focus:outline-none focus:border-[#4f4398] focus:ring-1 focus:ring-[#4f4398] placeholder-gray-500"
                 />
                 <input 
                   type="email" 
                   name="email"
                   placeholder={t('footer.form.email')}
                   value={formData.email}
                   onChange={handleChange}
                   required
                   className="bg-[#222] border border-gray-800 text-white px-4 py-3 text-sm focus:outline-none focus:border-[#4f4398] focus:ring-1 focus:ring-[#4f4398] placeholder-gray-500"
                 />
                 <textarea 
                   name="message"
                   rows={3}
                   placeholder={t('footer.form.message')}
                   value={formData.message}
                   onChange={handleChange}
                   required
                   className="bg-[#222] border border-gray-800 text-white px-4 py-3 text-sm focus:outline-none focus:border-[#4f4398] focus:ring-1 focus:ring-[#4f4398] placeholder-gray-500 md:col-span-2 resize-none"
                 ></textarea>
                 
                 <div className="md:col-span-2">
                   <button
                     type="submit"
                     disabled={status === 'sending'}
                     className="bg-white text-[#111] font-bold uppercase px-8 py-3 hover:bg-gray-200 transition-colors flex items-center gap-2 text-xs tracking-wider disabled:opacity-60 disabled:cursor-not-allowed"
                   >
                     {status === 'sending' ? t('footer.form.sending') : t('footer.form.send')} <Send size={14} />
                   </button>
                   {status === 'success' && (
                     <p className="mt-3 text-xs text-[#76b900] font-bold uppercase">{t('footer.form.success')}</p>
                   )}
                   {status === 'error' && (
                     <p className="mt-3 text-xs text-red-400 font-bold uppercase">{errorMessage || t('footer.form.error')}</p>
                   )}
                 </div>
              </form>
            </div>

          </div>
        </div>
      </div>

      {/* 2. MAIN FOOTER LINKS (Horizontal Intel Style) */}
      <div className="bg-[#111] border-t border-gray-800">
        <div className="container mx-auto px-6 py-8">
           <ul className="flex flex-col md:flex-row flex-wrap gap-x-8 gap-y-4 text-sm font-bold text-white uppercase tracking-wide">
              <li><Link to={withLang(lang, RoutePath.ABOUT)} className="hover:text-[#4f4398] transition-colors">{t('footer.links.company')}</Link></li>
              <li><Link to={withLang(lang, RoutePath.CONTACT)} className="hover:text-[#4f4398] transition-colors">{t('footer.links.contact')}</Link></li>
              <li><Link to={withLang(lang, RoutePath.CAREERS)} className="hover:text-[#4f4398] transition-colors">{t('footer.links.careers')}</Link></li>
              <li>
                <a
                  href="https://forum.aimorelogy.com"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-[#4f4398] transition-colors"
                >
                  {t('footer.links.community')}
                </a>
              </li>
           </ul>
           <div className="mt-5 text-xs text-gray-500">
             <p className="text-[11px] font-bold uppercase tracking-wider text-gray-500">
               {t('footer.quickLinks.title')}
             </p>
             <div className="mt-3 flex flex-wrap gap-x-4 gap-y-2">
               {quickLinks.map((link) => (
                 <Link
                   key={link.key}
                   to={withLang(lang, link.path)}
                   className="hover:text-[#4f4398] transition-colors"
                 >
                   {t(`footer.quickLinks.items.${link.key}`)}
                 </Link>
               ))}
             </div>
           </div>
        </div>
      </div>

      {/* 3. BOTTOM STRIP (Legal & Socials) */}
      <div className="bg-[#111] border-t border-gray-800 pt-8 pb-12">
        <div className="container mx-auto px-6 flex flex-col-reverse lg:flex-row justify-between items-start lg:items-center gap-8">
           
           {/* Left: Legal Links */}
           <div className="flex flex-col md:flex-row gap-4 md:gap-0 text-xs text-gray-500">
              <span className="md:pr-4 md:border-r border-gray-700">{t('footer.legal.copyright')}</span>
              <div className="flex flex-wrap gap-4 md:gap-0">
                <Link to={withLang(lang, RoutePath.TERMS)} className="md:px-4 md:border-r border-gray-700 hover:text-white transition-colors">{t('footer.legal.terms')}</Link>
                <Link to={withLang(lang, RoutePath.COOKIES)} className="md:px-4 md:border-r border-gray-700 hover:text-white transition-colors">{t('footer.legal.cookies')}</Link>
                <Link to={withLang(lang, RoutePath.PRIVACY)} className="md:pl-4 hover:text-white transition-colors">{t('footer.legal.privacy')}</Link>
              </div>
           </div>

           {/* Right: Logo & Socials */}
           <div className="flex items-center gap-6 self-start lg:self-auto">
              {/* Brand Logo */}
              <div className="flex items-center gap-2">
                 <img
                   src="/aimorelogy-logo-small.svg"
                   alt="AIMORELOGY"
                   className="h-8 w-auto filter brightness-0 invert"
                 />
              </div>

              {/* Social Icons with QR Codes */}
              <div className="flex gap-4 border-l border-gray-700 pl-6 items-center">
                 <SocialLink 
                   icon={<WhatsAppIcon />} 
                   label="WhatsApp" 
                   href="https://wa.me/8618933063380"
                   hoverColor="#25D366"
                   enableHoverColor={false}
                 />
                 <SocialLink
                   icon={<InstagramIcon />}
                   label="Instagram"
                   href="https://www.instagram.com/aimorelogy/"
                   hoverColor="#E1306C"
                 />
                 <SocialLink 
                   icon={<WeComIcon />} 
                   label="WeCom" 
                   qrCode="/Social-Media/wecom.webp" 
                   qrClassName="w-auto h-auto max-w-[360px] max-h-[360px] object-contain"
                   hoverColor="#3875F6" 
                 />
                 <SocialLink 
                   icon={<WeChatIcon />} 
                   label="Official Account" 
                   qrCode="/Social-Media/gzh.webp" 
                   qrClassName="w-auto h-auto max-w-[360px] max-h-[360px] object-contain"
                   hoverColor="#07C160" 
                 />
              </div>
           </div>

        </div>
        
        {/* Disclaimer Text */}
        <div className="container mx-auto px-6 mt-6">
           <p className="text-[10px] text-gray-600 leading-relaxed max-w-4xl">
             {t('footer.disclaimer')}
           </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
