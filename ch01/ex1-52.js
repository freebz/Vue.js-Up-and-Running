new Vue({
  el: '#app',
  data: {
    divVisible: false
  },
  methods: {
    handleBeforeEnter(el) {
      el.style.opacity = 0;
    },
    handleEnter(el, done) {
      TweenLite.to(el, 0.6, { opacity: 1, onComplete: done });
    },
    handleLeave(el, done) {
      TweenLite.to(el, 0.6, { opacity: 0, onComplete: done });
    }
  }
});
