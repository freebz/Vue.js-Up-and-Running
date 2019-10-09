const loggingMixin2 = {
  methods: {
    log() {
      console.log('Logged from mixin');
    }
  }
};

Vue.component('example-component', {
  mixins: [loggingMixin2],
  created() {
    this.log();
  },
  methods: {
    log() {
      console.log('Logged from component');
    }
  }
});
