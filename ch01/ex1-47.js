// Hook Arguments

Vue.directive('blink', {
  bind(el, binding) {
    let isVisible = true;
    setInterval(() => {
      isVisible = !isVisible;
      el.style.visibility = isVisible ? 'visible' : 'hidden';
    }, binding.value || 1000);
  }
});
