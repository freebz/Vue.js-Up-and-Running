Vue.component('count-from-number', {
  template: '<p>The number is {{ localNumber }}</p>',
  props: {
    number: {
      type: Number,
      required: true
    }
  },
  computed: {
    localNumber: {
      get() {
	return this.number;
      },
      set(value) {
	this.$emit('update:number', value);
      }
    }
  },
  mounted() {
    setInterval(() => {
      this.localNumber++;
    }, 1000);
  }
});
