
import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { 
  CheckCircle, 
  ArrowRight, 
  Layers, 
  Cpu, 
  ChevronRight,
  Activity,
  Wifi
} from 'lucide-react';
import { ESPRESSIF_CHIPS } from '../data/espressifData';
import { ChipData } from '../data/sophgoData';
import { RoutePath } from '../types';
import { useLang, withLang } from '../i18n-routing';
import { useTranslation } from 'react-i18next';
import Seo from '../components/Seo';

const ESPRESSIF_VARIANTS: string[] = [
  'ESP32-S3',
  'ESP32S3',
  'ESP32-S3-WROOM-1',
  'ESP32-S3-WROOM-1U'
];

const expandHyphenVariants = (variants: string[]) => {
  const entries = new Set<string>();
  for (const variant of variants) {
    if (!variant) continue;
    entries.add(variant);
    const compact = variant.replace(/-/g, '');
    if (compact !== variant) entries.add(compact);
  }
  return Array.from(entries);
};

const buildModuleKeywords = (displayName: string) => {
  const expandedVariants = expandHyphenVariants(ESPRESSIF_VARIANTS);
  return [
    'AIMORELOGY',
    '爱谋科技',
    'Espressif',
    'ESP32',
    ...expandedVariants,
    displayName,
    'Wi-Fi',
    'Bluetooth LE',
    'AI acceleration',
    'IoT',
    'datasheet'
  ].join(', ');
};

const ProductDetail_Espressif: React.FC = () => {
  const lang = useLang();
  const { t } = useTranslation();
  const { modelId } = useParams<{ modelId: string }>();

  // Find product data synchronously for better SEO/Prerendering
  const product = React.useMemo(() => {
    if (!modelId) return null;
    const cleanId = modelId.toLowerCase().replace(/\/+$/, '');
    return ESPRESSIF_CHIPS[cleanId] || null;
  }, [modelId]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [modelId]);

  const localizedProduct = React.useMemo(() => {
    if (!product) return null;
    const baseKey = `products.espressif.${product.id}`;
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
    const expandedVariants = expandHyphenVariants(ESPRESSIF_VARIANTS);
    const keywords = buildModuleKeywords(localizedProduct.name);
    const jsonLd = {
      '@context': 'https://schema.org',
      '@type': 'Product',
      name: `Espressif ${localizedProduct.name}`,
      description: metaDescription,
      alternateName: Array.from(new Set([localizedProduct.name, ...expandedVariants])),
      brand: { '@type': 'Brand', name: 'Espressif' },
      manufacturer: 'Espressif',
      sku: localizedProduct.name
    };
    return { metaTitle, metaDescription, image, jsonLd, keywords };
  }, [localizedProduct, t]);

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
          keywords={seo.keywords}
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
              <span className="text-[#4f4398]">Espressif {localizedProduct.name}</span>
           </div>

           <div className="flex flex-col lg:flex-row gap-12 items-center">
              <div className="lg:w-1/2">
                  <div className="flex items-center gap-3 mb-4">
                      <div className="bg-[#4f4398] text-white px-2 py-1 text-xs font-bold uppercase">ESPRESSIF</div>
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
                       {/* Chip Representation - Adapted for Espressif Module Look but kept clean */}
                       <div className="w-full h-full bg-[#eee] relative overflow-hidden flex flex-col items-center justify-center group border border-gray-300">
                          {/* Metal Shield Texture */}
                          <div className="absolute inset-0 opacity-10" 
                            style={{ 
                                backgroundImage: `linear-gradient(45deg, #000 25%, transparent 25%, transparent 75%, #000 75%, #000)`,
                                backgroundSize: '4px 4px',
                            }}>
                          </div>
                          <div className="relative z-10 text-center">
                              <div className="text-gray-500 text-xs font-bold mb-2 uppercase tracking-wider">Espressif</div>
                              <div className="text-gray-800 text-2xl font-black tracking-tight">{localizedProduct.name}</div>
                              <Wifi className="mx-auto mt-2 text-gray-400" size={24} />
                          </div>
                       </div>
                   </div>
              </div>
           </div>
        </div>
      </section>

      {/* 2. PRODUCT OVERVIEW */}
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
              {localizedProduct.detailedFeatures && localizedProduct.detailedFeatures.length > 0 && (
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

export default ProductDetail_Espressif;
