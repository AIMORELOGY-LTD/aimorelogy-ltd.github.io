import { ChipData } from './sophgoData';

export const MODULE_DATA: Record<string, ChipData> = {
  'sm9': {
    id: 'sm9',
    name: 'SM9 Computing Module',
    series: 'COMPUTING MODULE',
    tagline: 'Pin-to-Pin Compatible with NVIDIA Jetson Modules, Best-in-Class Value',
    metaTitle: 'SM9 Computing Module | 16-CH HD AI Analysis | NVIDIA Jetson Pin-Compatible | AIMORELOGY',
    metaDescription: 'High-performance 8-core ARM CA53 computing module with 16T AI performance, supports 16-channel HD video analysis, and is pin-to-pin compatible with NVIDIA Jetson.',
    description: 'High-performance computing module designed for intelligent video analytics, featuring 8-core ARM architecture and broad multimedia capabilities.',
    longDescription: [
      "The SM9 computing module is built on a high-efficiency 8-core ARM CA53 architecture, delivering specialized performance for 16-channel HD intelligent video analytics. It supports flexible mixed-precision computing including INT4, INT8, FP16, BF16, and FP32, making it an ideal choice for complex AI inference at the edge.",
      "With powerful multimedia capabilities, the SM9 handles up to 16-channel HD hardware decoding and 10-channel HD hardware encoding. It integrates hardware acceleration for advanced computer vision tasks such as stereo depth estimation, image stitching, and fisheye dewarping, significantly reducing CPU load.",
      "Designed for flexible deployment, the module offers rich I/O options including SATA 3.0, USB 3.0, Gigabit Ethernet, HDMI 2.0, and CAN bus. Its wide-temperature design (-40°C to +85°C for industrial grade) ensures stability in harsh environments, from industrial automation to outdoor autonomous systems.",
      "Most notably, the SM9 is pin-to-pin compatible with mainstream NVIDIA Jetson modules, allowing for seamless hardware upgrades or cost-optimization without redesigning carrier boards. With configurations up to 16GB LPDDR4 and 64GB eMMC, it sets a new standard for performance-to-value in the edge computing market."
    ],
    highlights: [
      'Core: 8-core ARM CA53 High-Efficiency Processor',
      'AI Power: 16-channel HD Intelligent Video Analytics',
      'Multimedia: 16-ch Decoding / 10-ch Encoding (1080P@30)',
      'CV Accel: DPU (Stereo Depth) + Stitching + Dewarping',
      'Compatibility: Pin-to-Pin with NVIDIA Jetson Modules',
      'Industrial: -40°C to +85°C Operating Temp (Optional)'
    ],
    detailedFeatures: [
      { title: "High Energy Efficiency", description: "8-core ARM CA53 architecture with mixed-precision support (INT4/INT8/FP16/BF16/FP32) for versatile AI workloads." },
      { title: "Powerful Multimedia", description: "Hardware-accelerated 16-ch decoding and 10-ch encoding supports up to 8K resolution and complex multi-channel VI inputs." },
      { title: "Integrated CV Engine", description: "Dedicated hardware for stereo depth, image stitching, and fisheye dewarping enables real-time high-fidelity vision processing." },
      { title: "Rich Connectivity", description: "Dual PCIe Gen3, dual USB 3.0, dual GbE, and dual SATA 3.0 interfaces for comprehensive system integration." },
      { title: "Jetson Compatibility", description: "Designed as a drop-in replacement for Jetson modules with richer pinmux options and superior cost-effectiveness." },
      { title: "Robust Design", description: "Wide-temperature support and compact 260-Pin SO-DIMM form factor (69.6mm x 45mm) for diverse industrial applications." }
    ],
    detailSections: [
      {
        id: "core-specs",
        title: "Technical Specifications",
        description: "Standard configurations for high-performance edge computing.",
        stats: [
          { label: "AI Analysis", value: "16-CH HD" },
          { label: "Memory", value: "Up to 16GB" },
          { label: "Storage", value: "64GB eMMC" },
          { label: "Decode", value: "16x 1080P" }
        ],
        bullets: [
          "8-core ARM CA53 Processor @ 4266Mbps LPDDR4",
          "H.264/H.265 Hardware Codec supporting 8K/4K resolutions",
          "ISP 4.0 with 2x 8MP@30fps, 2-frame HDR, and 3DNR support",
          "Wide variety of interfaces: HDMI 2.0, CAN, SDIO, 4x UART, 4x I2C"
        ]
      }
    ]
  }
};

// Additional Model Specifics for SM9 (Table data)
export const SM9_VARIANTS = [
  {
    model: 'SM9 16-ENC-28',
    memory: '16GB LPDDR4',
    storage: '64GB eMMC 5.1',
    temp: '-20°C to +70°C'
  },
  {
    model: 'SM9 16-ENC-A8',
    memory: '8GB LPDDR4',
    storage: '32GB eMMC 5.1',
    temp: 'Standard: -20°C to +70°C / Industrial: -40°C to +85°C'
  }
];
