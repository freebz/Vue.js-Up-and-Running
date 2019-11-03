const SendMessage = {
  template: '<form @submit="handleSubmit">...</form>',
  data: () => ({
    formData: { ... }
  }),
  methods: {
    handleSubmit() {
      this.$store.commit('addMessage', this.formData);
    }
  }
};
