
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
      tagline: 'CV184x Edge Vision SoC with ISP V4.0 & Intra4 Encoding',
      metaTitle: 'SOPHGO CV184x Edge Vision SoC with ISP V4.0 & Intra4 | AIMORELOGY',
      metaDescription: 'SOPHGO CV184x integrates dual-core ARM + RISC-V, ISP V4.0, and a 1.0-1.5 TOPS TPU for FPV/UAV vision, low-light imaging, and intelligent encoding.',
      description: 'Dual-core vision SoC with ISP V4.0, self-developed TPU, and advanced H.265/H.264/MJPEG encoding.',
      longDescription: [
          "The CV184x series targets consumer, carrier, and professional security markets. It integrates a dual-core CPU (ARM Cortex-A53 + RISC-V C906, up to 1.1GHz/800MHz) with a self-developed TPU delivering 1.0-1.5 TOPS @ INT8 and BF16 mixed precision. Integrated DDR3 SiP options (512Mb/1Gb/2Gb/4Gb), fast boot, and low power operation make it suitable for compact edge devices.",
          "CV184x uses a self-developed 4K ISP V4.0 pipeline to improve image quality. It includes starlight-grade noise reduction, low smear, digital wide dynamic range (DRC/HDR), dehaze, and lens distortion correction. MCTF-based 3DNR, edge enhancement (EE), and PFR purple-fringe removal improve clarity in low-light and backlit scenes.",
          "For multimodal AI, CV184x is compatible with OpenCLIP, enabling object detection, image-text matching (retrieval), zero-shot inference, and scenario fine-tuning. The built-in model library covers face/person/helmet detection, gesture recognition, cat/dog recognition, and license plate recognition to reduce false alarms.",
          "The self-developed encoder supports H.265/H.264/MJPEG with intelligent encoding and Intra4 mode for better low-bitrate detail. It supports up to 8MP@30FPS plus 720P@30FPS (4:3 or 16:9), with 2x MIPI CSI inputs and 1x MIPI DSI output plus BT656/BT601/BT1120/8080 and RGB/LVDS outputs depending on the variant.",
          "The CV184x family includes CV1841C, CV1842C-P, CV1842H-P, and CV1843H-P variants with QFN/BGA packages and model-dependent I/O. CV184x is pin-to-pin compatible with the CV181 series and shares SDK, ISP settings, TPU development tools, and reference solutions for easy migration."
      ],
      highlights: [
        'Dual-core CPU: Cortex-A53 + RISC-V C906 (up to 1.1GHz/800MHz)',
        'Self-developed TPU: 1.0-1.5 TOPS @ INT8 with BF16 mixed precision',
        '4K ISP V4.0: MCTF 3DNR, DRC/HDR, PFR, EE, 3A, dehaze, lens correction',
        'Intelligent encoding with Intra4; H.265/H.264/MJPEG, 8MP@30FPS + 720P@30FPS',
        'OpenCLIP multimodal support: object detection, image-text matching, zero-shot inference',
        'Integrated DDR3 SiP options: 512Mb / 1Gb / 2Gb / 4Gb',
        '2x MIPI CSI + 1x MIPI DSI; rich display outputs by variant',
        'Rich peripherals: USB2.0, SD3.0, UART, PWM, GPIO, I2C, SPI, RTC',
        'Fast boot, low power, and secure boot'
      ],
      detailedFeatures: [
          { title: "4K ISP V4.0 Imaging Engine", description: "MCTF 3DNR, DRC/HDR, PFR, EE, 3A, dehaze, and lens distortion correction for clearer low-light and backlit scenes." },
          { title: "Intra4 Intelligent Encoding", description: "Smaller block encoding improves detail retention at low bitrates while reducing prediction errors." },
          { title: "OpenCLIP Multimodal + Model Library", description: "Supports object detection, image-text matching, zero-shot inference, and face/person/helmet/gesture/cat-dog/license-plate recognition." },
          { title: "Self-Developed TPU", description: "1.0-1.5 TOPS INT8 TPU with BF16 mixed precision for more demanding models." },
          { title: "CV181 Compatibility", description: "Pin-to-pin hardware compatibility plus shared SDK, ISP settings, TPU tools, and reference solutions." },
          { title: "Flexible CV184x Variants", description: "QFN/BGA packages and DDR3 SiP options (512Mb/1Gb/2Gb/4Gb) with model-dependent I/O." }
      ],
      specs: [
        { category: 'Processor', key: 'CPU', value: 'Dual-core ARM Cortex-A53 + RISC-V C906 (up to 1.1GHz/800MHz; CV1841C 1.0GHz/600MHz)' },
        { category: 'TPU', key: 'Performance', value: '1.0-1.5 TOPS @ INT8, BF16 mixed precision' },
        { category: 'ISP', key: 'Pipeline', value: '4K ISP V4.0 with 3DNR (MCTF), DRC/HDR, PFR, EE, 3A, dehaze, lens correction' },
        { category: 'Encoding', key: 'Codecs', value: 'H.265/H.264/MJPEG, Intra4 mode, intelligent encoding' },
        { category: 'Encoding', key: 'Max', value: '8MP@30FPS + 720P@30FPS (4:3 or 16:9)' },
        { category: 'Video I/O', key: 'Input', value: '2x MIPI CSI (lane configs depend on model)' },
        { category: 'Video I/O', key: 'Output', value: 'MIPI DSI (2L/4L), BT656/BT601/BT1120/8080, RGB666/RGB888, LVDS (model-dependent)' },
        { category: 'Memory', key: 'DDR3 SiP', value: '512Mb / 1Gb / 2Gb / 4Gb (by variant)' },
        { category: 'Interfaces', key: 'Peripherals', value: 'USB2.0, SD3.0, UART, PWM, GPIO, I2C, SPI, RTC' },
        { category: 'Ethernet', key: 'MAC/PHY', value: '10/100 MAC PHY; RMII supported on select variants' },
        { category: 'Audio', key: 'I/O', value: 'ADC / DAC / I2S' },
        { category: 'Security', key: 'Boot', value: 'Secure boot' }
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
      faqs: [
        { question: "What AI performance does CV184x deliver?", answer: "CV184x integrates a self-developed TPU delivering 1.0-1.5 TOPS at INT8, with BF16 mixed precision support." },
        { question: "Does CV184x support OpenCLIP and multimodal tasks?", answer: "Yes. CV184x supports OpenCLIP for object detection, image-text matching, zero-shot inference, and scene fine-tuning." },
        { question: "What video encoding is supported?", answer: "The self-developed encoder supports H.265/H.264/MJPEG with Intra4 mode, up to 8MP@30FPS plus 720P@30FPS." },
        { question: "Is CV184x compatible with CV181?", answer: "Yes. CV184x is pin-to-pin compatible with CV181 and shares SDK, ISP settings, and TPU development tools." }
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
