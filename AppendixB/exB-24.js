import { expect } from 'chai';
import { shallow } from 'vue-test-utils';
import UserView from '../components/UserView.vue';

const wrapper = shallow(UserView);
expect(wrapper.contains('p')).toBe(true);

const text = wrapper.find('p').text();
expect(text).toBe('User name: Callum Macraeo');
