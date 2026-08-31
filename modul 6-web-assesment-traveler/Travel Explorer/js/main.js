// js/main.js
import { initNav } from './nav.js';
import { initFeatured, initDestinations } from './destinations.js';
import { initCity } from './city.js';
import { initContact } from './contact.js';

// Marks that the modules loaded, so CSS can hide the no-JS fallback text.
document.documentElement.classList.add('js');

initNav();
initFeatured();
initDestinations();
initCity();
initContact();