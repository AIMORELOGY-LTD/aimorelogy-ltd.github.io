
import { ChipData } from './sophgoData';

export const STM32_CHIPS: Record<string, ChipData> = {
    'stm32f405': {
      id: 'stm32f405',
      name: 'STM32F405',
      series: 'VISION', // Reusing series tag for layout, though it's an MCU
      tagline: 'High-Performance Foundation for Advanced Edge Control',
      metaTitle: 'STM32F405 High-Performance Arm Cortex-M4 MCU | AIMORELOGY',
      metaDescription: 'STM32F405xx Arm Cortex-M4 MCU with FPU, DSP, 168 MHz performance, 1 MB Flash, and rich connectivity for real-time control applications.',
      description: 'High-performance Arm Cortex-M4 microcontroller running up to 168 MHz with integrated FPU and DSP.',
      longDescription: [
          "The STM32F405xx family is based on the high-performance Arm® Cortex®-M4 32-bit RISC core operating at a frequency of up to 168 MHz. The Cortex-M4 core features a Floating Point Unit (FPU) single precision which supports all Arm single-precision data-processing instructions and data types. It also implements a full set of DSP instructions and a Memory Protection Unit (MPU) which enhances application security.",
          "The series incorporates high-speed embedded memories, including up to 1 Mbyte of Flash memory and up to 192 Kbytes of SRAM. This includes 64 Kbytes of CCM (Core Coupled Memory) data RAM, optimized for high-speed data processing without wait states. Additionally, 4 Kbytes of backup SRAM are provided to retain data in the lowest power modes.",
          "High-performance analog capabilities include three 12-bit ADCs capable of 2.4 MSPS, or up to 7.2 MSPS in triple interleaved mode. Two 12-bit DACs and up to 17 timers (including 16-bit and 32-bit advanced-control timers for motor control) provide robust support for complex control systems.",
          "Rich connectivity options are a hallmark of the F405, featuring three I2C interfaces, three SPIs, and two full-duplex I2S interfaces. Communication is further enhanced by four USARTs and two UARTs supporting up to 10.5 Mbit/s, alongside dual CAN 2.0B interfaces and SDIO support.",
          "The STM32F405xx targets industrial, medical, and consumer applications requiring high compute performance and rich connectivity in a power-efficient package. With multiple low-power modes and a wide supply voltage range (1.8V to 3.6V), it is the ideal foundation for the next generation of intelligent edge controllers."
      ],
      highlights: [
        'Core: Arm Cortex-M4 32-bit with FPU & DSP',
        'Speed: 168 MHz / 210 DMIPS High Performance',
        'Memory: 1 MB Flash / 192 KB SRAM + 64 KB CCM',
        'Analog: 3x 12-bit ADC (Up to 7.2 MSPS Interleaved)',
        'USB: Dual OTG (Full Speed & High Speed with ULPI)',
        'Package: Compact LQFP64 to LQFP144 & WLCSP90'
      ],
      detailedFeatures: [
          { title: "Arm Cortex-M4 Core", description: "Features a single-precision FPU and DSP instructions for advanced signal processing and real-time control algorithms." },
          { title: "ART Accelerator", description: "ST's Adaptive Real-Time memory accelerator allows 0-wait state execution from Flash at up to 168 MHz." },
          { title: "Interleaved ADCs", description: "Three 12-bit ADCs can be interleaved to achieve a combined sampling rate of 7.2 MSPS for high-speed signal capture." },
          { title: "Advanced Timers", description: "Up to 17 timers including two 32-bit timers and advanced PWM timers dedicated to motor control and power conversion." },
          { title: "Rich Connectivity", description: "Integrated dual CAN 2.0B, SDIO, and dual USB OTG interfaces for comprehensive system communication." },
          { title: "Flexible Memory", description: "Support for external memory interfaces (FSMC) including SRAM, PSRAM, NOR, and NAND flash expansion." }
      ],
      detailSections: [
        {
          id: "performance",
          title: "Computational Power",
          description: "Optimized for high-speed execution and deterministic real-time response.",
          stats: [
            { label: "Frequency", value: "168 MHz" },
            { label: "Performance", value: "210 DMIPS" },
            { label: "Efficiency", value: "1.25 DMIPS/MHz" },
            { label: "FPU", value: "Single Precision" }
          ],
          bullets: [
            "Hardware DSP instructions for efficient signal processing.",
            "Adaptive Real-Time (ART) Accelerator for zero-wait Flash execution.",
            "Memory Protection Unit (MPU) for robust system security."
          ]
        },
        {
          id: "analog-timers",
          title: "Analog & Control",
          description: "High-precision analog peripherals and sophisticated timing units for complex automation.",
          bullets: [
            "Triple 12-bit ADC: 2.4 MSPS individual, 7.2 MSPS interleaved.",
            "Dual 12-bit DAC: Independent channels for signal generation.",
            "17x Timers: Including 2x 32-bit timers and advanced PWM for motor control.",
            "LCD Interface: Support for 8080/6800 parallel modes."
          ]
        },
        {
          id: "connectivity",
          title: "System Connectivity",
          description: "A wide array of digital interfaces ensuring compatibility with industrial and consumer standards.",
          bullets: [
            "Dual USB OTG: Full Speed and High Speed (with ULPI) support.",
            "Dual CAN 2.0B: For reliable automotive and industrial networking.",
            "Rich Serial: 6x USART/UART (10.5 Mbit/s), 3x I2C, 3x SPI.",
            "Storage: Dedicated SDIO interface for high-speed flash cards."
          ]
        },
        {
          id: "variant-comparison",
          title: "STM32F405 Variant Selection",
          description: "Choose the package and memory configuration that fits your footprint and compute needs.",
          table: {
            headers: ["Part Number", "Flash (KB)", "Package", "GPIO", "ADC Channels"],
            rows: [
              ["STM32F405RG", "1024", "LQFP64", "51", "16"],
              ["STM32F405VG", "512", "LQFP100", "82", "16"],
              ["STM32F405ZG", "1024", "LQFP144", "114", "24"],
              ["STM32F405OG", "512", "WLCSP90", "72", "13"],
              ["STM32F405OE", "512", "WLCSP90", "72", "13"]
            ],
            note: "FSMC availability depends on package pin count. High pin-count packages offer full external memory support."
          }
        }
      ],
      specs: [
        { category: 'Core', key: 'CPU', value: 'Arm Cortex-M4 32-bit with FPU, DSP, MPU' },
        { category: 'Core', key: 'Max frequency', value: 'Up to 168 MHz' },
        { category: 'Core', key: 'Performance', value: '210 DMIPS (1.25 DMIPS/MHz)' },
        { category: 'Memory', key: 'Flash', value: '512 KB or 1 MB' },
        { category: 'Memory', key: 'SRAM', value: 'Up to 192 KB (112+16+64KB CCM)' },
        { category: 'Analog', key: 'ADC', value: '3x 12-bit, 2.4 MSPS (7.2 MSPS Triple Interleaved)' },
        { category: 'Analog', key: 'DAC', value: '2x 12-bit' },
        { category: 'Connectivity', key: 'USB', value: 'OTG FS + OTG HS (ULPI)' },
        { category: 'Connectivity', key: 'CAN', value: '2x CAN 2.0B' },
        { category: 'Connectivity', key: 'Serial', value: '4x USART + 2x UART, 3x I2C, 3x SPI' },
        { category: 'Interface', key: 'FSMC', value: 'SRAM/PSRAM/NOR/NAND (Package dependent)' },
        { category: 'Power', key: 'Voltage', value: '1.8 to 3.6 V' }
      ],
      applications: [
        { title: 'Motor Control', image: '/Robot Platform.webp' },
        { title: 'Industrial Automation', image: '/Edge Computing Boxes.webp' },
        { title: 'Medical Instrumentation', image: '/Smart Cameras.webp' },
        { title: 'Consumer Electronics', image: '/Smart Home.webp' },
        { title: 'Flight Controllers', image: '/Drones.webp' },
        { title: 'Robotics', image: '/Robotics.webp' }
      ],
      faqs: [
        { question: "Does the STM32F405 support Ethernet?", answer: "No, the STM32F405 does not include an Ethernet MAC. For Ethernet support, please refer to the STM32F407 or F417 series." },
        { question: "What is the benefit of the ART Accelerator?", answer: "The Adaptive Real-Time (ART) memory accelerator allows the CPU to execute instructions from Flash memory with 0-wait states at the full 168 MHz frequency, maximizing performance." },
        { question: "Is the F405 suitable for flight controllers?", answer: "Yes, its high frequency, FPU, and rich set of timers/peripherals make it a popular choice for flight control systems (e.g., in FPV drones)." }
      ]
    }
};
