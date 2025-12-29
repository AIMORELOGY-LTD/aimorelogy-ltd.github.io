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
  Settings,
  BarChart2,
  Aperture,
  Grid,
  List
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
  
  // Extract specific sections for CV184 layout
  const cv184DetailSections = localizedProduct?.detailSections || [];
  const cv184SectionMap = cv184DetailSections.reduce((acc, section) => {
    if (section.id) {
      acc[section.id] = section;
    }
    return acc;
  }, {} as Record<string, ChipDetailSection>);

  const cv184TpuSection = cv184SectionMap['tpu-acceleration'];
  const cv184IspSection = cv184SectionMap['isp-v4'];
  const cv184AlgorithmSection = cv184SectionMap['algorithms'];
  const cv184VariantSection = cv184SectionMap['variant-comparison'];

  if (!localizedProduct) {
    return (
      <div className="min-h-screen bg-white flex flex-col items-center justify-center text-gray-900">
        <h1 className="text-4xl font-black mb-4 uppercase">{t('products.common.notFound')}</h1>
        <Link to={withLang(lang, RoutePath.HOME)} className="text-[#4f4398] font-bold hover:underline">{t('products.common.returnHome')}</Link>
      </div>
    );
  }

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
            font-family: 'JetBrains Mono', 'Fira Code', monospace;
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
          <section className="relative min-h-[85vh] flex flex-col pt-32 pb-20 border-b border-gray-100 overflow-hidden">
            <div className="absolute top-0 right-0 w-2/3 h-full bg-gray-50 -skew-x-12 translate-x-1/4 -z-10"></div>
            
            <div className="container mx-auto px-6 flex-grow flex flex-col justify-center relative">
              <div className="flex flex-col lg:flex-row items-center justify-between gap-16">
                <div className="lg:w-3/5 z-10">
                   <div className="flex items-center gap-4 mb-8">
                      <span className="w-12 h-[2px] bg-[#4f4398]"></span>
                      <span className="tech-font-mono text-xs font-bold uppercase tracking-widest text-gray-500">SOPHGO Vision Series</span>
                   </div>
                   <h1 className="tech-font-display text-7xl lg:text-[7rem] font-black uppercase text-[#0a0a0a] mb-8">
                     CV184<span className="text-[#4f4398]">x</span>
                   </h1>
                   <h2 className="text-2xl lg:text-3xl font-light tracking-tight text-gray-600 mb-10 max-w-2xl leading-tight">
                     {localizedProduct.tagline}
                   </h2>
                   <div className="flex gap-6">
                      <Link to={withLang(lang, RoutePath.CONTACT)} className="bg-[#0a0a0a] text-white px-8 py-4 text-sm font-bold uppercase tracking-widest hover:bg-[#4f4398] transition-colors">
                        {t('products.common.requestQuote')}
                      </Link>
                      <button className="border border-gray-200 px-8 py-4 text-sm font-bold uppercase tracking-widest hover:border-black transition-colors">
                        Datasheet
                      </button>
                   </div>
                </div>

                {/* Floating Chip Visual */}
                <div className="lg:w-2/5 flex justify-center relative">
                   <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96">
                      <div className="absolute inset-0 border-[1px] border-gray-200 rounded-full animate-[spin_30s_linear_infinite]"></div>
                      <div className="absolute inset-8 border-[1px] border-dashed border-gray-300 rounded-full animate-[spin_20s_linear_infinite_reverse]"></div>
                      <div className="absolute inset-0 flex items-center justify-center">
                         <div className="w-48 h-48 md:w-64 md:h-64 bg-[#111] shadow-2xl flex items-center justify-center relative z-10 rounded-[2px] border-b-4 border-[#4f4398]">
                            <div className="absolute top-4 left-4 w-2 h-2 rounded-full bg-[#d4af37]"></div>
                            <div className="text-center">
                                <div className="text-gray-500 text-xs font-mono mb-1">SOPHGO</div>
                                <div className="text-white text-3xl font-bold tracking-widest">CV184x</div>
                            </div>
                         </div>
                      </div>
                   </div>
                </div>
              </div>
            </div>
            
            <div className="absolute bottom-10 left-6 flex flex-col gap-2">
               <span className="tech-font-mono text-[10px] uppercase tracking-widest text-gray-400">Scroll for details</span>
               <div className="w-[1px] h-12 bg-gray-300"></div>
            </div>
          </section>

          {/* 2. OVERVIEW & FEATURES GRID */}
          <section className="py-24 bg-white border-b border-gray-100">
            <div className="container mx-auto px-6">
               <div className="flex flex-col lg:flex-row gap-16 mb-20">
                  <div className="lg:w-1/3">
                    <h3 className="tech-font-mono text-xs font-bold uppercase tracking-widest text-[#4f4398] mb-4">Product Overview</h3>
                    <p className="text-4xl font-bold leading-tight tracking-tight text-[#0a0a0a]">
                      The Next Standard for Edge AI Vision.
                    </p>
                  </div>
                  <div className="lg:w-2/3 space-y-6 text-lg text-gray-600 leading-relaxed">
                     {localizedProduct.longDescription?.map((para, idx) => <p key={idx}>{para}</p>)}
                  </div>
               </div>

               {/* Detailed Features Grid */}
               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-gray-200 border border-gray-200">
                  {localizedProduct.detailedFeatures?.map((feat, idx) => (
                    <div key={idx} className="bg-white p-10 hover:bg-gray-50 transition-colors h-full">
                       <div className="w-10 h-10 mb-6 text-[#4f4398]">
                          {idx === 0 ? <Aperture size={32} strokeWidth={1.5} /> : 
                           idx === 1 ? <Box size={32} strokeWidth={1.5} /> : 
                           idx === 2 ? <Layers size={32} strokeWidth={1.5} /> : 
                           idx === 3 ? <Zap size={32} strokeWidth={1.5} /> : 
                           <Grid size={32} strokeWidth={1.5} />}
                       </div>
                       <h4 className="font-bold text-lg mb-3">{feat.title}</h4>
                       <p className="text-sm text-gray-500 leading-relaxed">{feat.description}</p>
                    </div>
                  ))}
               </div>
            </div>
          </section>

          {/* 3. PERFORMANCE & TPU SECTION */}
          {cv184TpuSection && (
            <section className="py-24 bg-[#0a0a0a] text-white overflow-hidden relative">
               <div className="absolute top-0 right-0 w-1/3 h-full bg-[#111] -skew-x-12 translate-x-1/2"></div>
               
               <div className="container mx-auto px-6 relative z-10">
                  <div className="flex flex-col lg:flex-row gap-16">
                     <div className="lg:w-1/3">
                        <div className="tech-font-mono text-xs font-bold uppercase tracking-widest text-[#4f4398] mb-4">AI Engine</div>
                        <h2 className="tech-font-display text-5xl font-bold mb-6">TPU Acceleration</h2>
                        <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                           {cv184TpuSection.description}
                        </p>
                        <div className="space-y-4">
                           {cv184TpuSection.bullets?.map((bullet, idx) => (
                              <div key={idx} className="flex items-start gap-3 text-sm text-gray-300">
                                 <CheckCircle size={16} className="text-[#4f4398] mt-1 shrink-0" />
                                 <span>{bullet}</span>
                              </div>
                           ))}
                        </div>
                     </div>
                     
                     <div className="lg:w-2/3 bg-[#111] p-10 border border-gray-800 rounded-sm">
                        <div className="flex justify-between items-center mb-10">
                           <h3 className="text-xl font-bold">Performance Benchmarks</h3>
                           <span className="tech-font-mono text-xs text-gray-500">FPS @ INT8</span>
                        </div>
                        <div className="space-y-8">
                           {cv184TpuSection.stats?.map((stat, idx) => {
                              const val = parseFloat(stat.value);
                              // Normalize visuals loosely based on max value (MobileNet is huge, others are smaller)
                              // Just visual approximation
                              let percentage = 0;
                              if (stat.label.includes('MobileNet')) percentage = 100; // ~260
                              else if (stat.label.includes('ResNet')) percentage = 20; // ~38
                              else if (stat.label.includes('YOLO')) percentage = 15; // ~28
                              else percentage = 5; // OpenCLIP small
                              
                              return (
                                 <div key={idx}>
                                    <div className="flex justify-between text-sm mb-2 tech-font-mono">
                                       <span className="text-gray-400">{stat.label}</span>
                                       <span className="text-[#4f4398] font-bold">{stat.value}</span>
                                    </div>
                                    <div className="h-2 w-full bg-gray-800 rounded-full overflow-hidden">
                                       <div 
                                          className="h-full bg-[#4f4398] tech-bar-fill" 
                                          style={{ width: `${Math.max(percentage, 5)}%`, animationDelay: `${idx * 0.15}s` }}
                                       ></div>
                                    </div>
                                 </div>
                              );
                           })}
                        </div>
                        <div className="mt-8 pt-8 border-t border-gray-800 text-xs text-gray-500 text-center">
                           * Benchmarks based on CV1842C-P (1.5 TOPS). Performance varies by model quantization.
                        </div>
                     </div>
                  </div>
               </div>
            </section>
          )}

          {/* 4. ISP V4.0 DEEP DIVE */}
          {cv184IspSection && (
            <section className="py-24 bg-gray-50 border-b border-gray-100">
               <div className="container mx-auto px-6">
                  <div className="text-center max-w-3xl mx-auto mb-16">
                     <div className="tech-font-mono text-xs font-bold uppercase tracking-widest text-[#4f4398] mb-4">Imaging Pipeline</div>
                     <h2 className="tech-font-display text-5xl font-bold text-[#0a0a0a] mb-6">ISP V4.0 Architecture</h2>
                     <p className="text-gray-600 text-lg">{cv184IspSection.description}</p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                     {cv184IspSection.bullets?.map((bullet, idx) => {
                        const title = bullet.split(':')[0];
                        const desc = bullet.split(':')[1] || bullet;
                        return (
                           <div key={idx} className="bg-white p-8 border border-gray-200 hover:border-[#4f4398] transition-colors group">
                              <div className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-4 group-hover:text-[#4f4398]">Feature 0{idx+1}</div>
                              <h3 className="text-xl font-bold mb-3 text-[#0a0a0a]">{title}</h3>
                              <p className="text-sm text-gray-500 leading-relaxed">{desc}</p>
                           </div>
                        );
                     })}
                  </div>
               </div>
            </section>
          )}

          {/* 5. SMART ALGORITHMS */}
          {cv184AlgorithmSection && (
             <section className="py-24 bg-white border-b border-gray-100">
                <div className="container mx-auto px-6">
                   <div className="flex flex-col lg:flex-row gap-16 items-center">
                      <div className="lg:w-1/3">
                         <div className="tech-font-mono text-xs font-bold uppercase tracking-widest text-[#4f4398] mb-4">Ready-to-Deploy</div>
                         <h2 className="tech-font-display text-4xl font-bold text-[#0a0a0a] mb-6">Smart Algorithms</h2>
                         <p className="text-gray-600 leading-relaxed">
                            Accelerate your time-to-market with our comprehensive library of pre-trained models and turnkey solutions for common edge AI scenarios.
                         </p>
                      </div>
                      <div className="lg:w-2/3">
                         <div className="flex flex-wrap gap-3">
                            {cv184AlgorithmSection.bullets?.map((algo, idx) => (
                               <span key={idx} className="px-4 py-2 bg-gray-50 border border-gray-200 text-sm font-medium text-gray-700 rounded-sm hover:bg-[#4f4398] hover:text-white hover:border-[#4f4398] transition-colors cursor-default">
                                  {algo}
                                </span>
                            ))}
                         </div>
                      </div>
                   </div>
                </div>
             </section>
          )}

          {/* 6. VARIANT COMPARISON TABLE */}
          {cv184VariantSection?.table && (
             <section className="py-24 bg-white">
                <div className="container mx-auto px-6">
                   <div className="mb-12">
                      <h2 className="tech-font-display text-4xl font-bold text-[#0a0a0a] mb-2">Variant Comparison</h2>
                      <p className="text-gray-500">Select the precise specification for your deployment.</p>
                   </div>
                   
                   <div className="overflow-x-auto border border-gray-200">
                      <table className="w-full text-left border-collapse">
                         <thead>
                            <tr className="bg-gray-50 text-xs font-bold uppercase tracking-widest text-gray-500">
                               {cv184VariantSection.table.headers.map((h, i) => (
                                  <th key={i} className="p-6 border-b border-gray-200 whitespace-nowrap">{h}</th>
                               ))}
                            </tr>
                         </thead>
                         <tbody className="text-sm">
                            {cv184VariantSection.table.rows.map((row, rIdx) => (
                               <tr key={rIdx} className="hover:bg-gray-50 transition-colors border-b border-gray-100 last:border-0">
                                  {row.map((cell, cIdx) => (
                                     <td key={cIdx} className={`p-6 ${cIdx === 0 ? 'font-bold text-[#0a0a0a]' : 'text-gray-600 font-mono'}`}>
                                        {cell}
                                     </td>
                                  ))}
                               </tr>
                            ))}
                         </tbody>
                      </table>
                   </div>
                   {cv184VariantSection.table.note && (
                      <div className="mt-4 text-xs text-gray-400 italic">
                         {cv184VariantSection.table.note}
                      </div>
                   )}
                </div>
             </section>
          )}

          {/* 7. APPLICATIONS */}
          <section className="py-24 bg-gray-50">
             <div className="container mx-auto px-6">
                <h3 className="tech-font-mono text-xs font-bold uppercase tracking-widest text-[#4f4398] mb-12 text-center">Deployment Scenarios</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {localizedProduct.applications.map((app, idx) => (
                      <div key={idx} className="relative aspect-square group overflow-hidden bg-white cursor-pointer">
                          <img 
                            src={app.image} 
                            alt={app.title} 
                            className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                          />
                          <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-4">
                              <span className="text-white text-sm font-bold uppercase tracking-widest text-center">{app.title}</span>
                          </div>
                      </div>
                  ))}
                </div>
             </div>
          </section>

          {/* 8. CTA */}
          <section className="py-32 bg-[#0a0a0a] text-center">
             <div className="container mx-auto px-6">
               <h2 className="text-4xl text-white font-bold mb-8">Ready to integrate CV184x?</h2>
               <Link
                  to={withLang(lang, RoutePath.CONTACT)}
                  className="inline-block bg-white text-[#0a0a0a] px-12 py-4 text-sm font-bold uppercase tracking-widest hover:bg-[#4f4398] hover:text-white transition-colors"
                >
                  {t('products.common.ctaButton')}
                </Link>
             </div>
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

      {/* Legacy Specs Table for Non-CV184 or generic fallback */}
      {!isCv184 && (
        <section className="py-20 bg-white border-t border-gray-100">
          <div className="container mx-auto px-6">
            <h3 className="text-2xl font-black text-gray-900 uppercase mb-8">
              {t('products.common.technicalSpecs')}
            </h3>
            <div className="overflow-x-auto">
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
      )}
    </div>
  );
};

export default ProductDetail_SOPHGO;