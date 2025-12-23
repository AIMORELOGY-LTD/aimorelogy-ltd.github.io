
import React, { useEffect, useState } from 'react';
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

const ProductDetail_Espressif: React.FC = () => {
  const { modelId } = useParams<{ modelId: string }>();
  const [product, setProduct] = useState<ChipData | null>(null);

  useEffect(() => {
    if (modelId && ESPRESSIF_CHIPS[modelId.toLowerCase()]) {
      const data = ESPRESSIF_CHIPS[modelId.toLowerCase()];
      setProduct(data);
      document.title = `${data.name} ${data.tagline} | AIMORELOGY`;
    } else {
      setProduct(null);
    }
    window.scrollTo(0, 0);
  }, [modelId]);

  if (!product) {
    return (
      <div className="min-h-screen bg-white flex flex-col items-center justify-center text-gray-900">
        <h1 className="text-4xl font-black mb-4 uppercase">Product Not Found</h1>
        <Link to={RoutePath.HOME} className="text-[#4f4398] font-bold hover:underline">Return Home</Link>
      </div>
    );
  }

  return (
    <div className="bg-white text-gray-900 min-h-screen font-sans selection:bg-[#4f4398] selection:text-white">
      
      {/* 1. HERO SECTION (White Theme) */}
      <section className="pt-16 pb-12 bg-gray-50 border-b border-gray-200">
        <div className="container mx-auto px-6">
           {/* Breadcrumbs */}
           <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-gray-500 mb-8">
              <Link to={RoutePath.HOME} className="hover:text-[#4f4398]">Home</Link>
              <ChevronRight size={12} />
              <span className="text-gray-500">Core Components</span>
              <ChevronRight size={12} />
              <span className="text-[#4f4398]">Espressif {product.name}</span>
           </div>

           <div className="flex flex-col lg:flex-row gap-12 items-center">
              <div className="lg:w-1/2">
                  <div className="flex items-center gap-3 mb-4">
                      <div className="bg-[#4f4398] text-white px-2 py-1 text-xs font-bold uppercase">ESPRESSIF</div>
                      <div className="text-gray-500 font-bold tracking-widest text-sm uppercase">{product.series} SERIES</div>
                  </div>
                  
                  <h1 className="text-5xl md:text-7xl font-black text-gray-900 tracking-tighter uppercase mb-4 leading-none">
                    {product.name}
                  </h1>
                  
                  <h2 className="text-2xl text-[#4f4398] font-bold mb-6 leading-tight">
                    {product.tagline}
                  </h2>
                  
                  <p className="text-gray-600 text-lg mb-8 max-w-xl leading-relaxed">
                     {product.description}
                  </p>

                  <div className="flex flex-wrap gap-4">
                    <button className="bg-[#4f4398] text-white px-8 py-3 font-bold text-sm uppercase hover:bg-[#3e3479] transition-all flex items-center gap-2 shadow-sm">
                        Request Quote <ArrowRight size={16} />
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
                              <div className="text-gray-800 text-2xl font-black tracking-tight">{product.name}</div>
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
                          <Activity className="text-[#4f4398]" /> Product Overview
                      </h3>
                      <div className="prose prose-lg text-gray-600 max-w-none space-y-6">
                          {product.longDescription && product.longDescription.length > 0 ? (
                              product.longDescription.map((para, idx) => (
                                  <p key={idx} className="leading-relaxed">{para}</p>
                              ))
                          ) : (
                              <p>{product.description}</p>
                          )}
                      </div>
                  </div>

                  {/* Highlights Sidebar */}
                  <div className="bg-gray-50 p-8 border-l-4 border-[#4f4398]">
                      <h4 className="font-bold text-gray-900 uppercase mb-6">Key Highlights</h4>
                      <ul className="space-y-4">
                          {product.highlights.map((highlight, idx) => (
                              <li key={idx} className="flex gap-3 text-sm font-medium text-gray-700">
                                  <CheckCircle size={18} className="text-[#76b900] shrink-0" />
                                  {highlight}
                              </li>
                          ))}
                      </ul>
                  </div>
              </div>

              {/* Detailed Features Grid */}
              {product.detailedFeatures && product.detailedFeatures.length > 0 && (
                  <div className="mt-20">
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                          {product.detailedFeatures.map((feat, idx) => (
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
              <h3 className="text-2xl font-black text-gray-900 uppercase mb-10 text-center">Technical Specifications</h3>
              
              <div className="max-w-4xl mx-auto bg-white shadow-sm border border-gray-200">
                  <div className="overflow-x-auto">
                      <table className="w-full text-left border-collapse">
                          <thead>
                              <tr>
                                  <th className="p-4 bg-gray-100 font-bold text-gray-500 uppercase text-xs tracking-wider w-1/3">Category</th>
                                  <th className="p-4 bg-gray-100 font-bold text-gray-500 uppercase text-xs tracking-wider w-1/3">Parameter</th>
                                  <th className="p-4 bg-gray-100 font-bold text-gray-500 uppercase text-xs tracking-wider w-1/3">Value</th>
                              </tr>
                          </thead>
                          <tbody className="divide-y divide-gray-100">
                              {product.specs.map((spec, idx) => (
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
                 <Layers className="text-[#4f4398]" /> Applications
              </h3>
              
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                  {product.applications.map((app, idx) => (
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
              <h2 className="text-3xl font-black text-white uppercase mb-4">Develop Your Solution with {product.name}</h2>
              <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
                  We offer professional system integration and turnkey solutions based on the {product.name} platform. Accelerate your product launch with our engineering expertise.
              </p>
              <Link to={RoutePath.CONTACT} className="inline-block bg-[#4f4398] text-white px-10 py-4 font-bold uppercase hover:bg-[#5f51b0] transition-colors">
                  Get Solution Proposal
              </Link>
          </div>
      </section>
    </div>
  );
};

export default ProductDetail_Espressif;
