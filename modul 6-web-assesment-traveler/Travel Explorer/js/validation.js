// js/validation.js

// Turn the browser's validity flags into our own messages.
export function getErrorMessage(field) {
  const v = field.validity;
  if (v.valid) return '';
  if (v.valueMissing) return 'This field is required.';
  if (v.tooShort) return `Please enter at least ${field.minLength} characters.`;
  if (v.typeMismatch) return 'Please enter a valid email address, e.g. name@example.com.';
  return 'Please check this field.';
}

// Validate one field and reflect the result in the DOM.
export function validateField(field) {
  const message = getErrorMessage(field);
  const errorEl = document.querySelector(`#${field.id}-error`);

  field.setAttribute('aria-invalid', message ? 'true' : 'false');
  if (errorEl) errorEl.textContent = message;

  return message === '';
}

// Validate every field; returns true only if all pass.
export function validateForm(form) {
  const fields = [...form.querySelectorAll('input, textarea')];
  return fields.map(validateField).every(Boolean);
}