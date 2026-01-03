
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
      tagline: 'Intelligent Edge 16T Compute Platform',
      metaTitle: 'SOPHGO BM1688 Edge TPU SoC for Drone/FPV Vision - 16 TOPS, 8-Core, 8K | AIMORELOGY',
      metaDescription: 'SOPHGO BM1688 edge TPU SoC combines an 8-core ARM CPU and 16 TOPS (32 TOPS INT4) with 8K imaging and multi-sensor ISP for drone/FPV vision, gimbal tracking, AI NVRs, robotics, and edge servers. Datasheet',
      description: 'High-integration edge TPU processor featuring 16 TOPS INT8 compute and octa-core architecture.',
      longDescription: [
          "The BM1688 is a high-integration edge TPU processor designed to serve as a powerful 16T to 8T intelligent compute platform. It features an octa-core ARM Cortex-A53 architecture running at 1.6GHz, providing server-class compute power for edge applications.",
          "Equipped with a self-developed TPU delivering up to 16 TOPS @ INT8 (and 32 TOPS @ INT4), it supports a wide range of frameworks including PyTorch, TensorFlow, and ONNX. It is specifically optimized for Large Language Models (LLM) and Vision-Language Models (VLM) at the edge.",
          "The imaging system is highly advanced, capable of dual 8MP@30 HDR inputs or even 8K@15 SDR. It features hardware-level 360-degree stitching and fisheye dewarping, making it the perfect core for panoramic cameras and high-end security systems.",
          "Connectivity is a major strength, with support for PCIe 3.0, SATA Gen3, USB 3.0, and dual Gigabit Ethernet. This allows for massive data throughput and storage expansion, ideal for smart micro-servers, AI NAS, and intelligent NVRs.",
          "Built for reliability, the BM1688 supports a wide operating temperature range (-20°C to 60°C), enabling its deployment in various industrial and vehicle-based platforms, from autonomous robots to smart shipping systems."
      ],
      highlights: [
        'TPU: 16 TOPS INT8 / 32 TOPS INT4 / 4T FP16',
        'CPU: 8-Core ARM Cortex-A53 @ 1.6GHz',
        'Vision: 8K@15 / Dual 8MP@30 HDR Support',
        'Engine: 360° Stitching & Fisheye Dewarping',
        'I/O: PCIe 3.0, SATA Gen3, Dual Gigabit Ethernet',
        'Temp: Industrial-grade -20°C to 60°C Operating'
      ],
      detailedFeatures: [
          { title: "Server-Class Edge AI", description: "Delivers up to 16 TOPS INT8 compute power, enabling complex AI inference like LLM and multi-object tracking locally." },
          { title: "Octa-Core Compute", description: "Eight Cortex-A53 cores provide robust multitasking capabilities for edge servers and robotics control." },
          { title: "Hardwired Panoramic Engine", description: "Dedicated hardware blocks for 360° stitching and fisheye dewarping (Ceiling/Wall/Ground) reduce CPU load." },
          { title: "High-Speed Data Fabric", description: "Flexible high-speed interfaces including PCIe 3.0 and SATA Gen3 for high-performance storage and expansion." },
          { title: "Advanced ISP Pipeline", description: "Supports multi-sensor inputs (up to 6 channels) with 2f-HDR, 3DNR, and LDC for superior imaging clarity." },
          { title: "Global Framework Support", description: "Seamlessly compatible with Caffe, PyTorch, TensorFlow, ONNX, and MXNet for rapid deployment." }
      ],
      detailSections: [
        {
          id: "tpu-acceleration",
          title: "TPU Performance",
          description: "High-performance TPU architecture with mixed-precision support for high-throughput AI workloads.",
          stats: [
            { label: "INT4 Peak", value: "32 TOPS" },
            { label: "INT8 Peak", value: "16 TOPS" },
            { label: "FP16 / BF16", value: "4.0 TFLOPS" },
            { label: "FP32", value: "0.5 TFLOPS" }
          ],
          bullets: [
            "Optimized for Generative AI and Multimodal models.",
            "Supports server-grade neural network architectures.",
            "Low-latency inference for real-time edge responses."
          ]
        },
        {
          id: "vision-isp",
          title: "Vision & Imaging",
          description: "Sophisticated ISP and Video processing units for high-resolution, multi-channel capture.",
          bullets: [
            "Max Resolution: Up to 8192 x 3840 (8K Support).",
            "Video Input: Time-division multiplexing for up to 6 sensors.",
            "Video Output: HDMI 2.0 (4K@60), MIPI DSI (1440P@60), LVDS.",
            "Codec: H.264/H.265 Decode (16x 2MP30) / Encode (10x 2MP30)."
          ]
        },
        {
          id: "connectivity",
          title: "High-Speed Connectivity",
          description: "Versatile I/O interfaces for seamless system integration and storage expansion.",
          bullets: [
            "PCIe/SATA: 2x PCIe 3.0 / SATA Gen3 (Flexible Modes).",
            "Ethernet: 2x Gigabit Ethernet (GMAC).",
            "USB: 2x USB 3.0 / 2.0 Host/Device.",
            "Wireless: WiFi/BT/5G expansion via SDIO and USB."
          ]
        }
      ],
      specs: [
        { category: 'Processor', key: 'CPU', value: '8-Core ARM Cortex-A53 @ 1.6GHz' },
        { category: 'AI', key: 'TPU', value: '16 TOPS INT8 / 32 TOPS INT4' },
        { category: 'Memory', key: 'LPDDR4/4X', value: '2x32-bit (Up to 16GB Support)' },
        { category: 'Video', key: 'ISP', value: '8K SDR / Dual 8MP HDR / 360° Stitching' },
        { category: 'Video', key: 'Codec', value: 'H.264/H.265 (Decode 16x2MP, Encode 10x2MP)' },
        { category: 'Interface', key: 'High Speed', value: 'PCIe 3.0, SATA Gen3, USB 3.0' },
        { category: 'Interface', key: 'Network', value: '2x Gigabit Ethernet' },
        { category: 'Interface', key: 'Video In', value: '6-Channel MIPI CSI / subLVDS / HiSPI' },
        { category: 'Interface', key: 'Video Out', value: 'HDMI 2.0, MIPI DSI, LVDS, BT.1120' },
        { category: 'Audio', key: 'Codec', value: 'Integrated 16-bit (ADC/DAC/I2S)' },
        { category: 'Peripherals', key: 'Control', value: 'CAN 2.0, UART x8, I2C x10, SPI x4, PWM x19' },
        { category: 'System', key: 'Environment', value: '-20°C to 60°C Operating Temp' }
      ],
      applications: [
        { title: 'Smart Micro-Server', image: '/Edge Computing Boxes.webp' },
        { title: 'Smart NVR', image: '/Edge Computing Boxes.webp' },
        { title: 'AI NAS', image: '/Edge Computing Boxes.webp' },
        { title: 'Smart Lawn Mower', image: '/Robotics.webp' },
        { title: 'Robotics Platform', image: '/Robot Platform.webp' },
        { title: 'Vehicle/Ship Platform', image: '/Robotics.webp' }
      ],
      faqs: [
        { question: "Can BM1688 run LLM models?", answer: "Yes, BM1688 is optimized for edge deployment of quantized LLMs and VLMs, leveraging its high INT8 and INT4 compute power." },
        { question: "How many camera inputs does it support?", answer: "It supports up to 6 sensors simultaneously through time-division multiplexing ISP processing." }
      ]
    },
  
    'cv186': {
      id: 'cv186',
      name: 'CV186',
      series: 'VISION',
      tagline: '7.2T Terminal AI Vision Processor',
      metaTitle: 'SOPHGO CV186x (CV186AH) AI Vision SoC for Drone/FPV & Gimbal - 7.2 TOPS, DPU, 8MP | AIMORELOGY',
      metaDescription: 'SOPHGO CV186x/CV186AH delivers 7.2 TOPS AI compute, binocular depth DPU, and 8MP@75fps encoding for multi-lens IPC, drones/FPV, gimbal vision, and robotics platforms. Datasheet',
      description: 'High-performance vision processor with 7.2 TOPS AI compute and integrated binocular depth engine.',
      longDescription: [
          "The CV186x series (CV186AH) is a high-performance visual processor designed for the intelligent terminal market. It features a hexa-core ARM Cortex-A53 architecture, providing efficient multi-tasking capabilities for complex edge computing workloads.",
          "At its core is a self-developed TPU delivering 7.2 TOPS @ INT8, optimized for advanced video analytics and high-precision AI inference. It supports modern AI frameworks and is designed for rapid commercial deployment in smart terminals.",
          "A standout feature is the integrated DPU (Binocular Depth Engine), which enables high-accuracy depth sensing for robotics and obstacle avoidance. Combined with hardware support for 360° panoramic stitching and fisheye dewarping, it offers unmatched visual versatility.",
          "The imaging pipeline is powered by a professional-grade ISP supporting 3DNR, HDR, LDC, and 3A algorithms. For video output, it supports dual displays through MIPI DSI, LVDS, and digital RGB interfaces, making it ideal for interactive terminal applications.",
          "The CV186x provides an expansive interface set, including PCIe, SATA, USB 3.0, and Gigabit Ethernet, ensuring it can scale from high-end multi-lens IPCs to advanced robotics and drone platforms."
      ],
      highlights: [
        'TPU: 7.2 TOPS @ INT8 AI Acceleration',
        'CPU: 6-Core ARM Cortex-A53 Architecture',
        'Depth: Integrated Binocular Depth Engine (DPU)',
        'Video: 8MP@75fps Ultra-HD Hardware Encoding',
        'Vision: Hardware Stitching & 360° Fisheye Dewarp',
        'I/O: PCIe, SATA, USB 3.0, GMAC Support'
      ],
      detailedFeatures: [
          { title: "Hexa-Core Performance", description: "Six Cortex-A53 cores ensure smooth handling of concurrent AI tasks and high-resolution video streams." },
          { title: "7.2 TOPS AI Compute", description: "High-throughput TPU designed for real-time video analytics and high-accuracy object recognition." },
          { title: "Binocular Depth Sensing", description: "Hardware DPU engine for high-precision depth map generation, ideal for robotic navigation." },
          { title: "Ultra-HD 8MP Encoding", description: "Advanced video hardware encoding supporting up to 8MP@75fps for ultra-clear video evidence." },
          { title: "Panoramic Visuals", description: "Integrated hardware for seamless 360-degree image stitching and fisheye distortion correction." },
          { title: "Industrial Scalability", description: "Comprehensive high-speed interfaces for high-end security, drones, and gimbal applications." }
      ],
      detailSections: [
        {
          id: "tpu-acceleration",
          title: "AI & TPU Performance",
          description: "Efficient 7.2 TOPS AI acceleration for high-end intelligent terminal analysis.",
          stats: [
            { label: "INT8 Peak", value: "7.2 TOPS" },
            { label: "Architecture", value: "Hexa-Core A53" },
            { label: "Precision", value: "INT8 / BF16" }
          ],
          bullets: [
            "Optimized for multi-stream high-resolution analytics.",
            "Compatible with mainstream deep learning frameworks.",
            "Integrated IVE/VPSS hardware accelerators."
          ]
        },
        {
          id: "vision-isp",
          title: "Vision & Imaging Pipeline",
          description: "Professional-grade imaging and computer vision hardware modules.",
          bullets: [
            "ISP Features: 3DNR, HDR, LDC, 3A, Dehaze.",
            "Depth Sensing: Dedicated DPU for Binocular Depth.",
            "Panoramic: Hardware Stitch + 360° Dewarp Engine.",
            "Video Encoding: Up to 8MP@75fps hardware acceleration."
          ]
        }
      ],
      specs: [
        { category: 'Processor', key: 'CPU', value: '6-Core ARM Cortex-A53' },
        { category: 'AI', key: 'TPU', value: '7.2 TOPS @ INT8' },
        { category: 'Memory', key: 'LPDDR4/4X', value: '2x32-bit Interface' },
        { category: 'Video', key: 'Encoding', value: '8MP@75fps H.264/H.265' },
        { category: 'Video', key: 'Vision', value: 'DPU (Depth), Stitching, Dewarp' },
        { category: 'Video', key: 'ISP', value: '3DNR, HDR, LDC, 3A, Dehaze' },
        { category: 'Interface', key: 'High Speed', value: 'PCIe, SATA, USB 3.0, GMAC' },
        { category: 'Interface', key: 'Video In', value: 'Multi-Sensor MIPI CSI Input' },
        { category: 'Interface', key: 'Video Out', value: 'Dual Display (MIPI/LVDS/Digital)' },
        { category: 'Peripherals', key: 'I/O', value: 'PWM, UART, SPI, SD, I2C, GPIO' }
      ],
      applications: [
        { title: 'High-end Multi-lens IPC', image: '/High-end Multi-lens IPC.webp' },
        { title: 'Robot Platform', image: '/Robot Platform.webp' },
        { title: 'Binocular Depth Camera', image: '/Binocular Depth Camera.webp' },
        { title: 'Drones', image: '/Drones.webp' },
        { title: 'Vehicle Computing', image: '/Robotics.webp' },
        { title: 'Gimbal Applications', image: '/Drone & Gimbal Applications.webp' }
      ],
      faqs: [
        { question: "What is the DPU engine used for?", answer: "The DPU is a hardware-accelerated Binocular Depth Engine used for calculating high-precision depth maps, which is essential for robotic navigation and obstacle avoidance." },
        { question: "How many cores does the CV186x have?", answer: "The CV186x (CV186AH) features a 6-core ARM Cortex-A53 architecture for powerful multitasking." }
      ]
    },
    'cv184': {
      id: 'cv184',
      name: 'CV184',
      series: 'VISION',
      tagline: 'Dual-Core Vision SoC with ISP V4.0 & Intra4 Encoding',
      metaTitle: 'SOPHGO CV184x Vision SoC for FPV/UAV (CV1841C/CV1842C-P/CV1842H-P/CV1843H-P) - ISP V4.0, Intra4 | AIMORELOGY',
      metaDescription: 'SOPHGO CV184x series (CV1841C, CV1842C-P, CV1842H-P/CV1842HP, CV1843H-P) offers 1.0-1.5 TOPS TPU, ISP V4.0, and Intra4 encoding for FPV/UAV vision, gimbal tracking, smart cameras, and access control. Datasheet',
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
      metaTitle: 'SOPHGO CV181x RISC-V Vision SoC for FPV/UAV Cameras (CV1813H/CV1812H/CV1811H/CV1812C-P/CV1811C/CV1810C/CV1813H-A/CV1812H-A/CV1811H-A/CV1812C-PA/CV1811C-A) | AIMORELOGY',
      metaDescription: 'SOPHGO CV181x series (CV1813H, CV1812H, CV1811H, CV1812C-P, CV1811C, CV1810C, CV1813H-A, CV1812H-A, CV1811H-A, CV1812C-PA, CV1811C-A) delivers 0.5-1.0 TOPS AI for smart doorbells, access control, lightweight FPV/UAV cameras, and low-power AIoT. Datasheet',
      description: 'High-performance RISC-V SoC with integrated screen display support and up to 1.0 TOPS AI compute.',
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
              ["CV1812H-A", "A53+C906", "1.0 TOPS", "2Gb DDR3", "BGA 10x10"],
              ["CV1811H-A", "A53+C906", "1.0 TOPS", "1Gb DDR3", "BGA 10x10"],
              ["CV1812C-PA", "A53+C906", "1.0 TOPS", "2Gb DDR3", "QFN-88 9x9"],
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
      metaTitle: 'SOPHGO CV180x RISC-V Vision SoC for Entry FPV/UAV (CV1801B/CV180ZB) - 0.2 TOPS | AIMORELOGY',
      metaDescription: 'SOPHGO CV180x series (CV1801B, CV180ZB) is a cost-effective 0.2 TOPS RISC-V vision SoC for entry FPV/UAV cameras, battery devices, and lightweight AIoT. Datasheet',
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
