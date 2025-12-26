
import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { 
  CheckCircle, 
  ArrowRight, 
  Layers, 
  Cpu, 
  ChevronRight,
  Activity
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

      {/* 2. PRODUCT OVERVIEW (SEO Rich Text) */}
      <section className="py-20 bg-white">
          <div className="container mx-auto px-6">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
                  <div className="lg:col-span-2">
                      <h3 className="text-2xl font-black text-gray-900 uppercase mb-6 flex items-center gap-2">
                          <Activity className="text-[#4f4398]" /> {t('products.common.productOverview')}
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

                  {/* Highlights Sidebar */}
                  <div className="bg-gray-50 p-8 border-l-4 border-[#4f4398]">
                      <h4 className="font-bold text-gray-900 uppercase mb-6">{t('products.common.keyHighlights')}</h4>
                      <ul className="space-y-4">
                          {localizedProduct.highlights.map((highlight, idx) => (
                              <li key={idx} className="flex gap-3 text-sm font-medium text-gray-700">
                                  <CheckCircle size={18} className="text-[#76b900] shrink-0" />
                                  {highlight}
                              </li>
                          ))}
                      </ul>
                  </div>
              </div>

              {/* Detailed Features Grid */}
              {!isCv184 && localizedProduct.detailedFeatures && localizedProduct.detailedFeatures.length > 0 && (
                  <div className="mt-20">
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                          {localizedProduct.detailedFeatures.map((feat, idx) => (
                              <div key={idx} className="border border-gray-100 p-8 hover:shadow-lg hover:border-[#4f4398] transition-all rounded-sm group">
                                  <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mb-6 text-[#4f4398] group-hover:bg-[#4f4398] group-hover:text-white transition-colors">
                                      <Cpu size={24} />
                                  </div>
                                  <h4 className="font-bold text-gray-900 uppercase mb-3">{feat.title}</h4>
                                  <p className="text-gray-600 text-sm leading-relaxed">{feat.description}</p>
                              </div>
                          ))}
                      </div>
                  </div>
              )}
          </div>
      </section>

      {/* CV184x Deep Dive Sections */}
      {isCv184 && cv184DetailSections.length > 0 && (
        <>
          {cv184CoreSection && (
            <section className="py-20 bg-white border-y border-gray-200">
              <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
                  <div className="lg:col-span-4">
                    <div className="text-xs uppercase tracking-[0.3em] text-[#4f4398] font-bold mb-3">01</div>
                    <h3 className="text-3xl md:text-4xl font-black uppercase text-gray-900 mb-4">{cv184CoreSection.title}</h3>
                    {cv184CoreSection.description && (
                      <p className="text-gray-600 leading-relaxed">{cv184CoreSection.description}</p>
                    )}
                  </div>
                  <div className="lg:col-span-8">
                    {cv184CoreSection.stats && (
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {cv184CoreSection.stats.map((stat, statIdx) => (
                          <div key={statIdx} className="border border-gray-200 bg-gray-50 p-5 rounded-sm">
                            <div className="text-xs uppercase tracking-wider text-gray-500 font-bold">{stat.label}</div>
                            <div className="text-lg font-semibold text-gray-900 mt-2">{stat.value}</div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                  <div className="lg:col-span-12">
                    <div className="mt-8 border border-gray-200 bg-white rounded-sm overflow-hidden">
                      <img src="/CV/CV184-ARCH.svg" alt="CV184x architecture diagram" className="w-full h-auto" loading="lazy" />
                    </div>
                  </div>
                </div>
              </div>
            </section>
          )}

          {cv184IspSection && (
            <section className="py-20 bg-gray-50 border-b border-gray-200">
              <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
                  <div className="lg:col-span-5">
                    <div className="text-xs uppercase tracking-[0.3em] text-[#4f4398] font-bold mb-3">02</div>
                    <h3 className="text-3xl md:text-4xl font-black uppercase text-gray-900 mb-4">{cv184IspSection.title}</h3>
                    {cv184IspSection.description && (
                      <p className="text-gray-600 leading-relaxed mb-6">{cv184IspSection.description}</p>
                    )}
                    {cv184IspSection.stats && (
                      <div className="flex flex-wrap gap-2">
                        {cv184IspSection.stats.map((stat, statIdx) => (
                          <div key={statIdx} className="px-3 py-2 border border-gray-200 bg-white text-xs uppercase tracking-wider text-gray-600 font-semibold">
                            {stat.label}: {stat.value}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                  <div className="lg:col-span-7">
                    {cv184IspSection.bullets && (
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {cv184IspSection.bullets.map((bullet, bulletIdx) => (
                          <div key={bulletIdx} className="border border-gray-200 bg-white p-5 rounded-sm shadow-sm">
                            <div className="flex items-start gap-3">
                              <CheckCircle size={18} className="text-[#4f4398] shrink-0 mt-0.5" />
                              <p className="text-sm text-gray-700 leading-relaxed">{bullet}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                  {cv184MediaMap['isp-v4'] && (
                    <div className="lg:col-span-12">
                      <div className="mt-8 border border-gray-200 bg-white rounded-sm overflow-hidden">
                        <img src={cv184MediaMap['isp-v4'].src} alt={cv184MediaMap['isp-v4'].alt} className="w-full h-auto" loading="lazy" />
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </section>
          )}

          {cv184TpuSection && (
            <section className="py-20 bg-white border-b border-gray-200">
              <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
                  <div className="lg:col-span-5">
                    <div className="text-xs uppercase tracking-[0.3em] text-[#4f4398] font-bold mb-3">03</div>
                    <h3 className="text-3xl md:text-4xl font-black uppercase text-gray-900 mb-4">{cv184TpuSection.title}</h3>
                    {cv184TpuSection.description && (
                      <p className="text-gray-600 leading-relaxed mb-6">{cv184TpuSection.description}</p>
                    )}
                    {cv184TpuSection.stats && (
                      <div className="space-y-4">
                        {cv184TpuSection.stats.map((stat, statIdx) => (
                          <div key={statIdx}>
                            <div className="flex items-center justify-between text-xs uppercase tracking-wider text-gray-500 font-bold">
                              <span>{stat.label}</span>
                              <span className="text-gray-900">{stat.value}</span>
                            </div>
                            <div className="mt-2 h-2 bg-gray-200">
                              <div
                                className="h-2 bg-[#4f4398]"
                                style={{ width: `${92 - statIdx * 12}%` }}
                              ></div>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                  <div className="lg:col-span-7">
                    {cv184TpuSection.bullets && (
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {cv184TpuSection.bullets.map((bullet, bulletIdx) => (
                          <div key={bulletIdx} className="border border-gray-200 bg-gray-50 p-5 rounded-sm">
                            <div className="flex items-start gap-3">
                              <CheckCircle size={18} className="text-[#76b900] shrink-0 mt-0.5" />
                              <p className="text-sm text-gray-700 leading-relaxed">{bullet}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                  {cv184MediaMap['tpu-acceleration'] && (
                    <div className="lg:col-span-12">
                      <div className="mt-8 border border-gray-200 bg-white rounded-sm overflow-hidden">
                        <img src={cv184MediaMap['tpu-acceleration'].src} alt={cv184MediaMap['tpu-acceleration'].alt} className="w-full h-auto" loading="lazy" />
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </section>
          )}

          {cv184OpenclipSection && (
            <section className="py-20 bg-gray-50 border-b border-gray-200">
              <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
                  <div className="lg:col-span-4">
                    <div className="text-xs uppercase tracking-[0.3em] text-[#4f4398] font-bold mb-3">04</div>
                    <h3 className="text-3xl md:text-4xl font-black uppercase text-gray-900 mb-4">{cv184OpenclipSection.title}</h3>
                    {cv184OpenclipSection.description && (
                      <p className="text-gray-600 leading-relaxed">{cv184OpenclipSection.description}</p>
                    )}
                  </div>
                  <div className="lg:col-span-8">
                    {cv184OpenclipSection.bullets && (
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {cv184OpenclipSection.bullets.map((bullet, bulletIdx) => (
                          <div key={bulletIdx} className="border border-gray-200 bg-white p-6 rounded-sm shadow-sm">
                            <div className="text-xs uppercase tracking-widest text-[#4f4398] font-bold mb-2">Capability</div>
                            <p className="text-sm text-gray-700 leading-relaxed">{bullet}</p>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </section>
          )}

          {cv184EncodingSection && (
            <section className="py-20 bg-[#0f111a] text-white border-b border-gray-900">
              <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
                  <div className="lg:col-span-5">
                    <div className="text-xs uppercase tracking-[0.3em] text-[#9aa4ff] font-bold mb-3">05</div>
                    <h3 className="text-3xl md:text-4xl font-black uppercase mb-4">{cv184EncodingSection.title}</h3>
                    {cv184EncodingSection.description && (
                      <p className="text-gray-300 leading-relaxed">{cv184EncodingSection.description}</p>
                    )}
                  </div>
                  <div className="lg:col-span-7">
                    {cv184EncodingSection.bullets && (
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {cv184EncodingSection.bullets.map((bullet, bulletIdx) => (
                          <div key={bulletIdx} className="border border-white/10 bg-white/5 p-5 rounded-sm">
                            <div className="flex items-start gap-3">
                              <CheckCircle size={18} className="text-[#9aa4ff] shrink-0 mt-0.5" />
                              <p className="text-sm text-gray-200 leading-relaxed">{bullet}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </section>
          )}

          {cv184IoSection && (
            <section className="py-20 bg-white border-b border-gray-200">
              <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
                  <div className="lg:col-span-4">
                    <div className="text-xs uppercase tracking-[0.3em] text-[#4f4398] font-bold mb-3">06</div>
                    <h3 className="text-3xl md:text-4xl font-black uppercase text-gray-900 mb-4">{cv184IoSection.title}</h3>
                    {cv184IoSection.description && (
                      <p className="text-gray-600 leading-relaxed">{cv184IoSection.description}</p>
                    )}
                  </div>
                  <div className="lg:col-span-8">
                    {cv184IoSection.bullets && (
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {cv184IoSection.bullets.map((bullet, bulletIdx) => (
                          <div key={bulletIdx} className="border border-gray-200 bg-gray-50 p-5 rounded-sm">
                            <div className="text-xs uppercase tracking-widest text-gray-500 font-bold mb-2">I/O</div>
                            <p className="text-sm text-gray-700 leading-relaxed">{bullet}</p>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </section>
          )}

          {cv184VariantSection && (
            <section className="py-20 bg-gray-50 border-b border-gray-200">
              <div className="container mx-auto px-6">
                <div className="flex items-center justify-between mb-8">
                  <div>
                    <div className="text-xs uppercase tracking-[0.3em] text-[#4f4398] font-bold mb-3">07</div>
                    <h3 className="text-3xl md:text-4xl font-black uppercase text-gray-900">{cv184VariantSection.title}</h3>
                  </div>
                </div>
                {cv184VariantSection.description && (
                  <p className="text-gray-600 leading-relaxed mb-6 max-w-3xl">{cv184VariantSection.description}</p>
                )}
                {cv184VariantSection.table && (
                  <div className="border border-gray-200 bg-white">
                    <div className="overflow-x-auto">
                      <table className="w-full text-left border-collapse">
                        <thead>
                          <tr>
                            {cv184VariantSection.table.headers.map((header, headerIdx) => (
                              <th key={headerIdx} className="p-3 bg-gray-100 text-xs font-bold uppercase tracking-wider text-gray-500">
                                {header}
                              </th>
                            ))}
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100">
                          {cv184VariantSection.table.rows.map((row, rowIdx) => (
                            <tr key={rowIdx} className="hover:bg-gray-50 transition-colors">
                              {row.map((cell, cellIdx) => (
                                <td key={cellIdx} className="p-3 text-sm text-gray-700">{cell}</td>
                              ))}
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                    {cv184VariantSection.table.note && (
                      <p className="text-xs text-gray-500 px-4 py-3 border-t border-gray-100 leading-relaxed">{cv184VariantSection.table.note}</p>
                    )}
                  </div>
                )}
              </div>
            </section>
          )}

          {cv184SdkSection && (
            <section className="py-20 bg-white border-b border-gray-200">
              <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
                  <div className="lg:col-span-4">
                    <div className="text-xs uppercase tracking-[0.3em] text-[#4f4398] font-bold mb-3">08</div>
                    <h3 className="text-3xl md:text-4xl font-black uppercase text-gray-900 mb-4">{cv184SdkSection.title}</h3>
                  </div>
                  <div className="lg:col-span-8">
                    {cv184SdkSection.bullets && (
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {cv184SdkSection.bullets.map((bullet, bulletIdx) => (
                          <div key={bulletIdx} className="border border-gray-200 bg-gray-50 p-5 rounded-sm">
                            <div className="text-xs uppercase tracking-widest text-gray-500 font-bold mb-2">SDK</div>
                            <p className="text-sm text-gray-700 leading-relaxed">{bullet}</p>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </section>
          )}
        </>
      )}

      {/* 3. SPECIFICATIONS TABLE */}
      <section className="py-20 bg-gray-50 border-y border-gray-200">
          <div className="container mx-auto px-6">
              <h3 className="text-2xl font-black text-gray-900 uppercase mb-10 text-center">{t('products.common.technicalSpecs')}</h3>
              
              <div className="max-w-4xl mx-auto bg-white shadow-sm border border-gray-200">
                  <div className="overflow-x-auto">
                      <table className="w-full text-left border-collapse">
                          <thead>
                              <tr>
                                  <th className="p-4 bg-gray-100 font-bold text-gray-500 uppercase text-xs tracking-wider w-1/3">{t('products.common.specCategory')}</th>
                                  <th className="p-4 bg-gray-100 font-bold text-gray-500 uppercase text-xs tracking-wider w-1/3">{t('products.common.specParameter')}</th>
                                  <th className="p-4 bg-gray-100 font-bold text-gray-500 uppercase text-xs tracking-wider w-1/3">{t('products.common.specValue')}</th>
                              </tr>
                          </thead>
                          <tbody className="divide-y divide-gray-100">
                              {localizedProduct.specs.map((spec, idx) => (
                                  <tr key={idx} className="hover:bg-gray-50 transition-colors">
                                      <td className="p-4 text-xs font-bold text-[#4f4398] uppercase">{spec.category}</td>
                                      <td className="p-4 text-sm font-medium text-gray-900">{spec.key}</td>
                                      <td className="p-4 text-sm text-gray-600">{spec.value}</td>
                                  </tr>
                              ))}
                          </tbody>
                      </table>
                  </div>
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
              <h2 className="text-3xl font-black text-white uppercase mb-4">{t('products.common.ctaTitle', { name: localizedProduct.name })}</h2>
              <p className="text-gray-400 mb-8 max-w-2xl mx-auto">{t('products.common.ctaText', { name: localizedProduct.name })}</p>
              <Link to={withLang(lang, RoutePath.CONTACT)} className="inline-block bg-[#4f4398] text-white px-10 py-4 font-bold uppercase hover:bg-[#5f51b0] transition-colors">
                  {t('products.common.ctaButton')}
              </Link>
          </div>
      </section>
    </div>
  );
};

export default ProductDetail_SOPHGO;
