import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  Cpu,
  ShieldCheck,
  Aperture,
  ArrowRight,
  Monitor,
  HardDrive,
  Share2
} from 'lucide-react';
import { useTranslation } from 'react-i18next';
import Seo from '../components/Seo';
import { useLang, withLang } from '../i18n-routing';

interface FeatureItem {
  title: string;
  description: string;
}

interface StatItem {
  value: string;
  label: string;
}

interface SpecItem {
  label: string;
  val28: string;
  valA8: string;
}

const FALLBACK_FEATURES: FeatureItem[] = [
  {
    title: 'High Energy Efficiency',
    description: '8-core ARM CA53 architecture with INT4/INT8/FP16/BF16/FP32 support for diverse edge AI workloads.'
  },
  {
    title: 'Multichannel Multimedia',
    description: 'Hardware acceleration for 16-channel decode and 10-channel encode, supporting 8K/4K/1080p processing.'
  },
  {
    title: 'Integrated CV Engine',
    description: 'Built-in DPU, stitching, and fisheye dewarp acceleration for real-time computer vision pipelines.'
  },
  {
    title: 'Rich Storage and Memory',
    description: 'Configurations up to 16 GB LPDDR4 and 64 GB eMMC 5.1 for high-throughput, persistent edge inference.'
  },
  {
    title: 'High-Speed I/O Expansion',
    description: 'Dual PCIe Gen3 lanes, dual USB 3.0, dual Gigabit Ethernet, SATA 3.0, and CAN for platform integration.'
  },
  {
    title: 'Industrial Reliability',
    description: 'Compact 260-pin SO-DIMM form factor with optional industrial temperature support down to -40 C.'
  }
];

const FALLBACK_STATS: StatItem[] = [
  { value: '16T', label: 'AI Throughput' },
  { value: '8-Core', label: 'ARM CA53 CPU' },
  { value: '8K/4K', label: 'Video Codec' },
  { value: 'Jetson', label: 'Pin-Compatible' }
];

const FALLBACK_SPECS: SpecItem[] = [
  { label: 'Processor', val28: '8-core ARM CA53', valA8: '8-core ARM CA53' },
  { label: 'Performance', val28: '16-channel HD video intelligent analysis', valA8: '16-channel HD video intelligent analysis' },
  { label: 'Memory', val28: '16GB LPDDR4 64-bit 4266Mbps', valA8: '8GB LPDDR4 64-bit 4266Mbps' },
  { label: 'Storage', val28: '64GB eMMC 5.1', valA8: '32GB eMMC 5.1' },
  { label: 'Video Decoding', val28: 'H.264/H.265: 16x 1080p@30fps, up to 8192x8192', valA8: 'H.264/H.265: 16x 1080p@30fps, up to 8192x8192' },
  { label: 'Video Encoding', val28: 'H.264/H.265: 10x 1080p@30fps, up to 8K', valA8: 'H.264/H.265: 10x 1080p@30fps, up to 8K' },
  { label: 'Image Codec', val28: 'JPEG: 1080p@480fps, up to 32768x32768', valA8: 'JPEG: 1080p@480fps, up to 32768x32768' },
  { label: 'Audio/Video Input', val28: '6x VI, 2x I2S, stereo input/output (optional)', valA8: '6x VI, 2x I2S, stereo input/output (optional)' },
  { label: 'ISP', val28: '2x 8MP@30, 2f-HDR, 3DNR, LDC, 3A, Dehaze', valA8: '2x 8MP@30, 2f-HDR, 3DNR, LDC, 3A, Dehaze' },
  { label: 'CV Acceleration', val28: 'IVE/VPSS + DPU + Stitch + Dewarp', valA8: 'IVE/VPSS + DPU + Stitch + Dewarp' },
  { label: 'PCIe', val28: 'PCIe Gen3: 1x2 + 1x2, RC & EP', valA8: 'PCIe Gen3: 1x2 + 1x2, RC & EP' },
  { label: 'USB', val28: '2x USB 3.0, 2x USB 2.0', valA8: '2x USB 3.0, 2x USB 2.0' },
  { label: 'Network', val28: '2x Gigabit Ethernet', valA8: '2x Gigabit Ethernet' },
  { label: 'Display', val28: '1x HDMI 2.0', valA8: '1x HDMI 2.0' },
  { label: 'Other Interfaces', val28: '2x SATA 3.0, 1x CAN, 1x SD/SDIO, 4x UART, 4x I2C, 6x PWM, 2x SPI, ADC, GPIO', valA8: '2x SATA 3.0, 1x CAN, 1x SD/SDIO, 4x UART, 4x I2C, 6x PWM, 2x SPI, ADC, GPIO' },
  { label: 'Power Supply', val28: 'DC 5V', valA8: 'DC 5V' },
  { label: 'Operating Temperature', val28: '-20 C to +70 C', valA8: 'Standard: -20 C to +70 C; Industrial: -40 C to +85 C' },
  { label: 'Dimensions', val28: '69.6mm x 45mm x 5mm', valA8: '69.6mm x 45mm x 5mm' },
  { label: 'Connector', val28: '260-pin SO-DIMM', valA8: '260-pin SO-DIMM' }
];

