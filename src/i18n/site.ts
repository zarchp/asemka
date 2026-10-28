export const WA_NUMBER = '6282124561534';
export const WA_DISPLAY = '+62 821 2456 1534';
export const WA_LOCAL = '0821 2456 1534';
export const EMAIL = 'sales@asemka.com';
export const SITE_URL = 'https://asemka.com';

export const waLink = (text: string) => `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(text)}`;
