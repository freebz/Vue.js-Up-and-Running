// Unit-Testing Components

import { expect } from 'chai';
import { shallow } from 'enzyme';
import UserView from '../components/UserView.js';

const wrapper = shallow(<UserView />);
expect(wrapper.find('p')).to.have.length(1);

const text = wrapper.find('p').text();
expect(text).to.equal('User name: Callum Macrae');
