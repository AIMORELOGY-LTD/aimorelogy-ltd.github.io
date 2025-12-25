
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
      tagline: 'Edge AI SoC for FPV/UAV Vision & Gimbal Tracking',
      metaTitle: 'SOPHGO BM1688 TPU Edge AI SoC for FPV/UAV Vision & Gimbal Tracking | AIMORELOGY',
      metaDescription: 'SOPHGO BM1688 integrates an 8-core ARM CPU and 16 TOPS TPU for FPV/UAV vision, panoramic stitching, gimbal tracking, and edge AI inference.',
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
        { title: 'Smart Cameras', image: '/Smart Cameras.webp' },
        { title: 'Robotics', image: '/Robotics.webp' },
        { title: 'Edge Computing Boxes', image: '/Edge Computing Boxes.webp' },
        { title: 'Drones', image: '/Drones.webp' }
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
      tagline: 'Vision AI SoC for FPV/UAV & Gimbal Applications',
      metaTitle: 'SOPHGO CV186AH Vision AI SoC for FPV/UAV & Gimbal Applications | AIMORELOGY',
      metaDescription: 'SOPHGO CV186AH delivers 7.2 TOPS vision processing for multi-stream 4K analytics, depth computing, and obstacle avoidance in FPV/UAV platforms and gimbals.',
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
        { title: 'High-end Multi-lens IPC', image: '/High-end Multi-lens IPC.webp' },
        { title: 'Robot Platform', image: '/Robot Platform.webp' },
        { title: 'Binocular Depth Camera', image: '/Binocular Depth Camera.webp' },
        { title: 'Drone & Gimbal Applications', image: '/Drone & Gimbal Applications.webp' }
      ],
      faqs: []
    },
    'cv184': {
      id: 'cv184',
      name: 'CV184',
      series: 'VISION',
      tagline: 'Edge Vision SoC for FPV/UAV Vision & Smart Security',
      metaTitle: 'SOPHGO CV184 Edge Vision SoC for FPV/UAV Vision & Smart Security | AIMORELOGY',
      metaDescription: 'SOPHGO CV184 is a 1.5 TOPS dual-core SoC with 4K encoding for FPV/UAV vision, access control, and edge AI cameras.',
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
        { title: '4K IPC', image: '/4K IPC.webp' },
        { title: 'Drones', image: '/Drones.webp' },
        { title: 'Edge Large Model Robot', image: '/Edge Large Model Robot.webp' },
        { title: 'Access Control', image: '/Access Control.webp' },
        { title: 'Scanning Pen', image: '/Scanning Pen.webp' },
        { title: 'Dash Cam', image: '/Dash Cam.webp' },
        { title: 'HD Night Vision', image: '/HD Night Vision.webp' }
      ],
      faqs: []
    },
    'cv181': {
      id: 'cv181',
      name: 'CV181',
      series: 'VISION',
      tagline: 'RISC-V Vision SoC for Lightweight FPV/UAV Sensors',
      metaTitle: 'SOPHGO CV181 RISC-V Vision SoC for Lightweight FPV/UAV Sensors | AIMORELOGY',
      metaDescription: 'SOPHGO CV181 offers 0.5-1.0 TOPS AI at low power for lightweight FPV/UAV sensors, smart home vision, and access control.',
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
        { title: 'Smart Home', image: '/Smart Home.webp' },
        { title: 'Access Control', image: '/Access Control.webp' },
        { title: 'Scanning Pen', image: '/Scanning Pen.webp' },
        { title: 'Streaming Rearview Mirror', image: '/Streaming Rearview Mirror.webp' },
        { title: 'Campus Camera', image: '/Campus Camera.webp' },
        { title: 'HD Night Vision', image: '/HD Night Vision.webp' }
      ],
      faqs: []
    },
    'cv180': {
      id: 'cv180',
      name: 'CV180',
      series: 'VISION',
      tagline: 'Entry RISC-V Vision SoC for Micro FPV/UAV Imaging',
      metaTitle: 'SOPHGO CV180 Entry RISC-V Vision SoC for Micro FPV/UAV Imaging | AIMORELOGY',
      metaDescription: 'SOPHGO CV180 is a 0.2 TOPS RISC-V vision SoC for micro FPV/UAV imaging, battery devices, and cost-sensitive AIoT.',
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
        { title: 'Home IPC', image: '/Home IPC.webp' },
        { title: 'Smart Doorbell', image: '/Smart Doorbell.webp' },
        { title: 'Cat-eye Door Lock', image: '/Cat-eye Door Lock.webp' },
        { title: 'Dash Cam', image: '/Dash Cam.webp' },
        { title: 'Baby Monitor', image: '/Baby Monitor.webp' },
        { title: 'Kids Camera', image: '/Kids Camera.webp' }
      ],
      faqs: []
    }
};
