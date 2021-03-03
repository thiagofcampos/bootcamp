import React from 'react';
import { shallow } from 'enzyme';
import CreateBeerForm from './CreateBeerForm';
import CreateBeerFormView from './CreateBeerFormView';
describe('CreateBeerForm', () => {
  it('should render with the right props', () => {
    const wrapper = shallow(<CreateBeerForm />);
    expect(wrapper.type()).toBe(CreateBeerFormView);
    expect(wrapper.prop('name')).toBe('');
    expect(wrapper.prop('type')).toBe(0);
    expect(wrapper.prop('hasCorn')).toBe(false);
    expect(wrapper.prop('ingredients')).toBe('');
  });
  it('should update name when onChange is called passing a new name', () => {
    const event = {
      target: {
        name: 'name',
        value: 'New value',
      },
    } as React.ChangeEvent<HTMLInputElement>;
    const wrapper = shallow(<CreateBeerForm />);
    wrapper.invoke('onChangeText')(event);
    expect(wrapper.prop('name')).toBe('New value');
  });
  it('should update ingredients when onChange is called passing a new value for ingredients', () => {
    const event = {
      target: {
        name: 'ingredients',
        value: 'Beer',
      },
    } as React.ChangeEvent<HTMLInputElement>;
    const wrapper = shallow(<CreateBeerForm />);
    wrapper.invoke('onChangeText')(event);
    expect(wrapper.prop('ingredients')).toBe('Beer');
  });
  it('should update if has corn when onChangeCheckbox is called passing a new value for this', () => {
    const wrapper = shallow(<CreateBeerForm />);
    wrapper.invoke('onChangeCheckBox')();
    expect(wrapper.prop('hasCorn')).toBe(true);
  });
  it('should log the name, ingredients, type and if has corn when onSubmit is called', () => {
    const event = {
      preventDefault: jest.fn(),
    };
    const beer = {
      name: '',
      type: 0,
      hasCorn: false,
      ingredients: '',
    };
    console.log = jest.fn();
    const wrapper = shallow(<CreateBeerForm />);
    wrapper.invoke('onSubmit')(event);
    expect(console.log).toBeCalledWith(beer);
  });
});
