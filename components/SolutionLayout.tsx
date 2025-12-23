
import React from 'react';
import { CheckCircle, ArrowRight, BarChart3, Layers, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

interface Feature {
  title: string;
  description: string;
  icon?: React.ReactNode;
}

interface Stat {
  value: string;
  label: string;
}

interface Application {
  title: string;
  image: string;
}

interface SolutionLayoutProps {
  title: string;
  subtitle: string;
  heroImage: string;
  overviewTitle: string;
  overviewContent: string;
  overviewImage: string;
  features: Feature[];
  stats: Stat[];
  applications: Application[];
  ctaTitle: string;
  ctaText: string;
}

const SolutionLayout: React.FC<SolutionLayoutProps> = ({
  title,
  subtitle,
  heroImage,
  overviewTitle,
  overviewContent,
  overviewImage,
  features,
  stats,
  applications,
  ctaTitle,
  ctaText
}) => {
  return (
    <div className="bg-white min-h-screen">
      {/* 1. Hero Section */}
      <section className="relative h-[600px] flex items-center bg-[#111] overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={heroImage} 
            alt={title} 
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/60 to-transparent"></div>
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl animate-fadeIn">
            <h1 className="text-5xl md:text-7xl font-black text-white uppercase mb-6 leading-none">
              {title}
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-8 border-l-4 border-[#4f4398] pl-6 max-w-2xl">
              {subtitle}
            </p>
            <button className="bg-[#4f4398] text-white px-8 py-3 font-bold uppercase hover:bg-[#6a5cc2] transition-colors">
              Request Demo
            </button>
          </div>
        </div>
      </section>

      {/* 2. Overview Section */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2">
              <span className="text-[#4f4398] font-bold uppercase tracking-widest text-sm mb-2 block">Solution Overview</span>
              <h2 className="text-4xl font-black text-gray-900 uppercase mb-6">{overviewTitle}</h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-6 whitespace-pre-line">
                {overviewContent}
              </p>
              <ul className="space-y-3">
                {features.slice(0, 3).map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-gray-800 font-bold">
                     <CheckCircle className="text-[#4f4398]" size={20} /> {feature.title}
                  </li>
                ))}
              </ul>
            </div>
            <div className="lg:w-1/2">
              <img 
                src={overviewImage} 
                alt="Overview" 
                className="w-full rounded-sm shadow-xl border border-gray-100"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 3. Stats Banner */}
      <section className="bg-[#4f4398] py-16 text-white">
        <div className="container mx-auto px-6">
           <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-white/20">
             {stats.map((stat, idx) => (
               <div key={idx} className="px-4">
                 <div className="text-4xl md:text-5xl font-black mb-2">{stat.value}</div>
                 <div className="text-sm font-bold uppercase tracking-wider text-white/80">{stat.label}</div>
               </div>
             ))}
           </div>
        </div>
      </section>

      {/* 4. Features Grid */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-black text-gray-900 uppercase mb-16 text-center">Key Capabilities</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, idx) => (
              <div key={idx} className="bg-white p-8 border border-gray-200 hover:border-[#4f4398] transition-all group shadow-sm">
                <div className="w-12 h-12 bg-gray-50 rounded-full flex items-center justify-center mb-6 group-hover:bg-[#4f4398] transition-colors">
                   {feature.icon ? (
                     <span className="text-[#4f4398] group-hover:text-white transition-colors">{feature.icon}</span>
                   ) : (
                     <Layers className="text-[#4f4398] group-hover:text-white transition-colors" size={24} />
                   )}
                </div>
                <h3 className="text-xl font-bold text-gray-900 uppercase mb-4">{feature.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Applications */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="flex justify-between items-end mb-12">
            <h2 className="text-3xl font-black text-gray-900 uppercase">Industry Applications</h2>
            <Link to="/contact" className="hidden md:flex items-center gap-2 text-[#4f4398] font-bold uppercase text-sm hover:gap-3 transition-all">
              Discuss Your Use Case <ArrowRight size={16} />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
             {applications.map((app, idx) => (
               <div key={idx} className="relative group overflow-hidden h-80 bg-gray-100">
                  <img 
                    src={app.image} 
                    alt={app.title} 
                    className="w-full h-full object-cover" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent flex flex-col justify-end p-8">
                     <h3 className="text-2xl font-bold text-white uppercase">{app.title}</h3>
                  </div>
               </div>
             ))}
          </div>
        </div>
      </section>

      {/* 6. CTA */}
      <section className="py-20 bg-[#111] text-center">
        <div className="container mx-auto px-6">
           <h2 className="text-3xl md:text-4xl font-black text-white uppercase mb-6">{ctaTitle}</h2>
           <p className="text-gray-400 max-w-2xl mx-auto mb-10 text-lg">{ctaText}</p>
           <div className="flex flex-col md:flex-row gap-4 justify-center">
             <Link to="/contact" className="bg-[#4f4398] text-white px-10 py-4 font-bold uppercase hover:bg-[#6a5cc2] transition-colors">
               Contact Sales
             </Link>
             <button className="bg-transparent border border-gray-600 text-white px-10 py-4 font-bold uppercase hover:border-white transition-colors">
               Download Whitepaper
             </button>
           </div>
        </div>
      </section>
    </div>
  );
};

export default SolutionLayout;
