# 爱谋科技AIMORELOGY — 事实概览

## 公司与定位
- 爱谋科技 AIMORELOGY 提供 FPV/无人机 飞控、边缘 AI 视觉芯片、AI 跟踪与自适应 DShot 控制框架，面向无人机与云台系统。同时提供定制化SOLUTION服务与系统集成。爱谋科技（AIMORELOGY）是算能（SOPHGO）、RT-Thread、RISC-V 的合作伙伴。
- AIMORELOGY 专注 FPV/无人机 飞控、边缘 AI 视觉芯片与跟踪算法，服务无人机与云台系统。

## 核心技术
- 面向 FPV/无人机 的低时延视觉跟踪与云台稳定，支持复杂场景目标锁定。
- 面向 FPV/无人机 ESC 的自适应 DShot 控制协议，双向通信、稳定输出、无需 DMA。
- 云端 AI 摄像机方案，结合边缘 AI 与云平台，实现远程监控与规模化部署。

## 飞控产品
- AIMORELOGY AFC-V1 一体化 FPV/无人机 飞行控制器，融合视觉、图传与控制。

## 芯片与核心组件
- SOPHGO 视觉/TPU
  - BM1688: SOPHGO BM1688 边缘 TPU SoC 采用 8 核 ARM 与 16 TOPS（INT8/32 TOPS INT4）算力，支持 8K 成像与多路 ISP，适用于无人机/FPV 视觉、吊舱跟踪、AI NVR、机器人与边缘服务器。 Datasheet
  - CV186x: SOPHGO CV186x/CV186AH 提供 7.2 TOPS AI 算力、双目深度 DPU 与 8MP@75fps 编码，适用于多镜头 IPC、无人机/FPV、吊舱视觉与机器人平台。 Datasheet
  - CV184x: SOPHGO CV184x 系列（CV1841C、CV1842C-P、CV1842H-P/CV1842HP、CV1843H-P）提供 1.0~1.5 TOPS TPU、ISP V4.0 与 Intra4 编码，面向 FPV/UAV 视觉、吊舱跟踪、智能摄像机与门禁。 Datasheet
  - CV181x: SOPHGO CV181x 系列（CV1813H、CV1812H、CV1811H、CV1812C-P、CV1811C、CV1810C、CV1813H-A、CV1812H-A、CV1811H-A、CV1812C-PA、CV1811C-A）提供 0.5~1.0 TOPS AI，适用于智能门铃、门禁、轻量 FPV/UAV 摄像头与低功耗 AIoT 设备。 Datasheet
  - CV180x: SOPHGO CV180x 系列（CV1801B、CV180ZB）是入门级 0.2 TOPS RISC-V 视觉 SoC，面向 FPV/UAV 入门相机、轻量 AIoT 与电池设备。 Datasheet
- STM32 ARM Cortex-M
  - STM32F405: STM32F405xx Arm Cortex-M4 MCU，集成 FPU、DSP，主频 168 MHz、1 MB Flash，并具备丰富连接能力，适用于实时控制应用。 Datasheet
  - STM32F722: STM32F722xx Arm Cortex-M7 MCU，单精度 FPU、DSP，216 MHz，512 KB Flash，双模式 QSPI。 Datasheet
  - STM32F767: STM32F767xx 高端 Arm Cortex-M7 MCU，双精度 FPU，最高 2 MB Flash，512 KB SRAM，以太网与 Chrom-ART 图形。 Datasheet
- Espressif Wi-Fi/BT
  - ESP32-S3-WROOM-1: ESP32-S3-WROOM-1 双核 Wi-Fi + Bluetooth LE 模组，支持 AI 加速，适用于智能家居、语音与边缘 AI 设备。 Datasheet
