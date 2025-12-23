
import React, { useState, useEffect, useRef } from 'react';
import { ChevronRight, ChevronLeft, Cpu, Wifi, Activity, Eye, Zap, Sliders, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import BlogCard from '../components/BlogCard';
import { BLOG_POSTS } from '../constants';
import { RoutePath } from '../types';

interface SlideData {
  id: number;
  category: string;
  title: string;
  description: string;
  navTitle: string;
  navDesc: string;
  buttonText: string;
  link: string;
  bgImage: string;
}

// Reuseable Carousel Component
interface CarouselSectionProps {
  title: string;
  children: React.ReactNode;
}

const CarouselSection: React.FC<CarouselSectionProps> = ({ title, children }) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [thumbWidth, setThumbWidth] = useState(0);

  const updateProgress = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      const maxScroll = scrollWidth - clientWidth;
      
      // Calculate thumb width percentage (visible area / total width)
      const visibleRatio = clientWidth / scrollWidth;
      setThumbWidth(Math.min(100, visibleRatio * 100));

      // Calculate position
      if (maxScroll > 0) {
        setScrollProgress((scrollLeft / maxScroll) * 100);
      } else {
        setScrollProgress(0);
      }
    }
  };

  useEffect(() => {
    updateProgress();
    window.addEventListener('resize', updateProgress);
    return () => window.removeEventListener('resize', updateProgress);
  }, [children]);

  // Enable horizontal scrolling with mouse wheel
  useEffect(() => {
    const el = scrollRef.current;
    if (el) {
      const onWheel = (e: WheelEvent) => {
        if (e.deltaY === 0) return;
        e.preventDefault();
        el.scrollLeft += e.deltaY;
      };
      // Passive: false is required to preventDefault
      el.addEventListener('wheel', onWheel, { passive: false });
      return () => el.removeEventListener('wheel', onWheel);
    }
  }, []);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = scrollRef.current.clientWidth / 2; // Scroll half screen
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="py-12">
      <div className="container mx-auto px-6">
        {/* Header: Title + Controls */}
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900">{title}</h2>
          
          {/* Desktop Controls */}
          <div className="hidden md:flex gap-2">
            <button 
              onClick={() => scroll('left')}
              className="w-8 h-8 flex items-center justify-center bg-[#4f4398] text-white hover:bg-[#3e3479] transition-colors"
              aria-label="Scroll Left"
            >
              <ChevronLeft size={20} />
            </button>
            <button 
              onClick={() => scroll('right')}
              className="w-8 h-8 flex items-center justify-center bg-[#4f4398] text-white hover:bg-[#3e3479] transition-colors"
              aria-label="Scroll Right"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        {/* Scrollable Container */}
        <div 
          ref={scrollRef}
          onScroll={updateProgress}
          className="flex overflow-x-auto gap-6 pb-4 snap-x snap-mandatory scrollbar-hide -mx-6 px-6 md:mx-0 md:px-0"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {children}
        </div>

        {/* Custom Progress Bar - Sharp Corners */}
        <div className="w-full h-1 bg-gray-200 mt-4 relative overflow-hidden">
           {/* The Thumb */}
           <div 
             className="absolute top-0 h-full bg-[#4f4398] transition-all duration-100 ease-out"
             style={{ 
               width: `${thumbWidth}%`,
               left: `calc(${scrollProgress}% * ${(100 - thumbWidth) / 100})`
             }}
           ></div>
        </div>
      </div>
    </div>
  );
};

const PartnerLogo = ({ name, image, sizeClass }: { name: string, image: string, sizeClass?: string }) => {
  const [error, setError] = useState(false);

  if (error) {
    return (
      <span className="font-bold text-gray-400 text-lg uppercase text-center tracking-wider">
        {name}
      </span>
    );
  }

  // Default height is h-8 md:h-12 if sizeClass not provided
  const className = sizeClass || "h-8 md:h-12";

  return (
    <img
      src={image}
      alt={name}
      title={name}
      // Uniform height control, brightness-0 for silhouette, opacity transition
      className={`${className} w-auto object-contain brightness-0 opacity-40 hover:opacity-100 transition-all duration-500 grayscale`}
      onError={() => setError(true)}
    />
  );
};

