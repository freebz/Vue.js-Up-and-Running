// Data, Methods, and Computed Properties

Vue.component('positive-numbers', {
  template: '<p>{{ positiveNumbers.length }} positive numbers</p>',
  data() {
    return {
      numbers: [-5, 0, 2, -1, 1, 0.5]
    };
  },
  computed: {
    positiveNumbers() {
      return this.numbers.filter((number) => number >= 0);
    }
  }
});
