Vue.component('input-username', {
  template: '<input type="text" :value="value" @input="handleInput">',
  props: {
    value: {
      type: String,
      required: true
    }
  },
  methods: {
    handleInput(e) {
      const value = e.taret.value.toLowerCase();

      // If valeu was changed, update it on the input too
      if (value !== e.target.value) {
	e.target.value = value;
      }

      this.$emit('input', value);
    }
  }
});
