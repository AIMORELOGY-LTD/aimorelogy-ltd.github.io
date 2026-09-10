// Specifications transcribed from the supplied 2026-09-09 OVIS handoff.
// TOPS is the INT8 rating; capture, encoding and inference rates are separate.
export const OVIS_ASSETS = '/products/ovis/';
export const OVIS_KICKSTARTER_URL =
  'https://www.kickstarter.com/projects/aimorelogy/ovis-open-source-15tops-edge-ai-camera-module';

export const ovisSpecs = [
  {
    id: 'compute',
    rows: [
      { key: 'soc', value: 'CVITEK CV1842H-P' },
      { key: 'cpu', value: 'Arm Cortex-A53 @ 1.1 GHz + RISC-V C906 @ 800 MHz' },
      { key: 'tpu', value: '1.5 TOPS @ INT8', detail: 'precision' },
      { key: 'memory', value: 'SiP DDR3 2Gb (256MB)' },
      { key: 'storage', value: '256MB NAND Flash' },
      { key: 'os', value: 'Linux' },
    ],
  },
  {
    id: 'imaging',
    rows: [
      { key: 'sensor', value: 'SC235HAI' },
      { key: 'capture', value: '1920 × 1080 @ 60 FPS' },
      { key: 'lens', value: 'YT10116-HD+IR0623' },
      { key: 'optics', value: '3.9 mm · F1.0 · M12 × P0.5', detail: 'focus' },
      { key: 'fov', value: 'H 81.3° / V 44.3° / D 95.5°', detail: 'fovNote' },
      { key: 'processing', value: 'ISP / AI-BNR' },
    ],
  },
  {
    id: 'connection',
    rows: [
      { key: 'codec', value: 'H.265 / H.264 / MJPEG' },
      { key: 'encoding', value: '8MP @ 25 FPS', detail: 'encodingNote' },
      { key: 'usb', value: 'USB 2.0 · 4Pin SH0.8 · UVC / NCM' },
      { key: 'ethernet', value: '100 Mbps · 4Pin SH1.0' },
      { key: 'uart', value: '2 × UART' },
      { key: 'stream', value: 'RTSP' },
    ],
  },
  {
    id: 'physical',
    rows: [
      { key: 'moduleSize', value: '28 × 28 × 31.7 mm' },
      { key: 'coreSize', value: '20 × 20 × 5.7 mm' },
      { key: 'operation', text: 'operationValue' },
      { key: 'cvbs', value: 'MS7024', detail: 'cvbsNote' },
      { key: 'custom', value: 'Wi-Fi / IMU / I/O', detail: 'customNote' },
    ],
  },
];

export const ovisDemos = [
  { id: 'people', fps: 30 },
  { id: 'drone', fps: 55 },
  { id: 'street', fps: 55 },
  { id: 'fpv', fps: 55 },
];

export const ovisBoards = [
  {
    id: 'core',
    chip: 'CV1842H-P',
    ports: ['USB 2.0 · 4Pin SH0.8', '50Pin B2B'],
  },
  {
    id: 'sensor',
    chip: 'SC235HAI',
    ports: ['UART · 4Pin SH1.0', 'Ethernet · 4Pin SH1.0', '50Pin B2B'],
  },
  {
    id: 'cvbs',
    chip: 'MS7024',
    ports: ['CVBS · 3Pin SH0.8', 'UART · 4Pin SH0.8', '50Pin B2B'],
  },
];
