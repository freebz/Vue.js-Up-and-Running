// Merging Mixins and Components

const loggingMixin = {
  created() {
    console.log('Logged from mixin');
  }
};

Vue.component('example-component', {
  mixins: [loggingMixin],
  created() {
    console.log('Logged from component');
  }
});
