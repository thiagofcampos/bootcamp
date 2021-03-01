import React from 'react';
import { shallow } from 'enzyme';
import CreateBeerForm from './CreateBeerForm';
import CreateBeerFormView from './CreateBeerFormView';

describe('CreateBeerForm', () => {
  it('should render with the right props', () => {
    const wrapper = shallow(<CreateBeerForm />);
    expect(wrapper.type()).toBe(CreateBeerFormView);
  });
});
