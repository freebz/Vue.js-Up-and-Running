Vue.component('price-display', {
  props: {
    price: {
      type: Number,
      required: true
    },
    unit: {
      type: String,
      default: '$'
    }
  }
});
