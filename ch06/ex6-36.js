import { mapState } from 'vuex';

const NotificationCount = {
  template: `<p>
    Messages: {{ messages.length }}
    <span v-if="loading">(updating...)</span>
    <a v-else @click.prevent="handleUpdate">(update)</a>
    </p>`,
  data: () => ({
    updating: false,
  }),
  computed: mapState(['messages']),
  methods: {
    handleUpdate() {
      this.updating = true;
      this.$store.dispatch('getMessages')
	.then(() => {
	  this.updating = false;
	});
    }
  }
};
