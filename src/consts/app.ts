import { Space_Grotesk as SpaceGrotesk } from 'next/font/google';
import { Color } from '../styles/Color';

export const MAIN_FONT = SpaceGrotesk({
  subsets: ['latin'],
  weight: ['400', '700'], // Add weights here (e.g., regular 400 and bold 700)
  variable: '--font-main',
  preload: true,
  fallback: ['sans-serif'],
});
export const APP_NAME = 'Lumia Bridge';
export const APP_DESCRIPTION = 'Lumia Instant Bridge';
export const APP_URL = 'https://bridge.lumia.org';
export const BRAND_COLOR = Color.primary;
export const BACKGROUND_COLOR = Color.primary;
export const BACKGROUND_IMAGE = 'url(/backgrounds/background.jpg)';
export const PROXY_DEPLOYED_URL = 'https://proxy.hyperlane.xyz';
