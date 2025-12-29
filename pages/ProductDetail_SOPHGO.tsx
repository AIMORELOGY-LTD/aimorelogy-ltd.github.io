
import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { 
  CheckCircle, 
  ArrowRight, 
  Layers, 
  Cpu, 
  ChevronRight,
  Zap,
  Activity,
  ShieldCheck,
  Maximize2,
  Box,
  Settings
} from 'lucide-react';
import { SOPHGO_CHIPS, ChipData, ChipDetailSection } from '../data/sophgoData';
import { RoutePath } from '../types';
import { useLang, withLang } from '../i18n-routing';
import { useTranslation } from 'react-i18next';
import Seo from '../components/Seo';

const ProductDetail_SOPHGO: React.FC = () => {
  const lang = useLang();
  const { t } = useTranslation();
  const { modelId } = useParams<{ modelId: string }>();
  const [product, setProduct] = useState<ChipData | null>(null);

  useEffect(() => {
    if (modelId && SOPHGO_CHIPS[modelId.toLowerCase()]) {
      const data = SOPHGO_CHIPS[modelId.toLowerCase()];
      setProduct(data);
    } else {
      setProduct(null);
    }
    window.scrollTo(0, 0);
  }, [modelId]);

  const localizedProduct = React.useMemo(() => {
    if (!product) return null;
    const baseKey = `products.sophgo.${product.id}`;
    const getArray = <T,>(key: string, fallback: T[]) =>
      t(`${baseKey}.${key}`, { returnObjects: true, defaultValue: fallback }) as T[];
    return {
      ...product,
      tagline: t(`${baseKey}.tagline`, { defaultValue: product.tagline }),
      description: t(`${baseKey}.description`, { defaultValue: product.description }),
      longDescription: getArray('longDescription', product.longDescription),
      highlights: getArray('highlights', product.highlights),
      specs: getArray('specs', product.specs),
      applications: getArray('applications', product.applications),
      detailedFeatures: getArray('detailedFeatures', product.detailedFeatures),
      faqs: getArray('faqs', product.faqs),
      detailSections: getArray('detailSections', product.detailSections || []),
      metaTitle: t(`${baseKey}.metaTitle`, { defaultValue: product.metaTitle }),
      metaDescription: t(`${baseKey}.metaDescription`, { defaultValue: product.metaDescription })
    };
  }, [product, t]);

  const seo = React.useMemo(() => {
    if (!localizedProduct) return null;
    const displayName = localizedProduct.id === 'cv184' ? 'CV184x' : localizedProduct.name;
    const metaTitleRaw = localizedProduct.metaTitle
      || t('products.common.metaTitle', { name: displayName, tagline: localizedProduct.tagline });
    const metaTitle = localizedProduct.id === 'cv184'
      ? metaTitleRaw.replace(/CV184\b/g, 'CV184x')
      : metaTitleRaw;
    const metaDescription = localizedProduct.metaDescription || localizedProduct.description;
    const image = localizedProduct.applications?.[0]?.image || '/icon.webp';
    const jsonLd = {
      '@context': 'https://schema.org',
      '@type': 'Product',
      name: `SOPHGO ${displayName}`,
      description: metaDescription,
      brand: { '@type': 'Brand', name: 'SOPHGO' },
      manufacturer: 'SOPHGO',
      sku: displayName
    };
    return { metaTitle, metaDescription, image, jsonLd };
  }, [localizedProduct, t]);

  const isCv184 = localizedProduct?.id === 'cv184';
  const displayName = isCv184 ? 'CV184x' : localizedProduct?.name || '';
  const cv184DetailSections = localizedProduct?.detailSections || [];
  const cv184SectionMap = cv184DetailSections.reduce((acc, section) => {
    if (section.id) {
      acc[section.id] = section;
    }
    return acc;
  }, {} as Record<string, ChipDetailSection>);
  const cv184CoreSection = cv184SectionMap['core-architecture'];
  const cv184IspSection = cv184SectionMap['isp-v4'];
  const cv184TpuSection = cv184SectionMap['tpu-acceleration'];
  const cv184OpenclipSection = cv184SectionMap['openclip-ai'];
  const cv184EncodingSection = cv184SectionMap['intra4-encoding'];
  const cv184IoSection = cv184SectionMap['io-peripherals'];
  const cv184VariantSection = cv184SectionMap['variant-comparison'];
  const cv184SdkSection = cv184SectionMap['sdk-compatibility'];
  const cv184MediaMap: Record<string, { src: string; alt: string }> = {
    'tpu-acceleration': {
      src: '/CV/cvitek.webp',
      alt: 'TPU acceleration visual'
    },
    'isp-v4': {
      src: '/CV/2.webp',
      alt: 'ISP V4.0 imaging visual'
    }
  };
  const highlightIcons = [
    Cpu,
    Zap,
    Activity,
    ShieldCheck,
    Maximize2,
    Box,
    Settings,
    CheckCircle
  ];

  if (!localizedProduct) {
    return (
      <div className="min-h-screen bg-white flex flex-col items-center justify-center text-gray-900">
        <h1 className="text-4xl font-black mb-4 uppercase">{t('products.common.notFound')}</h1>
        <Link to={withLang(lang, RoutePath.HOME)} className="text-[#4f4398] font-bold hover:underline">{t('products.common.returnHome')}</Link>
      </div>
    );
  }

  const cv184IoSpecs = isCv184 ? localizedProduct.specs.slice(5, 11) : [];
  const cv184EncodingSpecs = isCv184 ? localizedProduct.specs.slice(3, 5) : [];
  const cv184HeroStats = cv184CoreSection?.stats ? cv184CoreSection.stats.slice(0, 3) : [];
  const cv184SecondaryStats = cv184CoreSection?.stats ? cv184CoreSection.stats.slice(3) : [];
  const cv184IntroText = isCv184 ? (localizedProduct.longDescription || []).slice(0, 2) : [];
  const cv184ExtraText = isCv184 ? (localizedProduct.longDescription || []).slice(2) : [];
  const cv184FeatureCards = isCv184 ? (localizedProduct.detailedFeatures || []) : [];

  return (
    <div className="bg-white text-gray-900 min-h-screen font-sans selection:bg-[#4f4398] selection:text-white">
      {seo && (
        <Seo
          title={seo.metaTitle}
          description={seo.metaDescription}
          image={seo.image}
          type="product"
          jsonLd={seo.jsonLd}
        />
      )}
      
      {/* 1. HERO SECTION (White Theme) */}
      <section className="pt-16 pb-12 bg-gray-50 border-b border-gray-200">
        <div className="container mx-auto px-6">
           {/* Breadcrumbs */}
           <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-gray-500 mb-8">
              <Link to={withLang(lang, RoutePath.HOME)} className="hover:text-[#4f4398]">{t('common.home')}</Link>
              <ChevronRight size={12} />
              <span className="text-gray-500">{t('header.menu.coreComponents')}</span>
              <ChevronRight size={12} />
              <span className="text-[#4f4398]">SOPHGO {displayName}</span>
           </div>

           <div className="flex flex-col lg:flex-row gap-12 items-center">
              <div className="lg:w-1/2">
                  <div className="flex items-center gap-3 mb-4">
                      <div className="bg-[#4f4398] text-white px-2 py-1 text-xs font-bold uppercase">SOPHGO</div>
                      <div className="text-gray-500 font-bold tracking-widest text-sm uppercase">{t('products.common.series', { series: localizedProduct.series })}</div>
                  </div>
                  
                  <h1 className="text-5xl md:text-7xl font-black text-gray-900 tracking-tighter uppercase mb-4 leading-none">
                    {displayName}
                  </h1>
                  
                  <h2 className="text-2xl text-[#4f4398] font-bold mb-6 leading-tight">
                    {localizedProduct.tagline}
                  </h2>
                  
                  <p className="text-gray-600 text-lg mb-8 max-w-xl leading-relaxed">
                     {localizedProduct.description}
                  </p>

                  <div className="flex flex-wrap gap-4">
                    <button className="bg-[#4f4398] text-white px-8 py-3 font-bold text-sm uppercase hover:bg-[#3e3479] transition-all flex items-center gap-2 shadow-sm">
                        {t('products.common.requestQuote')} <ArrowRight size={16} />
                    </button>
                  </div>
              </div>
              
              {/* Product Visual */}
              <div className="lg:w-1/2 flex justify-center">
                   <div className="relative w-80 h-80 bg-white border border-gray-100 shadow-2xl rounded-sm flex items-center justify-center p-8">
                       {/* Chip Representation */}
                       <div className="w-full h-full bg-[#111] relative overflow-hidden flex flex-col items-center justify-center group">
                          {/* Texture */}
                          <div className="absolute inset-0 opacity-20" 
                            style={{ 
                                backgroundImage: `linear-gradient(45deg, #333 25%, transparent 25%, transparent 75%, #333 75%, #333), linear-gradient(45deg, #333 25%, transparent 25%, transparent 75%, #333 75%, #333)`,
                                backgroundSize: '10px 10px',
                                backgroundPosition: '0 0, 5px 5px'
                            }}>
                          </div>
                          <div className="relative z-10 text-center">
                              <div className="text-gray-500 text-xs font-mono mb-1">SOPHGO</div>
                              <div className="text-white text-4xl font-black tracking-widest">{displayName}</div>
                          </div>
                          {/* Pins */}
                          <div className="absolute top-2 left-2 w-2 h-2 rounded-full bg-[#d4af37]"></div>
                       </div>
                   </div>
              </div>
           </div>
        </div>
      </section>

      {isCv184 && (
        <style>{`
          .tech-minimal {
            --tech-black: #0a0a0a;
            --tech-gray: #888888;
            --tech-line: #e5e5e5;
            --tech-accent: #4f4398;
          }
          
          .tech-minimal ::selection {
             background: var(--tech-accent);
             color: white;
          }

          .tech-font-display {
            letter-spacing: -0.03em;
            line-height: 0.95;
          }
          
          .tech-font-mono {
            font-family: 'JetBrains Mono', 'Fira Code', monospace; /* Fallback to system mono if not avail */
            letter-spacing: -0.02em;
          }

          /* Tech Grid Layout */
          .tech-grid-border {
             border-top: 1px solid var(--tech-line);
             border-left: 1px solid var(--tech-line);
          }
          .tech-grid-item {
             border-right: 1px solid var(--tech-line);
             border-bottom: 1px solid var(--tech-line);
          }

          /* Visual Bar Animation */
          @keyframes growBar {
            from { transform: scaleX(0); }
            to { transform: scaleX(1); }
          }
          .tech-bar-fill {
            transform-origin: left;
            animation: growBar 1s ease-out forwards;
          }
        `}</style>
      )}

      {isCv184 ? (
        <div className="tech-minimal bg-white text-[#0a0a0a] font-sans">
          
          {/* 1. HERO: Stark, Minimal, Bold */}
          <section className="relative min-h-[90vh] flex flex-col pt-32 pb-20 border-b border-gray-100 overflow-hidden">
            {/* Background Decor */}
            <div className="absolute top-0 right-0 w-1/2 h-full bg-gray-50/50 -skew-x-12 translate-x-1/3 -z-10"></div>
            
            <div className="container mx-auto px-6 flex-grow flex flex-col justify-center relative">
              <div className="flex flex-col md:flex-row items-center justify-between gap-16">
                <div className="md:w-3/5 z-10">
                   <div className="flex items-center gap-4 mb-8">
                      <span className="w-8 h-[2px] bg-[#4f4398]"></span>
                      <span className="tech-font-mono text-xs font-bold uppercase tracking-widest text-gray-500">SOPHGO Vision Series</span>
                   </div>
                   <h1 className="tech-font-display text-8xl md:text-[8rem] font-black uppercase text-[#0a0a0a] mb-6">
                     CV184<span className="text-[#4f4398]">x</span>
                   </h1>
                   <h2 className="text-2xl md:text-3xl font-light tracking-tight text-gray-600 mb-10 max-w-2xl leading-tight">
                     {localizedProduct.tagline}
                   </h2>
                   <div className="flex gap-6">
                      <button className="bg-[#0a0a0a] text-white px-8 py-4 text-sm font-bold uppercase tracking-widest hover:bg-[#4f4398] transition-colors">
                        {t('products.common.requestQuote')}
                      </button>
                      <button className="border border-gray-200 px-8 py-4 text-sm font-bold uppercase tracking-widest hover:border-black transition-colors">
                        Datasheet
                      </button>
                   </div>
                </div>

                {/* Floating Chip Visual */}
                <div className="md:w-2/5 flex justify-center relative">
                   <div className="relative w-64 h-64 md:w-96 md:h-96">
                      <div className="absolute inset-0 border border-gray-200 rounded-full animate-[spin_20s_linear_infinite] opacity-30"></div>
                      <div className="absolute inset-4 border border-dashed border-gray-300 rounded-full animate-[spin_15s_linear_infinite_reverse] opacity-30"></div>
                      <div className="absolute inset-0 flex items-center justify-center">
                         <div className="w-48 h-48 bg-[#111] shadow-2xl flex items-center justify-center relative z-10 rounded-[2px]">
                            {/* Chip Texture */}
                            <div className="absolute inset-2 border border-white/10 opacity-50"></div>
                            <span className="text-white/90 font-mono font-bold text-xl tracking-widest">CV184x</span>
                         </div>
                      </div>
                   </div>
                </div>
              </div>
            </div>
            
            {/* Scroll Indicator */}
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40">
               <div className="w-[1px] h-12 bg-black"></div>
               <span className="text-[10px] uppercase tracking-widest">Scroll</span>
            </div>
          </section>

          {/* 2. DATA GRID: Performance at a glance */}
          <section className="py-24 bg-white">
            <div className="container mx-auto px-6">
               <div className="flex flex-col md:flex-row gap-16 mb-16">
                  <div className="md:w-1/3">
                    <h3 className="text-sm font-bold uppercase tracking-widest text-gray-400 mb-4">{t('products.common.productOverview')}</h3>
                    <p className="text-3xl font-bold leading-tight tracking-tight">
                      Designed for the next generation of Edge AI.
                    </p>
                  </div>
                  <div className="md:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-8 text-gray-600 leading-relaxed">
                     {cv184IntroText.map((para, idx) => <p key={idx}>{para}</p>)}
                  </div>
               </div>

               {/* The Grid */}
               <div className="border-t border-gray-100">
                  <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-gray-100 border-b border-gray-100">
                     {[
                       ...cv184HeroStats, 
                       ...cv184SecondaryStats.slice(0, 1) // Take one more if avail to fill grid
                     ].map((stat, idx) => (
                       <div key={idx} className="p-8 group hover:bg-gray-50 transition-colors">
                          <div className="tech-font-mono text-xs text-gray-400 uppercase tracking-widest mb-3">{stat?.label || 'Spec'}</div>
                          <div className="text-3xl md:text-4xl font-bold tracking-tighter text-[#0a0a0a]">{stat?.value || '-'}</div>
                       </div>
                     ))}
                  </div>
               </div>
            </div>
          </section>

          {/* 3. DARK SECTION: TPU & ISP Visuals */}
          <section className="bg-[#050505] text-white py-32 relative overflow-hidden">
             {/* Background Grid Line */}
             <div className="absolute inset-0" 
                style={{ 
                  backgroundImage: 'linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)',
                  backgroundSize: '100px 100px'
                }}>
             </div>

             <div className="container mx-auto px-6 relative z-10">
                {/* Section Header */}
                <div className="mb-24 text-center">
                   <h2 className="tech-font-display text-5xl md:text-7xl font-bold uppercase tracking-tight mb-6">Core Engines</h2>
                   <p className="text-gray-400 max-w-2xl mx-auto text-lg">
                      Beneath the surface, the CV184x combines a proprietary TPU for AI inference with a 4th-gen ISP for superior imaging.
                   </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
                   {/* TPU Column */}
                   <div>
                      <div className="flex items-end justify-between border-b border-gray-800 pb-4 mb-8">
                         <h3 className="text-2xl font-bold">TPU Acceleration</h3>
                         <span className="text-[#4f4398] font-mono text-sm">INT8 / BF16</span>
                      </div>
                      
                      {/* Visual Bar Chart for Stats */}
                      <div className="space-y-8 mb-12">
                         {cv184TpuSection?.stats?.map((stat, idx) => (
                           <div key={idx}>
                              <div className="flex justify-between text-sm mb-2 font-mono">
                                 <span className="text-gray-400">{stat.label}</span>
                                 <span className="text-white font-bold">{stat.value}</span>
                              </div>
                              <div className="h-1 w-full bg-gray-800 rounded-full overflow-hidden">
                                 <div 
                                    className="h-full bg-[#4f4398] tech-bar-fill" 
                                    style={{ width: stat.value.includes('1.5') ? '100%' : '75%', animationDelay: `${idx * 0.2}s` }}
                                 ></div>
                              </div>
                           </div>
                         ))}
                      </div>

                      <div className="grid grid-cols-1 gap-4">
                         {cv184TpuSection?.bullets?.map((bullet, idx) => (
                            <div key={idx} className="flex items-start gap-4 text-gray-400 text-sm leading-relaxed">
                               <div className="w-1.5 h-1.5 bg-[#4f4398] mt-1.5 rounded-none flex-shrink-0"></div>
                               {bullet}
                            </div>
                         ))}
                      </div>
                   </div>

                   {/* ISP Column */}
                   <div>
                      <div className="flex items-end justify-between border-b border-gray-800 pb-4 mb-8">
                         <h3 className="text-2xl font-bold">ISP V4.0 Pipeline</h3>
                         <span className="text-green-500 font-mono text-sm">4K Ready</span>
                      </div>

                      {/* Visual Flowchart for ISP */}
                      <div className="grid grid-cols-2 gap-4 mb-12">
                         {['3DNR', 'DRC/HDR', 'Dehaze', 'Lens Corr'].map((feat, idx) => (
                            <div key={idx} className="border border-gray-800 p-6 flex flex-col items-center justify-center aspect-video hover:border-gray-600 transition-colors">
                               <div className="text-xs text-gray-500 uppercase tracking-widest mb-2">Module 0{idx+1}</div>
                               <div className="text-xl font-bold">{feat}</div>
                            </div>
                         ))}
                      </div>
                      
                      {cv184IspSection?.description && (
                         <p className="text-gray-400 mb-8 leading-relaxed">
                            {cv184IspSection.description}
                         </p>
                      )}

                      <div className="flex flex-wrap gap-2">
                         {cv184IspSection?.bullets?.slice(0, 4).map((bullet, idx) => (
                            <span key={idx} className="px-3 py-1 bg-gray-900 border border-gray-800 text-xs text-gray-300">
                               {bullet}
                            </span>
                         ))}
                      </div>
                   </div>
                </div>
             </div>
          </section>

          {/* 4. TECH SPECS: Clean List Layout */}
          <section className="py-32 bg-white">
             <div className="container mx-auto px-6">
                <div className="flex items-center gap-4 mb-16">
                   <h2 className="tech-font-display text-4xl font-bold uppercase tracking-tight text-[#0a0a0a]">Specifications</h2>
                   <div className="h-[1px] flex-grow bg-gray-100"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
                   {/* Col 1: Encoding & Video */}
                   <div>
                      <h4 className="tech-font-mono text-xs font-bold uppercase tracking-widest text-[#4f4398] mb-6">Video & Encoding</h4>
                      <div className="space-y-6">
                         {cv184EncodingSection && (
                            <div>
                               <div className="font-bold text-lg mb-2">{cv184EncodingSection.title}</div>
                               <p className="text-sm text-gray-500 mb-4">{cv184EncodingSection.description}</p>
                               <ul className="space-y-2">
                                  {cv184EncodingSpecs.map((spec, idx) => (
                                     <li key={idx} className="flex justify-between text-sm border-b border-gray-50 pb-2">
                                        <span className="text-gray-500">{spec.key}</span>
                                        <span className="font-mono">{spec.value}</span>
                                     </li>
                                  ))}
                               </ul>
                            </div>
                         )}
                      </div>
                   </div>

                   {/* Col 2: IO & Peripherals */}
                   <div>
                      <h4 className="tech-font-mono text-xs font-bold uppercase tracking-widest text-[#4f4398] mb-6">I/O Interface</h4>
                      {cv184IoSection && (
                         <div>
                            <div className="font-bold text-lg mb-4">{cv184IoSection.title}</div>
                            <ul className="space-y-3">
                               {cv184IoSection.bullets?.map((bullet, idx) => (
                                  <li key={idx} className="flex items-start gap-3 text-sm text-gray-600">
                                     <span className="w-1 h-1 bg-black mt-2 rounded-full flex-shrink-0"></span>
                                     <span>{bullet}</span>
                                  </li>
                               ))}
                            </ul>
                         </div>
                      )}
                   </div>

                   {/* Col 3: Variants */}
                   <div>
                      <h4 className="tech-font-mono text-xs font-bold uppercase tracking-widest text-[#4f4398] mb-6">Model Variants</h4>
                      {cv184VariantSection?.table && (
                         <div className="space-y-4">
                            {cv184VariantSection.table.rows.map((row, idx) => (
                               <div key={idx} className="group border border-gray-100 p-4 hover:border-black transition-colors cursor-default">
                                  <div className="flex justify-between items-center mb-1">
                                     <span className="font-bold">{row[0]}</span>
                                     <span className="text-xs bg-gray-100 px-2 py-0.5 rounded-sm">{row[4]}</span>
                                  </div>
                                  <div className="text-xs text-gray-400 font-mono">{row[2]} DDR3 · {row[3]}</div>
                               </div>
                            ))}
                         </div>
                      )}
                   </div>
                </div>
             </div>
          </section>

          {/* 5. APPLICATIONS: Minimal Cards */}
          <section className="py-24 bg-gray-50">
             <div className="container mx-auto px-6">
                <h3 className="text-sm font-bold uppercase tracking-widest text-gray-400 mb-12 text-center">Applications</h3>
                
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {localizedProduct.applications.map((app, idx) => (
                      <div key={idx} className="relative aspect-square group overflow-hidden bg-white">
                          <img 
                            src={app.image} 
                            alt={app.title} 
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                          />
                          <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                              <span className="text-white text-sm font-bold uppercase tracking-widest text-center px-4">{app.title}</span>
                          </div>
                      </div>
                  ))}
                </div>
             </div>
          </section>

          {/* 6. CTA: Simple Footer */}
          <section className="py-32 bg-white text-center">
             <h2 className="text-4xl font-bold mb-8">Ready to Build?</h2>
             <Link
                to={withLang(lang, RoutePath.CONTACT)}
                className="inline-block border-2 border-black px-12 py-4 text-sm font-bold uppercase tracking-widest hover:bg-black hover:text-white transition-colors"
              >
                {t('products.common.ctaButton')}
              </Link>
          </section>

        </div>
      ) : (
        /* --- LEGACY LAYOUT FOR OTHER PRODUCTS --- */
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
              <div className="lg:col-span-2">
                <h3 className="text-2xl font-black text-gray-900 uppercase mb-6">
                  {t('products.common.productOverview')}
                </h3>
                <div className="prose prose-lg text-gray-600 max-w-none space-y-6">
                  {localizedProduct.longDescription && localizedProduct.longDescription.length > 0 ? (
                    localizedProduct.longDescription.map((para, idx) => (
                      <p key={idx} className="leading-relaxed">{para}</p>
                    ))
                  ) : (
                    <p>{localizedProduct.description}</p>
                  )}
                </div>
              </div>

              <div className="border-l-4 border-[#4f4398] pl-6">
                <h4 className="font-bold text-gray-900 uppercase mb-6">{t('products.common.keyHighlights')}</h4>
                <ul className="space-y-4">
                  {localizedProduct.highlights.map((highlight, idx) => (
                    <li key={idx} className="flex gap-3 text-sm font-medium text-gray-700">
                      <CheckCircle size={18} className="text-[#4f4398] shrink-0" />
                      {highlight}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {localizedProduct.detailedFeatures && localizedProduct.detailedFeatures.length > 0 && (
              <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
                {localizedProduct.detailedFeatures.map((feat, idx) => (
                  <div key={idx} className="border border-gray-200 p-6">
                    <div className="w-10 h-10 border border-gray-200 flex items-center justify-center mb-4 text-[#4f4398]">
                      <Cpu size={20} />
                    </div>
                    <h4 className="font-bold text-gray-900 uppercase mb-3 text-sm">{feat.title}</h4>
                    <p className="text-gray-600 text-xs leading-relaxed">{feat.description}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>
      )}

      {/* 3. SPECIFICATIONS TABLE */}
      <section className={`py-20 bg-white ${isCv184 ? 'cv184-shell relative' : ''}`}>
        <div className="container mx-auto px-6 relative">
          <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
            <h3 className="text-2xl md:text-3xl font-black text-gray-900 uppercase">
              {t('products.common.technicalSpecs')}
            </h3>
            <div className="text-xs uppercase tracking-[0.3em] text-gray-500 font-bold">
              {displayName}
            </div>
          </div>
          <div className="overflow-x-auto border-t border-gray-200">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr>
                  <th className="py-3 text-xs font-bold uppercase tracking-wider text-gray-500 w-1/3">{t('products.common.specCategory')}</th>
                  <th className="py-3 text-xs font-bold uppercase tracking-wider text-gray-500 w-1/3">{t('products.common.specParameter')}</th>
                  <th className="py-3 text-xs font-bold uppercase tracking-wider text-gray-500 w-1/3">{t('products.common.specValue')}</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {localizedProduct.specs.map((spec, idx) => (
                  <tr key={idx} className="hover:bg-gray-50 transition-colors">
                    <td className="py-3 text-xs font-bold text-[#4f4398] uppercase">{spec.category}</td>
                    <td className="py-3 text-sm font-medium text-gray-900">{spec.key}</td>
                    <td className="py-3 text-sm text-gray-600">{spec.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 4. APPLICATIONS (Image Grid) */}
      <section className="py-20 bg-white">
          <div className="container mx-auto px-6">
              <h3 className="text-2xl font-black text-gray-900 uppercase mb-10 flex items-center gap-2">
                 <Layers className="text-[#4f4398]" /> {t('products.common.applications')}
              </h3>
              
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                  {localizedProduct.applications.map((app, idx) => (
                      <div key={idx} className="group cursor-pointer">
                          <div className="aspect-[4/3] bg-gray-100 overflow-hidden relative rounded-sm mb-3">
                              <img 
                                src={app.image} 
                                alt={app.title} 
                                className="w-full h-full object-cover"
                              />
                              <div className="absolute inset-0 bg-black/20"></div>
                          </div>
                          <h4 className="font-bold text-gray-900 text-sm uppercase group-hover:text-[#4f4398] transition-colors">
                             {app.title}
                          </h4>
                      </div>
                  ))}
              </div>
          </div>
      </section>

      {/* 5. CTA */}
      <section className="bg-[#111] py-16 text-center">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-black text-white uppercase mb-4">
            {t('products.common.ctaTitle', { name: displayName })}
          </h2>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
            {t('products.common.ctaText', { name: displayName })}
          </p>
          <Link
            to={withLang(lang, RoutePath.CONTACT)}
            className="inline-flex items-center gap-2 bg-[#4f4398] text-white px-10 py-4 font-bold uppercase hover:bg-[#5f51b0] transition-colors"
          >
            {t('products.common.ctaButton')}
            <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default ProductDetail_SOPHGO;
