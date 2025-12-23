
import React from 'react';
import { Scan, Shield, AlertTriangle, Zap, Server, Radio } from 'lucide-react';
import SolutionLayout from '../components/SolutionLayout';

const SolutionDemo: React.FC = () => {
  return (
    <SolutionLayout
      title="Autonomous Inspection"
      subtitle="Transforming industrial maintenance with AI-driven aerial intelligence."
      heroImage="https://images.unsplash.com/photo-1579829366248-204fe8413f31?q=80&w=2070&auto=format&fit=crop"
      
      overviewTitle="The Future of Asset Monitoring"
      overviewContent={`Traditional manual inspection of critical infrastructure is dangerous, costly, and time-consuming. 
      
      AIMORELOGY's Autonomous Inspection solution leverages the CV184XH AI Flight Controller to perform real-time defect detection, thermal analysis, and structural integrity monitoring without human intervention.`}
      overviewImage="https://images.unsplash.com/photo-1473968512647-3e447244af8f?q=80&w=2070&auto=format&fit=crop"
      
      stats={[
        { value: "90%", label: "Faster Inspections" },
        { value: "0", label: "Human Risk" },
        { value: "4K", label: "Resolution Analysis" },
        { value: "24/7", label: "Readiness" }
      ]}
      
      features={[
        {
          title: "Real-time Defect Detection",
          description: "Onboard AI identifies cracks, corrosion, and anomalies instantly using the 1.5 TOPS NPU.",
          icon: <Scan size={28} />
        },
        {
          title: "Thermal Anomaly Analysis",
          description: "Integrated thermal imaging processing to detect overheating components in power lines or solar farms.",
          icon: <AlertTriangle size={28} />
        },
        {
          title: "Obstacle Avoidance",
          description: "Fly close to complex structures with confidence using 360-degree perception algorithms.",
          icon: <Shield size={28} />
        },
        {
          title: "Automated Path Planning",
          description: "Set waypoints and let the system optimize the most efficient inspection route.",
          icon: <Zap size={28} />
        },
        {
          title: "Edge Computing",
          description: "Process data locally on the drone, reducing bandwidth requirements and latency.",
          icon: <Server size={28} />
        },
        {
          title: "Long Range Control",
          description: "Inspect remote assets up to 10KM away with our HD Video Link technology.",
          icon: <Radio size={28} />
        }
      ]}
      
      applications={[
        { title: "Power Grid", image: "https://images.unsplash.com/photo-1497435334941-8c699ee63e0d?q=80&w=1000&auto=format&fit=crop" },
        { title: "Solar Farms", image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=1000&auto=format&fit=crop" },
        { title: "Oil & Gas", image: "https://images.unsplash.com/photo-1581093583449-edb5adcea548?q=80&w=1000&auto=format&fit=crop" }
      ]}
      
      ctaTitle="Ready to automate your inspections?"
      ctaText="Deploy AIMORELOGY's autonomous solutions to reduce costs and improve safety today."
    />
  );
};

export default SolutionDemo;
