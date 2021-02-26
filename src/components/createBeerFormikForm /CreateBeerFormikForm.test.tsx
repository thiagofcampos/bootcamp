import React from 'react';
import { shallow } from 'enzyme';
import CreateBeerFormikForm from './CreateBeerFormikForm';
import CreateBeerFormikFormView from './CreateBeerFormikFormView';

describe('CreateBeerFormikForm', () => {
  const mockFn = jest.fn();
  const instanceMockFunction = mockFn();
  const beer = {
    name: '',
    type: 0,
    hasCorn: false,
    ingredients: '',
  };

  it('should render with the right props', () => {
    const wrapper = shallow(<CreateBeerFormikForm />);

    expect(
      wrapper.matchesElement(
        <CreateBeerFormikFormView
          name={beer.name}
          type={beer.type}
          hasCorn={beer.hasCorn}
          ingredients={beer.ingredients}
          onChangeText={instanceMockFunction}
          onChangeCheckBox={instanceMockFunction}
          onSubmit={instanceMockFunction}
        />
      )
    ).toBe(true);
  });
});
