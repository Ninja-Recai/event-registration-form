import React from 'react';
import path from 'path';
import { shallow, mount } from 'enzyme';
import Form from 'components/Form';
import fakeProps from 'react-fake-props';
import ErrorMessage from 'components/ErrorMessage';
import SuccessMessage from 'components/SuccessMessage';

const compPath = path.join(__dirname, './Form.js');
const props = fakeProps(compPath);
const mockAddEvent = jest.fn();

it('attempts to send data after submit', () => {
  const wrapper = mount(<Form {...props} addEvent={mockAddEvent} />);
  const form = wrapper.find('form');
  form.simulate('submit');
  expect(mockAddEvent.mock.calls).toHaveLength(1);
});

describe('an error occured', () => {
  it('displays an error', () => {
    const wrapper = shallow(<Form {...props} isError />);
    expect(wrapper.containsMatchingElement(ErrorMessage)).toBe(true);
  });
});

describe('form succesfully sent', () => {
  it('displays a success message', () => {
    const wrapper = shallow(<Form {...props} isSuccess />);
    expect(wrapper.containsMatchingElement(SuccessMessage)).toBe(true);
  });
});
