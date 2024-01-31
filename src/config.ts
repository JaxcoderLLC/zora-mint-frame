import { getFrameMetadata } from '@coinbase/onchainkit';
import { zora } from 'viem/chains';

export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL;

export const CHAIN = zora;
export const CONTRACT_ADDRESS = '0x1ce20b39466bb822510a3b30bbd175396589f79b';
export const TOKEN_ID = 1n; // First collection is 1

export const FRAME_METADATA = getFrameMetadata({
  buttons: ['Fund Public Goods 🌱'],
  image: `${SITE_URL}/opengraph-image.png`,
  post_url: `${SITE_URL}/api/frame`,
});
