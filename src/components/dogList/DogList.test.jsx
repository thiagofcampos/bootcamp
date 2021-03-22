import React from 'react';
import { shallow } from 'enzyme';
import DogList from './DogList';
import DogListView from './DogListView';

jest.mock('../../service/dogList/DogListService');
jest.mock('../../service/dogImage/DogImageService');


describe('DogList', () => {

  it('should render the component with the right props', () => {
    const wrapper = shallow(<DogList />);

    expect(wrapper.matchesElement(<DogListView/>));
  });

});
