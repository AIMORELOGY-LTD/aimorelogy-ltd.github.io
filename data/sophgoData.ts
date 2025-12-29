
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

export interface ChipDetailStat {
    label: string;
    value: string;
}

export interface ChipDetailTable {
    headers: string[];
    rows: string[][];
    note?: string;
}

export interface ChipDetailSection {
    id: string;
    title: string;
    description?: string;
    bullets?: string[];
    stats?: ChipDetailStat[];
    table?: ChipDetailTable;
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
    detailSections?: ChipDetailSection[];
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
      tagline: 'Dual-Core Vision SoC with ISP V4.0 & Intra4 Encoding',
      metaTitle: 'SOPHGO CV184x Edge Vision SoC - ISP V4.0, Intra4, TPU | AIMORELOGY',
      metaDescription: 'SOPHGO CV184x features Dual-Core (A53+C906), 1.5 TOPS TPU, ISP V4.0 with 3DNR/DRC, and Intra4 encoding. Pin-to-pin compatible with CV181.',
      description: 'Next-gen edge vision SoC featuring ISP V4.0, Intra4 encoding, and OpenCLIP support.',
      longDescription: [
          "The CV184x series is a high-performance visual processor designed for consumer, carrier, and professional security markets. It features a dual-core architecture (ARM Cortex-A53 @ 1.1GHz + RISC-V C906 @ 800MHz) and a self-developed TPU delivering up to 1.5 TOPS (INT8) with BF16 mixed precision support.",
          "CV184x introduces the new ISP V4.0 engine, offering comprehensive image quality enhancements including starlight-grade 3DNR, digital wide dynamic range (DRC), dehaze, and purple fringe removal (PFR). The improved MCTF algorithm significantly reduces motion smear and spatial noise.",
          "For efficient storage and transmission, the chip supports a self-developed Smart Encoding engine with H.265/H.264/MJPEG support. The unique Intra4 mode improves compression rates and texture retention in complex motion scenes compared to standard encoding.",
          "CV184x is fully compatible with the OpenCLIP multimodal model, enabling generic object detection, image-text retrieval, and zero-shot inference. It comes with a rich library of turnkey algorithms including face detection, person/vehicle tracking, and helmet detection.",
          "Designed for seamless migration, the CV184x series is pin-to-pin compatible with the CV181 series, sharing the same SDK, ISP tuning tools, and deep learning environment."
      ],
      highlights: [
        'Dual-Core: ARM A53 (1.1GHz) + RISC-V C906 (800MHz)',
        'TPU: 1.0~1.5 TOPS @ INT8 / BF16 Mixed Precision',
        'ISP V4.0: 3DNR, DRC, PFR, Dehaze, Distortion Correction',
        'Intra4 Encoding: Higher compression, better texture retention',
        'OpenCLIP Support: Zero-shot, Image-Text Retrieval',
        'Pin-to-Pin Compatible with CV181 Series'
      ],
      detailedFeatures: [
          { title: "ISP V4.0 Engine", description: "Features MCTF-based 3DNR, Digital Wide Dynamic Range (DRC), and Purple Fringe Removal (PFR) for superior low-light and backlit imaging." },
          { title: "Intra4 Encoding", description: "Optimized small-block encoding retains more detail in complex textures and reduces bitrate for efficient storage." },
          { title: "OpenCLIP Multimodal", description: "Supports image-text matching, zero-shot inference, and scenario-specific fine-tuning for versatile AI applications." },
          { title: "High Performance TPU", description: "Up to 1.5 TOPS INT8 performance with BF16 support. Outperforms predecessors in ResNet50 and YOLOv5s benchmarks." },
          { title: "Rich Algorithm Library", description: "Includes Face/Person/Vehicle detection, Helmet check, Gesture recognition, Baby cry detection, and Semantic segmentation." },
          { title: "Seamless Migration", description: "Hardware pin-compatible with CV181. Shared SDK and toolchain ensure low-cost upgrades." }
      ],
      detailSections: [
        {
          id: "tpu-acceleration",
          title: "TPU Performance & Benchmarks",
          description: "The self-developed TPU delivers significant performance gains over previous generations, supporting complex models like ResNet, YOLO, and MobileNet.",
          stats: [
            { label: "ResNet50 v2", value: "38.5 FPS" },
            { label: "YOLO v5s", value: "28.3 FPS" },
            { label: "MobileNet v2", value: "261.9 FPS" },
            { label: "OpenCLIP", value: "4.07 FPS" }
          ],
          bullets: [
            "Benchmark based on CV1842C-P (1.5 TOPS).",
            "ResNet50 v2: +40% vs CV181.",
            "YOLO v5s: +81% vs CV181.",
            "MobileNet v2: +51% vs CV181.",
            "Supports BF16 mixed precision for higher accuracy."
          ]
        },
        {
          id: "isp-v4",
          title: "ISP V4.0 Imaging Pipeline",
          description: "A completely overhauled imaging engine focusing on noise reduction, dynamic range, and color accuracy.",
          bullets: [
            "3DNR (MCTF): Reduces motion smear and fine temporal noise. Superior low-light performance (0.1lux).",
            "DRC (Dynamic Range Compression): Brightens shadows without overexposing highlights. Better than competitors in backlit scenes.",
            "PFR (Purple Fringe Removal): Completely removes purple fringing at object edges without color loss.",
            "Edge Enhancement: Frequency-based sharpening distinguishes between fine textures and strong edges.",
            "Color Noise Suppression: Eliminates low-frequency color noise and edge spill."
          ]
        },
        {
          id: "algorithms",
          title: "Smart AI Algorithms",
          description: "Turnkey solutions for consumer and security scenarios.",
          bullets: [
            "Face: Detection, Recognition, Capture, Keypoints (5 points).",
            "Human/Body: Person detection, Head detection, Skeleton keypoints.",
            "Vehicle: Motor/Non-motor vehicle detection, License plate recognition.",
            "Behavior: Gesture recognition, Fall detection, Passenger flow counting.",
            "Security: Helmet detection, Intrusion detection (Tripwire).",
            "Audio: Baby cry detection, Voice command recognition (e.g., 'Call', 'Screen On').",
            "Other: Cat/Dog detection, Semantic Segmentation."
          ]
        },
        {
          id: "variant-comparison",
          title: "CV184x Variant Comparison",
          description: "Choose the right model for your application requirements.",
          table: {
            headers: ["Feature", "CV1841C", "CV1842C-P", "CV1842H-P", "CV1843H-P"],
            rows: [
              ["Processor", "CA53 1.0GHz + C906 600MHz", "CA53 1.1GHz + C906 800MHz", "CA53 1.1GHz + C906 800MHz", "CA53 1.1GHz + C906 800MHz"],
              ["DDR3 SiP", "1Gb", "2Gb", "2Gb", "4Gb"],
              ["TPU (INT8)", "~1.0 TOPS", "~1.5 TOPS", "~1.5 TOPS", "~1.5 TOPS"],
              ["Package", "QFN-88 9x9", "BGA 10x10", "BGA 10x10", "BGA 10x10"],
              ["Video Input", "MIPI 2L+1L or 4L", "MIPI 2L+2L+DVP or 4L", "MIPI 2L+2L+DVP or 4L", "MIPI 2L+2L+DVP or 4L"],
              ["Video Output", "MIPI DSI(2L)/BT/RGB", "MIPI DSI(4L)/BT/LVDS/RGB", "MIPI DSI(4L)/BT/LVDS/RGB", "MIPI DSI(4L)/BT/LVDS/RGB"],
              ["Ethernet", "10/100 MAC PHY", "10/100 RMII + MAC PHY", "10/100 RMII + MAC PHY", "10/100 RMII + MAC PHY"]
            ],
            note: "All variants share the same SDK, ISP tuning, and TPU tools. Pin-to-pin compatible within package types."
          }
        }
      ],
      specs: [
        { category: 'Processor', key: 'CPU', value: 'Dual-Core ARM Cortex-A53 + RISC-V C906' },
        { category: 'Processor', key: 'Frequency', value: 'Up to 1.1GHz (A53) / 800MHz (C906)' },
        { category: 'AI', key: 'TPU', value: '1.0 ~ 1.5 TOPS @ INT8 / BF16' },
        { category: 'Memory', key: 'Integrated', value: 'DDR3 512Mb / 1Gb / 2Gb / 4Gb' },
        { category: 'Video', key: 'ISP', value: 'ISP V4.0 (4K, 3DNR, DRC, PFR)' },
        { category: 'Video', key: 'Encoding', value: 'H.265/H.264/MJPEG + Intra4' },
        { category: 'Video', key: 'Resolution', value: 'Max 8MP@30fps + 720P@30fps' },
        { category: 'Interface', key: 'Camera', value: '2x MIPI CSI (2L/4L/DVP)' },
        { category: 'Interface', key: 'Display', value: '1x MIPI DSI (2L/4L), LVDS, RGB, BT.656/1120' },
        { category: 'Peripherals', key: 'Connectivity', value: 'USB 2.0, SD 3.0, Ethernet (MAC PHY/RMII)' },
        { category: 'Peripherals', key: 'Low Speed', value: 'UART, PWM, GPIO, I2C, SPI, RTC' },
        { category: 'System', key: 'Features', value: 'Fast Boot, Secure Boot, Low Power' }
      ],
      applications: [
        { title: 'Smart Cameras', image: '/Smart Cameras.webp' },
        { title: 'Access Control', image: '/Access Control.webp' },
        { title: 'Robotics', image: '/Robotics.webp' },
        { title: '4K IPC', image: '/4K IPC.webp' },
        { title: 'Drones', image: '/Drones.webp' },
        { title: 'Dash Cam', image: '/Dash Cam.webp' }
      ],
      faqs: [
        { question: "What is the advantage of Intra4 encoding?", answer: "Intra4 uses smaller block encoding to better handle details and textures in complex motion scenes, offering higher compression and clarity at low bitrates." },
        { question: "Is CV184 compatible with CV181?", answer: "Yes, CV184 is pin-to-pin compatible with the CV181 series and shares the same SDK, ISP tuning tools, and AI development environment." },
        { question: "What models does the TPU support?", answer: "It supports standard frameworks (Caffe/TensorFlow/Pytorch/ONNX) and specifically optimizes ResNet, YOLO, MobileNet, and OpenCLIP models." }
      ]
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
