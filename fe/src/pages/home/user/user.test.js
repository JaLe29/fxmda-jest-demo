import React from 'react';
import {shallow} from 'enzyme';

import User from './user';

const mockProps = {
	name: 'Jarda',
	age: 20,
}

describe('User', () => {
	it('renders user component', () => {
		const wrapper = shallow(<User {...mockProps} />);
		expect(wrapper).toMatchSnapshot();
	});

	it('should render with adult className', () => {
		const wrapper = shallow(<User {...mockProps} age={10} />);
		expect(wrapper.find('div').at(0).hasClass('user-10')).toEqual(true);
	});
});