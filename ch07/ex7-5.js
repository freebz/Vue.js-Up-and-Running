// Introducing vue-test-utils

import { mount } from 'vue-test-utils'

const wrapper = mount(NotificationCount, {
  propsData: {
    initialCount: 5
  }
});
