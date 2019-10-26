const PageAccount = {
  template: '<div>...account page...</div>',
  beforeRouteEnter(to, from, next) {
    next((vm) => {
      console.log(vm.$route);
    });
  }
};
