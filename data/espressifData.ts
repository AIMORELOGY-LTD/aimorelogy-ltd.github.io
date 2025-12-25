
import { ChipData } from './sophgoData';

export const ESPRESSIF_CHIPS: Record<string, ChipData> = {
  'esp32s3': {
    id: 'esp32s3',
    name: 'ESP32-S3-WROOM-1',
    series: 'WROOM',
    tagline: '2.4 GHz Wi-Fi & Bluetooth 5 (LE) Module',
    metaTitle: 'Espressif ESP32-S3-WROOM-1 Wi-Fi & Bluetooth Module for AIoT | AIMORELOGY',
    metaDescription: 'ESP32-S3-WROOM-1 is a dual-core Wi-Fi + Bluetooth LE module with AI acceleration for smart home, voice, and edge AI devices.',
    description: 'A powerful, generic Wi-Fi + Bluetooth LE MCU module built around the ESP32-S3 series of SoCs, featuring AI acceleration and rich peripherals.',
    longDescription: [
      "The ESP32-S3-WROOM-1 and ESP32-S3-WROOM-1U are two powerful, generic Wi-Fi + Bluetooth LE MCU modules that are built around the ESP32-S3 series of SoCs. At the core of the modules is a dual-core 32-bit Xtensa LX7 microprocessor operating at up to 240 MHz.",
      "On top of a rich set of peripherals, the acceleration for neural network computing and signal processing workloads provided by the SoC make the modules an ideal choice for a wide variety of application scenarios related to AI and Artificial Intelligence of Things (AIoT), such as wake word detection, speech command recognition, face detection and recognition, smart home, smart appliances, smart control panels, and smart speakers.",
      "ESP32-S3-WROOM-1 comes with a PCB antenna. ESP32-S3-WROOM-1U comes with an external antenna connector. They feature up to 16 MB of Quad SPI flash and optional PSRAM support, enabling robust performance for demanding edge applications."
    ],
    highlights: [
      'Xtensa Dual-Core 32-bit LX7 @ 240 MHz',
      'AI Acceleration for Neural Networks',
      '2.4 GHz Wi-Fi (802.11b/g/n) & Bluetooth 5 (LE)',
      'Rich Peripherals: 36 GPIOs, SPI, LCD, Camera, USB-OTG'
    ],
    specs: [
      { category: 'Processor', key: 'CPU', value: 'Dual-core Xtensa LX7 up to 240 MHz' },
      { category: 'AI', key: 'Acceleration', value: 'Vector instructions for NN & Signal Processing' },
      { category: 'Wireless', key: 'Wi-Fi', value: '802.11b/g/n, up to 150 Mbps' },
      { category: 'Wireless', key: 'Bluetooth', value: 'Bluetooth 5, Bluetooth Mesh' },
      { category: 'Memory', key: 'Flash', value: 'Up to 16 MB Quad SPI' },
      { category: 'Memory', key: 'PSRAM', value: 'Up to 16 MB (Optional)' },
      { category: 'Interface', key: 'GPIO', value: '36 GPIOs' },
      { category: 'Interface', key: 'USB', value: 'Full-speed USB 2.0 OTG' },
      { category: 'Power', key: 'Supply', value: '3.0 ~ 3.6 V' },
      { category: 'Environment', key: 'Temp', value: '-40 to 85 °C (Optional 105 °C)' }
    ],
    applications: [
      { title: 'Smart Home', image: '/Smart Home.webp' },
      { title: 'Industrial Automation', image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=400' },
      { title: 'Health Care', image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=400' },
      { title: 'Speech Recognition', image: 'https://images.unsplash.com/photo-1589254065878-42c9da997008?auto=format&fit=crop&q=80&w=400' }
    ],
    detailedFeatures: [
      { title: "AI & DSP Acceleration", description: "The Xtensa LX7 microprocessor supports vector instructions, providing acceleration for neural network computing and signal processing." },
      { title: "Comprehensive Connectivity", description: "Integrated 2.4 GHz Wi-Fi and Bluetooth 5 (LE) with Long Range support, ensuring reliable communication for IoT devices." },
      { title: "Rich Peripheral Set", description: "Includes SPI, I2S, I2C, PWM, RMT, ADC, UART, SD/MMC host, TWAI (ISO 11898-1), and a full-speed USB 2.0 OTG interface." }
    ],
    faqs: [
      { question: "What is the operating temperature range?", answer: "Standard versions operate from -40 to 85 °C. The H4 series operates up to 105 °C." },
      { question: "What is the difference between WROOM-1 and 1U?", answer: "ESP32-S3-WROOM-1 uses an on-board PCB antenna, while WROOM-1U has a connector for an external antenna." }
    ]
  }
};
