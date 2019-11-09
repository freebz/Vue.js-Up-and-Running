const wrapper = mount(Counter);

// Click three times
wrapper.find('button').trigger('click');
wrapper.find('button').trigger('click');
wrapper.find('button').trigger('click');

const emitted = wrapper.emitted();

expect(emitted.count).toBeTruthy();
expect(emitted.count.length).toBe(3);

expect(emitted.count[0]).toBe(1);
expect(emitted.count[1]).toBe(2);
expect(emitted.count[2]).toBe(3);
