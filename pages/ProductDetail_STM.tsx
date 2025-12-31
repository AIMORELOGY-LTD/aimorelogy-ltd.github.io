
import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { 
  CheckCircle, 
  ArrowRight, 
  Cpu, 
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
  HelpCircle,
  ChevronRight
} from 'lucide-react';
import { STM32_CHIPS } from '../data/stData';
import { ChipData, ChipDetailSection } from '../data/sophgoData';
import { RoutePath } from '../types';
import { useLang, withLang } from '../i18n-routing';
import { useTranslation } from 'react-i18next';
import Seo from '../components/Seo';

const ProductDetail_STM: React.FC = () => {
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
    const normalizedModelId = modelId?.toLowerCase();
    if (normalizedModelId && STM32_CHIPS[normalizedModelId]) {
      setProduct(STM32_CHIPS[normalizedModelId]);
    } else {
      setProduct(null);
    }
    window.scrollTo(0, 0);
  }, [modelId]);

  const localizedProduct = React.useMemo(() => {
    if (!product) return null;
    const baseKey = `products.stm32.${product.id}`;
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
    const displayName = localizedProduct.name;
    const metaTitle = localizedProduct.metaTitle
      || t('products.common.metaTitle', { name: displayName, tagline: localizedProduct.tagline });
    const metaDescription = localizedProduct.metaDescription || localizedProduct.description;
    const image = localizedProduct.applications?.[0]?.image || '/icon.webp';
    const jsonLd = {
      '@context': 'https://schema.org',
      '@type': 'Product',
      name: `STM32 ${displayName}`,
      description: metaDescription,
      brand: { '@type': 'Brand', name: 'STMicroelectronics' },
      manufacturer: 'STMicroelectronics',
      sku: displayName
    };
    return { metaTitle, metaDescription, image, jsonLd };
  }, [localizedProduct, t]);

  const displayName = localizedProduct?.name || '';
  const coreLabelMap: Record<string, string> = {
    stm32f405: 'ARM Cortex-M4',
    stm32f722: 'ARM Cortex-M7',
    stm32f767: 'ARM Cortex-M7'
  };
  const coreLabel = localizedProduct ? (coreLabelMap[localizedProduct.id] || 'ARM Cortex-M') : 'ARM Cortex-M';
  
  const archDiagramMap: Record<string, string> = {
    'stm32f405': '/STM/en.bd-stm32f405xx.avif',
    'stm32f722': '/STM/en.bd_stm32f722xe_512k.avif',
    'stm32f767': '/STM/en.bd_stm32f767xg_1mb.avif'
  };

  const currentArchDiagram = localizedProduct ? archDiagramMap[localizedProduct.id] : null;

  const detailSections = localizedProduct?.detailSections || [];
  const sectionMap = detailSections.reduce((acc, section) => {
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

      <style>{`
        .stm-detail {
          --brand-purple: #4f4398;
        }
        .stm-detail h1, .stm-detail h2, .stm-detail h3, .stm-detail h4 {
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
      `}</style>

      <div className="stm-detail bg-white text-gray-900">
        
        {/* 1. HERO SECTION */}
        <section className="relative min-h-[70vh] flex items-center pt-24 overflow-hidden bg-white">
          <div className="absolute inset-0 z-0">
            <img 
              src="/STM/3.webp" 
              className="w-full h-full object-cover opacity-70"
              alt="STM32 banner"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-white via-white/70 to-transparent"></div>
          </div>
          
          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-4xl">
              <div className="flex items-center gap-3 mb-8">
                <div className="bg-[#4f4398] text-white px-4 py-1.5 text-[10px] font-black uppercase tracking-[0.2em]">STMICROELECTRONICS</div>
                <div className="text-gray-500 font-bold uppercase text-[10px] tracking-[0.2em]">
                  {t('products.stm32.ui.heroLabel', { defaultValue: 'High Performance ARM Cortex-M' })}
                </div>
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
                  {t('products.stm32.ui.getDocs', { defaultValue: 'Get Technical Docs' })} <ArrowRight size={20} />
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* 2. OVERVIEW & QUICK FEATURES */}
        <section className="py-24 bg-white border-b border-gray-100">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
              <div className="lg:col-span-5">
                <h3 className="text-xs font-black uppercase tracking-[0.3em] text-[#4f4398] mb-8">
                  {t('products.stm32.ui.productBrief', { defaultValue: 'Product Brief' })}
                </h3>
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

        {/* 3. CORE ARCHITECTURE */}
        <section className="py-32 bg-gray-50 border-b border-gray-100">
          <div className="container mx-auto px-6">
            <div className="flex flex-col lg:flex-row gap-20 items-center">
              <div className="lg:w-3/5">
                <div className="mb-12">
                  <h3 className="text-5xl font-black uppercase mb-4 tracking-tighter">
                    {t('products.stm32.ui.systemArchitecture', { defaultValue: 'System Architecture' })}
                  </h3>
                  <div className="w-20 h-2 bg-[#4f4398]"></div>
                </div>
                {currentArchDiagram ? (
                  <img 
                    src={currentArchDiagram} 
                    alt={`${displayName} Architecture Diagram`} 
                    className="w-full h-auto bg-white p-8 rounded-sm shadow-sm"
                  />
                ) : (
                  <div className="w-full aspect-video bg-white border border-gray-200 flex items-center justify-center text-gray-300 font-black uppercase tracking-[0.2em] text-center px-10">
                    {t('products.stm32.ui.architecturePlaceholder', {
                      name: displayName,
                      defaultValue: `${displayName} Architecture Diagram Coming Soon`
                    })}
                  </div>
                )}
              </div>
              <div className="lg:w-2/5">
                <div className="space-y-10">
                  {localizedProduct.highlights.map((item, idx) => (
                    <div key={idx} className="feature-line-item">
                      <div className="text-[10px] font-black text-gray-400 uppercase mb-1">
                        {t('products.stm32.ui.architecturePillar', {
                          index: String(idx + 1).padStart(2, '0'),
                          defaultValue: `Architecture Pillar ${String(idx + 1).padStart(2, '0')}`
                        })}
                      </div>
                      <div className="font-black text-lg uppercase tracking-tight text-gray-900">{item}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 4. PERFORMANCE SECTION */}
        {sectionMap['performance'] && (
          <section className="py-32 bg-[#0a0a0a] text-white">
            <div className="container mx-auto px-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
                <div>
                  <div className="text-[#4f4398] tech-mono text-xs font-black uppercase tracking-[0.4em] mb-6">
                    {t('products.stm32.ui.performanceEyebrow', {
                      core: coreLabel,
                      defaultValue: `${coreLabel} Core`
                    })}
                  </div>
                  <h2 className="text-6xl font-black uppercase mb-8 tracking-tighter">
                    {t('products.stm32.ui.computePowerTitle', { defaultValue: 'Compute Power' })}
                  </h2>
                  <p className="text-gray-400 text-lg mb-12 leading-relaxed">
                    {sectionMap['performance'].description}
                  </p>
                  <div className="grid grid-cols-1 gap-6">
                    {sectionMap['performance'].bullets?.map((bullet, idx) => (
                      <div key={idx} className="flex items-start gap-4 p-5 border border-white/10 bg-white/5">
                        <Zap size={18} className="text-[#4f4398] mt-1 shrink-0" fill="currentColor" />
                        <span className="text-sm font-bold uppercase tracking-tight text-gray-300 leading-tight">{bullet}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="bg-white/5 p-12 border border-white/10 rounded-sm">
                  <h4 className="tech-mono text-[10px] font-black text-[#4f4398] uppercase tracking-[0.3em] mb-12 text-center">
                    {t('products.stm32.ui.benchmarksTitle', { defaultValue: 'Benchmarks' })}
                  </h4>
                  <div className="space-y-12">
                    {sectionMap['performance'].stats?.map((stat, idx) => (
                      <div key={idx} className="relative">
                        <div className="flex justify-between items-end mb-4">
                          <span className="text-sm font-black uppercase tracking-widest">{stat.label}</span>
                          <span className="text-3xl font-black text-[#4f4398]">{stat.value}</span>
                        </div>
                        <div className="h-1 w-full bg-white/10">
                          <div 
                            className="h-full bg-[#4f4398]" 
                            style={{ width: idx < 2 ? '100%' : '60%' }}
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

        {/* 5. ANALOG & CONTROL */}
        {sectionMap['analog-timers'] && (
          <section className="py-32 bg-white border-b border-gray-100">
            <div className="container mx-auto px-6">
              <div className="max-w-4xl mb-24">
                <div className="text-[#4f4398] tech-mono text-xs font-black uppercase tracking-[0.4em] mb-6">
                  {t('products.stm32.ui.peripheralsEyebrow', { defaultValue: 'Integrated Precision Peripherals' })}
                </div>
                <h2 className="text-6xl font-black uppercase mb-8 tracking-tighter">
                  {t('products.stm32.ui.analogControlTitle', { defaultValue: 'Analog & Control' })}
                </h2>
                <p className="text-gray-500 text-xl leading-relaxed font-medium">
                  {sectionMap['analog-timers'].description}
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-12 gap-y-16">
                {sectionMap['analog-timers'].bullets?.map((bullet, idx) => {
                  const [title, desc] = bullet.split(':');
                  const ipIndex = String(idx + 1).padStart(2, '0');
                  return (
                    <div key={idx} className="border-t-2 border-gray-100 pt-8">
                      <div className="text-[#4f4398] font-black tech-mono text-xs mb-4">
                        {t('products.stm32.ui.ipBlockLabel', {
                          index: ipIndex,
                          defaultValue: `IP-BLOCK-${ipIndex}`
                        })}
                      </div>
                      <h4 className="font-black uppercase text-lg mb-4 tracking-tight">{title}</h4>
                      <p className="text-xs text-gray-400 leading-relaxed uppercase tracking-widest">{desc || title}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>
        )}

        {/* 6. VARIANT COMPARISON */}
        {sectionMap['variant-comparison'] && (
          <section className="py-32 bg-gray-50 border-y border-gray-100">
            <div className="container mx-auto px-6">
              <h3 className="text-5xl font-black uppercase mb-16 tracking-tighter text-center">
                {t('products.stm32.ui.variantComparisonTitle', { defaultValue: 'Variant Comparison' })}
              </h3>
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse min-w-[900px]">
                  <thead>
                    <tr className="bg-gray-100 border-y-2 border-gray-900">
                      {sectionMap['variant-comparison'].table?.headers.map((h, i) => (
                        <th key={i} className="p-6 text-[10px] font-black uppercase tracking-[0.2em] text-gray-900">{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="text-[11px] font-bold uppercase tracking-widest">
                    {sectionMap['variant-comparison'].table?.rows.map((row, rIdx) => (
                      <tr key={rIdx} className="border-b border-gray-100 bg-white">
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

        {/* 7. APPLICATIONS */}
        <section className="py-32 bg-white border-b border-gray-100">
          <div className="container mx-auto px-6">
            <h3 className="text-center text-xs font-black uppercase tracking-[0.5em] text-gray-400 mb-20">
              {t('products.stm32.ui.applicationsTitle', { defaultValue: 'Commercial Applications' })}
            </h3>
            <div className="grid grid-cols-3 lg:grid-cols-6 gap-x-8 gap-y-12">
              {localizedProduct.applications.map((app, idx) => (
                <div key={idx} className="flex flex-col">
                  <div className="aspect-[4/5] overflow-hidden mb-6 border border-gray-100">
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

        {/* 8. DATASHEET */}
        <section className="py-32 bg-white">
          <div className="container mx-auto px-6">
            <div className="flex items-baseline justify-between mb-20 border-b-4 border-gray-900 pb-8">
              <h3 className="text-7xl font-black uppercase tracking-tighter">
                {t('products.stm32.ui.datasheetTitle', { defaultValue: 'Datasheet' })}
              </h3>
              <div className="text-gray-400 font-bold uppercase tracking-widest text-xs">
                {t('products.stm32.ui.datasheetSubtitle', { defaultValue: 'Technical Parameters' })}
              </div>
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

        {/* 9. CTA */}
        <section className="py-40 bg-[#0a0a0a] text-center relative overflow-hidden">
          <div className="absolute inset-0 opacity-20">
            <img src="/STM/3.webp" className="w-full h-full object-cover" alt="CTA bg" />
          </div>
          <div className="container mx-auto px-6 relative z-10">
            <h2 className="text-6xl md:text-8xl font-black text-white mb-12 uppercase tracking-tighter leading-none">
              {t('products.stm32.ui.ctaPrefix', { defaultValue: 'Build with' })}{' '}
              <span className="text-[#4f4398]">{displayName}</span>
            </h2>
            <button
              onClick={scrollToFooter}
              className="inline-block bg-white text-gray-900 px-20 py-6 font-black uppercase tracking-[0.3em] hover:bg-[#4f4398] hover:text-white transition-all text-sm shadow-2xl"
            >
              {t('products.stm32.ui.getDocs', { defaultValue: 'Get Technical Docs' })}
            </button>
          </div>
        </section>

      </div>
    </div>
  );
};

export default ProductDetail_STM;
