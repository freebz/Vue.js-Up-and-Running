// Example 4-1. The attributes of the options object

{
  // HTML attributes
  attrs: {
    type: 'submit'
  },

  // Props to be passed to components
  props: {
    text: 'Click me!',
  }

  // DOM properties such as innerHTML (instead of v-html)
  domProps: {
    innerHTML: 'Some HTML'
  },

  // Event listeners
  on: {
    click: this.handleClick
  },

  // The same as slot="exampleSlot" - used when the component is a child of
  // another component
  slot: 'exampleSlot',

  // The same as key="exampleKey" - used for components generated in a loop
  key: 'exampleKey',

  // The same as ref="exampleRef"
  ref: 'exampleRef',

  // The same as v-bind:class="['example-class'...
  class: ['example-class', { 'conditional-class': true }],

  // The same as v-bind:style="{ backgroundColor: 'red' }"
  style: { backgroundColor: 'red' }
}
