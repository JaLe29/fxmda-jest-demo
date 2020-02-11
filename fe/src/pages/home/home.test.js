import React from 'react';
import {shallow} from 'enzyme';

import Home from './home';

jest.mock('./user', () => () => <div />)

describe('Home', () => {
	it('renders home component', () => {
		const wrapper = shallow(<Home reportLastUserId={jest.fn()} />);
		expect(wrapper).toMatchSnapshot();
	});

	it('should call reportLastUserId with correct id', () => {
		const mockReportLastUserId = jest.fn()
		const wrapper = shallow(<Home reportLastUserId={mockReportLastUserId} />);

		wrapper.find('.reportButton').simulate('click')

		expect(mockReportLastUserId).toHaveBeenCalledWith(4)
	});
});