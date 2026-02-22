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
  Monitor,
  Layers,
  Wind,
  HardDrive,
  Share2
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

  const fullSpecs = [
    { label: "Processor", val28: "8-core ARM CA53", valA8: "8-core ARM CA53" },
    { label: "Performance", val28: "16-channel HD video intelligent analysis", valA8: "16-channel HD video intelligent analysis" },
    { label: "Memory", val28: "16GB LPDDR4 64bits 4266Mbps", valA8: "8GB LPDDR4 64bits 4266Mbps" },
    { label: "Storage", val28: "64GB eMMC 5.1", valA8: "32GB eMMC 5.1" },
    { label: "Video Decoding", val28: "H.264 & H.265: 16x 1080P@30fps; supports 8192×8192 / 8K / 4K / 1080P / 720P / D1 / CIF", valA8: "H.264 & H.265: 16x 1080P@30fps; supports 8192×8192 / 8K / 4K / 1080P / 720P / D1 / CIF" },
    { label: "Video Encoding", val28: "H.264 & H.265: 10x 1080P@30fps; supports 8K / 4K / 1080P / 720P / D1 / CIF", valA8: "H.264 & H.265: 10x 1080P@30fps; supports 8K / 4K / 1080P / 720P / D1 / CIF" },
    { label: "Image Codec", val28: "JPEG: 1080P@480fps; max 32768×32768", valA8: "JPEG: 1080P@480fps; max 32768×32768" },
    { label: "Audio/Video Input", val28: "6× VI; 2× I2S; 2× stereo input & output (optional)", valA8: "6× VI; 2× I2S; 2× stereo input & output (optional)" },
    { label: "ISP", val28: "2× 8MP@30; 2f-HDR; 3DNR / LDC / 3A / Dehaze", valA8: "2× 8MP@30; 2f-HDR; 3DNR / LDC / 3A / Dehaze" },
    { label: "CV Acceleration", val28: "IVE/VPSS + DPU (stereo depth) + Stitch (image stitching) + Dewarp (fisheye unwrapping)", valA8: "IVE/VPSS + DPU (stereo depth) + Stitch (image stitching) + Dewarp (fisheye unwrapping)" },
    { label: "PCIe", val28: "PCIe Gen3: 1×2 + 1×2; RC & EP", valA8: "PCIe Gen3: 1×2 + 1×2; RC & EP" },
    { label: "USB", val28: "2× USB 3.0; 2× USB 2.0", valA8: "2× USB 3.0; 2× USB 2.0" },
    { label: "Network", val28: "2× GbE", valA8: "2× GbE" },
    { label: "Display", val28: "1× HDMI 2.0", valA8: "1× HDMI 2.0" },
    { label: "Other Interfaces", val28: "2× SATA 3.0; 1× CAN; 1× SD/SDIO; 4× UART; 4× I2C; 6× PWM; 2× SPI; ADC; GPIOs", valA8: "2× SATA 3.0; 1× CAN; 1× SD/SDIO; 4× UART; 4× I2C; 6× PWM; 2× SPI; ADC; GPIOs" },
    { label: "Power Supply", val28: "DC 5V", valA8: "DC 5V" },
    { label: "Operating Temp", val28: "-20°C to +70°C", valA8: "Standard: -20°C to +70°C / Industrial: -40°C to +85°C" },
    { label: "Dimensions", val28: "69.6mm × 45mm × 5mm", valA8: "69.6mm × 45mm × 5mm" },
    { label: "Connector", val28: "260-Pin SO-DIMM", valA8: "260-Pin SO-DIMM" }
  ];

  return (
    <div className="bg-[#111111] text-white min-h-screen font-sans">
      <Seo 
        title={chip.metaTitle}
        description={chip.metaDescription}
      />

      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="/products/SM9/banner-sm.webp" 
            alt="SM9 Computing Module Cover"
            className="w-full h-full object-cover opacity-100 scale-100"
          />
          {/* Transparent Gradient Overlay - Adjusted to be more clear (20% opacity) */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-[#111111]/20 to-transparent" />
        </div>
        
        <div className="container mx-auto px-6 relative z-10 pt-20">
          <div className="max-w-4xl">
            <div className="flex items-center space-x-3 mb-8">
              <div className="w-12 h-[2px] bg-[#76b900]" />
              <span className="text-xs font-black uppercase tracking-[0.3em] text-[#76b900]">Industrial AI Module</span>
            </div>
            <h1 className="text-7xl md:text-9xl font-black mb-8 uppercase leading-[0.85] tracking-tighter drop-shadow-2xl">
              SM9 <br/><span className="text-[#4f4398]">SERIES</span>
            </h1>
            <p className="text-2xl md:text-3xl text-gray-100 font-light leading-snug mb-12 max-w-2xl drop-shadow-lg">
              {chip.tagline}
            </p>
            <div className="flex gap-6">
               <button className="px-10 py-5 bg-[#4f4398] hover:bg-[#5f52b3] transition-all font-black uppercase tracking-widest text-sm flex items-center group shadow-2xl">
                  Contact Support
                  <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-2 transition-transform" />
               </button>
            </div>
          </div>
        </div>
      </section>

      {/* Key Stats Bar */}
      <section className="bg-[#1a1a1a] py-12 border-y border-white/5">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center md:text-left">
            <div className="space-y-2 border-l-2 border-[#4f4398] pl-6">
              <div className="text-4xl font-black text-white uppercase leading-none">16T</div>
              <div className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">AI Analysis</div>
            </div>
            <div className="space-y-2 border-l-2 border-[#4f4398] pl-6">
              <div className="text-4xl font-black text-white uppercase leading-none">8-Core</div>
              <div className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">ARM Architecture</div>
            </div>
            <div className="space-y-2 border-l-2 border-[#4f4398] pl-6">
              <div className="text-4xl font-black text-white uppercase leading-none">8K/4K</div>
              <div className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">Video Codec</div>
            </div>
            <div className="space-y-2 border-l-2 border-[#4f4398] pl-6">
              <div className="text-4xl font-black text-white uppercase leading-none">Jetson</div>
              <div className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">Pin-Compatible</div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Overview Section */}
      <section className="py-32 relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            {/* Overview Image - SM9-1.webp as requested */}
            <div className="order-2 lg:order-1">
              <div className="relative group">
                <div className="absolute -inset-10 bg-[#4f4398]/10 blur-[120px] rounded-full opacity-50 group-hover:opacity-100 transition-opacity" />
                <img 
                  src="/products/SM9/SM9-1.webp" 
                  alt="SM9 Product Overview"
                  className="w-full h-auto relative z-10 shadow-2xl rounded-sm"
                />
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-5xl font-black mb-10 uppercase tracking-tighter underline decoration-[#76b900] decoration-8 underline-offset-8">Enterprise <br/>Computing Performance</h2>
              <div className="space-y-8">
                {chip.longDescription.map((p, i) => (
                  <p key={i} className="text-gray-400 text-xl leading-relaxed font-light">
                    {p}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Grid */}
      <section className="py-32 bg-black/50">
        <div className="container mx-auto px-6 text-center">
           <h2 className="text-4xl md:text-6xl font-black uppercase mb-24 tracking-tighter">Architectural Superiority</h2>
           
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/5 border border-white/5">
              {chip.detailedFeatures.map((feature, index) => (
                <div key={index} className="bg-[#111111] p-16 text-left hover:bg-[#151515] transition-colors group">
                  <div className="mb-10 text-[#4f4398] group-hover:text-[#76b900] transition-colors">
                    {index === 0 && <Cpu size={48} strokeWidth={1} />}
                    {index === 1 && <Monitor size={48} strokeWidth={1} />}
                    {index === 2 && <Aperture size={48} strokeWidth={1} />}
                    {index === 3 && <HardDrive size={48} strokeWidth={1} />}
                    {index === 4 && <Share2 size={48} strokeWidth={1} />}
                    {index === 5 && <ShieldCheck size={48} strokeWidth={1} />}
                  </div>
                  <h3 className="text-2xl font-bold mb-6 uppercase tracking-tight">{feature.title}</h3>
                  <p className="text-gray-500 font-light leading-relaxed text-lg italic">{feature.description}</p>
                </div>
              ))}
           </div>
        </div>
      </section>

      {/* Detailed Full Specification Table */}
      <section className="py-32">
        <div className="container mx-auto px-6">
          <div className="mb-20 text-center lg:text-left">
            <h2 className="text-4xl font-black uppercase tracking-tight mb-4">Complete Technical Specifications</h2>
            <p className="text-gray-500 font-light max-w-xl">Comprehensive parameter comparison for the SM9 series computing modules.</p>
          </div>

          <div className="overflow-x-auto border border-white/10 rounded-sm">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-[#1a1a1a] text-left">
                  <th className="p-8 uppercase text-xs font-black border-b border-white/10 tracking-[0.3em] text-[#76b900] w-1/4">Specification Item</th>
                  <th className="p-8 uppercase text-xs font-black border-b border-white/10 tracking-[0.3em] w-1/3">SM9 16-ENC-28 (High End)</th>
                  <th className="p-8 uppercase text-xs font-black border-b border-white/10 tracking-[0.3em] w-1/3 text-gray-400">SM9 16-ENC-A8</th>
                </tr>
              </thead>
              <tbody className="text-gray-400 font-light">
                {fullSpecs.map((spec, i) => (
                  <tr key={i} className="border-b border-white/5 hover:bg-white/[0.02] transition-colors">
                    <td className="p-8 text-white font-bold text-sm bg-white/[0.01] uppercase tracking-wider">{spec.label}</td>
                    <td className="p-8 text-sm leading-relaxed text-gray-200">{spec.val28}</td>
                    <td className="p-8 text-sm leading-relaxed">{spec.valA8}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-40 bg-[#111111] relative border-t border-white/5">
        <div className="container mx-auto px-6 text-center">
           <div className="max-w-4xl mx-auto">
              <h2 className="text-6xl md:text-8xl font-black uppercase mb-12 tracking-tighter leading-none">
                Design Your <br/>Next <span className="text-[#4f4398]">Edge Solution</span>
              </h2>
              <div className="flex flex-col md:flex-row justify-center gap-8 mt-16">
                 <button className="px-12 py-6 bg-[#4f4398] hover:bg-[#5f52b3] transition-all font-black uppercase tracking-widest text-sm flex items-center justify-center">
                    Request Evaluation Unit
                 </button>
                 <button className="px-12 py-6 bg-transparent border-2 border-white/20 hover:border-white transition-all font-black uppercase tracking-widest text-sm flex items-center justify-center">
                    Download SDK & Docs
                 </button>
              </div>
           </div>
        </div>
      </section>
    </div>
  );
};

export default ProductDetail_SM9;
