// js/city.js
import { cities } from './data.js';
import { setResponsiveImage } from './images.js';

function createAttractionCard(place) {
  const card = document.createElement('article');
  card.className = 'card';

  const img = document.createElement('img');
  setResponsiveImage(img, place.image, place.alt);
  img.loading = 'lazy';

  const body = document.createElement('div');
  body.className = 'card-body';

  const eyebrow = document.createElement('p');
  eyebrow.className = 'eyebrow';
  eyebrow.textContent = place.category;

  const title = document.createElement('h3');
  title.textContent = place.name;

  const text = document.createElement('p');
  text.className = 'card-text';
  text.textContent = place.description;

  body.append(eyebrow, title, text);
  card.append(img, body);
  return card;
}

function renderHero(city) {
  setResponsiveImage(document.querySelector('#city-image'), city.image, city.alt, 'hero');
  document.querySelector('#city-region').textContent = city.region;
  document.querySelector('#city-name').textContent = city.name;
  document.querySelector('#city-summary').textContent = city.summary;
  document.title = `Travel Explorer – ${city.name}`;
}

function showNotFound() {
  document.querySelector('#city-hero').hidden = true;
  document.querySelector('#city-filters').hidden = true;
  document.querySelector('#city-results').hidden = true;
  document.querySelector('#not-found').hidden = false;
  document.title = 'Travel Explorer – City not found';
}

export function initCity() {
  const grid = document.querySelector('#attraction-grid');
  if (!grid) return;

  const slug = new URLSearchParams(window.location.search).get('city');
  const city = cities.find(c => c.slug === slug);

  if (!city) {
    showNotFound();
    return;
  }

  renderHero(city);

  const form = document.querySelector('.filter-bar');
  const category = document.querySelector('#category');
  const count = document.querySelector('#result-count');

  function applyFilter() {
    const filtered = category.value === 'all'
      ? city.attractions
      : city.attractions.filter(p => p.category === category.value);
    grid.replaceChildren(...filtered.map(createAttractionCard));
    count.textContent = `${filtered.length} ${filtered.length === 1 ? 'place' : 'places'} in ${city.name}`;
  }

  category.addEventListener('change', applyFilter);
  form.addEventListener('submit', event => event.preventDefault());
  applyFilter();
}