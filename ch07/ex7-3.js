const count = vm.$el.querySelector('.count').innerHTML;

if (count !== '5') {
  throw new Error('Expected count to equal "5"');
}
