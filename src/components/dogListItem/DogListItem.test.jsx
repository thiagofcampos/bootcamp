import React from 'react';
import { shallow } from 'enzyme';
import DogListItem from './DogListItem';
import DogListItemView from './DogListItemView';

describe('DogListItem', () => {

  it('should render the component with the right props', () => {
    const wrapper = shallow(<DogListItem />);

    expect(wrapper.matchesElement(<DogListItemView/>));
  });
});
