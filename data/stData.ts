
import { ChipData } from './sophgoData';

export const STM32_CHIPS: Record<string, ChipData> = {
    'stm32f405': {
      id: 'stm32f405',
      name: 'STM32F405',
      series: 'VISION', // Reusing series tag for layout, though it's an MCU
      tagline: 'High-Performance Foundation for Advanced Edge Control',
      metaTitle: 'STM32F405 High-Performance Arm Cortex-M4 MCU | AIMORELOGY',
      metaDescription: 'STM32F405xx Arm Cortex-M4 MCU with FPU, DSP, 168 MHz performance, 1 MB Flash, and rich connectivity for real-time control applications. Datasheet',
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
    },
    'stm32f722': {
      id: 'stm32f722',
      name: 'STM32F722',
      series: 'VISION',
      tagline: 'High-Performance Cortex-M7 with Rich Connectivity',
      metaTitle: 'STM32F722 High-Performance Arm Cortex-M7 MCU | AIMORELOGY',
      metaDescription: 'STM32F722xx Arm Cortex-M7 MCU with single-precision FPU, DSP, 216 MHz performance, 512 KB Flash, and dual-mode QSPI. Datasheet',
      description: 'High-performance Arm Cortex-M7 microcontroller running up to 216 MHz with integrated L1 cache.',
      longDescription: [
          "The STM32F722xx family is based on the high-performance Arm® Cortex®-M7 32-bit RISC core operating at a frequency of up to 216 MHz. The Cortex-M7 core features a single floating point unit (SFPU) which supports all Arm® single-precision data-processing instructions and data types. It also implements a full set of DSP instructions and a memory protection unit (MPU) which enhances application security.",
          "The series incorporates high-speed embedded memories with up to 512 Kbytes of Flash memory and 256 Kbytes of SRAM. This includes 64 Kbytes of Data TCM and 16 Kbytes of Instruction TCM for maximum real-time performance. The architecture also includes 8 KB of instruction cache and 8 KB of data cache to minimize memory access latency.",
          "High-performance analog capabilities include three 12-bit ADCs capable of 2.4 MSPS, or up to 7.2 MSPS in triple interleaved mode. Two 12-bit DACs and up to 18 timers (including 16-bit and 32-bit timers) provide comprehensive support for real-time control applications.",
          "Connectivity is a key strength of the F722, featuring dual-mode Quad-SPI, five SPIs (three with simplex I2S), three I2Cs, and two SAI interfaces. Communication is further expanded by four USARTs and four UARTs supporting up to 27 Mbit/s, alongside dual USB 2.0 OTG (FS/HS) support.",
          "The STM32F722xx targets advanced consumer and industrial applications requiring high compute performance and rich connectivity in compact packages. With multiple low-power modes and a wide supply voltage range (1.7V to 3.6V), it provides a robust platform for sophisticated edge processing."
      ],
      highlights: [
        'Core: Arm Cortex-M7 32-bit with FPU & DSP',
        'Speed: 216 MHz / 462 DMIPS High Performance',
        'Cache: 8 KB I-Cache + 8 KB D-Cache',
        'Storage: Dual-mode Quad-SPI & 512 KB Flash',
        'USB: Dual OTG (FS & HS/FS with dedicated DMA)',
        'I/O: Up to 140 I/Os with fast 108 MHz switching'
      ],
      detailedFeatures: [
          { title: "Arm Cortex-M7 Core", description: "Delivers 462 DMIPS at 216 MHz, featuring a single-precision FPU and high-speed L1 cache for server-class MCU performance." },
          { title: "Dual-Mode Quad-SPI", description: "Enables high-speed access to external serial Flash memory, ideal for large code or asset storage in space-constrained designs." },
          { title: "Flexible Memory Controller", description: "FMC supports a wide range of external memories including SDRAM, PSRAM, and NAND with a 32-bit wide bus." },
          { title: "Advanced DMA", description: "16-stream DMA controller with FIFO and burst support ensures efficient data movement between peripherals and memory." },
          { title: "Precision Analog", description: "Triple 12-bit ADCs with 2.4 MSPS individual sampling, plus dual 12-bit DACs for precise signal reconstruction." },
          { title: "Scalable Packages", description: "Available in versatile options from LQFP64 to large pin-count UFBGA176 and compact WLCSP100." }
      ],
      detailSections: [
        {
          id: "performance",
          title: "Computational Power",
          description: "High-frequency Cortex-M7 core with L1 cache for maximum deterministic throughput.",
          stats: [
            { label: "Frequency", value: "216 MHz" },
            { label: "Performance", value: "462 DMIPS" },
            { label: "Efficiency", value: "2.14 DMIPS/MHz" },
            { label: "L1 Cache", value: "8KB I + 8KB D" }
          ],
          bullets: [
            "Hardware DSP instructions for signal processing.",
            "Single-Precision Floating Point Unit (FPU).",
            "TCM (Tightly Coupled Memory) for zero-latency execution."
          ]
        },
        {
          id: "storage-io",
          title: "Storage & Interfaces",
          description: "Sophisticated memory expansion and high-speed digital communication.",
          bullets: [
            "Quad-SPI: Dual-mode support for high-throughput external storage.",
            "FMC: Support for SDRAM and 32-bit wide memory buses.",
            "Dual USB: Integrated FS PHY and HS support via external ULPI.",
            "Dual SDMMC: For high-speed storage card integration."
          ]
        },
        {
          id: "variant-comparison",
          title: "STM32F722 Variant Selection",
          description: "Select the ideal configuration for your processing and I/O density requirements.",
          table: {
            headers: ["Part Number", "Flash (KB)", "Package", "GPIO", "ADC Channels"],
            rows: [
              ["STM32F722IE", "512", "LQFP176", "140", "24"],
              ["STM32F722ZE", "512", "LQFP144", "114", "24"],
              ["STM32F722VE", "512", "LQFP100", "82", "16"],
              ["STM32F722RE", "512", "LQFP64", "50", "16"]
            ],
            note: "Performance characteristics are consistent across the family; I/O count varies by package."
          }
        }
      ],
      specs: [
        { category: 'Core', key: 'CPU', value: 'Arm Cortex-M7 with SFPU, DSP, ART' },
        { category: 'Core', key: 'Frequency', value: 'Up to 216 MHz' },
        { category: 'Cache', key: 'L1 Cache', value: '8 KB Instruction + 8 KB Data' },
        { category: 'Memory', key: 'Flash', value: 'Up to 512 KB' },
        { category: 'Memory', key: 'SRAM', value: '256 KB (inc. 64KB DTCM + 16KB ITCM)' },
        { category: 'Storage', key: 'QSPI', value: 'Dual-mode Quad-SPI' },
        { category: 'Analog', key: 'ADC', value: '3x 12-bit, 2.4 MSPS' },
        { category: 'Connectivity', key: 'USB', value: 'USB 2.0 FS + HS (via ULPI)' },
        { category: 'Connectivity', key: 'Serial', value: '8x UART/USART, 3x I2C, 5x SPI' },
        { category: 'Connectivity', key: 'SAI', value: '2x Serial Audio Interface' },
        { category: 'Interface', key: 'FMC', value: 'SRAM/SDRAM/NOR/NAND (32-bit)' },
        { category: 'I/O', key: 'Fast I/O', value: 'Up to 108 MHz' }
      ],
      applications: [
        { title: 'Advanced Motor Control', image: '/Robot Platform.webp' },
        { title: 'Flight Controllers', image: '/Drones.webp' },
        { title: 'Audio Processing', image: '/Smart Cameras.webp' },
        { title: 'Home Automation', image: '/Smart Home.webp' },
        { title: 'IoT Gateways', image: '/Edge Computing Boxes.webp' },
        { title: 'Robotics', image: '/Robotics.webp' }
      ],
      faqs: [
        { question: "What is the key difference between F722 and F723?", answer: "The STM32F722 requires an external ULPI PHY for USB High Speed operation, whereas the STM32F723 integrates the High Speed PHY on-chip." },
        { question: "What are TCMs used for?", answer: "Tightly Coupled Memories (TCM) are specialized SRAM areas linked directly to the CPU, allowing for zero-wait state execution and data access, critical for real-time tasks." }
      ]
    },
    'stm32f767': {
      id: 'stm32f767',
      name: 'STM32F767',
      series: 'VISION',
      tagline: 'Flagship Cortex-M7 with Advanced Graphics & Ethernet',
      metaTitle: 'STM32F767 High-End Arm Cortex-M7 MCU | AIMORELOGY',
      metaDescription: 'STM32F767xx High-end Arm Cortex-M7 MCU with double-precision FPU, up to 2 MB Flash, 512 KB SRAM, Ethernet, and Chrom-ART graphics. Datasheet',
      description: 'High-end Arm Cortex-M7 microcontroller with double-precision FPU and comprehensive connectivity.',
      longDescription: [
          "The STM32F767xx family is the pinnacle of the high-performance Arm® Cortex®-M7 based MCUs, operating at frequencies up to 216 MHz. It features a Double-Precision Floating Point Unit (DPFPU) supporting all Arm® double-precision and single-precision data-processing instructions. This makes it ideal for complex mathematical calculations and high-fidelity audio/visual processing.",
          "Boasting up to 2 Mbytes of dual-bank Flash memory and 512 Kbytes of total SRAM, the F767 includes 128 Kbytes of data TCM for critical real-time data. The expanded L1 cache (16 KB instruction + 16 KB data) ensures maximum performance when executing large software stacks from external memories or high-capacity internal Flash.",
          "The series features advanced graphics acceleration with the Chrom-ART Accelerator™ (DMA2D), a hardware JPEG codec, and a Liquid Crystal Display (LCD-TFT) controller supporting resolutions up to XGA. These features enable rich, fluid user interfaces without burdening the main CPU core.",
          "Comprehensive connectivity options include a 10/100 Ethernet MAC with IEEE 1588 support, 8- to 14-bit DCMI camera interface, and dual USB 2.0 OTG (FS/HS). It also supports up to 28 communication interfaces, including four I2Cs, six SPIs (three with simplex I2S), and three CAN interfaces.",
          "The STM32F767xx is designed for demanding industrial, consumer, and networking applications. With its extensive peripheral set, high compute density, and robust analog blocks (including DFSDM for digital filters), it represents the state-of-the-art in general-purpose microcontroller technology."
      ],
      highlights: [
        'Core: Arm Cortex-M7 with Double-Precision FPU',
        'Speed: 216 MHz / 462 DMIPS High Performance',
        'Memory: Up to 2 MB Flash & 512 KB SRAM',
        'Graphics: Chrom-ART Accelerator & JPEG Codec',
        'Ethernet: 10/100 MAC with IEEE 1588 support',
        'Vision: DCMI Camera Interface (Up to 14-bit)'
      ],
      detailedFeatures: [
          { title: "Double-Precision FPU", description: "Advanced hardware floating-point unit capable of high-accuracy 64-bit math, ideal for complex control and scientific algorithms." },
          { title: "Graphics Acceleration", description: "Chrom-ART (DMA2D) and JPEG codec significantly accelerate image manipulation and UI rendering for high-end displays." },
          { title: "Ethernet Connectivity", description: "Integrated 10/100 Ethernet MAC with IEEE 1588 hardware support for precise time synchronization in networked systems." },
          { title: "DCMI Camera Interface", description: "Digital Camera Memory Interface supports up to 14-bit parallel sensors, enabling vision capture at up to 54 Mbytes/s." },
          { title: "Large L1 Cache", description: "Industry-leading 16 KB Instruction and 16 KB Data cache maximizes throughput for large-scale application firmware." },
          { title: "High-Density I/O", description: "Available in large packages like LQFP208 and TFBGA216, offering up to 168 I/O pins for maximum system integration." }
      ],
      detailSections: [
        {
          id: "compute-graphics",
          title: "Compute & Graphics",
          description: "A powerhouse for both numerical calculation and visual representation.",
          stats: [
            { label: "Frequency", value: "216 MHz" },
            { label: "DP FPU", value: "64-bit Precision" },
            { label: "L1 Cache", value: "16KB I + 16KB D" },
            { label: "Graphics", value: "DMA2D + JPEG" }
          ],
          bullets: [
            "Double-Precision Floating Point Unit (DPFPU).",
            "Chrom-ART Accelerator™ for smooth UI animations.",
            "Hardware JPEG codec for fast image decompression."
          ]
        },
        {
          id: "connectivity-vision",
          title: "Network & Vision",
          description: "Standard-setting connectivity for the modern connected world.",
          bullets: [
            "Ethernet MAC: 10/100 with hardware timestamping.",
            "DCMI: 8- to 14-bit parallel camera interface.",
            "Dual-Mode QSPI: For high-speed serial memory expansion.",
            "Triple CAN: 3x CAN 2.0B for extensive bus networking."
          ]
        },
        {
          id: "variant-comparison",
          title: "STM32F767 Variant Selection",
          description: "Top-tier configurations for your most demanding embedded projects.",
          table: {
            headers: ["Part Number", "Flash (KB)", "Package", "GPIO", "Graphics"],
            rows: [
              ["STM32F767ZI", "2048", "LQFP144", "114", "LTDC"],
              ["STM32F767NI", "2048", "TFBGA216", "168", "LTDC"],
              ["STM32F767II", "2048", "LQFP176", "140", "LTDC"],
              ["STM32F767VI", "2048", "LQFP100", "82", "LTDC"]
            ],
            note: "All F767 variants support the full DPFPU and Chrom-ART features."
          }
        }
      ],
      specs: [
        { category: 'Core', key: 'CPU', value: 'Arm Cortex-M7 with DPFPU, DSP, ART' },
        { category: 'Core', key: 'Frequency', value: 'Up to 216 MHz' },
        { category: 'Cache', key: 'L1 Cache', value: '16 KB Instruction + 16 KB Data' },
        { category: 'Memory', key: 'Flash', value: 'Up to 2 MB (Dual Bank)' },
        { category: 'Memory', key: 'SRAM', value: '512 KB (inc. 128KB DTCM + 16KB ITCM)' },
        { category: 'Graphics', key: 'Acceleration', value: 'Chrom-ART, JPEG Codec, LTDC' },
        { category: 'Vision', key: 'Camera', value: '8- to 14-bit DCMI interface' },
        { category: 'Connectivity', key: 'Ethernet', value: '10/100 MAC with IEEE 1588' },
        { category: 'Connectivity', key: 'USB', value: 'USB 2.0 FS + HS (via ULPI)' },
        { category: 'Connectivity', key: 'CAN', value: '3x CAN 2.0B' },
        { category: 'Interface', key: 'FMC', value: 'SRAM/SDRAM/NOR/NAND (32-bit)' },
        { category: 'Analog', key: 'DFSDM', value: '8 channels / 4 filters' }
      ],
      applications: [
        { title: 'HMI & GUI Platforms', image: '/Robot Platform.webp' },
        { title: 'Video Processing', image: '/Smart Cameras.webp' },
        { title: 'Industrial Networking', image: '/Edge Computing Boxes.webp' },
        { title: 'Autonomous Robots', image: '/Robotics.webp' },
        { title: 'Smart Home Control', image: '/Smart Home.webp' },
        { title: 'Advanced UAVs', image: '/Drones.webp' }
      ],
      faqs: [
        { question: "What is the benefit of the Double-Precision FPU?", answer: "The DPFPU allows the MCU to handle 64-bit floating-point numbers in hardware, providing much higher precision and speed for complex control loops and audio processing compared to standard 32-bit FPUs." },
        { question: "Does it support high-resolution displays?", answer: "Yes, the F767 includes an LCD-TFT controller (LTDC) and Chrom-ART hardware acceleration, capable of driving displays up to XGA (1024x768) resolution efficiently." }
      ]
    }
};