const SITE_ORIGIN = 'https://aimorelogy.com';

const SM9_SEO_KEYWORDS: Record<string, string[]> = {
  en: [
    'SM9',
    'SM9 computing module',
    'SM9 16-ENC-28',
    'SM9 16-ENC-A8',
    'AIMORELOGY SM9',
    '16-channel HD video analytics',
    'Jetson pin-compatible module',
    'edge AI computing module',
    'BM1688',
    'BM1688 SM9 architecture'
  ],
  zh: [
    'SM9',
    'SM9 计算模组',
    'SM9 16-ENC-28',
    'SM9 16-ENC-A8',
    'AIMORELOGY SM9',
    '16路高清视频智能分析',
    'Jetson 引脚兼容模组',
    '边缘AI计算模组',
    'BM1688',
    'BM1688 与 SM9 协同架构'
  ],
  ru: [
    'SM9',
    'вычислительный модуль SM9',
    'SM9 16-ENC-28',
    'SM9 16-ENC-A8',
    'AIMORELOGY SM9',
    '16-канальный HD видеоанализ',
    'pin-compatible с Jetson',
    'edge AI модуль',
    'BM1688',
    'архитектура BM1688 и SM9'
  ]
};

const ProductDetail_SM9: React.FC = () => {
  const lang = useLang();
  const { t } = useTranslation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const getArray = React.useCallback(
    <T,>(key: string, fallback: T[]) =>
      t(`products.sm9.${key}`, { returnObjects: true, defaultValue: fallback }) as T[],
    [t]
  );

  const content = React.useMemo(() => {
    return {
      metaTitle: t('products.sm9.metaTitle', {
        defaultValue: 'SM9 Computing Module | 16-CH HD AI Analysis | NVIDIA Jetson Pin-Compatible | AIMORELOGY'
      }),
      metaDescription: t('products.sm9.metaDescription', {
        defaultValue: 'SM9 computing module with 8-core ARM CA53 architecture, 16-channel HD intelligent video analysis, and pin compatibility with NVIDIA Jetson.'
      }),
      categoryLabel: t('products.sm9.categoryLabel', { defaultValue: 'Industrial AI Module' }),
      heroTitleMain: t('products.sm9.heroTitleMain', { defaultValue: 'SM9' }),
      heroTitleAccent: t('products.sm9.heroTitleAccent', { defaultValue: 'SERIES' }),
      tagline: t('products.sm9.tagline', {
        defaultValue: 'Pin-to-pin compatible with NVIDIA Jetson modules, designed for high-density edge AI deployment.'
      }),
      primaryCta: t('products.sm9.primaryCta', { defaultValue: 'Contact Support' }),
      overviewTitle: t('products.sm9.overviewTitle', { defaultValue: 'Enterprise Computing Performance' }),
      longDescription: getArray<string>('longDescription', [
        'SM9 is a high-efficiency 8-core ARM CA53 computing module tailored for 16-channel HD intelligent video analytics at the edge.',
        'The module supports mixed-precision inference, advanced ISP processing, and hardware acceleration for stitching, depth estimation, and dewarp pipelines.',
        'With Jetson pin compatibility and industrial interface density, SM9 enables rapid migration and cost-optimized deployment for AI cameras, robotics, and NVR platforms.'
      ]),
      featuresTitle: t('products.sm9.featuresTitle', { defaultValue: 'Architectural Superiority' }),
      detailedFeatures: getArray<FeatureItem>('detailedFeatures', FALLBACK_FEATURES),
      stats: getArray<StatItem>('stats', FALLBACK_STATS),
      specsTitle: t('products.sm9.specsTitle', { defaultValue: 'Technical Specifications' }),
      specsSubtitle: t('products.sm9.specsSubtitle', {
        defaultValue: 'Comprehensive parameter comparison for SM9 series modules.'
      }),
      specsTableItem: t('products.sm9.specsTableItem', { defaultValue: 'Specification' }),
      specsTableModel28: t('products.sm9.specsTableModel28', { defaultValue: 'SM9 16-ENC-28' }),
      specsTableModelA8: t('products.sm9.specsTableModelA8', { defaultValue: 'SM9 16-ENC-A8' }),
      fullSpecs: getArray<SpecItem>('fullSpecs', FALLBACK_SPECS),
      mobileScrollHint: t('products.sm9.mobileScrollHint', { defaultValue: 'Scroll to view more' }),
      ctaTitlePrefix: t('products.sm9.ctaTitlePrefix', { defaultValue: 'Design Your Next' }),
      ctaTitleAccent: t('products.sm9.ctaTitleAccent', { defaultValue: 'Edge Solution' }),
      ctaPrimary: t('products.sm9.ctaPrimary', { defaultValue: 'Request Evaluation' }),
      ctaSecondary: t('products.sm9.ctaSecondary', { defaultValue: 'Download Docs' }),
      bm1688BridgeBadge: t('products.sm9.bm1688BridgeBadge', {
        defaultValue: 'SM9 + BM1688 Architecture'
      }),
      bm1688BridgeTitle: t('products.sm9.bm1688BridgeTitle', {
        defaultValue: 'Scale from Endpoint Modules to BM1688 Edge Nodes'
      }),
      bm1688BridgeDescription: t('products.sm9.bm1688BridgeDescription', {
        defaultValue:
          'Use SM9 for high-density multi-channel vision inference at the endpoint, then pair with BM1688 for higher-compute aggregation, model consolidation, and cross-device orchestration. This topology keeps deployment paths consistent from camera-side modules to edge servers.'
      }),
      bm1688BridgeButton: t('products.sm9.bm1688BridgeButton', { defaultValue: 'Explore BM1688' }),
      heroImageAlt: t('products.sm9.heroImageAlt', { defaultValue: 'SM9 computing module hero image' }),
      overviewImageAlt: t('products.sm9.overviewImageAlt', { defaultValue: 'SM9 product overview image' })
    };
  }, [getArray, t]);

  const bm1688Path = React.useMemo(() => withLang(lang, '/products/sophgo/bm1688/'), [lang]);

  const seo = React.useMemo(() => {
    const keywords = (SM9_SEO_KEYWORDS[lang] || SM9_SEO_KEYWORDS.en).join(', ');
    const sm9Url = `${SITE_ORIGIN}${withLang(lang, '/products/computing-module/sm9/')}`;
    const bm1688Url = `${SITE_ORIGIN}${bm1688Path}`;
    const jsonLd = {
      '@context': 'https://schema.org',
      '@type': 'Product',
      name: 'SM9',
      brand: { '@type': 'Brand', name: 'AIMORELOGY' },
      manufacturer: { '@type': 'Organization', name: 'AIMORELOGY' },
      description: content.metaDescription,
      sku: 'SM9',
      model: 'SM9 16-ENC-28 / SM9 16-ENC-A8',
      category:
        lang === 'zh'
          ? '边缘AI计算模组'
          : lang === 'ru'
          ? 'Вычислительный edge AI модуль'
          : 'Edge AI computing module',
      url: sm9Url,
      additionalProperty: [
        { '@type': 'PropertyValue', name: 'AI Throughput', value: '16T' },
        { '@type': 'PropertyValue', name: 'CPU', value: '8-core ARM CA53' },
        { '@type': 'PropertyValue', name: 'Video Analytics', value: '16-channel HD intelligent analysis' },
        { '@type': 'PropertyValue', name: 'Form Factor', value: '260-pin SO-DIMM' }
      ],
      isRelatedTo: {
        '@type': 'Product',
        name: 'SOPHGO BM1688',
        url: bm1688Url
      }
    };
    return { keywords, jsonLd };
  }, [bm1688Path, content.metaDescription, lang]);

  return (
    <div className="bg-[#111111] text-white min-h-screen font-sans overflow-x-hidden">
      <Seo
        title={content.metaTitle}
        description={content.metaDescription}
        image="/products/SM9/banner-sm.webp"
        keywords={seo.keywords}
        type="product"
        jsonLd={seo.jsonLd}
      />

      <section className="relative h-[70vh] md:h-[80vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/products/SM9/banner-sm.webp"
            alt={content.heroImageAlt}
            className="w-full h-full object-cover opacity-100 scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-[#111111]/15 to-transparent" />
        </div>

        <div className="container mx-auto px-6 relative z-10 pt-24 md:pt-20">
          <div className="max-w-4xl">
            <div className="flex items-center space-x-3 mb-6 md:mb-8">
              <div className="w-8 md:w-12 h-[2px] bg-[#76b900]" />
              <span className="text-[10px] md:text-xs font-black uppercase tracking-[0.2em] md:tracking-[0.3em] text-[#76b900]">
                {content.categoryLabel}
              </span>
            </div>
            <h1 className="text-5xl md:text-9xl font-black mb-6 md:mb-8 uppercase leading-[0.9] md:leading-[0.85] tracking-tighter drop-shadow-2xl">
              {content.heroTitleMain} <br className="hidden md:block" />
              <span className="text-[#4f4398]">{content.heroTitleAccent}</span>
            </h1>
            <p className="text-lg md:text-3xl text-gray-100 font-light leading-snug mb-8 md:mb-12 max-w-2xl drop-shadow-lg">
              {content.tagline}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 md:gap-6">
              <button className="px-8 md:px-10 py-4 md:py-5 bg-[#4f4398] hover:bg-[#5f52b3] transition-all font-black uppercase tracking-widest text-xs md:text-sm flex items-center justify-center group shadow-2xl">
                {content.primaryCta}
                <ArrowRight className="ml-3 w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-2 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#1a1a1a] py-8 md:py-12 border-y border-white/5">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 text-left">
            {content.stats.map((stat, idx) => (
              <div key={idx} className="space-y-1 md:space-y-2 border-l-2 border-[#4f4398] pl-4 md:pl-6">
                <div className="text-2xl md:text-4xl font-black text-white uppercase leading-none">{stat.value}</div>
                <div className="text-[8px] md:text-[10px] font-bold text-gray-500 uppercase tracking-widest">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-32 relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-24 items-center">
            <div className="order-2 lg:order-1">
              <div className="relative group">
                <div className="absolute -inset-6 md:-inset-10 bg-[#4f4398]/10 blur-[60px] md:blur-[120px] rounded-full opacity-50 group-hover:opacity-100 transition-opacity" />
                <img
                  src="/products/SM9/SM9-1.webp"
                  alt={content.overviewImageAlt}
                  className="w-full h-auto relative z-10 shadow-2xl rounded-sm"
                />
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl md:text-5xl font-black mb-6 md:mb-10 uppercase tracking-tighter underline decoration-[#76b900] decoration-4 md:decoration-8 underline-offset-4 md:underline-offset-8">
                {content.overviewTitle}
              </h2>
              <div className="space-y-4 md:space-y-8">
                {content.longDescription.map((paragraph, idx) => (
                  <p key={idx} className="text-gray-400 text-base md:text-xl leading-relaxed font-light">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-[#161616] border-y border-white/10">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-8 items-center">
            <div>
              <div className="text-[11px] md:text-xs uppercase tracking-[0.25em] text-[#76b900] font-black mb-4">
                {content.bm1688BridgeBadge}
              </div>
              <h2 className="text-2xl md:text-4xl font-black uppercase tracking-tight mb-4">
                {content.bm1688BridgeTitle}
              </h2>
              <p className="text-gray-400 text-sm md:text-lg leading-relaxed max-w-3xl">
                {content.bm1688BridgeDescription}
              </p>
            </div>
            <div className="flex lg:justify-end">
              <Link
                to={bm1688Path}
                className="inline-flex items-center justify-center px-8 py-4 border border-[#4f4398] text-white hover:bg-[#4f4398] transition-all font-black uppercase tracking-[0.15em] text-xs md:text-sm whitespace-nowrap"
              >
                {content.bm1688BridgeButton}
                <ArrowRight className="ml-3 w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-32 bg-black/50">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-6xl font-black uppercase mb-12 md:mb-24 tracking-tighter">{content.featuresTitle}</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/5 border border-white/5">
            {content.detailedFeatures.map((feature, index) => (
              <div key={index} className="bg-[#111111] p-8 md:p-16 text-left hover:bg-[#151515] transition-colors group">
                <div className="mb-6 md:mb-10 text-[#4f4398] group-hover:text-[#76b900] transition-colors">
                  {index === 0 && <Cpu className="w-8 h-8 md:w-12 md:h-12" strokeWidth={1} />}
                  {index === 1 && <Monitor className="w-8 h-8 md:w-12 md:h-12" strokeWidth={1} />}
                  {index === 2 && <Aperture className="w-8 h-8 md:w-12 md:h-12" strokeWidth={1} />}
                  {index === 3 && <HardDrive className="w-8 h-8 md:w-12 md:h-12" strokeWidth={1} />}
                  {index === 4 && <Share2 className="w-8 h-8 md:w-12 md:h-12" strokeWidth={1} />}
                  {index === 5 && <ShieldCheck className="w-8 h-8 md:w-12 md:h-12" strokeWidth={1} />}
                </div>
                <h3 className="text-xl md:text-2xl font-bold mb-4 md:mb-6 uppercase tracking-tight">{feature.title}</h3>
                <p className="text-gray-500 font-light leading-relaxed text-sm md:text-lg italic">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-32 overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="mb-12 md:mb-20 text-center lg:text-left">
            <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tight mb-4">{content.specsTitle}</h2>
            <p className="text-gray-500 font-light max-w-xl text-sm md:text-base">{content.specsSubtitle}</p>
          </div>

          <div className="overflow-x-auto border border-white/10 rounded-sm scrollbar-thin scrollbar-thumb-gray-700">
            <table className="w-full border-collapse min-w-[700px]">
              <thead>
                <tr className="bg-[#1a1a1a] text-left">
                  <th className="p-4 md:p-8 uppercase text-[10px] md:text-xs font-black border-b border-white/10 tracking-widest text-[#76b900] w-1/4">
                    {content.specsTableItem}
                  </th>
                  <th className="p-4 md:p-8 uppercase text-[10px] md:text-xs font-black border-b border-white/10 tracking-widest w-1/3">
                    {content.specsTableModel28}
                  </th>
                  <th className="p-4 md:p-8 uppercase text-[10px] md:text-xs font-black border-b border-white/10 tracking-widest w-1/3 text-gray-400">
                    {content.specsTableModelA8}
                  </th>
                </tr>
              </thead>
              <tbody className="text-gray-400 font-light">
                {content.fullSpecs.map((spec, idx) => (
                  <tr key={idx} className="border-b border-white/5 hover:bg-white/[0.02] transition-colors text-xs md:text-sm">
                    <td className="p-4 md:p-8 text-white font-bold bg-white/[0.01] uppercase tracking-wider">{spec.label}</td>
                    <td className="p-4 md:p-8 leading-relaxed text-gray-200">{spec.val28}</td>
                    <td className="p-4 md:p-8 leading-relaxed">{spec.valA8}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-4 flex items-center justify-center lg:hidden text-[10px] text-gray-500 uppercase tracking-widest animate-pulse">
            <ArrowRight size={12} className="mr-2" /> {content.mobileScrollHint} <ArrowRight size={12} className="ml-2" />
          </div>
        </div>
      </section>

      <section className="py-24 md:py-40 bg-[#111111] relative border-t border-white/5">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-8xl font-black uppercase mb-8 md:mb-12 tracking-tighter leading-tight md:leading-none">
              {content.ctaTitlePrefix} <span className="text-[#4f4398]">{content.ctaTitleAccent}</span>
            </h2>
            <div className="flex flex-col sm:flex-row justify-center gap-4 md:gap-8 mt-10 md:mt-16">
              <button className="px-8 md:px-12 py-4 md:py-6 bg-[#4f4398] hover:bg-[#5f52b3] transition-all font-black uppercase tracking-widest text-xs md:text-sm flex items-center justify-center">
                {content.ctaPrimary}
              </button>
              <button className="px-8 md:px-12 py-4 md:py-6 bg-transparent border-2 border-white/20 hover:border-white transition-all font-black uppercase tracking-widest text-xs md:text-sm flex items-center justify-center">
                {content.ctaSecondary}
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductDetail_SM9;
