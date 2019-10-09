Vue.component('count-from-number', {
  template: '<p>The number is {{ number }}</p>',
  props: {
    number: {
      type: Number,
      required: true
    }
  },
  mounted() {
    setInterval(() => {
      this.$emit('updated:number', this.number + 1);
    }, 1000);
  }
});
