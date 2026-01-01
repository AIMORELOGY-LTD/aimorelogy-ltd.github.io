
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
  // PRODUCTS was here, but removed as the page is abandoned
  PRODUCT_AFC = '/products/afc-v1',
  SOLUTION_AI_CAMERA = '/solutions/ai-camera',
  TECHNOLOGY_AI_TRACKING = '/technology/ai-tracking',
  TECHNOLOGY_DSHOT = '/technology/control-protocol', // New Route
  BLOG = '/blog',
  // NEWS removed
  // ARTICLE_DETAIL removed
  CAREERS = '/careers', // New Route
  CONTACT = '/contact',
  ABOUT = '/about',
  PRIVACY = '/legal/privacy-policy',
  TERMS = '/legal/terms-of-service',
  COOKIES = '/legal/cookie-preferences',
}
