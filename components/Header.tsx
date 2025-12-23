
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Globe, ChevronDown, ChevronUp, Search } from 'lucide-react';
import { RoutePath } from '../types';

// --- Data Types ---

type MenuType = 'billboard' | 'sidebar' | 'simple' | 'empty';

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

const MENU_DATA: MenuItem[] = [
  {
    title: 'Products',
    type: 'sidebar',
    path: '#', // Removed specific route link
    brands: [
      {
        name: 'Flight Controller',
        categories: [
          {
            title: 'All-In-One FC',
            items: [
              {
                model: 'AFC-V1',
                description: 'The ultimate answer for the next generation of UAV brains.',
                to: '#' // Disabled link
              }
            ]
          }
        ]
      }
    ]
  },
  {
    title: 'Solutions',
    type: 'simple',
    simpleItems: [
        { 
            label: 'Cloud AI Camera', 
            to: RoutePath.SOLUTION_AI_CAMERA
        },
        { 
            label: 'Autonomous Inspection', 
            to: RoutePath.SOLUTION_DEMO
        }
    ]
  },
  {
    title: 'Core Components',
    type: 'sidebar',
    brands: [
      {
        name: 'SOPHGO',
        categories: [
          {
            title: 'Intelligent Vision',
            items: [
              { 
                model: 'BM1688', 
                description: '16T Edge AI, 8-Core ARM, Highly Integrated SoC.', 
                to: '/products/sophgo/bm1688' 
              },
              { 
                model: 'CV186AH', 
                description: '7.2T High-End Vision Processor (4K/8MP).', 
                to: '/products/sophgo/cv186ah' 
              },
              { 
                model: 'CV184', 
                description: '1.5T Mid-Range Edge Vision (RISC-V + ARM).', 
                to: '/products/sophgo/cv184' 
              },
              { 
                model: 'CV181 / CV180', 
                description: 'Consumer RISC-V AIoT SoC (0.2T - 1.0T).', 
                to: '/products/sophgo/cv181' 
              }
            ]
          }
        ]
      },
      {
        name: 'Espressif',
        categories: [
          {
            title: 'Xtensa Processor',
            items: [
              {
                model: 'ESP32S3N16R8',
                description: 'Dual-core Xtensa 32-bit LX7, 240MHz.',
                to: '/products/espressif/esp32s3'
              }
            ]
          }
        ]
      }
    ]
  },
  {
    title: 'Support',
    type: 'simple',
    simpleItems: [
      { label: 'Contact Us', to: RoutePath.CONTACT },
      { label: 'Documents', to: '#' }
    ]
  }
];

const Header: React.FC = () => {
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
  const isHome = location.pathname === RoutePath.HOME;

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
                       Need assistance with integration or technical specifications? Our engineering team is ready to help.
                     </p>
                     <Link to={RoutePath.CONTACT} className="text-xs font-bold text-[#4f4398] uppercase hover:underline">
                       Contact Support
                     </Link>
                   </div>
                </div>
             </div>
          )}

          {/* 4. EMPTY LAYOUT */}
          {item.type === 'empty' && (
            <div className="flex flex-col items-center justify-center py-12 text-center opacity-50">
               <h3 className="text-lg font-bold text-gray-900 uppercase">Coming Soon</h3>
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
        <Link to={RoutePath.HOME} className="flex items-center gap-2 z-50 mr-12 shrink-0">
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
                   setActiveDesktopMenu(item.title);
                   // Reset sidebar index when opening a sidebar menu
                   if (item.type === 'sidebar') setActiveBrandIndex(0);
                }}
              >
                <button
                  className={`h-full px-5 text-sm font-bold border-b-4 transition-colors duration-200 flex items-center uppercase tracking-wide ${
                    activeDesktopMenu === item.title
                      ? 'border-[#4f4398] text-gray-900 bg-white' // Active state always has white bg context
                      : `border-transparent ${textColorClass} ${textHoverClass} hover:border-[#4f4398]/20`
                  }`}
                >
                  {item.title}
                </button>
              </li>
            ))}
          </ul>
        </nav>

        {/* Icons & Actions Area - Far Right */}
        <div className={`hidden lg:flex items-center gap-6 ml-auto pl-6 h-8 ${isTransparent ? 'border-l border-white/20' : 'border-l border-gray-100'}`}>
           {/* Search Icon */}
           <button className={`${iconColorClass} hover:text-[#4f4398] transition-colors`} aria-label="Search">
             <Search size={20} />
           </button>

           {/* User Icon Removed */}

           {/* Language Switcher */}
           <div className="relative h-full flex items-center">
             <button 
               onClick={() => setLangMenuOpen(!langMenuOpen)}
               className={`flex items-center gap-1 ${iconColorClass} hover:text-[#4f4398] transition-colors`}
               aria-label="Language"
             >
               <Globe size={20} />
             </button>
             
             {/* Dropdown */}
             {langMenuOpen && (
               <div className="absolute top-full right-0 mt-6 w-32 bg-white shadow-xl border border-gray-100 py-2 rounded-sm z-50">
                 <button className="block w-full text-left px-4 py-2 text-sm text-[#4f4398] font-bold bg-gray-50">English</button>
                 <button className="block w-full text-left px-4 py-2 text-sm text-gray-600 hover:bg-gray-50 hover:text-[#4f4398]">中文</button>
                 <button className="block w-full text-left px-4 py-2 text-sm text-gray-600 hover:bg-gray-50 hover:text-[#4f4398]">Русский</button>
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
                  </div>
                ))}
            </div>
        </div>
        
        {/* Mobile Footer Area - Fixed to Bottom */}
        <div className="p-6 border-t border-gray-100 bg-white shrink-0">
           <div className="flex justify-center items-center gap-12">
              <button className="flex flex-col items-center justify-center gap-2 text-gray-600 hover:text-[#4f4398] transition-colors">
                <Search size={24} strokeWidth={1.5} />
                <span className="text-xs font-medium">Search</span>
              </button>
              {/* User Icon Removed from Mobile */}
              <button 
                onClick={() => setLangMenuOpen(!langMenuOpen)}
                className="flex flex-col items-center justify-center gap-2 text-gray-600 hover:text-[#4f4398] transition-colors"
              >
                <Globe size={24} strokeWidth={1.5} />
                <span className="text-xs font-medium">Language</span>
              </button>
           </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
