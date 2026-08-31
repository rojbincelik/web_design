// js/contact.js
import { validateField, validateForm } from './validation.js';
import { saveMessage } from './storage.js';

export function initContact() {
  const form = document.querySelector('#contact-form');
  if (!form) return;

  const status = document.querySelector('#form-status');
  const fields = form.querySelectorAll('input, textarea');

  fields.forEach(field => {
    field.addEventListener('blur', () => validateField(field));
    field.addEventListener('input', () => {
      if (field.getAttribute('aria-invalid') === 'true') validateField(field);
    });
  });

  form.addEventListener('submit', event => {
    event.preventDefault();
    status.classList.remove('is-error');

    if (!validateForm(form)) {
      status.textContent = 'Please fix the errors above.';
      status.classList.add('is-error');
      form.querySelector('[aria-invalid="true"]').focus();
      return;
    }

    const data = Object.fromEntries(new FormData(form));
    saveMessage(data);
    form.reset();
    fields.forEach(f => f.removeAttribute('aria-invalid'));
    status.textContent = `Thanks, ${data.name}. Your message has been saved.`;
  });
}