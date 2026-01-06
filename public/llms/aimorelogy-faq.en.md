# AIMORELOGY ? FAQ

## BM1688
- Q: Can BM1688 run LLM models?
  A: Yes, BM1688 is optimized for edge deployment of quantized LLMs and VLMs, leveraging its high INT8 and INT4 compute power.
- Q: How many camera inputs does it support?
  A: It supports up to 6 sensors simultaneously through time-division multiplexing ISP processing.

## CV186x
- Q: What is the DPU engine used for?
  A: The DPU is a hardware-accelerated Binocular Depth Engine used for calculating high-precision depth maps, which is essential for robotic navigation and obstacle avoidance.
- Q: How many cores does the CV186x have?
  A: The CV186x (CV186AH) features a 6-core ARM Cortex-A53 architecture for powerful multitasking.

## CV184x
- Q: What is the advantage of Intra4 encoding?
  A: Intra4 uses smaller block encoding to better handle details and textures in complex motion scenes, offering higher compression and clarity at low bitrates.
- Q: Is CV184 compatible with CV181?
  A: Yes, CV184 is pin-to-pin compatible with the CV181 series and shares the same SDK, ISP tuning tools, and AI development environment.
- Q: What models does the TPU support?
  A: It supports standard frameworks (Caffe/TensorFlow/Pytorch/ONNX) and specifically optimizes ResNet, YOLO, MobileNet, and OpenCLIP models.

## CV181x
- Q: What is the difference between CV181 and CV181-A?
  A: The CV181 series uses a Dual RISC-V C906 architecture, while the CV181-A series features an ARM Cortex-A53 + RISC-V C906 combination for broader software compatibility.
- Q: Does CV181 support battery-powered operation?
  A: Yes, it is designed with a low-power architecture and fast boot capabilities (under 500ms), making it ideal for battery-operated smart doorbells and locks.

## CV180x
- Q: Is CV180 software compatible with CV181?
  A: Yes, both series share the same SDK, ISP settings, and intelligent reference solutions, allowing for easy product tiering.
- Q: Which competing chips can CV180 replace?
  A: It is designed to compete with and replace chips such as HI3516EV300, SSC337DE, T31 X/ZX/A, and FH8856V210.

## STM32F405
- Q: Does the STM32F405 support Ethernet?
  A: No, the STM32F405 does not include an Ethernet MAC. For Ethernet support, please refer to the STM32F407 or F417 series.
- Q: What is the benefit of the ART Accelerator?
  A: The Adaptive Real-Time (ART) memory accelerator allows the CPU to execute instructions from Flash memory with 0-wait states at the full 168 MHz frequency, maximizing performance.
- Q: Is the F405 suitable for flight controllers?
  A: Yes, its high frequency, FPU, and rich set of timers/peripherals make it a popular choice for flight control systems (e.g., in FPV drones).

## STM32F722
- Q: What is the key difference between F722 and F723?
  A: The STM32F722 requires an external ULPI PHY for USB High Speed operation, whereas the STM32F723 integrates the High Speed PHY on-chip.
- Q: What are TCMs used for?
  A: Tightly Coupled Memories (TCM) are specialized SRAM areas linked directly to the CPU, allowing for zero-wait state execution and data access, critical for real-time tasks.

## STM32F767
- Q: What is the benefit of the Double-Precision FPU?
  A: The DPFPU allows the MCU to handle 64-bit floating-point numbers in hardware, providing much higher precision and speed for complex control loops and audio processing compared to standard 32-bit FPUs.
- Q: Does it support high-resolution displays?
  A: Yes, the F767 includes an LCD-TFT controller (LTDC) and Chrom-ART hardware acceleration, capable of driving displays up to XGA (1024x768) resolution efficiently.

## ESP32-S3-WROOM-1
- Q: What is the operating temperature range?
  A: Standard versions operate from -40 to 85 °C. The H4 series operates up to 105 °C.
- Q: What is the difference between WROOM-1 and 1U?
  A: ESP32-S3-WROOM-1 uses an on-board PCB antenna, while WROOM-1U has a connector for an external antenna.
