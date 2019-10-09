import userMixin from '.mixins/user';

Vue.component('user-admin', {
  mixins: [userMixin],
  template: '<div v-if="user">Name: {{ name.user }}</div>',
  props: {
    userId: {
      type: Number
    }
  }
});
