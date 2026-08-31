// js/destinations.js
import { cities } from './data.js';
import { isFavourite, toggleFavourite } from './storage.js';
import { setResponsiveImage } from './images.js';

function setFavState(button, cityName, saved) {
  button.setAttribute('aria-pressed', String(saved));
  button.setAttribute(
    'aria-label',
    saved ? `Remove ${cityName} from favourites` : `Add ${cityName} to favourites`
  );
  button.textContent = saved ? '♥ Saved' : '♡ Save';
}

function createCityCard(city) {
  const card = document.createElement('article');
  card.className = 'card';

  const img = document.createElement('img');
  setResponsiveImage(img, city.image, city.alt);
  img.loading = 'lazy';

  const body = document.createElement('div');
  body.className = 'card-body';

  const eyebrow = document.createElement('p');
  eyebrow.className = 'eyebrow';
  eyebrow.textContent = city.region;

  const title = document.createElement('h3');
  const link = document.createElement('a');
  link.href = `city.html?city=${city.slug}`;
  link.textContent = city.name;
  title.append(link);

  const text = document.createElement('p');
  text.className = 'card-text';
  text.textContent = city.summary;

  const fav = document.createElement('button');
  fav.type = 'button';
  fav.className = 'fav-btn';
  fav.dataset.slug = city.slug;
  setFavState(fav, city.name, isFavourite(city.slug));

  body.append(eyebrow, title, text, fav);
  card.append(img, body);
  return card;
}

function renderCards(container, list) {
  container.replaceChildren(...list.map(createCityCard));
}

function handleFavClick(event) {
  const button = event.target.closest('.fav-btn');
  if (!button) return;
  const city = cities.find(c => c.slug === button.dataset.slug);
  const saved = toggleFavourite(city.slug);
  setFavState(button, city.name, saved);
}

export function initFeatured() {
  const grid = document.querySelector('#featured-grid');
  if (!grid) return;
  renderCards(grid, cities.filter(c => c.featured).slice(0, 3));
  grid.addEventListener('click', handleFavClick);
}

export function initDestinations() {
  const grid = document.querySelector('#destination-grid');
  if (!grid) return;

  const form = document.querySelector('.filter-bar');
  const search = document.querySelector('#search');
  const region = document.querySelector('#region');
  const favOnly = document.querySelector('#favourites-only');
  const count = document.querySelector('#result-count');

  function applyFilters() {
    const term = search.value.trim().toLowerCase();
    const filtered = cities.filter(city =>
      city.name.toLowerCase().includes(term) &&
      (region.value === 'all' || city.region === region.value) &&
      (!favOnly.checked || isFavourite(city.slug))
    );
    renderCards(grid, filtered);
    count.textContent = `${filtered.length} ${filtered.length === 1 ? 'destination' : 'destinations'} found`;
  }

  search.addEventListener('input', applyFilters);
  region.addEventListener('change', applyFilters);
  favOnly.addEventListener('change', applyFilters);
  form.addEventListener('submit', event => event.preventDefault());
  grid.addEventListener('click', event => {
    handleFavClick(event);
    if (favOnly.checked) applyFilters();
  });

  applyFilters();
}