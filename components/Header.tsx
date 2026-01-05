
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Globe, ChevronDown, ChevronUp, Search } from 'lucide-react';
import { RoutePath } from '../types';
import { useTranslation } from 'react-i18next';
import { useLang, withLang } from '../i18n-routing';

// --- Data Types ---

type MenuType = 'billboard' | 'sidebar' | 'simple' | 'empty' | 'link';

interface SimpleLink {
  label: string;
  to: string;
  // Icon property kept for type compatibility but not rendered in desktop dropdown
  icon?: React.ReactNode; 
}

interface ComponentItem {
  model: string;
  description: string;
  to: string;
}

interface ComponentCategory {
  title: string;
  items: ComponentItem[];
}

interface SidebarSection {
  name: string;
  categories: ComponentCategory[];
}

interface MenuItem {
  title: string;
  type: MenuType;
  path?: string;
  href?: string;
  // Data for Billboard (Legacy support)
  billboard?: {
    title: string;
    subtitle: string;
    description: string;
    image: string;
    to: string;
    badge?: string;
  };
  // Data for Sidebar (Products & Core Components)
  brands?: SidebarSection[];
  // Data for Simple (Support)
  simpleItems?: SimpleLink[];
}

// --- Menu Data Configuration ---

const Header: React.FC = () => {
  const { t } = useTranslation();
  const lang = useLang();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [langMenuOpen, setLangMenuOpen] = useState(false);
  
  // Desktop Hover State
  const [activeDesktopMenu, setActiveDesktopMenu] = useState<string | null>(null);
  // Track active section in the Sidebar layout
  const [activeBrandIndex, setActiveBrandIndex] = useState<number>(0);

  // Mobile Accordion State
  const [expandedMobileItems, setExpandedMobileItems] = useState<string[]>([]);

  const location = useLocation();
  const isHome = location.pathname === `/${lang}` || location.pathname === `/${lang}/`;
  const basePath = location.pathname.replace(/^\/(en|zh|ru)/, '') || '/';
  const buildLangPath = (targetLang: typeof lang) => withLang(targetLang, basePath);

  const MENU_DATA: MenuItem[] = [
    {
      title: t('header.menu.productsTitle'),
      type: 'sidebar',
      path: '#',
      brands: [
        {
          name: t('header.menu.products.flightController'),
          categories: [
            {
              title: t('header.menu.products.allInOne'),
              items: [
                {
                  model: 'AFC-V1',
                  description: t('header.menu.products.afcDesc'),
                  to: '#'
                }
              ]
            }
          ]
        }
      ]
    },
    {
      title: t('header.menu.solutions'),
      type: 'sidebar',
      brands: [
        {
          name: t('header.menu.solutionsFpvUav'),
          categories: [
            {
              title: t('header.menu.solutionsFpvUavCategory'),
              items: [
                {
                  model: t('header.menu.solutionsAiTracking'),
                  description: t('header.menu.solutionsAiTrackingDesc'),
                  to: withLang(lang, RoutePath.TECHNOLOGY_AI_TRACKING)
                },
                {
                  model: t('header.menu.solutionsDshot'),
                  description: t('header.menu.solutionsDshotDesc'),
                  to: withLang(lang, RoutePath.TECHNOLOGY_DSHOT)
                }
              ]
            }
          ]
        },
        {
          name: t('header.menu.solutionsConsumer'),
          categories: [
            {
              title: t('header.menu.solutionsConsumerCategory'),
              items: [
                {
                  model: t('header.menu.cloudAiCamera'),
                  description: t('header.menu.solutionsCloudAiCameraDesc'),
                  to: withLang(lang, RoutePath.SOLUTION_AI_CAMERA)
                }
              ]
            }
          ]
        }
      ]
    },
    {
      title: t('header.menu.coreComponents'),
      type: 'sidebar',
      brands: [
        {
          name: 'SOPHGO',
          categories: [
            {
              title: t('header.menu.intelligentVision'),
              items: [
                { 
                  model: 'BM1688', 
                  description: t('header.menu.sophgo.bm1688'), 
                  to: withLang(lang, '/products/sophgo/bm1688/') 
                },
                { 
                  model: 'CV186x', 
                  description: t('header.menu.sophgo.cv186ah'), 
                  to: withLang(lang, '/products/sophgo/cv186x/') 
                },
                { 
                  model: 'CV184x', 
                  description: t('header.menu.sophgo.cv184'), 
                  to: withLang(lang, '/products/sophgo/cv184x/') 
                },
                { 
                  model: 'CV181x', 
                  description: t('header.menu.sophgo.cv181'), 
                  to: withLang(lang, '/products/sophgo/cv181x/') 
                },
                { 
                  model: 'CV180x', 
                  description: t('header.menu.sophgo.cv180'), 
                  to: withLang(lang, '/products/sophgo/cv180x/') 
                }
              ]
            }
          ]
        },
        {
          name: 'Espressif',
          categories: [
            {
              title: t('header.menu.xtensa'),
              items: [
                {
                  model: 'ESP32S3N16R8',
                  description: t('header.menu.espressif.esp32'),
                  to: withLang(lang, '/products/espressif/esp32s3/')
                }
              ]
            }
          ]
        },
        {
          name: 'STM',
          categories: [
            {
              title: t('header.menu.armCortexM'),
              items: [
                {
                  model: 'STM32F405',
                  description: t('header.menu.stm.stm32f405'),
                  to: withLang(lang, '/products/stm/stm32f405/')
                },
                {
                  model: 'STM32F722',
                  description: t('header.menu.stm.stm32f722'),
                  to: withLang(lang, '/products/stm/stm32f722/')
                },
                {
                  model: 'STM32F767',
                  description: t('header.menu.stm.stm32f767'),
                  to: withLang(lang, '/products/stm/stm32f767/')
                }
              ]
            }
          ]
        }
      ]
    },
    {
      title: t('header.menu.support'),
      type: 'simple',
      simpleItems: [
        { label: t('header.menu.contactUs'), to: withLang(lang, `${RoutePath.CONTACT}/`) },
        { label: t('header.menu.documents'), to: '#' }
      ]
    },
    {
      title: t('header.menu.forum'),
      type: 'link',
      href: 'https://forum.aimorelogy.com'
    }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Determine header state
  // Transparent IF: Home Page AND Not Scrolled AND Menu Closed AND No Dropdown Active
  const isTransparent = isHome && !scrolled && !activeDesktopMenu && !isMenuOpen;

  const headerBgClass = isTransparent 
    ? 'bg-transparent border-transparent shadow-none' 
    : 'bg-white border-b border-gray-100 shadow-sm';

  const textColorClass = isTransparent ? 'text-white' : 'text-gray-600';
  const textHoverClass = isTransparent ? 'hover:text-white/80' : 'hover:text-gray-900';
  const logoTextColor = isTransparent ? 'text-white' : 'text-gray-900';
  const iconColorClass = isTransparent ? 'text-white' : 'text-gray-500';

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const toggleMobileItem = (title: string) => {
    setExpandedMobileItems(prev => 
      prev.includes(title) ? prev.filter(item => item !== title) : [...prev, title]
    );
  };

  // --- Render Functions for Desktop Layouts ---

  const renderDesktopDropdown = () => {
    const item = MENU_DATA.find(m => m.title === activeDesktopMenu);
    if (!item) return null;

    return (
      <div 
        className="hidden lg:block absolute top-[72px] left-0 w-full bg-white border-b border-gray-200 shadow-2xl z-40 animate-fadeIn"
        onMouseEnter={() => setActiveDesktopMenu(activeDesktopMenu)}
        onMouseLeave={() => setActiveDesktopMenu(null)}
      >
        <div className="w-full px-8 py-12 bg-white min-h-[300px]">
          
          {/* 1. BILLBOARD LAYOUT */}
          {item.type === 'billboard' && item.billboard && (
            <div className="flex bg-gray-50 border border-gray-100 w-full">
                 {/* Left: Image */}
                 <div className="w-1/3 relative overflow-hidden">
                    <img src={item.billboard.image} alt={item.billboard.title} className="w-full h-full object-cover" />
                 </div>
                 
                 {/* Right: Content */}
                 <div className="w-2/3 p-12 flex flex-col justify-center">
                    <div className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-4">
                      {item.billboard.subtitle}
                    </div>
                    <h3 className="text-3xl font-black text-gray-900 uppercase mb-4 leading-none">
                      {item.billboard.title}
                    </h3>
                    <p className="text-gray-600 mb-8 max-w-xl text-sm leading-relaxed">
                      {item.billboard.description}
                    </p>
                    <Link 
                      to={item.billboard.to}
                      onClick={() => setActiveDesktopMenu(null)}
                      className="text-[#4f4398] font-bold uppercase text-sm hover:text-[#3e3479] transition-colors"
                    >
                      Learn More
                    </Link>
                 </div>
            </div>
          )}

          {/* 2. SIDEBAR LAYOUT (Products & Core Components) */}
          {item.type === 'sidebar' && item.brands && (
            <div className="flex gap-20">
              {/* Left Sidebar: Navigation List */}
              <div className="w-64 shrink-0 border-r border-gray-100 pr-8">
                {/* Removed 'Brands' Header */}
                <ul className="space-y-4">
                  {item.brands.map((brand, idx) => (
                    <li key={idx}>
                      <button
                        className={`w-full text-left font-bold text-sm transition-colors uppercase tracking-wide ${
                          activeBrandIndex === idx 
                            ? 'text-[#4f4398]' 
                            : 'text-gray-500 hover:text-gray-900'
                        }`}
                        onMouseEnter={() => setActiveBrandIndex(idx)}
                      >
                        {brand.name}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Right Content: Categories & Items */}
              <div className="flex-1">
                 <div className="h-full">
                    {item.brands[activeBrandIndex] && (
                      <div className="animate-fadeIn">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-12">
                           {item.brands[activeBrandIndex].categories.map((category, catIdx) => (
                             <div key={catIdx}>
                                <h4 className="text-xs font-bold text-gray-900 uppercase tracking-widest mb-6 border-b border-gray-100 pb-2">
                                  {category.title}
                                </h4>
                                <ul className="space-y-4">
                                  {category.items.map((subItem, subIdx) => (
                                    <li key={subIdx}>
                                      {subItem.to === '#' ? (
                                        <div className="group block cursor-default">
                                          <span className="font-bold text-gray-400 text-sm block mb-1">
                                              {subItem.model}
                                          </span>
                                          <p className="text-xs text-gray-400 leading-relaxed">
                                            {subItem.description}
                                          </p>
                                        </div>
                                      ) : (
                                        <Link 
                                          to={subItem.to}
                                          className="group block"
                                          onClick={() => setActiveDesktopMenu(null)}
                                        >
                                          <span className="font-bold text-gray-900 group-hover:text-[#4f4398] transition-colors text-sm block mb-1">
                                              {subItem.model}
                                          </span>
                                          <p className="text-xs text-gray-500 leading-relaxed group-hover:text-gray-700">
                                            {subItem.description}
                                          </p>
                                        </Link>
                                      )}
                                    </li>
                                  ))}
                                </ul>
                             </div>
                           ))}
                        </div>
                      </div>
                    )}
                 </div>
              </div>
            </div>
          )}

          {/* 3. SIMPLE LAYOUT (SOLUTIONS & SUPPORT) */}
          {item.type === 'simple' && item.simpleItems && (
             <div className="grid grid-cols-4 gap-12">
                <div className="col-span-1">
                   {/* Removed 'Direct Links' Header */}
                   <ul className="space-y-4">
                     {item.simpleItems.map((simpleItem, idx) => (
                       <li key={idx}>
                          <Link 
                            to={simpleItem.to}
                            className="block text-gray-600 hover:text-[#4f4398] font-bold text-sm transition-colors"
                            onClick={() => setActiveDesktopMenu(null)}
                          >
                             {simpleItem.label}
                          </Link>
                       </li>
                     ))}
                   </ul>
                </div>

                {/* Promo / Context Box */}
                <div className="col-span-1">
                   <div className="bg-gray-50 p-6 border border-gray-100">
                     {/* Removed Promo Title 'Enterprise Support' for cleaner look */}
                     <p className="text-xs text-gray-500 mb-4 leading-relaxed">
                       {t('header.promo')}
                     </p>
                     <Link to={withLang(lang, RoutePath.CONTACT)} className="text-xs font-bold text-[#4f4398] uppercase hover:underline">
                       {t('header.contactSupport')}
                     </Link>
                   </div>
                </div>
             </div>
          )}

          {/* 4. EMPTY LAYOUT */}
          {item.type === 'empty' && (
            <div className="flex flex-col items-center justify-center py-12 text-center opacity-50">
               <h3 className="text-lg font-bold text-gray-900 uppercase">{t('header.comingSoon')}</h3>
            </div>
          )}
          
        </div>
      </div>
    );
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out ${headerBgClass}`}
      onMouseLeave={() => setActiveDesktopMenu(null)}
    >
      {/* Full Width Container */}
      <div className="w-full px-6 md:px-8 h-[72px] flex items-center">
        {/* Logo Area - Left */}
        <Link to={withLang(lang, RoutePath.HOME)} className="flex items-center gap-2 z-50 mr-12 shrink-0">
            <img
              src="/aimorelogy-logo-small.svg"
              alt="AIMORELOGY"
              className={`h-8 w-auto ${isTransparent ? 'filter brightness-0 invert' : ''}`}
            />
        </Link>

        {/* Desktop Navigation - Immediate Left Next to Logo */}
        <nav className="hidden lg:flex items-center h-full mr-auto">
          <ul className="flex h-full gap-1">
            {MENU_DATA.map((item) => (
              <li
                key={item.title}
                className="h-full"
                onMouseEnter={() => {
                  if (item.type === 'link') {
                    setActiveDesktopMenu(null);
                    return;
                  }
                  setActiveDesktopMenu(item.title);
                  // Reset sidebar index when opening a sidebar menu
                  if (item.type === 'sidebar') setActiveBrandIndex(0);
                }}
              >
                {item.type === 'link' && item.href ? (
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noreferrer"
                    className={`h-full px-5 text-sm font-bold border-b-4 transition-colors duration-200 flex items-center uppercase tracking-wide border-transparent ${textColorClass} ${textHoverClass} hover:border-[#4f4398]/20`}
                  >
                    {item.title}
                  </a>
                ) : (
                  <button
                    className={`h-full px-5 text-sm font-bold border-b-4 transition-colors duration-200 flex items-center uppercase tracking-wide ${
                      activeDesktopMenu === item.title
                        ? 'border-[#4f4398] text-gray-900 bg-white' // Active state always has white bg context
                        : `border-transparent ${textColorClass} ${textHoverClass} hover:border-[#4f4398]/20`
                    }`}
                  >
                    {item.title}
                  </button>
                )}
              </li>
            ))}
          </ul>
        </nav>

        {/* Icons & Actions Area - Far Right */}
        <div className={`hidden lg:flex items-center gap-6 ml-auto pl-6 h-8 ${isTransparent ? 'border-l border-white/20' : 'border-l border-gray-100'}`}>
           {/* Search Icon */}
           <button className={`${iconColorClass} hover:text-[#4f4398] transition-colors`} aria-label={t('header.search')}>
             <Search size={20} />
           </button>

           {/* User Icon Removed */}

           {/* Language Switcher */}
           <div className="relative h-full flex items-center">
             <button 
               onClick={() => setLangMenuOpen(!langMenuOpen)}
               className={`flex items-center gap-1 ${iconColorClass} hover:text-[#4f4398] transition-colors`}
               aria-label={t('header.language')}
             >
               <Globe size={20} />
             </button>
             
             {/* Dropdown */}
             {langMenuOpen && (
               <div className="absolute top-full right-0 mt-6 w-32 bg-white shadow-xl border border-gray-100 py-2 rounded-sm z-50">
                 <Link
                   to={buildLangPath('en')}
                   onClick={() => setLangMenuOpen(false)}
                   className={`block w-full text-left px-4 py-2 text-sm ${lang === 'en' ? 'text-[#4f4398] font-bold bg-gray-50' : 'text-gray-600 hover:bg-gray-50 hover:text-[#4f4398]'}`}
                 >
                   {t('header.lang.en')}
                 </Link>
                 <Link
                   to={buildLangPath('zh')}
                   onClick={() => setLangMenuOpen(false)}
                   className={`block w-full text-left px-4 py-2 text-sm ${lang === 'zh' ? 'text-[#4f4398] font-bold bg-gray-50' : 'text-gray-600 hover:bg-gray-50 hover:text-[#4f4398]'}`}
                 >
                   {t('header.lang.zh')}
                 </Link>
                 <Link
                   to={buildLangPath('ru')}
                   onClick={() => setLangMenuOpen(false)}
                   className={`block w-full text-left px-4 py-2 text-sm ${lang === 'ru' ? 'text-[#4f4398] font-bold bg-gray-50' : 'text-gray-600 hover:bg-gray-50 hover:text-[#4f4398]'}`}
                 >
                   {t('header.lang.ru')}
                 </Link>
               </div>
             )}
           </div>
        </div>

        {/* Mobile Menu Button - Right */}
        <button
          className={`lg:hidden z-50 hover:text-[#4f4398] ml-auto ${isTransparent ? 'text-white' : 'text-gray-900'}`}
          onClick={toggleMenu}
        >
          {isMenuOpen ? <X size={28} className="text-gray-900" /> : <Menu size={28} />}
        </button>
      </div>

      {/* Desktop Mega Menu Dropdown */}
      {activeDesktopMenu && renderDesktopDropdown()}

      {/* Mobile Navigation Overlay */}
      <div 
        className={`fixed inset-0 bg-white z-40 flex flex-col pt-[72px] transition-transform duration-300 ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Scrollable Content Area */}
        <div className="flex-1 overflow-y-auto w-full">
            <div className="flex flex-col w-full pb-4">
                {MENU_DATA.map((item) => (
                  <div key={item.title} className="border-b border-gray-100">
                    {item.type === 'link' && item.href ? (
                      <a
                        href={item.href}
                        target="_blank"
                        rel="noreferrer"
                        onClick={() => setIsMenuOpen(false)}
                        className="w-full flex justify-between items-center py-5 px-6 text-left"
                      >
                        <span className="text-lg font-bold uppercase text-gray-900">
                          {item.title}
                        </span>
                      </a>
                    ) : (
                      <>
                        <button 
                          onClick={() => toggleMobileItem(item.title)}
                          className="w-full flex justify-between items-center py-5 px-6 text-left"
                        >
                          <span className={`text-lg font-bold uppercase ${expandedMobileItems.includes(item.title) ? 'text-[#4f4398]' : 'text-gray-900'}`}>
                            {item.title}
                          </span>
                          {expandedMobileItems.includes(item.title) ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                        </button>
                        
                        {/* Accordion Content */}
                        <div 
                          className={`bg-gray-50 overflow-hidden transition-all duration-300 ease-in-out ${
                            expandedMobileItems.includes(item.title) ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'
                          }`}
                        >
                          <div className="px-6 pb-6 pt-2">
                            {/* Mobile Menu Content */}
                            {item.type === 'billboard' && item.billboard && (
                               <Link 
                                 to={item.billboard.to}
                                 onClick={() => setIsMenuOpen(false)}
                                 className="block"
                               >
                                 <div className="aspect-video bg-gray-200 mb-4 overflow-hidden rounded-sm relative">
                                   <img src={item.billboard.image} alt={item.billboard.title} className="w-full h-full object-cover" />
                                   <span className="absolute top-2 right-2 bg-[#4f4398] text-white text-[10px] px-2 py-1 font-bold uppercase">Featured</span>
                                 </div>
                                 <h3 className="text-xl font-black text-gray-900 uppercase mb-1">{item.billboard.title}</h3>
                                 <p className="text-xs text-gray-600 mb-3">{item.billboard.subtitle}</p>
                                 <span className="text-[#4f4398] font-bold uppercase text-sm flex items-center gap-1">Learn More</span>
                               </Link>
                            )}

                            {item.type === 'sidebar' && item.brands && (
                              <div className="space-y-6">
                                {item.brands.map((brand, bIdx) => (
                                   <div key={bIdx} className="border-l-2 border-gray-200 pl-4 ml-1">
                                      <h4 className="font-bold text-gray-900 text-sm flex items-center gap-2 mb-4 uppercase">
                                        {brand.name}
                                      </h4>
                                      <div className="space-y-6">
                                        {brand.categories.map((cat, idx) => (
                                          <div key={idx}>
                                             <h5 className="text-[#4f4398] font-bold text-xs uppercase mb-2">{cat.title}</h5>
                                             <ul className="space-y-3">
                                               {cat.items.map((sub, sIdx) => (
                                                 <li key={sIdx}>
                                                    <Link to={sub.to} onClick={() => setIsMenuOpen(false)} className="block">
                                                      <span className="font-bold text-gray-800 text-sm block">{sub.model}</span>
                                                    </Link>
                                                 </li>
                                               ))}
                                             </ul>
                                          </div>
                                        ))}
                                      </div>
                                   </div>
                                ))}
                              </div>
                            )}

                            {item.type === 'simple' && item.simpleItems && (
                               <ul className="space-y-3">
                                 {item.simpleItems.map((sItem, idx) => (
                                   <li key={idx}>
                                     <Link 
                                       to={sItem.to} 
                                       onClick={() => setIsMenuOpen(false)}
                                       className="flex items-center gap-3 text-gray-700 font-bold text-sm"
                                     >
                                       {sItem.label}
                                     </Link>
                                   </li>
                                 ))}
                               </ul>
                            )}
                          </div>
                        </div>
                      </>
                    )}
                  </div>
                ))}
            </div>
        </div>
        
        {/* Mobile Footer Area - Fixed to Bottom */}
        <div className="p-6 border-t border-gray-100 bg-white shrink-0">
           {langMenuOpen && (
             <div className="mb-4 border border-gray-100 bg-gray-50">
               <Link
                 to={buildLangPath('en')}
                 onClick={() => setLangMenuOpen(false)}
                 className={`block px-4 py-2 text-sm ${lang === 'en' ? 'text-[#4f4398] font-bold bg-white' : 'text-gray-600 hover:text-[#4f4398]'}`}
               >
                 {t('header.lang.en')}
               </Link>
               <Link
                 to={buildLangPath('zh')}
                 onClick={() => setLangMenuOpen(false)}
                 className={`block px-4 py-2 text-sm ${lang === 'zh' ? 'text-[#4f4398] font-bold bg-white' : 'text-gray-600 hover:text-[#4f4398]'}`}
               >
                 {t('header.lang.zh')}
               </Link>
               <Link
                 to={buildLangPath('ru')}
                 onClick={() => setLangMenuOpen(false)}
                 className={`block px-4 py-2 text-sm ${lang === 'ru' ? 'text-[#4f4398] font-bold bg-white' : 'text-gray-600 hover:text-[#4f4398]'}`}
               >
                 {t('header.lang.ru')}
               </Link>
             </div>
           )}
           <div className="flex justify-center items-center gap-12">
              <button className="flex flex-col items-center justify-center gap-2 text-gray-600 hover:text-[#4f4398] transition-colors">
                <Search size={24} strokeWidth={1.5} />
                <span className="text-xs font-medium">{t('header.search')}</span>
              </button>
              {/* User Icon Removed from Mobile */}
              <button 
                onClick={() => setLangMenuOpen(!langMenuOpen)}
                className="flex flex-col items-center justify-center gap-2 text-gray-600 hover:text-[#4f4398] transition-colors"
              >
                <Globe size={24} strokeWidth={1.5} />
                <span className="text-xs font-medium">{t('header.language')}</span>
              </button>
           </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
