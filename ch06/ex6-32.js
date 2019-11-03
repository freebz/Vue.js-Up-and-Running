import { mapState } from 'vuex';

const NotificationCount = {
  template: `<p>
    Messages: {{ messages.length }}
    <a @click.prevent="handleUpdate">(update)</a>
  </p>`,
  computed: mapState(['messages']),
  methods: {
    handleUpdate() {
      this.$store.dispatch('getMessages');
    }
  }
};
