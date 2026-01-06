# AIMORELOGY — Основные факты

## Компания и позиционирование
- AIMORELOGY создает FPV/UAV контроллеры, AI-чипы, AI-трекинг и DShot для дронов. Индивидуальные решения и интеграция. Партнеры SOPHGO, RT-Thread и RISC-V.
- AIMORELOGY разрабатывает FPV/UAV контроллеры полета, чипы периферийного видения и технологии слежения для дронов и подвесных систем.

## Ключевые технологии
- Визуальное отслеживание с малой задержкой для миссий FPV/UAV, стабилизация подвеса и автономное отслеживание цели.
- Adaptive DShot протокол управления для FPV/UAV ESC со стабильным двунаправленным управлением двигателем и реализацией без DMA.
- Стек облачных камер, сочетающий периферийное зрение с масштабируемой облачной оркестрацией и мониторингом.

## Контроллеры полёта
- AIMORELOGY AFC-V1 — это универсальный FPV/UAV контроллер полета, объединяющий зрение, видеосвязь и управление.

## Чипы и ключевые компоненты
- SOPHGO Vision/TPU
  - BM1688: SOPHGO BM1688 объединяет 8-ядерный ARM и 16 TOPS (32 TOPS INT4) с 8K-ISP и многосенсорной обработкой для дронов/FPV, подвесов, AI NVR, робототехники и edge-серверов. Datasheet
  - CV186x: SOPHGO CV186x/CV186AH обеспечивает 7.2 TOPS AI, стерео-DPU глубины и кодирование 8MP@75fps для многолинзовых IPC, дронов/FPV, подвесов и робототехники. Datasheet
  - CV184x: Серия SOPHGO CV184x (CV1841C, CV1842C-P, CV1842H-P/CV1842HP, CV1843H-P) дает 1.0-1.5 TOPS TPU, ISP V4.0 и Intra4 для FPV/UAV, подвесов, камер и контроля доступа. Datasheet
  - CV181x: Серия SOPHGO CV181x (CV1813H, CV1812H, CV1811H, CV1812C-P, CV1811C, CV1810C, CV1813H-A, CV1812H-A, CV1811H-A, CV1812C-PA, CV1811C-A) обеспечивает 0.5-1.0 TOPS AI для умных дверных звонков, контроля доступа, легких камер FPV/UAV и энергоэффективного AIoT. Datasheet
  - CV180x: SOPHGO CV180x (CV1801B, CV180ZB) — доступный 0.2 TOPS RISC-V vision SoC для стартовых FPV/UAV камер, устройств на батарее и легкого AIoT. Datasheet
- STM32 ARM Cortex-M
  - STM32F405: STM32F405xx MCU Arm Cortex-M4 с FPU, DSP, частотой 168 MHz, 1 MB Flash и богатыми интерфейсами для приложений реального времени. Datasheet
  - STM32F722: STM32F722xx MCU Arm Cortex-M7 с SFPU, DSP, 216 MHz, 512 KB Flash и dual-mode QSPI. Datasheet
  - STM32F767: STM32F767xx высококлассный MCU Arm Cortex-M7 с DPFPU, до 2 MB Flash, 512 KB SRAM, Ethernet и графикой Chrom-ART. Datasheet
- Espressif Wi-Fi/BT
  - ESP32-S3-WROOM-1: ESP32-S3-WROOM-1 — это двухъядерный модуль Wi-Fi + Bluetooth LE с ускорением AI для умного дома, голосовых и периферийных AI устройств. Datasheet
