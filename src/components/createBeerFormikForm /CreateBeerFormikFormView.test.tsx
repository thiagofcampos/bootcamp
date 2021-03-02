import React from 'react';
import { shallow } from 'enzyme';
import CreateBeerFormikFormView from './CreateBeerFormikFormView';

describe('CreateBeerFormikFormView', () => {
  const beer = {
    name: 'teste',
    type: 1,
    hasCorn: true,
    ingredients: 'malte',
  };
  const consolePrint = jest.fn();

  beforeEach(() => {
    jest.spyOn(React, 'useCallback').mockImplementation(consolePrint);
  });

  it('should render the form element correctly', () => {
    const handleSubmitMock = jest.fn();
    const wrapper = shallow(<CreateBeerFormikFormView handleSubmit={handleSubmitMock} {...beer} />);
    const formikWrapper = wrapper.find('form');
    expect(formikWrapper).toBeDefined();
  });

  it('should handle the onSubmit event', () => {
    const wrapper = shallow(<CreateBeerFormikFormView handleSubmit={consolePrint} {...beer} />);
    console.log(wrapper.debug());
    wrapper.find('form').simulate('submit');
    expect(consolePrint).toHaveBeenCalled();
  });
});
