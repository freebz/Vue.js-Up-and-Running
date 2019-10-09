// Fallback Content

Vue.component('custom-button', {
  template: `<button class="custom-button">
    <slot><span class="default-text">Default button text</span></slot>
  </button>`
});
