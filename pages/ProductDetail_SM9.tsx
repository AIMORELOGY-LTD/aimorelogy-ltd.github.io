
import React, { useEffect } from 'react';
import { 
  CheckCircle, 
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
  Database,
  Smartphone,
  Check,
  ChevronRight,
  ArrowRight,
  Monitor
} from 'lucide-react';
import { MODULE_DATA } from '../data/moduleData';
import { RoutePath } from '../types';
import { useTranslation } from 'react-i18next';
import Seo from '../components/Seo';

const ProductDetail_SM9: React.FC = () => {
  const { t } = useTranslation();
  const chip = MODULE_DATA['sm9'];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!chip) return null;

  return (
    <div className="bg-[#111111] text-white min-h-screen">
      <Seo 
        title={chip.metaTitle}
        description={chip.metaDescription}
      />

      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="/products/SM9/SM9-cover.jpg" 
            alt="SM9 Computing Module Cover"
            className="w-full h-full object-cover opacity-60 scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#111111] via-[#111111]/80 to-transparent" />
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl">
            <div className="flex items-center space-x-2 mb-6">
              <span className="px-3 py-1 bg-[#4f4398] text-xs font-bold uppercase tracking-widest">Computing Module</span>
              <span className="px-3 py-1 bg-white/10 text-xs font-bold uppercase tracking-widest text-gray-300">New Release</span>
            </div>
            <h1 className="text-6xl md:text-8xl font-black mb-6 uppercase leading-none tracking-tight">
              {chip.name}
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 font-light leading-relaxed mb-10 max-w-2xl border-l-4 border-[#76b900] pl-6">
              {chip.tagline}
            </p>
          </div>
        </div>
      </section>

      {/* Product Overview */}
      <section className="py-24 border-b border-white/5">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-8 uppercase tracking-tight">{t('common.overview', 'Overview')}</h2>
              {chip.longDescription.map((p, i) => (
                <p key={i} className="text-gray-400 text-lg leading-relaxed mb-6 font-light">
                  {p}
                </p>
              ))}
              <div className="flex flex-wrap gap-4 mt-10">
                <button className="px-8 py-4 bg-[#4f4398] hover:bg-[#5f52b3] transition-colors font-bold uppercase tracking-widest flex items-center group">
                  {t('common.contactSales', 'Contact Sales')}
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
            <div className="relative group">
              <div className="absolute -inset-4 bg-[#4f4398]/10 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity" />
              <img 
                src="/products/SM9/SM9-product.jpg" 
                alt="SM9 Product Shot"
                className="w-full h-auto relative z-10 shadow-2xl grayscale-[0.2] hover:grayscale-0 transition-all duration-700"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Key Highlights Grid */}
      <section className="py-24 bg-black/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black uppercase mb-4 tracking-tighter">Core Technologies</h2>
            <div className="w-24 h-1 bg-[#76b900] mx-auto" />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {chip.detailedFeatures.map((feature, index) => (
              <div key={index} className="bg-[#1a1a1a] p-10 border-t-2 border-transparent hover:border-[#4f4398] transition-all duration-300 group">
                <div className="bg-[#222222] w-14 h-14 flex items-center justify-center mb-8 group-hover:bg-[#4f4398] transition-colors">
                  {index === 0 && <Cpu className="w-7 h-7" />}
                  {index === 1 && <Monitor className="w-7 h-7" />}
                  {index === 2 && <Aperture className="w-7 h-7" />}
                  {index === 3 && <Zap className="w-7 h-7" />}
                  {index === 4 && <Box className="w-7 h-7" />}
                  {index === 5 && <ShieldCheck className="w-7 h-7" />}
                </div>
                <h3 className="text-xl font-bold mb-4 uppercase tracking-wide">{feature.title}</h3>
                <p className="text-gray-500 font-light leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table Section */}
      <section className="py-24 border-t border-white/5">
        <div className="container mx-auto px-6">
          <div className="mb-16">
            <h2 className="text-3xl font-bold uppercase tracking-tight mb-4">Product Specifications</h2>
            <p className="text-gray-500 font-light">Detailed technical parameters for different configurations.</p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-[#1a1a1a] text-left">
                  <th className="p-6 uppercase text-sm font-bold border border-white/10 tracking-widest text-[#76b900]">Parameter</th>
                  <th className="p-6 uppercase text-sm font-bold border border-white/10 tracking-widest">SM9 16-ENC-28</th>
                  <th className="p-6 uppercase text-sm font-bold border border-white/10 tracking-widest">SM9 16-ENC-A8</th>
                </tr>
              </thead>
              <tbody className="text-gray-300 font-light">
                <tr>
                  <td className="p-6 border border-white/10 bg-[#151515] font-bold">Processor</td>
                  <td className="p-6 border border-white/10">8-core ARM CA53</td>
                  <td className="p-6 border border-white/10">8-core ARM CA53</td>
                </tr>
                <tr>
                  <td className="p-6 border border-white/10 bg-[#151515] font-bold">Performance</td>
                  <td className="p-6 border border-white/10">16-channel HD Analysis</td>
                  <td className="p-6 border border-white/10">16-channel HD Analysis</td>
                </tr>
                <tr>
                  <td className="p-6 border border-white/10 bg-[#151515] font-bold">Memory</td>
                  <td className="p-6 border border-white/10 text-white font-medium">16GB LPDDR4 4266Mbps</td>
                  <td className="p-6 border border-white/10 text-white font-medium">8GB LPDDR4 4266Mbps</td>
                </tr>
                <tr>
                  <td className="p-6 border border-white/10 bg-[#151515] font-bold">Storage</td>
                  <td className="p-6 border border-white/10">64GB eMMC 5.1</td>
                  <td className="p-6 border border-white/10">32GB eMMC 5.1</td>
                </tr>
                <tr>
                  <td className="p-6 border border-white/10 bg-[#151515] font-bold">Video Decoding</td>
                  <td className="p-6 border border-white/10">16x 1080P@30fps (H.264/H.265)</td>
                  <td className="p-6 border border-white/10">16x 1080P@30fps (H.264/H.265)</td>
                </tr>
                <tr>
                  <td className="p-6 border border-white/10 bg-[#151515] font-bold">Video Encoding</td>
                  <td className="p-6 border border-white/10">10x 1080P@30fps (H.264/H.265)</td>
                  <td className="p-6 border border-white/10">10x 1080P@30fps (H.264/H.265)</td>
                </tr>
                <tr>
                  <td className="p-6 border border-white/10 bg-[#151515] font-bold">Audio/Video Input</td>
                  <td className="p-6 border border-white/10">6x VI; 2x I2S; stereo output</td>
                  <td className="p-6 border border-white/10">6x VI; 2x I2S; stereo output</td>
                </tr>
                <tr>
                  <td className="p-6 border border-white/10 bg-[#151515] font-bold">PCIe / USB</td>
                  <td className="p-6 border border-white/10">PCIe Gen3 (1x2 + 1x2); 2x USB 3.0</td>
                  <td className="p-6 border border-white/10">PCIe Gen3 (1x2 + 1x2); 2x USB 3.0</td>
                </tr>
                <tr>
                  <td className="p-6 border border-white/10 bg-[#151515] font-bold">Operating Temperature</td>
                  <td className="p-6 border border-white/10">-20°C to +70°C</td>
                  <td className="p-6 border border-white/10">Standard: -20°C to +70°C <br/> Industrial: -40°C to +85°C</td>
                </tr>
                <tr>
                  <td className="p-6 border border-white/10 bg-[#151515] font-bold">Dimensions / Connector</td>
                  <td colSpan={2} className="p-6 border border-white/10 text-center uppercase tracking-widest text-xs">
                    69.6mm x 45mm x 5mm | 260-Pin SO-DIMM
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-24 bg-[#4f4398]">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-black uppercase mb-8 leading-tight">
            Ready to Upgrade Your AI Edge?
          </h2>
          <p className="text-xl mb-12 text-white/80 font-light max-w-2xl mx-auto">
            Pin-to-pin compatible with NVIDIA Jetson. Seamless migration, massive cost-performance boost.
          </p>
          <div className="flex flex-col md:flex-row justify-center gap-6">
            <button className="px-10 py-5 bg-black text-white font-bold uppercase tracking-widest hover:bg-black/80 transition-all flex items-center justify-center group">
              Get Quote
              <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="px-10 py-5 bg-transparent border-2 border-white text-white font-bold uppercase tracking-widest hover:bg-white/10 transition-all">
              Download Datasheet
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductDetail_SM9;
