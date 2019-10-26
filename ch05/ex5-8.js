const PageUser = {
  template: '<div>...user page...</div>',
  watch: {
    '$route'() {
      console.log('Route updated');
    }
  }
};
