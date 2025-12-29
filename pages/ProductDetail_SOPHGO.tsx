
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
          .sophgo-detail {
            --brand-purple: #4f4398;
            --brand-green: #76b900;
          }
          .sophgo-detail h1, .sophgo-detail h2, .sophgo-detail h3, .sophgo-detail h4 {
            font-family: inherit; /* Sync with global sans font */
            letter-spacing: -0.02em;
          }
          .stats-grid-item {
            border-left: 4px solid var(--brand-purple);
            padding-left: 1.5rem;
          }
          .arch-diagram-container {
            background: linear-gradient(180deg, #f8fafc 0%, #ffffff 100%);
            border: 1px solid #e2e8f0;
          }
        `}</style>
      )}

      <div className="sophgo-detail bg-white text-gray-900">
        
        {/* 1. GLOBAL SOPHGO HERO SECTION */}
        <section className="relative min-h-[75vh] flex items-center pt-24 overflow-hidden bg-white">
          {/* Hero Background Image */}
          <div className="absolute inset-0 z-0">
            <img 
              src="/CV/cvitek-banner.webp" 
              className="w-full h-full object-cover grayscale opacity-60 mix-blend-multiply"
              alt="Sophgo banner"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-transparent"></div>
          </div>
          
          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-4xl">
              <div className="flex items-center gap-3 mb-8">
                <div className="bg-[#4f4398] text-white px-4 py-1.5 text-[10px] font-black uppercase tracking-[0.2em]">SOPHGO</div>
                <div className="text-gray-400 font-bold uppercase text-[10px] tracking-[0.2em]">{localizedProduct.series} Computing</div>
              </div>
              <h1 className="text-7xl md:text-9xl font-black uppercase mb-8 tracking-tighter text-gray-900 leading-[0.85]">
                {displayName}
              </h1>
              <h2 className="text-2xl md:text-4xl font-bold text-[#4f4398] mb-10 leading-tight tracking-tight">
                {localizedProduct.tagline}
              </h2>
              <p className="text-xl text-gray-600 mb-12 max-w-2xl leading-relaxed font-medium">
                {localizedProduct.description}
              </p>
              <div className="flex flex-wrap gap-6">
                <Link to={withLang(lang, RoutePath.CONTACT)} className="bg-[#4f4398] text-white px-12 py-5 font-black uppercase tracking-widest hover:bg-[#3e3479] transition-all flex items-center gap-3 shadow-xl shadow-purple-900/10">
                  Get a Quote <ArrowRight size={20} />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {isCv184 ? (
          <>
            {/* 2. VERBATIM PRODUCT OVERVIEW */}
            <section className="py-32 bg-white border-b border-gray-100">
            <div className="container mx-auto px-6">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
                <div className="lg:col-span-5">
                  <h3 className="text-sm font-black uppercase tracking-[0.3em] text-[#4f4398] mb-10 flex items-center gap-4">
                    <span className="w-12 h-px bg-[#4f4398]"></span> Product Overview
                  </h3>
                  <div className="space-y-8 text-gray-600 text-xl leading-relaxed">
                    {localizedProduct.longDescription.map((para, idx) => (
                      <p key={idx} className="first-letter:text-4xl first-letter:font-black first-letter:text-[#4f4398] first-letter:mr-1">{para}</p>
                    ))}
                  </div>
                </div>
                <div className="lg:col-span-7">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-gray-200 border border-gray-200 shadow-2xl">
                    {localizedProduct.detailedFeatures.map((feat, idx) => (
                      <div key={idx} className="bg-white p-10 hover:bg-gray-50 transition-colors h-full">
                        <div className="text-[#4f4398] mb-6">
                          <CheckCircle size={28} strokeWidth={1.5} />
                        </div>
                        <h4 className="font-black uppercase text-base mb-4 tracking-tight text-gray-900">{feat.title}</h4>
                        <p className="text-sm text-gray-500 leading-relaxed">{feat.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* 3. CORE ARCHITECTURE & DIAGRAM */}
          <section className="py-32 bg-gray-50 border-y border-gray-100">
            <div className="container mx-auto px-6">
              <div className="text-center max-w-4xl mx-auto mb-20">
                <h3 className="text-5xl font-black uppercase mb-8 tracking-tighter text-gray-900">System Architecture</h3>
                <p className="text-gray-500 text-xl font-medium leading-relaxed">Integrated Dual-Core ARM + RISC-V with proprietary AI acceleration and 4K imaging engines.</p>
              </div>
              
              <div className="arch-diagram-container p-12 md:p-20 mb-20 rounded-sm shadow-2xl flex justify-center bg-white border-0 relative overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:24px_24px] opacity-20"></div>
                <img 
                  src="/CV/CV184-ARCH.svg" 
                  alt="CV184x Architecture Diagram" 
                  className="max-w-full h-auto relative z-10 scale-110"
                />
              </div>

              {/* Redesigned Features under Diagram */}
              <div className="flex flex-wrap justify-center gap-x-12 gap-y-8 max-w-6xl mx-auto border-t border-gray-200 pt-16">
                {localizedProduct.highlights.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-4 group">
                    <div className="w-2 h-2 bg-[#4f4398] rounded-full group-hover:scale-150 transition-transform"></div>
                    <div className="font-black text-sm uppercase tracking-tight text-gray-900 border-b-2 border-transparent group-hover:border-[#4f4398] transition-all pb-1">{item}</div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* 4. TPU PERFORMANCE DEEP DIVE */}
          {cv184SectionMap['tpu-acceleration'] && (
            <section className="py-24 bg-white overflow-hidden">
              <div className="container mx-auto px-6">
                <div className="flex flex-col lg:flex-row gap-20 items-center">
                  <div className="lg:w-1/2">
                    <h3 className="text-4xl font-black uppercase mb-8 tracking-tight">TPU Acceleration</h3>
                    <p className="text-gray-600 text-lg mb-10 leading-relaxed">
                      {cv184SectionMap['tpu-acceleration'].description}
                    </p>
                    <div className="space-y-4">
                      {cv184SectionMap['tpu-acceleration'].bullets?.map((bullet, idx) => (
                        <div key={idx} className="stats-grid-item">
                          <div className="text-gray-700 font-medium leading-relaxed">{bullet}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="lg:w-1/2 w-full">
                    <div className="bg-gray-900 text-white p-10 rounded-sm shadow-2xl relative overflow-hidden">
                      {/* Background Visual Element */}
                      <div className="absolute top-0 right-0 w-32 h-32 bg-[#4f4398] opacity-10 blur-3xl"></div>
                      
                      <h4 className="font-black uppercase tracking-widest text-xs mb-10 text-gray-400">Benchmark Data (FPS @ INT8)</h4>
                      <div className="space-y-8">
                        {cv184SectionMap['tpu-acceleration'].stats?.map((stat, idx) => (
                          <div key={idx}>
                            <div className="flex justify-between items-end mb-2">
                              <span className="text-sm font-bold uppercase tracking-tight">{stat.label}</span>
                              <span className="text-2xl font-black text-[#4f4398]">{stat.value}</span>
                            </div>
                            <div className="h-1.5 w-full bg-gray-800 rounded-full">
                              <div 
                                className="h-full bg-[#4f4398] rounded-full" 
                                style={{ width: stat.label.includes('MobileNet') ? '100%' : stat.label.includes('ResNet') ? '15%' : '10%' }}
                              ></div>
                            </div>
                          </div>
                        ))}
                      </div>
                      <p className="mt-10 text-[10px] text-gray-500 uppercase tracking-widest text-center border-t border-gray-800 pt-6">
                        Test Note: 8 Bank, 512KB LMEM · Data based on CV1842C-P
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          )}

          {/* 5. ISP V4.0 TECHNOLOGY MODULES */}
          {cv184SectionMap['isp-v4'] && (
            <section className="py-24 bg-gray-50 border-y border-gray-100">
              <div className="container mx-auto px-6">
                <div className="max-w-3xl mb-16">
                  <h3 className="text-4xl font-black uppercase mb-6 tracking-tight">ISP V4.0 Imaging</h3>
                  <p className="text-gray-600 text-lg leading-relaxed">
                    {cv184SectionMap['isp-v4'].description}
                  </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                  {cv184SectionMap['isp-v4'].bullets?.map((bullet, idx) => {
                    const [title, desc] = bullet.split(':');
                    return (
                      <div key={idx} className="bg-white p-8 border border-gray-200 hover:border-[#4f4398] transition-all group">
                        <div className="text-[#4f4398] font-black text-xs mb-4">MOD-0{idx+1}</div>
                        <h4 className="font-black uppercase text-sm mb-3 tracking-tight group-hover:text-[#4f4398] transition-colors">{title}</h4>
                        <p className="text-xs text-gray-500 leading-relaxed uppercase tracking-wider">{desc || title}</p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </section>
          )}

          {/* 6. TURNKEY ALGORITHM LIBRARY */}
          {cv184SectionMap['algorithms'] && (
            <section className="py-24 bg-white border-b border-gray-100">
              <div className="container mx-auto px-6">
                <div className="flex flex-col lg:flex-row gap-16">
                  <div className="lg:w-1/3">
                    <h3 className="text-4xl font-black uppercase mb-6 tracking-tight leading-none">Smart Algorithm Library</h3>
                    <p className="text-gray-500 mb-8 leading-relaxed">
                      {cv184SectionMap['algorithms'].description}
                    </p>
                    <ul className="space-y-3">
                      {['Real-time Inference', 'Low Latency', 'High Accuracy'].map((item, i) => (
                        <li key={i} className="flex items-center gap-2 text-xs font-black uppercase text-[#4f4398]">
                          <Zap size={14} fill="currentColor" /> {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="lg:w-2/3">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {cv184SectionMap['algorithms'].bullets?.map((algo, idx) => (
                        <div key={idx} className="flex items-center gap-4 p-4 border border-gray-100 hover:bg-gray-50 transition-colors">
                          <div className="w-2 h-2 bg-[#4f4398] rounded-full"></div>
                          <span className="text-sm font-bold uppercase tracking-tight text-gray-700">{algo}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </section>
          )}

          {/* 7. VARIANT COMPARISON TABLE (Verbatim) */}
          {cv184SectionMap['variant-comparison'] && (
            <section className="py-24 bg-white border-b border-gray-100">
              <div className="container mx-auto px-6">
                <h3 className="text-4xl font-black uppercase mb-12 tracking-tight text-center">Variant Comparison</h3>
                <div className="overflow-x-auto border border-gray-200">
                  <table className="w-full text-left border-collapse min-w-[900px]">
                    <thead>
                      <tr className="bg-gray-50 text-[10px] font-black uppercase tracking-widest text-gray-400">
                        {cv184SectionMap['variant-comparison'].table?.headers.map((h, i) => (
                          <th key={i} className="p-6 border-b border-gray-200 whitespace-nowrap">{h}</th>
                        ))}
                      </tr>
                    </thead>
                    <tbody className="text-xs">
                      {cv184SectionMap['variant-comparison'].table?.rows.map((row, rIdx) => (
                        <tr key={rIdx} className="hover:bg-gray-50 transition-colors border-b border-gray-100 last:border-0">
                          {row.map((cell, cIdx) => (
                            <td key={cIdx} className={`p-6 ${cIdx === 0 ? 'font-black text-gray-900 uppercase' : 'text-gray-600 font-bold'}`}>
                              {cell}
                            </td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                {cv184SectionMap['variant-comparison'].table?.note && (
                  <p className="mt-6 text-xs text-gray-400 italic text-center max-w-3xl mx-auto leading-relaxed">
                    {cv184SectionMap['variant-comparison'].table.note}
                  </p>
                )}
              </div>
            </section>
          )}

          {/* 8. APPLICATION GRID */}
          <section className="py-24 bg-gray-50">
            <div className="container mx-auto px-6 text-center">
              <h3 className="text-sm font-black uppercase tracking-[0.4em] text-gray-400 mb-16">Primary Deployment Scenarios</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {localizedProduct.applications.map((app, idx) => (
                  <div key={idx} className="group cursor-pointer">
                    <div className="aspect-[4/5] bg-white overflow-hidden mb-4 border border-gray-200 rounded-sm">
                      <img 
                        src={app.image} 
                        alt={app.title} 
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
                      />
                    </div>
                    <h4 className="font-black text-xs uppercase tracking-widest group-hover:text-[#4f4398] transition-colors">{app.title}</h4>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* 9. TECHNICAL SPECIFICATIONS (Category-based Table) */}
          <section className="py-32 bg-white border-b border-gray-100">
            <div className="container mx-auto px-6">
              <div className="flex flex-col md:flex-row items-baseline justify-between gap-6 mb-20">
                <h3 className="text-6xl font-black uppercase tracking-tighter text-gray-900">Datasheet</h3>
                <p className="text-gray-400 font-bold uppercase tracking-[0.3em] text-xs">Complete Technical Parameters</p>
              </div>

              <div className="border border-gray-200 shadow-sm overflow-hidden">
                <table className="w-full text-left border-collapse">
                  <tbody>
                    {/* Iterate through categories */}
                    {Array.from(new Set(localizedProduct.specs.map(s => s.category))).map((cat, catIdx) => (
                      <React.Fragment key={catIdx}>
                        <tr className="bg-gray-50 border-b border-gray-200">
                          <td colSpan={2} className="py-6 px-8 text-xs font-black uppercase tracking-[0.4em] text-[#4f4398] bg-gray-50/50">
                            {cat}
                          </td>
                        </tr>
                        {localizedProduct.specs.filter(s => s.category === cat).map((spec, specIdx) => (
                          <tr key={specIdx} className="border-b border-gray-100 last:border-b-0 hover:bg-slate-50 transition-colors">
                            <td className="py-5 px-8 text-sm font-bold uppercase tracking-tight text-gray-400 w-1/3 border-r border-gray-100">
                              {spec.key}
                            </td>
                            <td className="py-5 px-8 text-sm font-black text-gray-900 tracking-tight uppercase">
                              {spec.value}
                            </td>
                          </tr>
                        ))}
                      </React.Fragment>
                    ))}
                  </tbody>
                </table>
              </div>
              
              <div className="mt-12 flex justify-end">
                 <p className="text-[10px] text-gray-400 uppercase tracking-widest font-bold">
                    © 2025 AIMORELOGY · SOPHGO CV184X SERIES · CONFIDENTIAL
                 </p>
              </div>
            </div>
          </section>

          {/* 10. CTA */}
          <section className="py-32 bg-[#0a0a0a] text-center relative overflow-hidden">
            <div className="absolute inset-0 opacity-20">
              <img src="/CV/cvitek-banner.webp" className="w-full h-full object-cover" alt="CTA bg" />
            </div>
            <div className="container mx-auto px-6 relative z-10">
              <h2 className="text-5xl md:text-7xl font-black text-white mb-12 uppercase tracking-tighter leading-none">
                Start Building with <span className="text-[#4f4398]">{displayName}</span>
              </h2>
              <Link
                to={withLang(lang, RoutePath.CONTACT)}
                className="inline-block bg-white text-gray-900 px-16 py-5 font-black uppercase tracking-[0.2em] hover:bg-[#4f4398] hover:text-white transition-all text-sm shadow-2xl"
              >
                Contact Sales
              </Link>
            </div>
          </section>
        </>
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

      {/* Legacy/Fallback Specs table */}
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
    </div>
  );
};

export default ProductDetail_SOPHGO;
