import React from 'react';
import { Scan, Shield, AlertTriangle, Zap, Server, Radio } from 'lucide-react';
import SolutionLayout from '../components/SolutionLayout';
import { useTranslation } from 'react-i18next';

const SolutionDemo: React.FC = () => {
  const { t } = useTranslation();

  return (
    <SolutionLayout
      title={t('solutionDemo.title')}
      subtitle={t('solutionDemo.subtitle')}
      heroImage="https://images.unsplash.com/photo-1579829366248-204fe8413f31?q=80&w=2070&auto=format&fit=crop"
      
      overviewTitle={t('solutionDemo.overview.title')}
      overviewContent={t('solutionDemo.overview.content')}
      overviewImage="https://images.unsplash.com/photo-1473968512647-3e447244af8f?q=80&w=2070&auto=format&fit=crop"
      
      stats={[
        { value: "90%", label: t('solutionDemo.stats.0') },
        { value: "0", label: t('solutionDemo.stats.1') },
        { value: "4K", label: t('solutionDemo.stats.2') },
        { value: "24/7", label: t('solutionDemo.stats.3') }
      ]}
      
      features={[
        {
          title: t('solutionDemo.features.0.title'),
          description: t('solutionDemo.features.0.desc'),
          icon: <Scan size={28} />
        },
        {
          title: t('solutionDemo.features.1.title'),
          description: t('solutionDemo.features.1.desc'),
          icon: <AlertTriangle size={28} />
        },
        {
          title: t('solutionDemo.features.2.title'),
          description: t('solutionDemo.features.2.desc'),
          icon: <Shield size={28} />
        },
        {
          title: t('solutionDemo.features.3.title'),
          description: t('solutionDemo.features.3.desc'),
          icon: <Zap size={28} />
        },
        {
          title: t('solutionDemo.features.4.title'),
          description: t('solutionDemo.features.4.desc'),
          icon: <Server size={28} />
        },
        {
          title: t('solutionDemo.features.5.title'),
          description: t('solutionDemo.features.5.desc'),
          icon: <Radio size={28} />
        }
      ]}
      
      applications={[
        { title: t('solutionDemo.apps.0'), image: "https://images.unsplash.com/photo-1497435334941-8c699ee63e0d?q=80&w=1000&auto=format&fit=crop" },
        { title: t('solutionDemo.apps.1'), image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=1000&auto=format&fit=crop" },
        { title: t('solutionDemo.apps.2'), image: "https://images.unsplash.com/photo-1581093583449-edb5adcea548?q=80&w=1000&auto=format&fit=crop" }
      ]}
      
      ctaTitle={t('solutionDemo.cta.title')}
      ctaText={t('solutionDemo.cta.text')}
    />
  );
};

export default SolutionDemo;
