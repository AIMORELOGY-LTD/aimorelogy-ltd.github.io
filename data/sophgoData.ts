
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
      tagline: 'RISC-V Vision SoC for Lightweight Intelligent Scenarios',
      metaTitle: 'SOPHGO CV181 RISC-V Vision SoC - 1.0 TOPS, 2f-HDR, 5MP | AIMORELOGY',
      metaDescription: 'SOPHGO CV181 features Dual RISC-V C906 (or ARM A53), up to 1.0 TOPS TPU, 2f-HDR, and 5MP video encoding. Ideal for Smart Home and Access Control.',
      description: 'High-performance RISC-V SoC with integrated screen display support and up to 1.0 TOPS AI算力.',
      longDescription: [
          "The CV181 series is a high-performance visual processor tailored for the lightweight intelligent (consumer-grade) market. It leverages a Dual RISC-V C906 architecture (1.0GHz + 0.7GHz) or an ARM A53 + RISC-V combination in the 'A' series, providing an optimal balance of compute power and energy efficiency.",
          "Featuring an integrated TPU delivering 0.5 to 1.0 TOPS @ INT8, the CV181 supports advanced AI tasks with BF16 mixed precision. It is optimized for fast boot scenarios and low power operation, making it ideal for battery-powered devices like smart doorbells and cat-eye locks.",
          "The imaging pipeline is powered by a self-developed ISP supporting 3D noise reduction, two-frame wide dynamic range (2f-HDR), and lens distortion correction (LDC). It can handle up to two MIPI/DVP camera inputs and provide output via MIPI DSI, LVDS, or RGB interfaces.",
          "Video processing capabilities include hardware H.265/H.264/MJPEG encoding at resolutions up to 5MP (2880x1620) @ 30FPS. The chip also integrates a 16-bit audio codec and a dedicated MCU subsystem for low-level control and peripheral management.",
          "The CV181 series is designed for seamless integration, offering Pin-to-Pin compatibility within its package types (BGA 10x10 or QFN-88 9x9) and sharing a common SDK and TPU development environment with the CV180 series."
      ],
      highlights: [
        'Dual Cores: C906 (1.0GHz+0.7GHz) or ARM A53 (1.2GHz)+C906',
        'TPU: 0.5 ~ 1.0 TOPS @ INT8 / BF16 Supported',
        'ISP: 3DNR, 2f-HDR, LDC, 3A, Dehaze',
        'Video: 5MP@30fps H.265/H.264/MJPEG',
        'Display: MIPI DSI (4L/2L), LVDS, RGB, BT.656/1120',
        'Fast Boot & Low Power Architecture'
      ],
      detailedFeatures: [
          { title: "Dual Core Compute", description: "Flexible architecture with pure RISC-V or ARM+RISC-V options to suit different performance and OS requirements." },
          { title: "2f-HDR Imaging", description: "Advanced two-frame wide dynamic range technology ensures clear visibility in challenging backlit or high-contrast environments." },
          { title: "Integrated SiP Memory", description: "Available with 512Mb DDR2 to 4Gb DDR3 integrated SiP, reducing PCB footprint and BOM complexity." },
          { title: "Multi-Sensor Input", description: "Supports up to 2 camera inputs with flexible interfaces including MIPI CSI, Sub-LVDS, and HiSPi." },
          { title: "Rich Audio/Visual I/O", description: "Integrated 16-bit audio codec and comprehensive display outputs for interactive smart devices." },
          { title: "Eco-System Synergy", description: "Shares SDK, ISP settings, and AI reference designs with the CV180 series for low-cost portfolio development." }
      ],
      detailSections: [
        {
          id: "architecture",
          title: "Core Architecture",
          description: "A versatile compute platform featuring Dual C906 or ARM+RISC-V cores with an integrated MCU subsystem for robust edge control.",
          stats: [
            { label: "CPU (C-Series)", value: "2x C906 (1.0GHz/0.7GHz)" },
            { label: "CPU (A-Series)", value: "A53 (1.2GHz) + C906" },
            { label: "MCU", value: "Dedicated MCU RAM/IO" },
            { label: "Security", value: "Secure Boot / EFuse" }
          ]
        },
        {
          id: "tpu-acceleration",
          title: "AI Performance",
          description: "The integrated TPU provides specialized acceleration for lightweight neural networks, optimized for common consumer AI tasks.",
          stats: [
            { label: "Peak Compute", value: "1.0 TOPS @ INT8" },
            { label: "Mixed Precision", value: "BF16 / INT8" },
            { label: "SDK", value: "Shared TPU Toolchain" }
          ],
          bullets: [
            "Optimized for person detection and gesture recognition.",
            "Supports Caffe, TensorFlow, Pytorch, and ONNX frameworks.",
            "High efficiency inference for real-time edge responses."
          ]
        },
        {
          id: "isp-v4",
          title: "Imaging Pipeline",
          description: "Self-developed ISP engine focused on clarity and dynamic range for high-definition consumer vision.",
          bullets: [
            "3DNR: Advanced noise reduction for low-light scenes.",
            "2f-HDR: Superior contrast handling in complex lighting.",
            "LDC: Lens distortion correction for wide-angle sensors.",
            "Display Engine: Multi-interface output support (MIPI/LVDS/RGB)."
          ]
        },
        {
          id: "variant-comparison",
          title: "CV181 Series Comparison",
          description: "Explore the variants across the CV181 and CV181-A product lines.",
          table: {
            headers: ["Model", "CPU", "TPU", "DDR SiP", "Package"],
            rows: [
              ["CV1813H", "Dual C906", "1.0 TOPS", "4Gb DDR3", "BGA 10x10"],
              ["CV1812H", "Dual C906", "1.0 TOPS", "2Gb DDR3", "BGA 10x10"],
              ["CV1811H", "Dual C906", "1.0 TOPS", "1Gb DDR3", "BGA 10x10"],
              ["CV1812C-P", "Dual C906", "1.0 TOPS", "2Gb DDR3", "QFN-88 9x9"],
              ["CV1811C", "Dual C906", "0.5 TOPS", "1Gb DDR3", "QFN-88 9x9"],
              ["CV1810C", "Dual C906", "0.5 TOPS", "512Mb DDR2", "QFN-88 9x9"],
              ["CV1813H-A", "A53+C906", "1.0 TOPS", "4Gb DDR3", "BGA 10x10"],
              ["CV1811C-A", "A53+C906", "1.0 TOPS", "1Gb DDR3", "QFN-88 9x9"]
            ],
            note: "All variants are Pin-to-Pin compatible within their respective package types."
          }
        }
      ],
      specs: [
        { category: 'Processor', key: 'CPU', value: 'Dual C906 1.0GHz + 0.7GHz (or ARM A53+C906)' },
        { category: 'AI', key: 'TPU', value: '0.5 ~ 1.0 TOPS @ INT8 / BF16' },
        { category: 'Video', key: 'Encoding', value: 'H.265/H.264/MJPEG (Max 5MP@30)' },
        { category: 'Video', key: 'ISP', value: '3DNR, 2f-HDR, LDC, Dehaze' },
        { category: 'Interface', key: 'Video In', value: '2x (MIPI 2L+2L+DVP or 4L)' },
        { category: 'Interface', key: 'Video Out', value: 'MIPI DSI (4L/2L), LVDS, RGB, BT.656/1120' },
        { category: 'Memory', key: 'SiP DDR', value: '512Mb DDR2 / 1Gb / 2Gb / 4Gb DDR3' },
        { category: 'Storage', key: 'Interface', value: 'eMMC, SPI NOR/NAND, SDIO 3.0 x2' },
        { category: 'Ethernet', key: 'MAC/PHY', value: '10/100 MAC PHY (RMII Supported)' },
        { category: 'Peripherals', key: 'I/O', value: 'USB 2.0, I2C x5, SPI x3, UART x4, PWM x15' },
        { category: 'Audio', key: 'Codec', value: '16-bit Codec (ADC/DAC/I2S)' },
        { category: 'System', key: 'Boot', value: 'Fast Boot / Secure Boot' }
      ],
      applications: [
        { title: 'Home IPC', image: '/Home IPC.webp' },
        { title: 'Smart Doorbell', image: '/Smart Doorbell.webp' },
        { title: 'Cat-eye Door Lock', image: '/Cat-eye Door Lock.webp' },
        { title: 'Streaming Rearview Mirror', image: '/Streaming Rearview Mirror.webp' },
        { title: 'Access Control', image: '/Access Control.webp' },
        { title: 'Dash Cam', image: '/Dash Cam.webp' }
      ],
      faqs: [
        { question: "What is the difference between CV181 and CV181-A?", answer: "The CV181 series uses a Dual RISC-V C906 architecture, while the CV181-A series features an ARM Cortex-A53 + RISC-V C906 combination for broader software compatibility." },
        { question: "Does CV181 support battery-powered operation?", answer: "Yes, it is designed with a low-power architecture and fast boot capabilities (under 500ms), making it ideal for battery-operated smart doorbells and locks." }
      ]
    },
    'cv180': {
      id: 'cv180',
      name: 'CV180',
      series: 'VISION',
      tagline: 'Consumer-Grade Lite Intelligent Vision SoC',
      metaTitle: 'SOPHGO CV180 RISC-V Vision SoC - 0.2 TOPS, 5MP, Low Power | AIMORELOGY',
      metaDescription: 'SOPHGO CV180 features Dual RISC-V C906, 0.2 TOPS AI, and 5MP encoding. Highly cost-effective for lightweight consumer AIoT devices.',
      description: 'Cost-effective RISC-V vision chip for consumer IoT and lightweight intelligent applications.',
      longDescription: [
          "The CV180 series is a highly cost-effective visual processor designed for the entry-level consumer and lightweight intelligent market. Built on a Dual RISC-V C906 architecture (1.0GHz + 0.7GHz), it democratizes access to smart vision for mass-market devices.",
          "Equipped with a self-developed TPU delivering 0.2 TOPS @ INT8, the CV180 provides essential AI capabilities such as human detection and motion tracking. Its ultra-low power consumption and fast-boot features are specifically tuned for battery-operated and energy-sensitive applications.",
          "Despite its entry-level positioning, the CV180 includes a robust ISP supporting 3D noise reduction, digital wide dynamic range (DWDR), lens distortion correction (LDC), and purple fringe removal. It can encode H.265/H.264/MJPEG video at resolutions up to 5MP (2880x1620) @ 20FPS.",
          "The series comes in an ultra-compact QFN-68 7x7 package with integrated DDR2 or DDR3 SiP, significantly reducing BOM costs and simplifying high-volume manufacturing. It is pin-to-pin compatible across its variant line.",
          "The CV180 shares a unified SDK and intelligent reference designs with the CV181 series, ensuring a smooth development path and fast commercialization for lightweight consumer products."
      ],
      highlights: [
        'Dual RISC-V: C906 (1.0GHz + 0.7GHz)',
        'TPU: 0.2 TOPS @ INT8 / Human Detection Ready',
        'ISP: 3DNR, DWDR, LDC, 3A, Dehaze',
        'Video: 5MP@20fps / 4MP@25fps H.265/H.264',
        'Package: Ultra-compact QFN-68 7x7 (Pin to Pin)',
        'Low Power & Fast Boot Optimization'
      ],
      detailedFeatures: [
          { title: "RISC-V Efficiency", description: "Leverages the open RISC-V architecture for efficient processing and lower licensing costs, passed on to the mass market." },
          { title: "Essential AI", description: "Built-in humanoid detection and motion sensing algorithms provide 'Lite' intelligence for entry-level security." },
          { title: "Compact SiP Integration", description: "Integrated 512Mb DDR2 or 1Gb DDR3 memory reduces the overall device footprint to an absolute minimum." },
          { title: "Optimized Encoding", description: "Supports H.265 hardware encoding for superior video storage efficiency at 5MP resolutions." },
          { title: "Starlight Imaging", description: "Advanced 3DNR and ISP features ensure reliable performance in low-light consumer scenarios." },
          { title: "Pin-to-Pin Compatibility", description: "The CV1801B and CV180ZB variants share the same hardware footprint for flexible supply chain management." }
      ],
      detailSections: [
        {
          id: "architecture",
          title: "Core Architecture",
          description: "Dual C906 cores with integrated L1 cache and a specialized MCU subsystem for entry-level intelligent control.",
          stats: [
            { label: "CPU", value: "2x C906 (1.0GHz/0.7GHz)" },
            { label: "Cache", value: "L1 64KB D / 32KB I" },
            { label: "MCU", value: "Dedicated MCU RAM" }
          ]
        },
        {
          id: "tpu-acceleration",
          title: "AI & TPU",
          description: "0.2 TOPS performance tuned for humanoid detection, intrusion alerts, and basic scene analysis.",
          stats: [
            { label: "Performance", value: "0.2 TOPS @ INT8" },
            { label: "Algorithms", value: "Human / Motion Detect" }
          ],
          bullets: [
            "Shared SDK with CV181 series.",
            "Ideal for low-complexity visual AI tasks.",
            "Significant power efficiency for constant edge monitoring."
          ]
        },
        {
          id: "isp-v4",
          title: "Imaging & Video",
          description: "Comprehensive imaging engine supporting essential clarity features for consumer-grade IPCs.",
          bullets: [
            "ISP Features: 3DNR, DWDR, LDC, 3A, Dehaze.",
            "Video Output: Support for MIPI 4L / BT.656.",
            "Encoding: H.265/H.264/JPEG hardware acceleration."
          ]
        },
        {
          id: "variant-comparison",
          title: "CV180 Series Models",
          description: "Entry-level variants optimized for specific cost and performance targets.",
          table: {
            headers: ["Model", "CPU", "DDR SiP", "TPU", "VI Interface"],
            rows: [
              ["CV1801B", "Dual C906", "1Gb DDR3", "0.2 TOPS", "MIPI 4L / BT.656"],
              ["CV180ZB", "Dual C906", "512Mb DDR2", "0.2 TOPS", "MIPI 4L / BT.656"]
            ],
            note: "Competitive replacement targets: HI3516EV300, SSC337DE, T31 X/ZX/A, FH8856V210, etc."
          }
        }
      ],
      specs: [
        { category: 'Processor', key: 'CPU', value: 'Dual C906 (1.0GHz + 0.7GHz)' },
        { category: 'AI', key: 'TPU', value: '0.2 TOPS @ INT8' },
        { category: 'Video', key: 'Encoding', value: 'H.265/H.264/MJPEG (Max 5MP@20)' },
        { category: 'Video', key: 'ISP', value: '3DNR, DWDR, LDC, 3A, Dehaze' },
        { category: 'Interface', key: 'Video In', value: '1x (MIPI 4L / BT.656 / CSI)' },
        { category: 'Memory', key: 'SiP DDR', value: '512Mb DDR2 / 1Gb DDR3' },
        { category: 'Storage', key: 'Interface', value: 'SPI NOR/NAND, SDIO 3.0 x2' },
        { category: 'Ethernet', key: 'MAC/PHY', value: '10/100 MAC PHY' },
        { category: 'Peripherals', key: 'I/O', value: 'USB 2.0, I2C x4, SPI x3, UART x5, PWM x13' },
        { category: 'Audio', key: 'Codec', value: '16-bit Codec (ADC/DAC/I2S)' },
        { category: 'System', key: 'Boot', value: 'Fast Boot / Secure Boot' },
        { category: 'Package', key: 'Type', value: 'QFN-68 7x7 (Pin-to-Pin)' }
      ],
      applications: [
        { title: 'Baby Monitor', image: '/Baby Monitor.webp' },
        { title: 'Kids Camera', image: '/Kids Camera.webp' },
        { title: 'Scanning Pen', image: '/Scanning Pen.webp' },
        { title: 'Dash Cam', image: '/Dash Cam.webp' },
        { title: 'Access Control', image: '/Access Control.webp' },
        { title: 'Smart Doorbell', image: '/Smart Doorbell.webp' }
      ],
      faqs: [
        { question: "Is CV180 software compatible with CV181?", answer: "Yes, both series share the same SDK, ISP settings, and intelligent reference solutions, allowing for easy product tiering." },
        { question: "Which competing chips can CV180 replace?", answer: "It is designed to compete with and replace chips such as HI3516EV300, SSC337DE, T31 X/ZX/A, and FH8856V210." }
      ]
    },
};
