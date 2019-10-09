// vue-loader and .vue Files

Vue.component('display-number', {
  template: '<p>The number is {{ number }}</p>',
  props: {
    number: {
      type: Number,
      required: true
    }
  }
});
