
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
          .cv184-shell {
            --accent: #4f4398;
            --accent-strong: #2f2567;
            --muted: #6b6b76;
            --line: rgba(15, 15, 24, 0.12);
          }

          .cv184-shell .cv184-display {
            letter-spacing: -0.01em;
          }

          .cv184-shell .cv184-kicker {
            font-size: 0.72rem;
            letter-spacing: 0.32em;
            text-transform: uppercase;
            font-weight: 700;
            color: var(--accent);
          }

          .cv184-shell .cv184-bullet {
            display: flex;
            gap: 12px;
            align-items: flex-start;
          }

          .cv184-shell .cv184-bullet::before {
            content: '';
            width: 6px;
            height: 6px;
            border-radius: 999px;
            background: var(--accent);
            box-shadow: 0 0 12px rgba(79, 67, 152, 0.45);
            margin-top: 6px;
            flex-shrink: 0;
          }

          .cv184-shell .cv184-card {
            border: 1px solid #e6e8f0;
            transition: all 0.3s ease;
          }

          .cv184-shell .cv184-card:hover {
            border-color: var(--accent);
            box-shadow: 0 10px 30px -12px rgba(79, 67, 152, 0.18);
          }
        `}</style>
      )}

      {isCv184 && cv184MediaMap['tpu-acceleration'] && (
        <section className="py-16 bg-white cv184-shell">
          <div className="container mx-auto px-6">
            <div className="cv184-card rounded-sm bg-gray-50/70 overflow-hidden">
              <img
                src={cv184MediaMap['tpu-acceleration'].src}
                alt={cv184MediaMap['tpu-acceleration'].alt}
                className="w-full h-auto object-cover"
                loading="lazy"
              />
            </div>
            <div className="mt-4 flex items-center justify-between text-[10px] uppercase tracking-[0.35em] text-gray-500">
              <span>TPU</span>
              <span>{displayName}</span>
            </div>
          </div>
        </section>
      )}

      {/* 2. PRODUCT OVERVIEW (SEO Rich Text) */}
      {isCv184 ? (
        <>
          <section className="py-24 bg-white cv184-shell">
            <div className="container mx-auto px-6">
              <div className="max-w-4xl mx-auto text-center">
                <div className="cv184-kicker mb-4">{t('products.common.productOverview')}</div>
                <h3 className="cv184-display text-4xl md:text-5xl font-black uppercase text-gray-900 leading-tight">
                  {localizedProduct.tagline}
                </h3>
                <div className="mt-6 space-y-5 text-gray-600 text-lg leading-relaxed">
                  {cv184IntroText.map((para, idx) => (
                    <p key={idx}>{para}</p>
                  ))}
                </div>
              </div>

              {cv184HeroStats.length > 0 && (
                <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
                  {cv184HeroStats.map((stat, statIdx) => (
                    <div key={statIdx} className="cv184-card rounded-sm bg-white px-6 py-8 text-center">
                      <div className="text-[10px] uppercase tracking-[0.35em] text-gray-400 mb-3">{stat.label}</div>
                      <div className="text-3xl md:text-4xl font-black text-gray-900">{stat.value}</div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </section>

          <section className="py-24 bg-white cv184-shell">
            <div className="container mx-auto px-6">
              {cv184ExtraText.length > 0 && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 text-gray-600 text-base leading-relaxed">
                  {cv184ExtraText.map((para, idx) => (
                    <p key={idx}>{para}</p>
                  ))}
                </div>
              )}

              {cv184FeatureCards.length > 0 && (
                <div className={`${cv184ExtraText.length > 0 ? 'mt-16' : 'mt-6'} grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-14`}>
                  {cv184FeatureCards.map((feat, idx) => {
                    const Icon = highlightIcons[idx % highlightIcons.length];
                    return (
                      <div key={idx}>
                        <div className="w-10 h-10 mb-5 flex items-center justify-center border border-gray-100 text-[#4f4398]">
                          <Icon size={18} />
                        </div>
                        <h4 className="text-sm font-bold uppercase tracking-widest mb-3 text-gray-900">{feat.title}</h4>
                        {feat.description && (
                          <p className="text-sm text-gray-500 leading-relaxed">{feat.description}</p>
                        )}
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          </section>

          {cv184TpuSection && (
            <section className="py-24 bg-white cv184-shell">
              <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
                  <div className="lg:col-span-5">
                    <div className="cv184-kicker mb-4">{cv184TpuSection.title}</div>
                    <h3 className="cv184-display text-3xl md:text-4xl font-black uppercase text-gray-900">{cv184TpuSection.title}</h3>
                    {cv184TpuSection.description && (
                      <p className="mt-6 text-gray-500 text-lg leading-relaxed">{cv184TpuSection.description}</p>
                    )}
                  </div>
                  <div className="lg:col-span-7">
                    {cv184TpuSection.stats && (
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        {cv184TpuSection.stats.map((stat, statIdx) => (
                          <div key={statIdx} className="cv184-card rounded-sm bg-white p-5">
                            <div className="text-[10px] uppercase tracking-[0.35em] text-gray-400 mb-2">{stat.label}</div>
                            <div className="text-lg font-black text-gray-900">{stat.value}</div>
                          </div>
                        ))}
                      </div>
                    )}
                    {cv184TpuSection.bullets && (
                      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
                        {cv184TpuSection.bullets.map((bullet, bulletIdx) => (
                          <div key={bulletIdx} className="cv184-card rounded-sm bg-white p-5">
                            <div className="text-sm text-gray-700 leading-relaxed">{bullet}</div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </section>
          )}

          {cv184IspSection && (
            <section className="py-24 bg-white cv184-shell">
              <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                  <div className="lg:col-span-5">
                    <div className="cv184-card rounded-sm bg-gray-50 p-4">
                      <img
                        src={cv184MediaMap['isp-v4']?.src}
                        alt={cv184MediaMap['isp-v4']?.alt}
                        className="w-full h-auto object-cover"
                        loading="lazy"
                      />
                    </div>
                  </div>
                  <div className="lg:col-span-7">
                    <div className="cv184-kicker mb-4">{cv184IspSection.title}</div>
                    <h3 className="cv184-display text-3xl md:text-4xl font-black uppercase text-gray-900">{cv184IspSection.title}</h3>
                    {cv184IspSection.description && (
                      <p className="mt-6 text-gray-500 text-lg leading-relaxed">{cv184IspSection.description}</p>
                    )}
                    {cv184IspSection.stats && (
                      <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
                        {cv184IspSection.stats.map((stat, statIdx) => (
                          <div key={statIdx} className="cv184-card rounded-sm bg-white p-4">
                            <div className="text-[10px] uppercase tracking-[0.35em] text-gray-400 mb-2">{stat.label}</div>
                            <div className="text-sm font-black text-gray-900">{stat.value}</div>
                          </div>
                        ))}
                      </div>
                    )}
                    {cv184IspSection.bullets && (
                      <ul className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
                        {cv184IspSection.bullets.map((bullet, bulletIdx) => (
                          <li key={bulletIdx} className="flex gap-3 text-sm text-gray-600 leading-relaxed">
                            <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-[#4f4398] flex-shrink-0" />
                            <span>{bullet}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              </div>
            </section>
          )}

          {cv184CoreSection && (
            <section className="py-24 bg-white cv184-shell">
              <div className="container mx-auto px-6">
                <div className="max-w-3xl mx-auto text-center mb-12">
                  <div className="cv184-kicker mb-4">{cv184CoreSection.title}</div>
                  <h3 className="cv184-display text-3xl md:text-4xl font-black uppercase text-gray-900">{cv184CoreSection.title}</h3>
                  {cv184CoreSection.description && (
                    <p className="mt-6 text-gray-500 text-lg leading-relaxed">{cv184CoreSection.description}</p>
                  )}
                </div>
                <div className="cv184-card rounded-sm bg-gray-50 p-6">
                  <img src="/CV/CV184-ARCH.svg" alt="CV184x architecture diagram" className="w-full h-auto" loading="lazy" />
                </div>
                {cv184SecondaryStats.length > 0 && (
                  <div className="mt-12 grid grid-cols-2 md:grid-cols-3 gap-6">
                    {cv184SecondaryStats.map((stat, statIdx) => (
                      <div key={statIdx} className="cv184-card rounded-sm bg-white p-4">
                        <div className="text-[10px] uppercase tracking-[0.35em] text-gray-400">{stat.label}</div>
                        <div className="mt-2 text-lg font-black text-gray-900">{stat.value}</div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </section>
          )}

          {(cv184OpenclipSection || cv184EncodingSection || cv184IoSection) && (
            <section className="py-24 bg-white cv184-shell">
              <div className="container mx-auto px-6">
                <div className="max-w-3xl mx-auto text-center mb-16">
                  <div className="cv184-kicker mb-4">{t('products.common.technicalSpecs')}</div>
                  <h3 className="cv184-display text-3xl md:text-4xl font-black uppercase text-gray-900">
                    {t('products.common.technicalSpecs')}
                  </h3>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  {cv184OpenclipSection && (
                    <div className="cv184-card rounded-sm bg-white p-8 flex flex-col gap-6">
                      <div className="cv184-kicker">{cv184OpenclipSection.title}</div>
                      <h4 className="text-xl font-black uppercase text-gray-900">{cv184OpenclipSection.title}</h4>
                      {cv184OpenclipSection.description && (
                        <p className="text-sm text-gray-600 leading-relaxed">{cv184OpenclipSection.description}</p>
                      )}
                      {cv184OpenclipSection.bullets && (
                        <ul className="space-y-3">
                          {cv184OpenclipSection.bullets.map((bullet, idx) => (
                            <li key={idx} className="cv184-bullet text-sm text-gray-700 leading-relaxed"><span>{bullet}</span></li>
                          ))}
                        </ul>
                      )}
                    </div>
                  )}
                  {cv184EncodingSection && (
                    <div className="cv184-card rounded-sm bg-white p-8 flex flex-col gap-6">
                      <div className="cv184-kicker">{cv184EncodingSection.title}</div>
                      <h4 className="text-xl font-black uppercase text-gray-900">{cv184EncodingSection.title}</h4>
                      {cv184EncodingSection.description && (
                        <p className="text-sm text-gray-600 leading-relaxed">{cv184EncodingSection.description}</p>
                      )}
                      {cv184EncodingSpecs.length > 0 && (
                        <div className="space-y-4 text-sm text-gray-600">
                          {cv184EncodingSpecs.map((spec, idx) => (
                            <div key={idx} className="border-t border-gray-100 pt-4 first:border-t-0 first:pt-0">
                              <div className="text-[10px] uppercase tracking-[0.35em] text-gray-400">{spec.category}</div>
                              <div className="text-sm font-semibold text-gray-900">{spec.key}</div>
                              <div className="text-xs text-gray-500">{spec.value}</div>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  )}
                  {cv184IoSection && (
                    <div className="cv184-card rounded-sm bg-white p-8 flex flex-col gap-6">
                      <div className="cv184-kicker">{cv184IoSection.title}</div>
                      <h4 className="text-xl font-black uppercase text-gray-900">{cv184IoSection.title}</h4>
                      {cv184IoSection.description && (
                        <p className="text-sm text-gray-600 leading-relaxed">{cv184IoSection.description}</p>
                      )}
                      {cv184IoSection.bullets && (
                        <ul className="space-y-3">
                          {cv184IoSection.bullets.map((bullet, idx) => (
                            <li key={idx} className="cv184-bullet text-sm text-gray-700 leading-relaxed"><span>{bullet}</span></li>
                          ))}
                        </ul>
                      )}
                    </div>
                  )}
                </div>
              </div>
            </section>
          )}

          {cv184VariantSection && (
            <section className="py-24 bg-white cv184-shell">
              <div className="container mx-auto px-6">
                <div className="max-w-3xl mx-auto text-center mb-16">
                  <div className="cv184-kicker mb-4">{cv184VariantSection.title}</div>
                  <h3 className="cv184-display text-3xl md:text-4xl font-black uppercase text-gray-900">{cv184VariantSection.title}</h3>
                  {cv184VariantSection.description && (
                    <p className="mt-6 text-gray-500 text-lg leading-relaxed">{cv184VariantSection.description}</p>
                  )}
                </div>
                {cv184VariantSection.table && (
                  <div className="overflow-x-auto -mx-6 px-6">
                    <table className="w-full border-separate border-spacing-0 tabular-nums">
                      <thead>
                        <tr className="bg-gray-50">
                          {cv184VariantSection.table.headers.map((header, headerIdx) => (
                            <th key={headerIdx} className="py-4 px-6 text-[11px] font-bold uppercase tracking-widest text-gray-500 border-b border-gray-200">{header}</th>
                          ))}
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-100">
                        {cv184VariantSection.table.rows.map((row, rowIdx) => (
                          <tr key={rowIdx} className="hover:bg-gray-50/60 transition-colors">
                            {row.map((cell, cellIdx) => (
                              <td key={cellIdx} className="py-4 px-6 text-sm text-gray-700">{cell}</td>
                            ))}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                    {cv184VariantSection.table.note && (
                      <p className="text-xs text-gray-500 mt-3">{cv184VariantSection.table.note}</p>
                    )}
                  </div>
                )}
              </div>
            </section>
          )}

          {cv184SdkSection && (
            <section className="py-24 bg-white cv184-shell">
              <div className="container mx-auto px-6">
                <div className="max-w-3xl mx-auto text-center mb-16">
                  <div className="cv184-kicker mb-4">{cv184SdkSection.title}</div>
                  <h3 className="cv184-display text-3xl md:text-4xl font-black uppercase text-gray-900">{cv184SdkSection.title}</h3>
                </div>
                {cv184SdkSection.bullets && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {cv184SdkSection.bullets.map((bullet, bulletIdx) => (
                      <div key={bulletIdx} className="cv184-card rounded-sm bg-white p-6 flex items-start gap-3">
                        <CheckCircle size={18} className="text-[#4f4398] mt-1" />
                        <div className="text-sm text-gray-700 leading-relaxed">{bullet}</div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </section>
          )}
        </>
      ) : (
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
