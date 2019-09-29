// Setting items on an array

const vm = new Vue({
  data: {
    dogs: ['Rex', 'Rover', 'Henrietta', 'Alan']
  }
});

vm.dogs[2] = 'Bob'


vm.dogs.splice(2, 1, 'Bob');


Vue.set(vm.dogs, 2, 'Bob');
