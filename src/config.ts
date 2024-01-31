import { getFrameMetadata } from '@coinbase/onchainkit';
import { base } from 'viem/chains';

export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL;

export const CHAIN = base;
export const CONTRACT_ADDRESS = '0xA92E003043FD043F958aBc9453a855733e98D015';
export const TOKEN_ID = 1n; // First collection is 1

export const FRAME_METADATA = getFrameMetadata({
  buttons: ['Fund Public Goods 🌱'],
  image: `${SITE_URL}/opengraph-image.png`,
  post_url: `${SITE_URL}/api/frame`,
});
