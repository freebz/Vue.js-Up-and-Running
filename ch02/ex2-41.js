const events = new Vue();

let count = 0;
function logCount() {
  count++;
  console.log(`Debugger function called ${count} times`);
}

events.$on('test-event', logCount);

setInterval(() => {
  events.$emit('test-event');
}, 1000);

setTimeout(() => {
  events.$off('test-event');
}, 10000);
