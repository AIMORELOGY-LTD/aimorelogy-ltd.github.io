# 爱谋科技AIMORELOGY — 常见问题

## BM1688
- Q: BM1688 是否可以运行 LLM 模型？
  A: 可以。BM1688 针对边缘端量化 LLM/VLM 进行了优化，利用 INT8/INT4 算力实现本地推理。
- Q: 支持多少路摄像头输入？
  A: 通过时分复用 ISP 最多支持 6 路传感器同时接入。

## CV186x
- Q: DPU 引擎用于什么？
  A: DPU 是硬件加速的双目深度引擎，用于生成高精度深度图，是机器人导航与避障的关键。
- Q: CV186x 有多少个 CPU 核心？
  A: CV186x（CV186AH）采用 6 核 ARM Cortex-A53 架构。

## CV184x
- Q: Intra4 编码的优势是什么？
  A: Intra4 采用更小的块内编码，更好保留复杂纹理细节，在低码率下提供更高压缩率与清晰度。
- Q: CV184 与 CV181 是否兼容？
  A: 是。CV184 与 CV181 系列引脚兼容，并共享 SDK、ISP 调校工具与 AI 开发环境。
- Q: TPU 支持哪些模型？
  A: 支持 Caffe/TensorFlow/PyTorch/ONNX 等主流框架，并针对 ResNet、YOLO、MobileNet 与 OpenCLIP 优化。

## CV181x
- Q: CV181 与 CV181-A 有什么区别？
  A: CV181 采用双 RISC-V C906 架构，CV181-A 采用 ARM Cortex-A53 + RISC-V C906 组合，软件兼容性更广。
- Q: CV181 是否适合电池设备？
  A: 是。其低功耗与快启动设计（小于 500ms）非常适合电池供电的智能门铃与门锁。

## CV180x
- Q: CV180 与 CV181 的软件是否兼容？
  A: 是。两者共用 SDK、ISP 设置与智能参考方案，便于产品分级与迭代。
- Q: CV180 可替代哪些竞品芯片？
  A: 定位替代 HI3516EV300、SSC337DE、T31 X/ZX/A、FH8856V210 等。

## STM32F405
- Q: STM32F405 是否支持 Ethernet？
  A: 不支持，STM32F405 不包含 Ethernet MAC。如需 Ethernet，请参考 STM32F407 或 F417 系列。
- Q: ART 加速器的优势是什么？
  A: Adaptive Real-Time (ART) 存储加速器允许 CPU 在 Flash 中以 0 等待状态运行至 168 MHz，最大化性能。
- Q: F405 适合做飞行控制器吗？
  A: 适合，其高频率、FPU 与丰富定时器/外设，使其成为飞控系统（如 FPV 无人机）常用选择。

## STM32F722
- Q: F722 与 F723 的主要区别是什么？
  A: STM32F722 需要外部 ULPI PHY 才能实现 USB High Speed，而 STM32F723 集成了 High Speed PHY。
- Q: TCM 用于什么？
  A: TCM（紧耦合存储器）是直接连接 CPU 的专用 SRAM，可实现零等待执行和数据访问，是实时任务关键。

## STM32F767
- Q: 双精度 FPU 的优势是什么？
  A: DPFPU 可在硬件中处理 64-bit 浮点数，为复杂控制回路与音频处理提供更高精度与速度。
- Q: 是否支持高分辨率显示？
  A: 支持，F767 集成 LTDC 与 Chrom-ART，可高效驱动最高 XGA (1024x768) 分辨率显示。

## ESP32-S3-WROOM-1
- Q: What is the operating temperature range?
  A: Standard versions operate from -40 to 85 °C. The H4 series operates up to 105 °C.
- Q: What is the difference between WROOM-1 and 1U?
  A: ESP32-S3-WROOM-1 uses an on-board PCB antenna, while WROOM-1U has a connector for an external antenna.
