import React from 'react';
import { shallow } from 'enzyme';
import CreateBeerFormikForm from './CreateBeerFormikForm';
import CreateBeerFormikFormView from './CreateBeerFormikFormView';
import { FormData } from './CreateBeerFormView.types';

describe('CreateBeerFormikForm', () => {
  it('should render with the right props', () => {
    const mockHandleSubmit = jest.fn();
    const wrapper = shallow(<CreateBeerFormikForm />);
    expect(wrapper.matchesElement(<CreateBeerFormikFormView handleSubmit={mockHandleSubmit} />));
  });

  it('should log the name, type, ingredients and if has corn on call onSubmit function', () => {
    const values = {
      name: '',
      type: 0,
      hasCorn: false,
      ingredients: '',
    } as FormData;
    console.log = jest.fn();
    const wrapper = shallow(<CreateBeerFormikForm />);
    wrapper.invoke('handleSubmit')(values);
    expect(console.log).toBeCalledWith(values);
  });
});
