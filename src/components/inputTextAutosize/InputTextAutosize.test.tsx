import React from 'react';
import { shallow } from 'enzyme';
import InputTextAutosize from './InputTextAutosize';
import InputTextAutosizeView from './InputTextAutosizeView';
import { InputProps } from './InputTextAutosize.types';

describe('InputTextAutosize', () => {
  const mockHandleSubmit = jest.fn();
  const values = {
    error: false,
    handleChange: mockHandleSubmit(),
    label: 'test',
    name: 'test',
    rowsMin: 2,
    value: 'abc',
    helperText: 'teste',
  } as InputProps;
  it('should render with the right props', () => {
    const wrapper = shallow(<InputTextAutosize {...values} />);
    expect(wrapper.matchesElement(<InputTextAutosizeView {...values} />));
  });
});
