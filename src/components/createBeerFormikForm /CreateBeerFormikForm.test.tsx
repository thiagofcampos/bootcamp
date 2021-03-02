import React from 'react';
import { shallow } from 'enzyme';
import CreateBeerFormikForm from './CreateBeerFormikForm';
import CreateBeerFormikFormView from './CreateBeerFormikFormView';

describe('CreateBeerFormikForm', () => {
  it('should render with the right props', () => {
    const wrapper = shallow(<CreateBeerFormikForm />);
    expect(wrapper.type()).toBe(CreateBeerFormikFormView);
  });
});
