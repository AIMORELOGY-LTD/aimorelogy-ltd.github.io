
export interface ChipSpec {
    category: string;
    key: string;
    value: string;
}

export interface ChipApplication {
    title: string;
    image: string;
}

export interface ChipFeature {
    title: string;
    description: string;
}

export interface ChipFAQ {
    question: string;
    answer: string;
}
  
export interface ChipData {
    id: string;
    name: string;
    tagline: string;
    series: 'TPU' | 'RISC-V' | 'VISION' | 'WROOM';
    description: string; // Short description for cards
    longDescription: string[]; // Array of paragraphs for the main page content (SEO)
    highlights: string[];
    specs: ChipSpec[];
    applications: ChipApplication[];
    detailedFeatures: ChipFeature[]; // For the features section
    faqs: ChipFAQ[]; // For the FAQ section
    metaTitle?: string;
    metaDescription?: string;
}
  
export const SOPHGO_CHIPS: Record<string, ChipData> = {
    // --- TPU Series ---
    'bm1688': {
      id: 'bm1688',
      name: 'BM1688',
      series: 'TPU',
      tagline: 'Highly Integrated Edge AI SOC',
      description: 'A high-integration SoC featuring an 8-core ARM architecture combined with a powerful TPU.',
      longDescription: [
          "The BM1688 is a highly integrated System-on-Chip (SoC) designed to bring server-class AI performance to compact edge devices. Integrating an 8-core ARM Cortex-A53 CPU running at 1.6GHz with a 16 TOPS (INT8) TPU, it offers an exceptional balance of general computing and AI acceleration.",
          "A standout feature of the BM1688 is its comprehensive vision processing capabilities. It includes a hardwired engine for Dewarp and Stitching, making it the perfect choice for panoramic cameras, drones, and surround-view systems. The chip supports efficient processing of Large Language Models (LLMs) and Vision-Language Models (VLMs) like ChatGLM2 and Llama2 at the edge.",
          "With support for dual screens, multiple sensor inputs, and a rich set of interfaces including CAN BUS and USB3, the BM1688 is versatile enough for robotics, smart NVRs, and advanced industrial tablets."
      ],
      highlights: [
        '16 TOPS INT8 Computing Power',
        '8-Core ARM CA53 @ 1.6GHz',
        'Hardwired Dewarp + Stitch Engine for panoramic views',
        'Supports LLM & VLM (e.g., ChatGLM2, Llama2)'
      ],
      detailedFeatures: [
          { title: "Hardwired Vision Engine", description: "Dedicated hardware blocks for Dewarping (fisheye correction) and Stitching (panoramic view), reducing CPU/TPU load." },
          { title: "Generative AI Support", description: "Optimized for running quantized versions of popular LLMs and Generative AI models locally." },
          { title: "High-Bandwidth Memory", description: "Supports LPDDR4/4x with high bandwidth utilization, ensuring data flows smoothly to the NPU." }
      ],
      specs: [
        { category: 'Processor', key: 'CPU', value: '8x ARM Cortex-A53 @ 1.6GHz' },
        { category: 'TPU', key: 'Performance', value: '16 TOPS INT8' },
        { category: 'Memory', key: 'Support', value: 'LPDDR4/4x 2x32bit' },
        { category: 'ISP', key: 'Resolution', value: '2x 8Mp30 / 16x 2Mp30 Decode' },
        { category: 'Connectivity', key: 'I/O', value: 'USB3.0, PCIe, SATA, CAN FD' }
      ],
      applications: [
        { title: 'Smart Cameras', image: 'https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&q=80&w=400' },
        { title: 'Robotics', image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=400' },
        { title: 'Edge Computing Boxes', image: 'https://images.unsplash.com/photo-1558494949-ef526b0042a0?auto=format&fit=crop&q=80&w=400' },
        { title: 'Drones', image: 'https://images.unsplash.com/photo-1506947411487-a56738267384?auto=format&fit=crop&q=80&w=400' }
      ],
      faqs: [
          { question: "Can BM1688 run Llama 2?", answer: "Yes, BM1688 supports running quantized versions (INT4/INT8) of Llama 2 and other similar sized LLMs efficiently." },
          { question: "Does it support multiple camera inputs?", answer: "Yes, it supports extensive MIPI inputs and has a dedicated ISP capable of handling multiple streams for surround view applications." }
      ]
    },
  
    // --- Vision Series (CV) ---
    'cv186ah': {
      id: 'cv186ah',
      name: 'CV186AH',
      series: 'VISION',
      tagline: 'High-End Intelligent Vision Processor',
      description: 'Top-tier SoC for professional security and smart edge applications.',
      longDescription: [
          "The CV186AH is the flagship of the Vision Series, designed for high-end intelligent video applications. It packs a powerful 6-core ARM Cortex-A53 CPU and a 7.2 TOPS TPU, providing ample performance for complex multi-stream video analytics, such as facial recognition in crowded scenes or trajectory tracking in traffic management.",
          "Supporting up to 4K resolution processing and advanced ISP features like 360-degree panoramic stitching and dewarping, the CV186AH is tailored for next-generation smart cameras and robotics. Its dual-eye depth computing capability makes it an excellent choice for obstacle avoidance systems in autonomous machines.",
          "With hardware-level security and industrial-grade reliability, the CV186AH ensures secure and stable operation in critical deployments."
      ],
      highlights: [
        '7.2 TOPS @ INT8 / 4T (Depth Learning)',
        '6-Core ARM Cortex-A53 @ 1.6GHz',
        'Supports 360° Panoramic Stitching & Dewarping',
        'Dual Eye Depth Computing'
      ],
      detailedFeatures: [
          { title: "High-Performance Compute", description: "6-core architecture plus 7.2 TOPS AI ensures smooth handling of 4K streams and heavy AI models." },
          { title: "Advanced Vision", description: "Integrated depth computing engine and stitching hardware for immersive visual applications." }
      ],
      specs: [
        { category: 'TPU', key: 'Power', value: '7.2 TOPS' },
        { category: 'CPU', key: 'Cores', value: '6x A53 @ 1.6GHz' },
        { category: 'ISP', key: 'Max', value: '4K Resolution' },
        { category: 'Process', key: 'Package', value: 'BGA' }
      ],
      applications: [
        { title: 'High-end Multi-lens IPC', image: 'https://images.unsplash.com/photo-1557862921-37829c790f19?auto=format&fit=crop&q=80&w=400' },
        { title: 'Robot Platform', image: 'https://images.unsplash.com/photo-1531746790731-6c087fecd65a?auto=format&fit=crop&q=80&w=400' },
        { title: 'Binocular Depth Camera', image: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&q=80&w=400' },
        { title: 'Drone Obstacle Avoidance', image: 'https://images.unsplash.com/photo-1527977966376-1c8408f9f108?auto=format&fit=crop&q=80&w=400' }
      ],
      faqs: []
    },
    'cv184': {
      id: 'cv184',
      name: 'CV184',
      series: 'VISION',
      tagline: 'Mid-Range Edge Vision SoC',
      description: 'Balanced performance for consumer and SMB smart cameras.',
      longDescription: [
          "The CV184 strikes a perfect balance between performance and power efficiency for mid-range vision applications. It features a dual-core architecture combining ARM Cortex-A53 and RISC-V C906, alongside a 1.5 TOPS TPU. This configuration is optimized for 4K smart cameras, offering high-resolution encoding (H.265/H.264) and intelligent analytics like human detection and intrusion alerts.",
          "Pin-to-pin compatible with the CV181 series, the CV184 allows manufacturers to scale their product lines easily without redesigning the hardware. Its enhanced ISP ensures superior image quality even in low-light conditions, making it a favorite for consumer security and dashboard cameras."
      ],
      highlights: [
        '1.5 TOPS @ INT8',
        'Dual Core (ARM A53 + RISC-V C906)',
        'Supports 4K Encoding',
        'Pin-to-Pin compatible with CV181 series'
      ],
      detailedFeatures: [
          { title: "4K Encoding", description: "Efficient H.265/H.264 encoding at 4K resolution ensures high-quality video storage and streaming." },
          { title: "Seamless Upgrade", description: "Hardware compatibility with CV181 simplifies product roadmap upgrades." }
      ],
      specs: [
        { category: 'TPU', key: 'Power', value: '1.5 TOPS' },
        { category: 'CPU', key: 'Primary', value: 'A53 @ 1.1GHz' },
        { category: 'Encoding', key: 'Video', value: 'H.265/H.264 4K' },
        { category: 'Memory', key: 'SiP', value: '512Mb - 4Gb DDR' }
      ],
      applications: [
        { title: '4K IPC', image: 'https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&q=80&w=400' },
        { title: 'Drone', image: 'https://images.unsplash.com/photo-1473968512647-3e447244af8f?auto=format&fit=crop&q=80&w=400' },
        { title: 'Edge Large Model Robot', image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=400' },
        { title: 'Access Control', image: 'https://images.unsplash.com/photo-1555449767-e92592a8385e?auto=format&fit=crop&q=80&w=400' },
        { title: 'Scanning Pen', image: 'https://images.unsplash.com/photo-1456735190827-d1261f7add50?auto=format&fit=crop&q=80&w=400' },
        { title: 'Dash Cam', image: 'https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?auto=format&fit=crop&q=80&w=400' },
        { title: 'Ultra-HD Night Vision', image: 'https://images.unsplash.com/photo-1510253687831-0f982d7862fc?auto=format&fit=crop&q=80&w=400' }
      ],
      faqs: []
    },
    'cv181': {
      id: 'cv181',
      name: 'CV181',
      series: 'VISION',
      tagline: 'RISC-V Consumer Vision SoC',
      description: 'Cost-effective solution for massive consumer AIoT deployments.',
      longDescription: [
          "The CV181 is a highly efficient SoC tailored for the mass consumer AIoT market. Leveraging a dual-core design (ARM A53 + RISC-V C906), it provides 0.5 to 1.0 TOPS of AI performance, which is perfect for endpoint intelligence such as face detection in smart locks or object recognition in home cameras.",
          "With support for 5MP ISP and extremely low power consumption, the CV181 enables battery-operated devices to run longer while maintaining smart features. Its cost-effective packaging and high integration level make it a go-to choice for high-volume manufacturing."
      ],
      highlights: [
        '0.5 ~ 1.0 TOPS @ INT8',
        'Dual Core (A53 + C906)',
        'Support 5M Pixel ISP',
        'Low Power Consumption'
      ],
      detailedFeatures: [
          { title: "Battery Friendly", description: "Architecture optimization for low power consumption, ideal for wireless cameras and doorbells." },
          { title: "Cost Effective", description: "High integration reduces BOM cost for mass-market consumer electronics." }
      ],
      specs: [
        { category: 'TPU', key: 'AI', value: '0.5 - 1.0 TOPS' },
        { category: 'ISP', key: 'Res', value: '5MP @ 30fps' },
        { category: 'Package', key: 'Type', value: 'QFN / BGA' }
      ],
      applications: [
        { title: 'Smart Home', image: 'https://images.unsplash.com/photo-1558002038-109177381792?auto=format&fit=crop&q=80&w=400' },
        { title: 'Face Recognition Gate', image: 'https://images.unsplash.com/photo-1563720223521-47963b6528d2?auto=format&fit=crop&q=80&w=400' },
        { title: 'Scanning Pen', image: 'https://images.unsplash.com/photo-1542435503-956c469947f6?auto=format&fit=crop&q=80&w=400' },
        { title: 'Streaming Rearview Mirror', image: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&q=80&w=400' },
        { title: 'Campus Camera', image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&q=80&w=400' },
        { title: 'HD Night Vision', image: 'https://images.unsplash.com/photo-1504386106331-3e4e71712b38?auto=format&fit=crop&q=80&w=400' }
      ],
      faqs: []
    },
    'cv180': {
      id: 'cv180',
      name: 'CV180',
      series: 'VISION',
      tagline: 'Entry-Level RISC-V Vision SoC',
      description: 'The most accessible smart vision chip, perfect for battery-powered devices and basic AIoT nodes.',
      longDescription: [
          "The CV180 is the entry-level champion of the Vision Series, built on a pure RISC-V C906 core. It is designed for applications where power efficiency and cost are paramount. With 0.2 TOPS of AI performance, it handles basic visual tasks like motion detection and simple classification with ease.",
          "Available in a cost-optimized QFN package, the CV180 allows for ultra-compact PCB designs. It is the engine behind millions of battery-powered cameras, smart toys, and basic biometric devices, democratizing access to visual intelligence."
      ],
      highlights: [
        '0.2 TOPS @ INT8',
        'Single Core RISC-V C906 @ 1.0GHz',
        'Ultra Low Power',
        'QFN Package (Cost optimized)'
      ],
      detailedFeatures: [
          { title: "Pure RISC-V", description: "Efficient single-core C906 implementation for streamlined embedded development." },
          { title: "Ultra Compact", description: "Small footprint QFN package enables tiny device form factors." }
      ],
      specs: [
        { category: 'TPU', key: 'AI', value: '0.2 TOPS' },
        { category: 'CPU', key: 'Core', value: 'RISC-V C906' },
        { category: 'Video', key: 'Enc', value: '5MP / 4MP' }
      ],
      applications: [
        { title: 'Home IPC', image: 'https://images.unsplash.com/photo-1599388168270-4f59cb03597c?auto=format&fit=crop&q=80&w=400' },
        { title: 'Smart Doorbell', image: 'https://images.unsplash.com/photo-1593142959928-8671404c0df6?auto=format&fit=crop&q=80&w=400' },
        { title: 'Cat-eye Door Lock', image: 'https://images.unsplash.com/photo-1558002038-109177381792?auto=format&fit=crop&q=80&w=400' },
        { title: 'Dash Cam', image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=400' },
        { title: 'Baby Monitor', image: 'https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?auto=format&fit=crop&q=80&w=400' },
        { title: 'Kids Camera', image: 'https://images.unsplash.com/photo-1519638831568-d9897f54ed69?auto=format&fit=crop&q=80&w=400' }
      ],
      faqs: []
    }
};
