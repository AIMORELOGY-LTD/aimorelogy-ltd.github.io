
import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { 
  CheckCircle, 
  ArrowRight, 
  Layers, 
  Cpu, 
  ChevronRight
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
    const metaTitle = localizedProduct.metaTitle
      || t('products.common.metaTitle', { name: localizedProduct.name, tagline: localizedProduct.tagline });
    const metaDescription = localizedProduct.metaDescription || localizedProduct.description;
    const image = localizedProduct.applications?.[0]?.image || '/icon.webp';
    const jsonLd = {
      '@context': 'https://schema.org',
      '@type': 'Product',
      name: `SOPHGO ${localizedProduct.name}`,
      description: metaDescription,
      brand: { '@type': 'Brand', name: 'SOPHGO' },
      manufacturer: 'SOPHGO',
      sku: localizedProduct.name
    };
    return { metaTitle, metaDescription, image, jsonLd };
  }, [localizedProduct, t]);

  const isCv184 = localizedProduct?.id === 'cv184';
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
              <span className="text-[#4f4398]">SOPHGO {localizedProduct.name}</span>
           </div>

           <div className="flex flex-col lg:flex-row gap-12 items-center">
              <div className="lg:w-1/2">
                  <div className="flex items-center gap-3 mb-4">
                      <div className="bg-[#4f4398] text-white px-2 py-1 text-xs font-bold uppercase">SOPHGO</div>
                      <div className="text-gray-500 font-bold tracking-widest text-sm uppercase">{t('products.common.series', { series: localizedProduct.series })}</div>
                  </div>
                  
                  <h1 className="text-5xl md:text-7xl font-black text-gray-900 tracking-tighter uppercase mb-4 leading-none">
                    {localizedProduct.name}
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
                              <div className="text-white text-4xl font-black tracking-widest">{localizedProduct.name}</div>
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
          @import url('https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:wght@600;700;800&family=IBM+Plex+Sans:wght@400;500;600&display=swap');

          .cv184-shell {
            --accent: #4f4398;
            --accent-strong: #2f2567;
            --muted: #6b6b76;
            --line: rgba(15, 15, 24, 0.12);
            font-family: 'IBM Plex Sans', sans-serif;
          }

          .cv184-shell .cv184-display {
            font-family: 'Bricolage Grotesque', sans-serif;
            letter-spacing: -0.02em;
          }

          .cv184-shell .cv184-kicker {
            font-size: 0.72rem;
            letter-spacing: 0.32em;
            text-transform: uppercase;
            font-weight: 700;
            color: var(--accent);
          }

          .cv184-grid {
            position: absolute;
            inset: 0;
            pointer-events: none;
            background-image:
              radial-gradient(circle at 18% 12%, rgba(79, 67, 152, 0.18), transparent 45%),
              radial-gradient(circle at 82% 0%, rgba(79, 67, 152, 0.12), transparent 40%),
              linear-gradient(to right, rgba(79, 67, 152, 0.08) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(79, 67, 152, 0.08) 1px, transparent 1px);
            background-size: 520px 520px, 520px 520px, 80px 80px, 80px 80px;
            opacity: 0.45;
          }

          .cv184-shell .cv184-rail {
            border-left: 2px solid var(--accent);
            padding-left: 1.5rem;
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

          .cv184-shell .cv184-chipline {
            height: 2px;
            width: 120px;
            background: linear-gradient(90deg, var(--accent), transparent);
          }

          .cv184-shell .cv184-number {
            position: absolute;
            top: -1.5rem;
            right: 0;
            font-family: 'Bricolage Grotesque', sans-serif;
            font-weight: 800;
            font-size: clamp(3rem, 10vw, 7rem);
            letter-spacing: -0.04em;
            color: rgba(79, 67, 152, 0.08);
            pointer-events: none;
          }

          .cv184-shell .cv184-frame {
            position: relative;
            padding: 12px 0;
          }

          .cv184-shell .cv184-frame::before,
          .cv184-shell .cv184-frame::after {
            content: '';
            position: absolute;
            left: 0;
            right: 0;
            height: 1px;
            background: linear-gradient(90deg, transparent, var(--accent), transparent);
          }

          .cv184-shell .cv184-frame::before {
            top: 0;
          }

          .cv184-shell .cv184-frame::after {
            bottom: 0;
          }

          .cv184-shell .cv184-section {
            position: relative;
            padding-top: 2.5rem;
            border-top: 1px solid var(--line);
          }
        `}</style>
      )}

      {isCv184 && cv184MediaMap['tpu-acceleration'] && (
        <section className="py-14 bg-white cv184-shell relative">
          <div className="cv184-grid" aria-hidden="true"></div>
          <div className="container mx-auto px-6 relative">
            <div className="cv184-frame">
              <img
                src={cv184MediaMap['tpu-acceleration'].src}
                alt={cv184MediaMap['tpu-acceleration'].alt}
                className="w-full h-auto object-cover"
                loading="lazy"
              />
            </div>
            <div className="mt-4 flex items-center justify-between text-[10px] uppercase tracking-[0.35em] text-gray-500">
              <span>TPU</span>
              <span>{localizedProduct.name}</span>
            </div>
          </div>
        </section>
      )}

      {/* 2. PRODUCT OVERVIEW (SEO Rich Text) */}
      {isCv184 ? (
        <section className="py-24 bg-white cv184-shell relative">
          <div className="cv184-grid" aria-hidden="true"></div>
          <div className="container mx-auto px-6 relative">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
              <div className="lg:col-span-7">
                <div className="cv184-kicker mb-3">
                  {t('products.common.productOverview')}
                </div>
                <h3 className="cv184-display text-4xl md:text-5xl font-black uppercase text-gray-900 mb-6 leading-none">
                  {localizedProduct.tagline}
                </h3>
                <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
                  {localizedProduct.longDescription && localizedProduct.longDescription.length > 0 ? (
                    localizedProduct.longDescription.map((para, idx) => (
                      <p key={idx}>{para}</p>
                    ))
                  ) : (
                    <p>{localizedProduct.description}</p>
                  )}
                </div>
                <div className="mt-10 flex items-center gap-6">
                  <div className="cv184-chipline"></div>
                  <span className="text-xs uppercase tracking-[0.35em] text-gray-400">
                    {t('products.common.series', { series: localizedProduct.series })}
                  </span>
                </div>
              </div>
              <div className="lg:col-span-5">
                <div className="cv184-rail">
                  <div className="text-xs uppercase tracking-[0.3em] text-gray-500 font-bold mb-4">
                    {t('products.common.keyHighlights')}
                  </div>
                  <ul className="space-y-4">
                    {localizedProduct.highlights.map((highlight, idx) => (
                      <li key={idx} className="cv184-bullet text-sm text-gray-700 leading-relaxed">
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {cv184CoreSection?.stats && cv184CoreSection.stats.length > 0 && (
              <div className="mt-12 border-t border-gray-200 pt-8 grid grid-cols-2 md:grid-cols-4 gap-8">
                {cv184CoreSection.stats.map((stat, statIdx) => (
                  <div key={statIdx}>
                    <div className="text-xs uppercase tracking-widest text-gray-500">{stat.label}</div>
                    <div className="mt-2 text-2xl font-black text-gray-900">{stat.value}</div>
                    <div className="mt-3 h-[2px] bg-gradient-to-r from-[#4f4398] to-transparent"></div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>
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

      {isCv184 && cv184DetailSections.length > 0 && (
        <section className="py-24 bg-white cv184-shell relative">
          <div className="cv184-grid opacity-40" aria-hidden="true"></div>
          <div className="container mx-auto px-6 relative">
            <div className="max-w-3xl mb-16">
              <div className="cv184-kicker mb-3">SOPHGO {localizedProduct.name}</div>
              <h2 className="cv184-display text-4xl md:text-5xl font-black uppercase text-gray-900 mb-6 leading-none">
                {localizedProduct.tagline}
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">{localizedProduct.description}</p>
            </div>

            <div className="space-y-16">
              {cv184CoreSection && (
                <div className="cv184-section">
                  <span className="cv184-number">01</span>
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
                    <div className="lg:col-span-4">
                      <div className="text-xs uppercase tracking-[0.3em] text-gray-400 mb-3">Core Architecture</div>
                      <h3 className="cv184-display text-3xl md:text-4xl font-black uppercase text-gray-900 mb-5">{cv184CoreSection.title}</h3>
                      {cv184CoreSection.description && (
                        <p className="text-gray-600 leading-relaxed">{cv184CoreSection.description}</p>
                      )}
                      <div className="mt-6 cv184-chipline"></div>
                    </div>
                    <div className="lg:col-span-8">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        {cv184CoreSection.stats?.map((stat, statIdx) => (
                          <div key={statIdx} className="border-l-2 border-[#4f4398] pl-4">
                            <div className="text-xs uppercase tracking-widest text-gray-500">{stat.label}</div>
                            <div className="mt-2 text-2xl font-black text-gray-900">{stat.value}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="mt-10 cv184-frame">
                    <img src="/CV/CV184-ARCH.svg" alt="CV184x architecture diagram" className="w-full h-auto" loading="lazy" />
                  </div>
                </div>
              )}

              {cv184TpuSection && (
                <div className="cv184-section">
                  <span className="cv184-number">02</span>
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
                    <div className="lg:col-span-4">
                      <div className="text-xs uppercase tracking-[0.3em] text-gray-400 mb-3">TPU Acceleration</div>
                      <h3 className="cv184-display text-3xl md:text-4xl font-black uppercase text-gray-900 mb-5">{cv184TpuSection.title}</h3>
                      {cv184TpuSection.description && (
                        <p className="text-gray-600 leading-relaxed">{cv184TpuSection.description}</p>
                      )}
                    </div>
                    <div className="lg:col-span-8">
                      {cv184TpuSection.stats && (
                        <div className="space-y-4">
                          {cv184TpuSection.stats.map((stat, statIdx) => (
                            <div key={statIdx}>
                              <div className="flex items-center justify-between text-xs uppercase tracking-widest text-gray-500">
                                <span>{stat.label}</span>
                                <span className="text-gray-900">{stat.value}</span>
                              </div>
                              <div className="mt-2 h-1 bg-gray-200">
                                <div
                                  className="h-1 bg-gradient-to-r from-[#4f4398] via-[#7c6fe5] to-[#a99cff]"
                                  style={{ width: `${90 - statIdx * 10}%` }}
                                ></div>
                              </div>
                            </div>
                          ))}
                        </div>
                      )}
                      {cv184TpuSection.bullets && (
                        <ul className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
                          {cv184TpuSection.bullets.map((bullet, bulletIdx) => (
                            <li key={bulletIdx} className="cv184-bullet text-sm text-gray-700 leading-relaxed">
                              <span>{bullet}</span>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </div>
                </div>
              )}

              {cv184IspSection && (
                <div className="cv184-section">
                  <span className="cv184-number">03</span>
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
                    <div className="lg:col-span-4">
                      <div className="text-xs uppercase tracking-[0.3em] text-gray-400 mb-3">Imaging Stack</div>
                      <h3 className="cv184-display text-3xl md:text-4xl font-black uppercase text-gray-900 mb-5">{cv184IspSection.title}</h3>
                      {cv184IspSection.description && (
                        <p className="text-gray-600 leading-relaxed">{cv184IspSection.description}</p>
                      )}
                      {cv184IspSection.stats && (
                        <div className="mt-6 flex flex-wrap gap-4 text-xs uppercase tracking-widest text-gray-500">
                          {cv184IspSection.stats.map((stat, statIdx) => (
                            <span key={statIdx}>{stat.label}: {stat.value}</span>
                          ))}
                        </div>
                      )}
                    </div>
                    <div className="lg:col-span-8">
                      {cv184IspSection.bullets && (
                        <ul className="space-y-4">
                          {cv184IspSection.bullets.map((bullet, bulletIdx) => (
                            <li key={bulletIdx} className="cv184-bullet text-sm text-gray-700 leading-relaxed">
                              <span>{bullet}</span>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </div>
                  {cv184MediaMap['isp-v4'] && (
                    <div className="mt-10 cv184-frame">
                      <img src={cv184MediaMap['isp-v4'].src} alt={cv184MediaMap['isp-v4'].alt} className="w-full h-auto" loading="lazy" />
                    </div>
                  )}
                </div>
              )}

              {cv184OpenclipSection && (
                <div className="cv184-section">
                  <span className="cv184-number">04</span>
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
                    <div className="lg:col-span-4">
                      <div className="text-xs uppercase tracking-[0.3em] text-gray-400 mb-3">Multimodal AI</div>
                      <h3 className="cv184-display text-3xl md:text-4xl font-black uppercase text-gray-900 mb-5">{cv184OpenclipSection.title}</h3>
                      {cv184OpenclipSection.description && (
                        <p className="text-gray-600 leading-relaxed">{cv184OpenclipSection.description}</p>
                      )}
                    </div>
                    <div className="lg:col-span-8">
                      {cv184OpenclipSection.bullets && (
                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          {cv184OpenclipSection.bullets.map((bullet, bulletIdx) => (
                            <li key={bulletIdx} className="cv184-bullet text-sm text-gray-700 leading-relaxed">
                              <span>{bullet}</span>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </div>
                </div>
              )}

              {cv184EncodingSection && (
                <div className="cv184-section">
                  <span className="cv184-number">05</span>
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
                    <div className="lg:col-span-4">
                      <div className="text-xs uppercase tracking-[0.3em] text-gray-400 mb-3">Video Engine</div>
                      <h3 className="cv184-display text-3xl md:text-4xl font-black uppercase text-gray-900 mb-5">{cv184EncodingSection.title}</h3>
                      {cv184EncodingSection.description && (
                        <p className="text-gray-600 leading-relaxed">{cv184EncodingSection.description}</p>
                      )}
                    </div>
                    <div className="lg:col-span-8">
                      {cv184EncodingSpecs.length > 0 && (
                        <div className="border-t border-gray-200 divide-y divide-gray-200">
                          {cv184EncodingSpecs.map((spec, idx) => (
                            <div key={idx} className="py-4">
                              <div className="text-xs uppercase tracking-widest text-gray-500">{spec.category}</div>
                              <div className="text-sm font-semibold text-gray-900 mt-2">{spec.key}</div>
                              <div className="text-xs text-gray-600 mt-2">{spec.value}</div>
                            </div>
                          ))}
                        </div>
                      )}
                      {cv184EncodingSection.bullets && (
                        <ul className="mt-6 space-y-4">
                          {cv184EncodingSection.bullets.map((bullet, bulletIdx) => (
                            <li key={bulletIdx} className="cv184-bullet text-sm text-gray-700 leading-relaxed">
                              <span>{bullet}</span>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </div>
                </div>
              )}

              {cv184IoSection && (
                <div className="cv184-section">
                  <span className="cv184-number">06</span>
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
                    <div className="lg:col-span-4">
                      <div className="text-xs uppercase tracking-[0.3em] text-gray-400 mb-3">I/O Ecosystem</div>
                      <h3 className="cv184-display text-3xl md:text-4xl font-black uppercase text-gray-900 mb-5">{cv184IoSection.title}</h3>
                      {cv184IoSection.description && (
                        <p className="text-gray-600 leading-relaxed">{cv184IoSection.description}</p>
                      )}
                    </div>
                    <div className="lg:col-span-8 space-y-6">
                      {cv184IoSection.bullets && (
                        <ul className="space-y-4">
                          {cv184IoSection.bullets.map((bullet, bulletIdx) => (
                            <li key={bulletIdx} className="cv184-bullet text-sm text-gray-700 leading-relaxed">
                              <span>{bullet}</span>
                            </li>
                          ))}
                        </ul>
                      )}
                      {cv184IoSpecs.length > 0 && (
                        <div className="overflow-x-auto border-t border-gray-200">
                          <table className="w-full text-left border-collapse">
                            <thead>
                              <tr>
                                <th className="py-3 text-xs font-bold uppercase tracking-wider text-gray-500">{t('products.common.specCategory')}</th>
                                <th className="py-3 text-xs font-bold uppercase tracking-wider text-gray-500">{t('products.common.specParameter')}</th>
                                <th className="py-3 text-xs font-bold uppercase tracking-wider text-gray-500">{t('products.common.specValue')}</th>
                              </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-100">
                              {cv184IoSpecs.map((spec, idx) => (
                                <tr key={idx} className="hover:bg-gray-50 transition-colors">
                                  <td className="py-3 text-xs font-bold text-[#4f4398] uppercase">{spec.category}</td>
                                  <td className="py-3 text-sm font-medium text-gray-900">{spec.key}</td>
                                  <td className="py-3 text-sm text-gray-600">{spec.value}</td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              )}

              {cv184VariantSection && (
                <div className="cv184-section">
                  <span className="cv184-number">07</span>
                  <div className="text-xs uppercase tracking-[0.3em] text-gray-400 mb-3">CV184x Lineup</div>
                  <h3 className="cv184-display text-3xl md:text-4xl font-black uppercase text-gray-900 mb-5">{cv184VariantSection.title}</h3>
                  {cv184VariantSection.description && (
                    <p className="text-gray-600 leading-relaxed mb-6 max-w-3xl">{cv184VariantSection.description}</p>
                  )}
                  {cv184VariantSection.table && (
                    <div className="overflow-x-auto border-t border-gray-200">
                      <table className="w-full text-left border-collapse">
                        <thead>
                          <tr>
                            {cv184VariantSection.table.headers.map((header, headerIdx) => (
                              <th key={headerIdx} className="py-3 text-xs font-bold uppercase tracking-wider text-gray-500">
                                {header}
                              </th>
                            ))}
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100">
                          {cv184VariantSection.table.rows.map((row, rowIdx) => (
                            <tr key={rowIdx} className="hover:bg-gray-50 transition-colors">
                              {row.map((cell, cellIdx) => (
                                <td key={cellIdx} className="py-3 text-sm text-gray-700">{cell}</td>
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
              )}

              {cv184SdkSection && (
                <div className="cv184-section">
                  <span className="cv184-number">08</span>
                  <div className="text-xs uppercase tracking-[0.3em] text-gray-400 mb-3">SDK + Compatibility</div>
                  <h3 className="cv184-display text-3xl md:text-4xl font-black uppercase text-gray-900 mb-5">{cv184SdkSection.title}</h3>
                  {cv184SdkSection.bullets && (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {cv184SdkSection.bullets.map((bullet, bulletIdx) => (
                        <div key={bulletIdx} className="flex gap-4">
                          <div className="text-2xl font-black text-gray-200">{String(bulletIdx + 1).padStart(2, '0')}</div>
                          <p className="text-sm text-gray-700 leading-relaxed">{bullet}</p>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        </section>
      )}

      {/* 3. SPECIFICATIONS TABLE */}
      <section className={`py-20 bg-white ${isCv184 ? 'cv184-shell relative' : ''}`}>
        {isCv184 && <div className="cv184-grid opacity-30" aria-hidden="true"></div>}
        <div className="container mx-auto px-6 relative">
          <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
            <h3 className="text-2xl md:text-3xl font-black text-gray-900 uppercase">
              {t('products.common.technicalSpecs')}
            </h3>
            <div className="text-xs uppercase tracking-[0.3em] text-gray-500 font-bold">
              {localizedProduct.name}
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
            {t('products.common.ctaTitle', { name: localizedProduct.name })}
          </h2>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
            {t('products.common.ctaText', { name: localizedProduct.name })}
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