const Home: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideDuration = 5000;
  
  // Use BLOG_POSTS directly for the carousel
  const carouselPosts = BLOG_POSTS;

  const PARTNERS = [
    {
      name: "SOPHGO",
      image: "https://cdn.brandfetch.io/idP8bYf9zp/w/160/h/56/theme/dark/logo.png?c=1dxbfHSJFAPEGdCLU4o5B"
    },
    {
      name: "RT-Thread",
      image: "https://cdn.brandfetch.io/idQfv7Ovzy/w/160/h/60/theme/light/logo.png?c=1bxid64Mup7aczewSAYMX&t=1764556814610"
    },
     {
      name: "RISC-V",
      image: "https://cdn.brandfetch.io/idGm5lRj_H/theme/dark/logo.svg?c=1bxid64Mup7aczewSAYMX&t=1761288532881",
      sizeClass: "h-6 md:h-8" // Custom size for RISC-V to match visual weight
    }
  ];

  const slides: SlideData[] = [
    {
      id: 0,
      category: 'New Release',
      title: 'AFC-V1 Launching Soon',
      description: 'The ultimate all-in-one flight controller integrating vision, video link, and control. Redefining the future of UAVs.',
      navTitle: 'AFC-V1',
      navDesc: 'Next Gen Flight Controller.',
      buttonText: 'Coming Soon',
      link: '#', 
      bgImage: 'https://images.unsplash.com/photo-1608543884814-c78274191026?q=80&w=2000&auto=format&fit=crop'
    },
    {
      id: 1,
      category: 'Algorithms',
      title: 'Self-Developed AI Tracking',
      description: 'Proprietary visual tracking algorithms delivering <5ms latency for robust target following in complex environments.',
      navTitle: 'AI Tracking',
      navDesc: 'High-performance vision algorithms.',
      buttonText: 'Technology Preview',
      link: RoutePath.TECHNOLOGY_AI_TRACKING,
      bgImage: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2000&auto=format&fit=crop'
    },
    {
      id: 2,
      category: 'Framework',
      title: 'Universal Adaptive DShot',
      description: 'DMA-Free, Bi-directional DShot 300/150 support on any chip platform. Dynamic error elimination for perfect stability.',
      navTitle: 'Adaptive DShot',
      navDesc: 'Universal Control Framework.',
      buttonText: 'View Specs',
      link: RoutePath.TECHNOLOGY_DSHOT,
      bgImage: 'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2000&auto=format&fit=crop'
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, slideDuration);
    return () => clearInterval(timer);
  }, []);

  const handleManualSelect = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <div className="bg-white">
      
      {/* Hero Carousel Section - Full Screen (h-screen) */}
      <section className="relative h-screen overflow-hidden bg-gray-900">
        {slides.map((slide, index) => (
          <div 
            key={slide.id} 
            className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
              index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
            }`}
          >
            {/* Background Image */}
            <div 
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${slide.bgImage})` }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent"></div>
            </div>

            {/* Content Container */}
            <div className="container mx-auto px-6 relative h-full flex flex-col justify-center">
              <div className="max-w-3xl animate-fadeIn pb-24">
                <span className="font-bold text-[#a094e3] mb-3 block uppercase text-sm tracking-widest">{slide.category}</span>
                <h1 className="text-4xl md:text-6xl font-black text-white mb-6 leading-tight tracking-tight shadow-black drop-shadow-lg">
                  {slide.title}
                </h1>
                <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-2xl leading-relaxed drop-shadow-md">
                  {slide.description}
                </p>
                
                {slide.link === '#' ? (
                  <button 
                    disabled
                    className="inline-block bg-[#4f4398] text-white opacity-80 cursor-default px-8 py-3.5 font-bold text-sm uppercase tracking-wide"
                  >
                    {slide.buttonText}
                  </button>
                ) : (
                  <Link 
                    to={slide.link} 
                    className="inline-block bg-[#4f4398] text-white hover:bg-[#6a5cc2] px-8 py-3.5 font-bold text-sm uppercase tracking-wide transition-colors duration-300"
                  >
                    {slide.buttonText}
                  </Link>
                )}
              </div>
            </div>
          </div>
        ))}

        {/* Navigation Strip - Included WITHIN the Full Screen Hero */}
        <div className="absolute bottom-0 left-0 right-0 z-20 bg-gradient-to-t from-black/80 to-transparent pt-12">
            <div className="container mx-auto px-6">
                <div className="flex flex-row gap-1 md:gap-0 md:grid md:grid-cols-3 py-0">
                    {slides.map((slide, index) => (
                    <div 
                        key={slide.id} 
                        onClick={() => handleManualSelect(index)}
                        className="flex-1 md:flex-none relative group cursor-pointer h-1 md:h-auto md:pt-4 md:pb-6 md:pr-4"
                    >
                        {/* Progress Line Base */}
                        <div className="absolute top-0 left-0 w-full h-full md:h-1 bg-white/20 group-hover:bg-white/40 transition-colors"></div>
                        
                        {/* Active Progress Line */}
                        {index === currentSlide && (
                        <div 
                            className="absolute top-0 left-0 h-full md:h-1 bg-[#4f4398] z-10"
                            style={{ animation: `fillBar ${slideDuration}ms linear forwards` }}
                        ></div>
                        )}
                        <style>{`
                        @keyframes fillBar {
                            from { width: 0%; }
                            to { width: 100%; }
                        }
                        `}</style>

                        {/* Text Content (White for visibility on dark BG) */}
                        <div className="hidden md:block">
                            <h4 className={`font-bold text-xs uppercase mb-1 transition-colors ${index === currentSlide ? 'text-white' : 'text-gray-400 group-hover:text-white'}`}>
                                {slide.navTitle}
                            </h4>
                            <p className={`text-sm font-medium leading-snug transition-colors line-clamp-2 ${index === currentSlide ? 'text-gray-200' : 'text-gray-500 group-hover:text-gray-300'}`}>
                                {slide.navDesc}
                            </p>
                        </div>
                    </div>
                    ))}
                </div>
            </div>
        </div>
      </section>

      {/* Product Spotlight: AFC-V1 */}
      <section className="bg-white text-gray-900 py-24 relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
             <div className="lg:w-1/2 relative">
               {/* Fixed Image Container: Larger mobile height, no hover scale, no shadow */}
               <div className="relative w-full h-64 md:h-auto md:aspect-video bg-gray-50 rounded-sm border border-gray-200 flex items-center justify-center overflow-hidden">
                 <img 
                    src="AFC-V1-Temp.webp" 
                    alt="AFC-V1 Flight Controller" 
                    className="w-full h-full object-cover" 
                 />
                 <div className="absolute top-4 right-4 bg-[#4f4398] text-white text-xs font-bold px-3 py-1 uppercase shadow-md z-20">
                   Coming Soon
                 </div>
               </div>
             </div>
             <div className="lg:w-1/2">
                <h4 className="text-[#4f4398] font-bold uppercase tracking-widest mb-2">All-in-One AI Flight Controller</h4>
                <h2 className="text-5xl font-black text-gray-900 mb-6 uppercase leading-none">AFC-V1</h2>
                <p className="text-xl text-gray-600 mb-8 font-light border-l-4 border-[#4f4398] pl-6">
                  "Vision. Video Link. Control."
                  <br/>
                  <span className="text-sm mt-2 block text-gray-500">The ultimate answer for the next generation of UAV brains.</span>
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
                   <div className="bg-gray-50 p-4 border border-gray-200 hover:border-[#4f4398] transition-colors">
                      <div className="flex items-center gap-3 mb-2">
                        <Cpu className="text-[#4f4398]" size={20} />
                        <h5 className="font-bold text-gray-900 uppercase text-sm">1.5 TOPS Edge AI</h5>
                      </div>
                      <p className="text-gray-600 text-xs leading-relaxed">Local execution of complex detection models with zero latency.</p>
                   </div>
                   <div className="bg-gray-50 p-4 border border-gray-200 hover:border-[#4f4398] transition-colors">
                      <div className="flex items-center gap-3 mb-2">
                        <Wifi className="text-[#4f4398]" size={20} />
                        <h5 className="font-bold text-gray-900 uppercase text-sm">10KM Video Link</h5>
                      </div>
                      <p className="text-gray-600 text-xs leading-relaxed">HD transmission with high-power Wi-Fi module optimizations.</p>
                   </div>
                   <div className="bg-gray-50 p-4 border border-gray-200 hover:border-[#4f4398] transition-colors">
                      <div className="flex items-center gap-3 mb-2">
                        <Eye className="text-[#4f4398]" size={20} />
                        <h5 className="font-bold text-gray-900 uppercase text-sm">8MP Ultra-HD ISP</h5>
                      </div>
                      <p className="text-gray-600 text-xs leading-relaxed">Up to 8M@30FPS processing. Native support for Starlight and Global Shutter sensors.</p>
                   </div>
                   <div className="bg-gray-50 p-4 border border-gray-200 hover:border-[#4f4398] transition-colors">
                      <div className="flex items-center gap-3 mb-2">
                        <Activity className="text-[#4f4398]" size={20} />
                        <h5 className="font-bold text-gray-900 uppercase text-sm">45% Smaller</h5>
                      </div>
                      <p className="text-gray-600 text-xs leading-relaxed">Redefining size and power. Highly integrated industrial design.</p>
                   </div>
                </div>
                <div className="flex gap-4">
                  <button 
                    disabled
                    className="bg-gray-400 text-white px-8 py-3 font-bold text-sm uppercase cursor-not-allowed flex items-center justify-center border border-transparent"
                  >
                    Coming Soon
                  </button>
                  <Link 
                    to={RoutePath.CONTACT} 
                    className="bg-transparent border border-gray-300 text-gray-900 px-8 py-3 font-bold text-sm uppercase hover:border-gray-900 transition-colors flex items-center justify-center text-center"
                  >
                    Contact Sales
                  </Link>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* Technology Spotlight: AI Tracking (3 Step Visual) */}
      <section className="bg-white text-gray-900 py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center mb-16">
             <h4 className="text-[#4f4398] font-bold uppercase tracking-widest mb-3">Proprietary Algorithm</h4>
             <h2 className="text-5xl font-black text-gray-900 mb-6 uppercase leading-none">AI Tracking</h2>
             <p className="text-xl text-gray-600 font-light mt-4">
               "Ultra-low latency. Unmatched Robustness."
             </p>
          </div>

          {/* 3-Step Visualization Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              {/* Step 1 */}
              <div>
                  <div className="relative aspect-video bg-gray-100 mb-6 overflow-hidden border border-gray-200 shadow-sm">
                      <img src="AI-TRACKING/image0.webp" alt="Precision Locking" className="w-full h-full object-cover" />
                      <div className="absolute top-2 left-2 bg-black/50 text-white text-[10px] px-2 py-1 font-mono uppercase">Status: Tracking</div>
                  </div>
                  <h4 className="font-bold text-gray-900 uppercase text-center mb-2">1. Precision Locking</h4>
                  <p className="text-xs text-gray-500 text-center leading-relaxed px-4">Instant target acquisition near architectural features.</p>
              </div>

              {/* Step 2 */}
              <div>
                  <div className="relative aspect-video bg-gray-100 mb-6 overflow-hidden border border-gray-200 shadow-sm">
                      <img src="AI-TRACKING/image1.webp" alt="Complex Background" className="w-full h-full object-cover" />
                      <div className="absolute top-2 left-2 bg-black/50 text-white text-[10px] px-2 py-1 font-mono uppercase">Status: Stable</div>
                  </div>
                  <h4 className="font-bold text-gray-900 uppercase text-center mb-2">2. Clutter Rejection</h4>
                  <p className="text-xs text-gray-500 text-center leading-relaxed px-4">Robust tracking amidst complex environments and parked vehicles.</p>
              </div>

              {/* Step 3 */}
              <div>
                  <div className="relative aspect-video bg-gray-100 mb-6 overflow-hidden border border-gray-200 shadow-sm">
                      <img src="AI-TRACKING/image2.webp" alt="Long Range" className="w-full h-full object-cover" />
                      <div className="absolute top-2 left-2 bg-[#00ff00] text-black text-[10px] px-2 py-1 font-mono uppercase">Status: Locked</div>
                  </div>
                  <h4 className="font-bold text-gray-900 uppercase text-center mb-2">3. Long Range Stability</h4>
                  <p className="text-xs text-gray-500 text-center leading-relaxed px-4">Consistent lock-on for distant targets with low pixel density.</p>
              </div>
          </div>

          <div className="text-center">
             <Link 
                to={RoutePath.TECHNOLOGY_AI_TRACKING} 
                className="inline-block bg-[#4f4398] text-white px-10 py-4 font-bold text-sm uppercase hover:bg-[#3e3479] transition-colors shadow-sm"
             >
                Explore Algorithm
             </Link>
          </div>
        </div>
      </section>

      {/* Technology Spotlight: Next-Gen Control Protocol (NO DIVIDERS) */}
      <section className="bg-white text-gray-900 py-24">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2">
                <h4 className="text-[#4f4398] font-bold uppercase tracking-widest mb-3">Universal Framework</h4>
                <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6 uppercase leading-none">
                  Adaptive DShot
                </h2>
                <p className="text-xl text-gray-600 mb-8 max-w-lg leading-relaxed">
                  DMA-Free. Bi-directional. Adaptive. Bring professional DShot 300/150 support to any MCU platform.
                </p>
                <div className="flex flex-col gap-4">
                    <div className="flex items-start gap-4">
                       <Cpu className="text-[#4f4398] shrink-0 mt-1" size={20} />
                       <div>
                         <h4 className="font-bold text-gray-900 uppercase text-sm">Any Chip Platform</h4>
                         <p className="text-sm text-gray-600">No DMA or specific hardware Timer required. Portable to RISC-V, ARM, and more.</p>
                       </div>
                    </div>
                    <div className="flex items-start gap-4">
                       <Sliders className="text-[#4f4398] shrink-0 mt-1" size={20} />
                       <div>
                         <h4 className="font-bold text-gray-900 uppercase text-sm">Self-Adaptive Tuning</h4>
                         <p className="text-sm text-gray-600">Dynamic error elimination calibrates output frequency for perfect stability.</p>
                       </div>
                    </div>
                    <div className="flex items-start gap-4">
                       <CheckCircle className="text-[#4f4398] shrink-0 mt-1" size={20} />
                       <div>
                         <h4 className="font-bold text-gray-900 uppercase text-sm">Mainstream Support</h4>
                         <p className="text-sm text-gray-600">Perfect compatibility with BLHeli_32, BLHeli_S, and AM32 ESCs.</p>
                       </div>
                    </div>
                </div>
                <div className="mt-10">
                   <Link 
                      to={RoutePath.TECHNOLOGY_DSHOT}
                      className="inline-flex items-center gap-2 text-[#4f4398] font-bold uppercase text-sm hover:gap-3 transition-all"
                   >
                     View Specifications <ChevronRight size={16} />
                   </Link>
                </div>
            </div>

            <div className="lg:w-1/2 w-full">
                {/* DSHOT VISUALIZATION - DIRECT IMAGE */}
                <div className="w-full flex justify-center lg:justify-end">
                     <img 
                       src="DSHOT-WAVE.webp" 
                       alt="DShot Signal Diagram" 
                       className="w-full h-auto object-contain max-w-2xl" 
                     />
                </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industry News */}
      <CarouselSection title="Industry News">
        {carouselPosts.map((post, idx) => (
          <div key={`news-${idx}`} className="flex-none w-[85vw] md:w-[350px] lg:w-[400px] h-full snap-start">
             <BlogCard post={post} hideImage={true} />
          </div>
        ))}
      </CarouselSection>

      {/* PARTNERS SECTION - Redesigned for 3 items */}
      <div className="bg-gray-50 py-24 border-t border-gray-100">
           <div className="container mx-auto px-6">
               <div className="text-center mb-12">
                   <h2 className="text-xs font-bold text-gray-400 uppercase tracking-[0.3em]">Strategic Partners</h2>
               </div>
               
               <div className="flex flex-col md:flex-row justify-center items-center gap-16 md:gap-32">
                   {PARTNERS.map((partner) => (
                       <div key={partner.name} className="flex-shrink-0 hover:scale-105 transition-transform duration-300">
                           <PartnerLogo name={partner.name} image={partner.image} sizeClass={partner.sizeClass} />
                       </div>
                   ))}
               </div>
           </div>
       </div>

    </div>
  );
};

export default Home;
