import React from 'react';
import { shallow } from 'enzyme';
import ButtonView from './ButtonView';

describe('Button', () => {
  const mockFn = jest.fn();
  it('shoul render the view with the right props', () => {
    const wrapper = shallow(<ButtonView  onClick={mockFn}>teste</ButtonView>);

    expect(
      wrapper.matchesElement(
        <>
          <button onClick={mockFn}>
            teste
          </button>
        </>  
      )).toBe(true); 
  })

  it('should call a function onClick', () => {
    const wrapper = shallow(<ButtonView  onClick={mockFn}>teste</ButtonView>);
    wrapper.find('button').simulate('click');
    expect(mockFn.mock.calls.length).toEqual(1);
  })
});
