import React from 'react';
import { shallow } from 'enzyme';
import CreateBeerForm from './CreateBeerForm';
import CreateBeerFormView from './CreateBeerFormView';

describe('CreateBeerForm', () => {
  const mockFn = jest.fn();
  const instanceMockFunction = mockFn();
  const beer = {
    name: '',
    type: 0,
    hasCorn: false,
    ingredients: '',
  };

  it('should render with the right props', () => {
    const wrapper = shallow(<CreateBeerForm />);

    expect(
      wrapper.matchesElement(
        <CreateBeerFormView
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
