import React from 'react';
import {shallow} from 'enzyme';

import User from './user';

describe('User', () => {
	it('renders user component', () => {
		const wrapper = shallow(<User />);
		expect(wrapper).toMatchSnapshot();
	});
});