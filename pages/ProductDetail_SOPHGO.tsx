
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
  BarChart3,
  Aperture,
  Code,
  Globe,
  Database,
  Smartphone,
  Check,
  HelpCircle
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
    if (section.id) acc[section.id] = section;
    return acc;
  }, {} as Record<string, ChipDetailSection>);

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
          .cv184-rich {
            --brand: #4f4398;
            --dark: #0a0a0a;
            --gray-text: #64748b;
            --gray-bg: #f8fafc;
            --line: #e2e8f0;
          }
          .tech-mono { font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace; }
          .display-tight { letter-spacing: -0.04em; line-height: 0.9; }
          .section-divider { width: 40px; height: 2px; background: var(--brand); margin-bottom: 1.5rem; }
          .glass-card { background: rgba(255, 255, 255, 0.8); backdrop-filter: blur(10px); border: 1px solid var(--line); }
          
          @keyframes slideIn {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
          }
          .animate-slide { animation: slideIn 0.6s ease-out forwards; }
        `}</style>
      )}

      {isCv184 ? (
        <div className="cv184-rich">
          
          {/* 1. HERO SECTION */}
          <section className="relative pt-32 pb-20 border-b border-gray-100 overflow-hidden bg-white">
            <div className="absolute top-0 right-0 w-1/2 h-full bg-slate-50 -skew-x-12 translate-x-1/4 -z-10"></div>
            <div className="container mx-auto px-6">
              <div className="flex flex-col lg:flex-row items-center gap-16">
                <div className="lg:w-3/5">
                  <div className="tech-mono text-xs font-bold uppercase tracking-[0.3em] text-[#4f4398] mb-6">SOPHGO Vision Series</div>
                  <h1 className="display-tight text-7xl lg:text-[9rem] font-black text-[#0a0a0a] mb-8">
                    CV184<span className="text-[#4f4398]">x</span>
                  </h1>
                  <h2 className="text-3xl lg:text-4xl font-light text-slate-500 mb-8 max-w-2xl leading-tight">
                    {localizedProduct.tagline}
                  </h2>
                  <p className="text-lg text-slate-600 mb-10 max-w-xl leading-relaxed">
                    {localizedProduct.description}
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <Link to={withLang(lang, RoutePath.CONTACT)} className="bg-[#0a0a0a] text-white px-10 py-4 font-bold uppercase tracking-widest hover:bg-[#4f4398] transition-all">
                      Request Quote
                    </Link>
                    <button className="border border-slate-200 px-10 py-4 font-bold uppercase tracking-widest hover:border-black transition-all">
                      Datasheet (PDF)
                    </button>
                  </div>
                </div>
                <div className="lg:w-2/5 relative">
                   <div className="relative w-72 h-72 md:w-96 md:h-96 mx-auto">
                      <div className="absolute inset-0 border border-slate-100 rounded-full animate-[spin_40s_linear_infinite]"></div>
                      <div className="absolute inset-8 border border-dashed border-slate-200 rounded-full animate-[spin_30s_linear_infinite_reverse]"></div>
                      <div className="absolute inset-0 flex items-center justify-center">
                         <div className="w-56 h-56 md:w-72 md:h-72 bg-[#111] shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)] flex flex-col items-center justify-center rounded-sm relative group overflow-hidden border-b-4 border-[#4f4398]">
                            <div className="absolute inset-4 border border-white/5 pointer-events-none"></div>
                            <div className="text-white/20 tech-mono text-[8px] absolute top-4 left-4">V1.2.10</div>
                            <div className="text-center z-10">
                               <div className="text-slate-500 tech-mono text-xs mb-2">SOPHGO</div>
                               <div className="text-white text-4xl font-bold tracking-widest">CV184x</div>
                            </div>
                            <div className="absolute bottom-4 right-4 w-3 h-3 bg-[#4f4398] opacity-50"></div>
                         </div>
                      </div>
                   </div>
                </div>
              </div>
            </div>
          </section>

          {/* 2. PRODUCT OVERVIEW (5 Verbatim Paragraphs) */}
          <section className="py-24 bg-white border-b border-gray-100">
            <div className="container mx-auto px-6">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
                <div className="lg:col-span-4">
                  <div className="section-divider"></div>
                  <h3 className="text-sm font-black uppercase tracking-widest text-[#0a0a0a] mb-4">Visionary Performance</h3>
                  <p className="text-4xl font-bold tracking-tight leading-[1.1] text-slate-900">
                    Engineered for the demands of modern Edge AI.
                  </p>
                </div>
                <div className="lg:col-span-8">
                  <div className="space-y-8 text-lg text-slate-600 leading-relaxed max-w-3xl">
                    {localizedProduct.longDescription.map((para, idx) => (
                      <p key={idx}>{para}</p>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* 3. CORE HIGHLIGHTS GRID */}
          <section className="py-24 bg-slate-50">
            <div className="container mx-auto px-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {localizedProduct.highlights.map((item, idx) => (
                  <div key={idx} className="bg-white p-8 border border-slate-200 rounded-sm hover:border-[#4f4398] transition-colors group">
                    <div className="w-10 h-10 mb-6 flex items-center justify-center bg-slate-50 text-[#4f4398] group-hover:bg-[#4f4398] group-hover:text-white transition-all">
                      <Check size={20} />
                    </div>
                    <div className="text-lg font-bold text-slate-900">{item}</div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* 4. DETAILED FEATURES (6 Cards) */}
          <section className="py-24 bg-white border-b border-gray-100">
            <div className="container mx-auto px-6">
              <h3 className="tech-mono text-xs font-bold uppercase tracking-[0.3em] text-center text-slate-400 mb-16">Key Innovation Pillars</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-slate-200 border border-slate-200">
                {localizedProduct.detailedFeatures.map((feat, idx) => {
                  const icons = [Aperture, Code, Cpu, BarChart3, Database, Globe];
                  const Icon = icons[idx] || Zap;
                  return (
                    <div key={idx} className="bg-white p-12 hover:bg-slate-50 transition-colors h-full">
                      <Icon className="text-[#4f4398] mb-8" size={32} strokeWidth={1.5} />
                      <h4 className="text-xl font-bold text-slate-900 mb-4 uppercase tracking-tight">{feat.title}</h4>
                      <p className="text-slate-500 leading-relaxed text-sm">{feat.description}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>

          {/* 5. TPU PERFORMANCE & BENCHMARKS */}
          {cv184SectionMap['tpu-acceleration'] && (
            <section className="py-32 bg-[#0a0a0a] text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 w-1/2 h-full bg-[#111] -skew-x-12 translate-x-1/2 opacity-50"></div>
              <div className="container mx-auto px-6 relative z-10">
                <div className="flex flex-col lg:flex-row gap-20">
                  <div className="lg:w-2/5">
                    <div className="section-divider"></div>
                    <h2 className="display-tight text-5xl font-black mb-8 uppercase">TPU Acceleration</h2>
                    <p className="text-slate-400 text-lg mb-10 leading-relaxed">
                      {cv184SectionMap['tpu-acceleration'].description}
                    </p>
                    <div className="space-y-6">
                      {cv184SectionMap['tpu-acceleration'].bullets?.map((bullet, idx) => (
                        <div key={idx} className="flex items-start gap-4 text-sm text-slate-300 border-l border-slate-800 pl-6 py-1">
                          <span>{bullet}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="lg:w-3/5">
                    <div className="bg-[#111] border border-slate-800 p-10 rounded-sm">
                      <h3 className="tech-mono text-xs font-bold uppercase tracking-widest text-slate-500 mb-12">Efficiency Benchmarks (FPS @ INT8)</h3>
                      <div className="space-y-10">
                        {cv184SectionMap['tpu-acceleration'].stats?.map((stat, idx) => {
                          const val = parseFloat(stat.value);
                          // Scale visualization: MobileNet is base 100%, others are small
                          let width = "10%";
                          if (stat.label.includes('MobileNet')) width = "100%";
                          else if (stat.label.includes('ResNet')) width = "15%";
                          else if (stat.label.includes('YOLO')) width = "12%";
                          else if (stat.label.includes('OpenCLIP')) width = "5%";

                          return (
                            <div key={idx} className="relative">
                              <div className="flex justify-between items-end mb-3">
                                <span className="text-sm font-bold tracking-tight uppercase">{stat.label}</span>
                                <span className="text-2xl font-black tech-mono text-[#4f4398]">{stat.value}</span>
                              </div>
                              <div className="h-1.5 w-full bg-slate-900 rounded-full overflow-hidden">
                                <div 
                                  className="h-full bg-[#4f4398] relative" 
                                  style={{ width, transition: 'width 1.5s cubic-bezier(0.16, 1, 0.3, 1)' }}
                                >
                                  <div className="absolute inset-0 bg-gradient-to-r from-transparent to-white/20 animate-pulse"></div>
                                </div>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                      <div className="mt-12 text-[10px] tech-mono text-slate-600 text-center uppercase tracking-widest">
                        Test Condition: 8 Bank, 512KB LMEM · Based on CV1842C-P
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          )}

          {/* 6. ISP V4.0 DEEP DIVE */}
          {cv184SectionMap['isp-v4'] && (
            <section className="py-24 bg-white border-b border-gray-100">
              <div className="container mx-auto px-6">
                <div className="max-w-3xl mb-20">
                  <div className="section-divider"></div>
                  <h2 className="display-tight text-5xl font-black text-slate-900 mb-6 uppercase">ISP V4.0 Imaging Pipeline</h2>
                  <p className="text-xl text-slate-500 leading-relaxed">
                    {cv184SectionMap['isp-v4'].description}
                  </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {cv184SectionMap['isp-v4'].bullets?.map((bullet, idx) => {
                    const [title, ...rest] = bullet.split(':');
                    const desc = rest.join(':');
                    return (
                      <div key={idx} className="flex gap-6 p-8 border border-slate-100 bg-slate-50/50 hover:bg-white hover:shadow-xl hover:border-transparent transition-all duration-500 group">
                        <div className="tech-mono text-[10px] font-black text-slate-300 group-hover:text-[#4f4398] transition-colors">0{idx+1}</div>
                        <div>
                          <h4 className="font-black text-lg text-slate-900 uppercase tracking-tight mb-2">{title}</h4>
                          <p className="text-sm text-slate-500 leading-relaxed">{desc}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </section>
          )}

          {/* 7. SMART ALGORITHM LIBRARY */}
          {cv184SectionMap['smart-algorithms'] && (
            <section className="py-24 bg-slate-50 border-b border-gray-100 overflow-hidden">
              <div className="container mx-auto px-6">
                <div className="flex flex-col lg:flex-row gap-20">
                  <div className="lg:w-1/3">
                    <div className="section-divider"></div>
                    <h2 className="display-tight text-5xl font-black text-slate-900 mb-8 uppercase">Turnkey Algorithms</h2>
                    <p className="text-slate-500 mb-10 leading-relaxed">
                      {cv184SectionMap['smart-algorithms'].description}
                    </p>
                    <div className="p-6 bg-white border border-slate-200">
                       <h5 className="tech-mono text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-4">Capabilities</h5>
                       <ul className="space-y-3">
                          {['Generic Detection', 'Multimodal LLM', 'Feature Retrieval', 'Secure Boot'].map((cap, i) => (
                             <li key={i} className="flex items-center gap-3 text-xs font-bold text-slate-700 uppercase">
                                <div className="w-1 h-1 bg-[#4f4398]"></div> {cap}
                             </li>
                          ))}
                       </ul>
                    </div>
                  </div>
                  <div className="lg:w-2/3">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {cv184SectionMap['smart-algorithms'].bullets?.map((algo, idx) => {
                        const [name, desc] = algo.split(':');
                        return (
                          <div key={idx} className="bg-white p-6 border border-slate-200 group hover:border-[#4f4398] transition-all">
                            <h4 className="font-bold text-sm text-slate-900 mb-1 group-hover:text-[#4f4398] transition-colors">{name}</h4>
                            <p className="text-[11px] text-slate-400 uppercase tracking-tight leading-relaxed">{desc}</p>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </section>
          )}

          {/* 8. INTRA4 & SMART ENCODING */}
          {cv184SectionMap['intra4-encoding'] && (
            <section className="py-24 bg-white border-b border-gray-100">
               <div className="container mx-auto px-6">
                  <div className="flex flex-col lg:flex-row items-center gap-16">
                     <div className="lg:w-1/2">
                        <div className="section-divider"></div>
                        <h2 className="display-tight text-5xl font-black text-slate-900 mb-8 uppercase">Intra4 Encoding</h2>
                        <p className="text-xl text-slate-500 mb-8 leading-relaxed">
                           {cv184SectionMap['intra4-encoding'].description}
                        </p>
                        <ul className="space-y-4">
                           {cv184SectionMap['intra4-encoding'].bullets?.map((bullet, idx) => (
                              <li key={idx} className="flex items-start gap-4 text-slate-600">
                                 <div className="w-5 h-5 flex items-center justify-center border border-slate-200 rounded-full mt-1 shrink-0">
                                    <Check size={12} />
                                 </div>
                                 <span className="text-sm font-medium">{bullet}</span>
                              </li>
                           ))}
                        </ul>
                     </div>
                     <div className="lg:w-1/2">
                        <div className="aspect-video bg-slate-900 flex items-center justify-center p-12 relative group">
                           <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80')] bg-cover opacity-20 grayscale group-hover:opacity-40 transition-opacity"></div>
                           <div className="relative z-10 text-center">
                              <div className="tech-mono text-[10px] text-[#4f4398] mb-4 uppercase tracking-[0.5em]">Bitrate Optimization</div>
                              <div className="flex items-center gap-8">
                                 <div className="text-center">
                                    <div className="text-slate-500 text-[10px] uppercase mb-2">Standard</div>
                                    <div className="w-24 h-24 border border-slate-700 flex items-center justify-center text-slate-700 text-xs">OFF</div>
                                 </div>
                                 <div className="w-12 h-[1px] bg-slate-700"></div>
                                 <div className="text-center">
                                    <div className="text-[#4f4398] text-[10px] uppercase mb-2">Intra4</div>
                                    <div className="w-24 h-24 border border-[#4f4398] flex items-center justify-center text-[#4f4398] text-xs font-black shadow-[0_0_30px_rgba(79,67,152,0.3)]">ON</div>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </section>
          )}

          {/* 9. VARIANT COMPARISON TABLE (Verbatim) */}
          {cv184SectionMap['variant-comparison'] && (
            <section className="py-24 bg-white border-b border-gray-100">
              <div className="container mx-auto px-6">
                <div className="mb-16">
                  <div className="section-divider"></div>
                  <h2 className="display-tight text-5xl font-black text-slate-900 mb-4 uppercase">Variant Comparison</h2>
                  <p className="text-slate-500">{cv184SectionMap['variant-comparison'].description}</p>
                </div>
                <div className="overflow-x-auto border border-slate-200">
                  <table className="w-full text-left border-collapse min-w-[800px]">
                    <thead>
                      <tr className="bg-slate-50 text-[10px] tech-mono font-bold uppercase tracking-widest text-slate-400">
                        {cv184SectionMap['variant-comparison'].table?.headers.map((h, i) => (
                          <th key={i} className="p-6 border-b border-slate-200">{h}</th>
                        ))}
                      </tr>
                    </thead>
                    <tbody className="text-sm">
                      {cv184SectionMap['variant-comparison'].table?.rows.map((row, rIdx) => (
                        <tr key={rIdx} className="hover:bg-slate-50/50 transition-colors border-b border-slate-100 last:border-0">
                          {row.map((cell, cIdx) => (
                            <td key={cIdx} className={`p-6 ${cIdx === 0 ? 'font-black text-slate-900 uppercase' : 'text-slate-600 tech-mono'}`}>
                              {cell}
                            </td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                {cv184SectionMap['variant-comparison'].table?.note && (
                  <p className="mt-6 text-xs text-slate-400 italic text-center max-w-2xl mx-auto leading-relaxed">
                    {cv184SectionMap['variant-comparison'].table.note}
                  </p>
                )}
              </div>
            </section>
          )}

          {/* 10. DEPLOYMENT SCENARIOS (Applications) */}
          <section className="py-24 bg-slate-50 border-b border-gray-100">
            <div className="container mx-auto px-6">
              <h3 className="tech-mono text-[10px] font-black uppercase tracking-[0.5em] text-center text-slate-400 mb-16">Target Markets & Scenarios</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {localizedProduct.applications.map((app, idx) => (
                  <div key={idx} className="relative aspect-[4/5] group overflow-hidden bg-white border border-slate-200">
                    <img 
                      src={app.image} 
                      alt={app.title} 
                      className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" 
                    />
                    <div className="absolute inset-0 bg-[#0a0a0a]/60 opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-8">
                       <div className="w-8 h-[1px] bg-[#4f4398] mb-4"></div>
                       <h4 className="text-white font-black uppercase tracking-widest text-sm leading-tight">{app.title}</h4>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* 11. TECHNICAL SPECIFICATIONS (Verbatim) */}
          <section className="py-24 bg-white border-b border-gray-100">
            <div className="container mx-auto px-6">
              <div className="flex items-center gap-6 mb-16">
                 <h2 className="display-tight text-5xl font-black text-slate-900 uppercase">Specifications</h2>
                 <div className="h-[1px] flex-grow bg-slate-100"></div>
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-20 gap-y-2">
                {localizedProduct.specs.map((spec, idx) => (
                  <div key={idx} className="flex justify-between items-center py-4 border-b border-slate-50 group hover:bg-slate-50 transition-colors px-4">
                    <div className="flex flex-col">
                       <span className="text-[10px] tech-mono font-bold text-[#4f4398] uppercase opacity-50">{spec.category}</span>
                       <span className="text-sm font-bold text-slate-900 uppercase tracking-tight">{spec.key}</span>
                    </div>
                    <span className="text-sm text-slate-500 text-right tech-mono">{spec.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* 12. FAQ */}
          <section className="py-24 bg-slate-50">
             <div className="container mx-auto px-6">
                <div className="max-w-3xl mx-auto">
                   <div className="text-center mb-16">
                      <HelpCircle className="mx-auto text-[#4f4398] mb-4" size={32} />
                      <h2 className="display-tight text-4xl font-black text-slate-900 uppercase">Technical FAQ</h2>
                   </div>
                   <div className="space-y-6">
                      {localizedProduct.faqs.map((faq, idx) => (
                         <div key={idx} className="bg-white p-8 border border-slate-200">
                            <h4 className="font-black text-slate-900 uppercase tracking-tight mb-4 flex items-center gap-3">
                               <div className="w-1.5 h-1.5 bg-[#4f4398]"></div> {faq.question}
                            </h4>
                            <p className="text-slate-500 text-sm leading-relaxed">{faq.answer}</p>
                         </div>
                      ))}
                   </div>
                </div>
             </div>
          </section>

          {/* 13. CTA */}
          <section className="py-32 bg-[#0a0a0a] text-center relative overflow-hidden">
             <div className="absolute inset-0 opacity-10" style={{backgroundImage: 'radial-gradient(circle at 2px 2px, #4f4398 1px, transparent 0)', backgroundSize: '40px 40px'}}></div>
             <div className="container mx-auto px-6 relative z-10">
                <h2 className="display-tight text-5xl lg:text-7xl font-black text-white mb-12 uppercase">Scale your Vision.</h2>
                <Link
                  to={withLang(lang, RoutePath.CONTACT)}
                  className="inline-block bg-white text-[#0a0a0a] px-16 py-5 font-black uppercase tracking-[0.2em] hover:bg-[#4f4398] hover:text-white transition-all text-sm shadow-[0_20px_50px_rgba(0,0,0,0.3)]"
                >
                  {t('products.common.ctaButton')}
                </Link>
             </div>
          </section>

        </div>
      ) : (
        /* --- LEGACY LAYOUT FOR OTHER PRODUCTS (KEEP INTACT) --- */
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

      {/* Generic Specs Table fallback for non-CV184 or generic detail */}
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
