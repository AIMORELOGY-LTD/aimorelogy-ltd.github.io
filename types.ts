
export interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  author: string;
  image: string;
  content?: string[]; // Added array of strings for paragraphs
}

export enum RoutePath {
  HOME = '/',
  PRODUCT_AFC = '/products/afc-v1/',
  SOLUTION_AI_CAMERA = '/solutions/ai-camera/',
  SOLUTION_CAMERA_CUSTOMIZATION = '/solutions/camera-customization/',
  TECHNOLOGY_AI_TRACKING = '/technology/ai-tracking/',
  TECHNOLOGY_DSHOT = '/technology/control-protocol/',
  BLOG = '/blog/',
  CAREERS = '/careers/',
  CONTACT = '/contact/',
  ABOUT = '/about/',
  PRODUCT_SM9 = '/products/computing-module/sm9/',
  PRIVACY = '/legal/privacy-policy/',
  TERMS = '/legal/terms-of-service/',
  COOKIES = '/legal/cookie-preferences/',
}
