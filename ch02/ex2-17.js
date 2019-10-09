Vue.component('count-from-number', {
  template: '<p>The number is {{ number }}</p>',
  props: {
    initialNumber: {
      type: Number,
      required: true
    }
  },
  data() {
    return {
      number: this.initialNumber
    };
  },
  mounted() {
    setInterval(() => {
      this.number++;
    }, 1000);
  }
});
