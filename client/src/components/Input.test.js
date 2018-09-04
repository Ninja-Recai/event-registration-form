import React from 'react';
import { shallow } from 'enzyme';
import Input from 'components/Input';

const mockValidate = jest.fn();

it('responds to being focused', () => {
  const wrapper = shallow(<Input type="text" validate={mockValidate} />);
  wrapper.simulate('focus');
  expect(wrapper.state('isFocused')).toBeTruthy();
});
