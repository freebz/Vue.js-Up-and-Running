// The Data Object

new Vue({
  el: '#app',
  render(createElement) {
    return createElement('custom-button', {
      attrs: {
	type: 'submit'
      },
      props: {
	text: this.buttonText
      }
    });
  }
});
