import React from 'react';
import { shallow } from 'enzyme';
import { getAll } from '../../service/dogList/DogListService';
import DogList from './DogList';
import DogListView from './DogListView';

jest.mock('../../service/dogList/DogListService');


describe('DogList', () => {

  it('should render the component with the right props', () => {
    const wrapper = shallow(<DogList />);

    expect(wrapper.matchesElement(<DogListView dogList={[]} />));
  });

  it('should call function to make API request', () => {
		jest.spyOn(React, 'useEffect').mockImplementationOnce((f) => f());
    const wrapper = shallow(<DogList />);
    expect(getAll).toHaveBeenCalledTimes(1);
  });

  it('should call useState hook on execute useEffect', () => {
		const setDogList = jest.fn()
		jest.spyOn(React, 'useState').mockImplementationOnce((dogList) => [dogList, setDogList] )
		jest.spyOn(React, 'useEffect').mockImplementationOnce((f) => f());
		const wrapper = shallow(<DogList />);
		expect(React.useState).toHaveBeenCalled();
  });
});
