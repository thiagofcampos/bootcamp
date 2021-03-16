import React from 'react';
import { shallow } from 'enzyme';
import { getAll } from '../../service/dogList/DogListService';
import DogList from './DogList';
import {once} from 'lodash'
import DogListView from './DogListView';

jest.mock('../../service/dogList/DogListService');


describe('DogList', () => {

  it('should render the component with the right props', () => {
    const wrapper = shallow(<DogList />);

    expect(wrapper.matchesElement(<DogListView dogList={[]} />));
  });

  it('should call function to make API request', () => {
		jest.spyOn(React, 'useEffect').mockImplementation((f) => once(f)());

    const wrapper = shallow(<DogList />);
    expect(React.useEffect).toHaveBeenCalledTimes(1);
  });
});
