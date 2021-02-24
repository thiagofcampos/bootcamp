import React, {Fragment} from 'react';
import { shallow } from 'enzyme';
import Button from './Button';
import ButtonView from './ButtonView';

describe('Button', () => {
  const mockFn = jest.fn();
  it('should render the view with the right props', () => {
    const wrapper = shallow(<Button onClick={mockFn}>teste</Button>);

    expect(
      wrapper.matchesElement(
        <Fragment>
          <ButtonView onClick={mockFn}>
            teste
          </ButtonView>
        </Fragment>  
      )).toBe(true); 
  })

  it('should call a function onClick', () => {
    const wrapper = shallow(<Button  onClick={mockFn}>teste</Button>);
    wrapper.find('ButtonView').simulate('click');
    expect(mockFn.mock.calls.length).toEqual(1);
  })
});
