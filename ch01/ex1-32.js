// Watching Properties of Objects in the Data Object

new Vue({
  data: {
    formData: {
      username: ''
    }
  },
  watch: {
    'formData.username'() {
      // this.formData.username has changed
    }
  }
});
