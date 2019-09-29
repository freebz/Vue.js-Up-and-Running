// Adding new properties to an object

const vm = new Vue({
  data: {
    formData: {
      username: 'someuser'
    }
  }
});

vm.formData.name = 'Some User';


formData: {
  username: 'someuser',
  name: undefined
}


vm.formData = Object.assign({}, vm.formData, {
  name: 'Some User'
});


Vue.set(vm.formData, 'name', 'Some User');
