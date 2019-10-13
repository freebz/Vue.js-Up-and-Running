// The Tag Name

new Vue({
  el: '#app',
  render(createElement) {
    return createElement(this.tagName, 'Hello world');
  },
  data: {
    tagName: 'h1'
  }
});
