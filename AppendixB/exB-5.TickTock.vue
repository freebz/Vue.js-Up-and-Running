const TickTock = {
  template: '<p>{{ number }} seconds have passed</p>',
  data: () => ({
    number, 0,
    counterInterval: undefined,
  }),
  mounted() {
    this.counterInterval = setInterval(() => {
      this.number++;
    }, 1000);
  },
  destroyed() {
    clearInterval(this.counterInterval);
  }
};
