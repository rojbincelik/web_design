// js/storage.js
const FAV_KEY = 'travel-explorer:favourites';
const MSG_KEY = 'travel-explorer:messages';

function read(key, fallback) {
  try {
    const raw = localStorage.getItem(key);
    return raw === null ? fallback : JSON.parse(raw);
  } catch {
    return fallback;
  }
}

function write(key, value) {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch {
    // storage full or disabled (e.g. private mode) – fail silently
  }
}

export function getFavourites() {
  return read(FAV_KEY, []);
}

export function isFavourite(slug) {
  return getFavourites().includes(slug);
}

export function toggleFavourite(slug) {
  const favs = getFavourites();
  const next = favs.includes(slug)
    ? favs.filter(s => s !== slug)
    : [...favs, slug];
  write(FAV_KEY, next);
  return next.includes(slug);
}

export function saveMessage(message) {
  const list = read(MSG_KEY, []);
  list.push({ ...message, sentAt: new Date().toISOString() });
  write(MSG_KEY, list);
}