// Testing a Simple Component

const NotificationCount = {
  template: `<p>
      Messages: <span class="count">{{ messageCount }}</span>
      <a @click.prevent="handleUpdate">(update)</a>
    </p>`,
  props: {
    initialCount: {
      type: Number,
      default: 0
    }
  },
  data() {
    return { messageCount: this.initialCount };
  },
  methods: {
    handleUpdate() {
      this.$http.get('/app/new-messages')
	.then((data) => {
	  this.messageCount += data.messages.length;
	});
    }
  }
};
