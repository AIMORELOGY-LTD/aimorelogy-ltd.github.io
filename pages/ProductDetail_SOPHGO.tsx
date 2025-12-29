
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
import { useTranslation, Trans } from 'react-i18next';
import Seo from '../components/Seo';

const ProductDetail_SOPHGO: React.FC = () => {
  const lang = useLang();
  const { t } = useTranslation();
  const { modelId } = useParams<{ modelId: string }>();
  const [product, setProduct] = useState<ChipData | null>(null);

  const scrollToFooter = () => {
    const footer = document.getElementById('footer');
    if (footer) {
      footer.scrollIntoView({ behavior: 'smooth' });
    }
  };

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

  const formatIndex = (index: number) => String(index).padStart(2, '0');

  const cv184Ui = {
    heroSeriesLabel: t('products.sophgo.cv184.ui.hero.seriesLabel', {
      series: localizedProduct.series,
      defaultValue: `${localizedProduct.series} Computing Architecture`
    }),
    ctaButton: t('products.sophgo.cv184.ui.ctaButton', {
      defaultValue: 'Get Technical Docs'
    }),
    productBrief: t('products.sophgo.cv184.ui.productBrief', {
      defaultValue: 'Product Brief'
    }),
    systemArchitecture: t('products.sophgo.cv184.ui.systemArchitecture', {
      defaultValue: 'System Architecture'
    }),
    keyInnovation: (index: number) => t('products.sophgo.cv184.ui.keyInnovation', {
      index: formatIndex(index),
      defaultValue: `Key Innovation ${formatIndex(index)}`
    }),
    tpuEyebrow: t('products.sophgo.cv184.ui.tpuEyebrow', {
      defaultValue: 'In-House TPU 1.5T'
    }),
    tpuTitle: t('products.sophgo.cv184.ui.tpuTitle', {
      defaultValue: 'TPU Performance'
    }),
    tpuBenchmarks: t('products.sophgo.cv184.ui.tpuBenchmarks', {
      defaultValue: 'Benchmarks (FPS @ INT8)'
    }),
    ispEyebrow: t('products.sophgo.cv184.ui.ispEyebrow', {
      defaultValue: 'Self-Developed ISP V4.0'
    }),
    ispTitle: t('products.sophgo.cv184.ui.ispTitle', {
      defaultValue: 'Imaging Pipeline'
    }),
    ispEngineLabel: (index: number) => t('products.sophgo.cv184.ui.ispEngineLabel', {
      index: formatIndex(index),
      defaultValue: `ENGINE-${formatIndex(index)}`
    }),
    aiLibraryTitle: t('products.sophgo.cv184.ui.aiLibraryTitle', {
      defaultValue: 'AI Model Library'
    }),
    aiCategories: t('products.sophgo.cv184.ui.aiCategories', {
      returnObjects: true,
      defaultValue: ['Face', 'Human', 'Vehicle', 'Behavior']
    }) as string[],
    variantComparison: t('products.sophgo.cv184.ui.variantComparison', {
      defaultValue: 'Variant Comparison'
    }),
    deploymentScenarios: t('products.sophgo.cv184.ui.deploymentScenarios', {
      defaultValue: 'Commercial Deployment Scenarios'
    }),
    datasheetTitle: t('products.sophgo.cv184.ui.datasheetTitle', {
      defaultValue: 'Datasheet'
    }),
    datasheetVersion: t('products.sophgo.cv184.ui.datasheetVersion', {
      defaultValue: 'V1.2.10 Technical Reference'
    }),
    altHero: t('products.sophgo.cv184.ui.alt.hero', {
      defaultValue: 'Sophgo banner'
    }),
    altArchitecture: t('products.sophgo.cv184.ui.alt.architecture', {
      defaultValue: 'CV184x Architecture Diagram'
    }),
    altCta: t('products.sophgo.cv184.ui.alt.cta', {
      defaultValue: 'CTA background'
    })
  };

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
          }
          .sophgo-detail h1, .sophgo-detail h2, .sophgo-detail h3, .sophgo-detail h4 {
            letter-spacing: -0.03em;
          }
          .feature-line-item {
            position: relative;
            padding-left: 1.5rem;
            border-left: 1px solid #e2e8f0;
          }
          .feature-line-item::before {
            content: '';
            position: absolute;
            left: -1px;
            top: 0;
            height: 20px;
            width: 1px;
            background: var(--brand-purple);
          }
          /* Remove all grayscale from images */
          .sophgo-detail img {
            filter: none !important;
          }
        `}</style>
      )}

      <div className="sophgo-detail bg-white text-gray-900">
        
        {/* 1. HERO SECTION - High Visibility */}
        <section className="relative min-h-[70vh] flex items-center pt-24 overflow-hidden bg-white">
          <div className="absolute inset-0 z-0">
            <img 
              src="/CV/cvitek-banner.webp" 
              className="w-full h-full object-cover opacity-70"
              alt={cv184Ui.altHero}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-white via-white/70 to-transparent"></div>
          </div>
          
          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-4xl">
              <div className="flex items-center gap-3 mb-8">
                <div className="bg-[#4f4398] text-white px-4 py-1 text-[10px] font-black uppercase tracking-[0.2em]">SOPHGO</div>
                <div className="text-gray-500 font-bold uppercase text-[10px] tracking-[0.2em]">{cv184Ui.heroSeriesLabel}</div>
              </div>
              <h1 className="text-7xl md:text-9xl font-black uppercase mb-8 tracking-tighter text-gray-900 leading-[0.85]">
                {displayName}
              </h1>
              <h2 className="text-2xl md:text-4xl font-bold text-[#4f4398] mb-10 leading-tight tracking-tight max-w-3xl">
                {localizedProduct.tagline}
              </h2>
              <div className="flex flex-wrap gap-6">
                <button 
                  onClick={scrollToFooter}
                  className="bg-[#4f4398] text-white px-12 py-5 font-black uppercase tracking-widest hover:bg-[#3e3479] transition-all flex items-center gap-3 shadow-2xl"
                >
                  {cv184Ui.ctaButton} <ArrowRight size={20} />
                </button>
              </div>
            </div>
          </div>
        </section>

        {isCv184 ? (
          <>
            {/* 2. OVERVIEW & QUICK FEATURES */}
            <section className="py-24 bg-white border-b border-gray-100">
              <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
                  <div className="lg:col-span-5">
                    <h3 className="text-xs font-black uppercase tracking-[0.3em] text-[#4f4398] mb-8">{cv184Ui.productBrief}</h3>
                    <div className="space-y-6 text-gray-500 text-base leading-relaxed text-justify">
                      {localizedProduct.longDescription.map((para, idx) => (
                        <p key={idx}>{para}</p>
                      ))}
                    </div>
                  </div>
                  <div className="lg:col-span-7">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
                      {localizedProduct.detailedFeatures.map((feat, idx) => (
                        <div key={idx} className="flex flex-col items-start">
                          <div className="w-8 h-[2px] bg-[#4f4398] mb-4"></div>
                          <h4 className="font-black uppercase text-sm mb-3 text-gray-900 tracking-tight">{feat.title}</h4>
                          <p className="text-xs text-gray-400 leading-relaxed uppercase">{feat.description}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* 3. CORE ARCHITECTURE - Left Image, Right Features */}
            <section className="py-32 bg-gray-50 border-b border-gray-100">
              <div className="container mx-auto px-6">
                <div className="flex flex-col lg:flex-row gap-20 items-center">
                  <div className="lg:w-3/5">
                    <div className="mb-12">
                      <h3 className="text-5xl font-black uppercase mb-4 tracking-tighter">{cv184Ui.systemArchitecture}</h3>
                      <div className="w-20 h-2 bg-[#4f4398]"></div>
                    </div>
                    <img 
                      src="/CV/CV184-ARCH.svg" 
                      alt={cv184Ui.altArchitecture}
                      className="w-full h-auto"
                    />
                  </div>
                  <div className="lg:w-2/5">
                    <div className="space-y-10">
                      {localizedProduct.highlights.map((item, idx) => (
                        <div key={idx} className="feature-line-item">
                          <div className="text-[10px] font-black text-gray-400 uppercase mb-1">{cv184Ui.keyInnovation(idx + 1)}</div>
                          <div className="font-black text-lg uppercase tracking-tight text-gray-900">{item}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* 4. CORE ENGINE: TPU (Maximum Detail) */}
            {cv184SectionMap['tpu-acceleration'] && (
              <section className="py-32 bg-[#0a0a0a] text-white">
                <div className="container mx-auto px-6">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
                    <div>
                      <div className="text-[#4f4398] tech-mono text-xs font-black uppercase tracking-[0.4em] mb-6">{cv184Ui.tpuEyebrow}</div>
                      <h2 className="text-6xl font-black uppercase mb-8 tracking-tighter">{cv184Ui.tpuTitle}</h2>
                      <p className="text-gray-400 text-lg mb-12 leading-relaxed">
                        {cv184SectionMap['tpu-acceleration'].description}
                      </p>
                      <div className="grid grid-cols-1 gap-6">
                        {cv184SectionMap['tpu-acceleration'].bullets?.map((bullet, idx) => (
                          <div key={idx} className="flex items-start gap-4 p-5 border border-white/10 bg-white/5">
                            <Zap size={18} className="text-[#4f4398] mt-1 shrink-0" fill="currentColor" />
                            <span className="text-sm font-bold uppercase tracking-tight text-gray-300 leading-tight">{bullet}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="bg-white/5 p-12 border border-white/10 rounded-sm">
                      <h4 className="tech-mono text-[10px] font-black text-[#4f4398] uppercase tracking-[0.3em] mb-12 text-center">{cv184Ui.tpuBenchmarks}</h4>
                      <div className="space-y-12">
                        {cv184SectionMap['tpu-acceleration'].stats?.map((stat, idx) => (
                          <div key={idx} className="relative">
                            <div className="flex justify-between items-end mb-4">
                              <span className="text-sm font-black uppercase tracking-widest">{stat.label}</span>
                              <span className="text-3xl font-black text-[#4f4398]">{stat.value}</span>
                            </div>
                            <div className="h-1 w-full bg-white/10">
                              <div 
                                className="h-full bg-[#4f4398]" 
                                style={{ width: stat.label.includes('MobileNet') ? '100%' : stat.label.includes('ResNet') ? '15%' : '12%' }}
                              ></div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            )}

            {/* 5. CORE ENGINE: ISP (Maximum Detail) */}
            {cv184SectionMap['isp-v4'] && (
              <section className="py-32 bg-white">
                <div className="container mx-auto px-6">
                  <div className="max-w-4xl mb-24">
                    <div className="text-[#4f4398] tech-mono text-xs font-black uppercase tracking-[0.4em] mb-6">{cv184Ui.ispEyebrow}</div>
                    <h2 className="text-6xl font-black uppercase mb-8 tracking-tighter">{cv184Ui.ispTitle}</h2>
                    <p className="text-gray-500 text-xl leading-relaxed font-medium">
                      {cv184SectionMap['isp-v4'].description}
                    </p>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-12 gap-y-16">
                    {cv184SectionMap['isp-v4'].bullets?.map((bullet, idx) => {
                      const [title, desc] = bullet.split(':');
                      return (
                        <div key={idx} className="border-t-2 border-gray-100 pt-8">
                          <div className="text-[#4f4398] font-black tech-mono text-xs mb-4">{cv184Ui.ispEngineLabel(idx + 1)}</div>
                          <h4 className="font-black uppercase text-lg mb-4 tracking-tight">{title}</h4>
                          <p className="text-xs text-gray-400 leading-relaxed uppercase tracking-widest">{desc || title}</p>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </section>
            )}

            {/* 6. TURNKEY ALGORITHM LIBRARY */}
            {cv184SectionMap['algorithms'] && (
              <section className="py-32 bg-gray-50 border-y border-gray-100">
                <div className="container mx-auto px-6">
                  <div className="flex flex-col lg:flex-row gap-20">
                    <div className="lg:w-1/3">
                      <h3 className="text-5xl font-black uppercase mb-8 tracking-tighter leading-[0.9]">{cv184Ui.aiLibraryTitle}</h3>
                      <p className="text-gray-500 mb-10 text-lg leading-relaxed">
                        {cv184SectionMap['algorithms'].description}
                      </p>
                      <div className="grid grid-cols-2 gap-4">
                         {cv184Ui.aiCategories.map((cat, i) => (
                           <div key={i} className="bg-white p-4 border border-gray-200 text-center">
                              <div className="text-[10px] font-black uppercase tracking-widest text-[#4f4398]">{cat}</div>
                           </div>
                         ))}
                      </div>
                    </div>
                    <div className="lg:w-2/3">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {cv184SectionMap['algorithms'].bullets?.map((algo, idx) => (
                          <div key={idx} className="flex items-center gap-4 px-6 py-4 bg-white border border-gray-100">
                            <div className="w-1.5 h-1.5 bg-[#4f4398] flex-shrink-0"></div>
                            <span className="text-[11px] font-black uppercase tracking-widest text-gray-700">{algo}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            )}

            {/* 7. VARIANT COMPARISON */}
            {cv184SectionMap['variant-comparison'] && (
              <section className="py-32 bg-white">
                <div className="container mx-auto px-6">
                  <h3 className="text-5xl font-black uppercase mb-16 tracking-tighter text-center">{cv184Ui.variantComparison}</h3>
                  <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse min-w-[900px]">
                      <thead>
                        <tr className="bg-gray-100 border-y-2 border-gray-900">
                          {cv184SectionMap['variant-comparison'].table?.headers.map((h, i) => (
                            <th key={i} className="p-6 text-[10px] font-black uppercase tracking-[0.2em] text-gray-900">{h}</th>
                          ))}
                        </tr>
                      </thead>
                      <tbody className="text-[11px] font-bold uppercase tracking-widest">
                        {cv184SectionMap['variant-comparison'].table?.rows.map((row, rIdx) => (
                          <tr key={rIdx} className="border-b border-gray-100">
                            {row.map((cell, cIdx) => (
                              <td key={cIdx} className={`p-6 ${cIdx === 0 ? 'bg-gray-50/50 font-black text-gray-900' : 'text-gray-500'}`}>
                                {cell}
                              </td>
                            ))}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </section>
            )}

            {/* 8. APPLICATION GRID (No hover/click) */}
            <section className="py-32 bg-white border-b border-gray-100">
              <div className="container mx-auto px-6">
                <h3 className="text-center text-xs font-black uppercase tracking-[0.5em] text-[#4f4398] mb-20">{cv184Ui.deploymentScenarios}</h3>
                <div className="grid grid-cols-3 lg:grid-cols-6 gap-x-8 gap-y-12">
                  {localizedProduct.applications.map((app, idx) => (
                    <div key={idx} className="flex flex-col">
                      <div className="aspect-[4/5] overflow-hidden mb-6">
                        <img 
                          src={app.image} 
                          alt={app.title} 
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <h4 className="font-black text-[10px] uppercase tracking-widest text-gray-900 leading-tight">{app.title}</h4>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* 9. DATASHEET (Complete Parameters) */}
            <section className="py-32 bg-white">
              <div className="container mx-auto px-6">
                <div className="flex items-baseline justify-between mb-20 border-b-4 border-gray-900 pb-8">
                  <h3 className="text-7xl font-black uppercase tracking-tighter">{cv184Ui.datasheetTitle}</h3>
                  <div className="text-gray-400 font-bold uppercase tracking-widest text-xs">{cv184Ui.datasheetVersion}</div>
                </div>

                <div className="border border-gray-200 overflow-hidden">
                  <table className="w-full text-left border-collapse">
                    <tbody>
                      {Array.from(new Set(localizedProduct.specs.map(s => s.category))).map((cat, catIdx) => (
                        <React.Fragment key={catIdx}>
                          <tr className="bg-gray-50 border-b border-gray-200">
                            <td colSpan={2} className="py-6 px-10 text-[10px] font-black uppercase tracking-[0.5em] text-[#4f4398]">
                              {cat}
                            </td>
                          </tr>
                          {localizedProduct.specs.filter(s => s.category === cat).map((spec, specIdx) => (
                            <tr key={specIdx} className="border-b border-gray-100 last:border-b-0">
                              <td className="py-5 px-10 text-[11px] font-black uppercase tracking-widest text-gray-400 w-1/3 border-r border-gray-100">
                                {spec.key}
                              </td>
                              <td className="py-5 px-10 text-[11px] font-black text-gray-900 tracking-widest uppercase">
                                {spec.value}
                              </td>
                            </tr>
                          ))}
                        </React.Fragment>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </section>

            {/* 10. CTA */}
            <section className="py-40 bg-[#0a0a0a] text-center relative overflow-hidden">
              <div className="absolute inset-0 opacity-20">
                <img src="/CV/cvitek-banner.webp" className="w-full h-full object-cover" alt={cv184Ui.altCta} />
              </div>
              <div className="container mx-auto px-6 relative z-10">
                <h2 className="text-6xl md:text-8xl font-black text-white mb-12 uppercase tracking-tighter leading-none">
                  <Trans
                    i18nKey="products.sophgo.cv184.ui.ctaTitle"
                    values={{ name: displayName }}
                    defaults="Build with <0>{{name}}</0>"
                    components={[<span key="cta-highlight" className="text-[#4f4398]" />]}
                  />
                </h2>
                <button
                  onClick={scrollToFooter}
                  className="inline-block bg-white text-gray-900 px-20 py-6 font-black uppercase tracking-[0.3em] hover:bg-[#4f4398] hover:text-white transition-all text-sm shadow-2xl"
                >
                  {cv184Ui.ctaButton}
                </button>
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
