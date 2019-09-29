const data = {
  userId: 10
};


const storedData = {};

storedData.userId = data.userId;

Object.defineProperty(data, 'userId', {
  get() {
    return storedData.userId;
  },
  set(value) {
    console.log('User Id changed!');
    storedData.userId = value;
  },
  configurable: true,  
  enumerable: true
});
