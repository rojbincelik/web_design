// js/images.js
// Every photo exists in two sizes: name.jpg (1600px) and name-800.jpg (800px).
// The browser picks the smaller file when the rendered width and screen
// density do not need the large one (MDN: Responsive images).

const CARD_SIZES = '(min-width: 64em) 33vw, (min-width: 48em) 50vw, 100vw';
const HERO_SIZES = '(min-width: 64em) 60vw, (min-width: 48em) 50vw, 100vw';

export function setResponsiveImage(img, src, alt, variant = 'card') {
  const base = src.replace(/\.jpg$/, '');
  img.src = src;                                   // fallback for browsers without srcset
  img.srcset = `${base}-800.jpg 800w, ${src} 1600w`;
  img.sizes = variant === 'hero' ? HERO_SIZES : CARD_SIZES;
  img.alt = alt;
}
