import React from 'react';
import { shallow } from 'enzyme';
import { getAllBreeds } from '../../service/dogList/DogListService';
import { getBreedImages } from '../../service/dogImage/DogImageService';
import { keys } from 'lodash';
import DogList from './DogList';
import DogListView from './DogListView';

jest.mock('../../service/dogList/DogListService');
jest.mock('../../service/dogImage/DogImageService');


describe('DogList', () => {

  it('should render the component with the right props', () => {
    const wrapper = shallow(<DogList />);

    expect(wrapper.matchesElement(<DogListView breedList={[]} />));
  });

  it('should call function to make API request', () => {
		jest.spyOn(React, 'useEffect').mockImplementationOnce((f) => f());
    const wrapper = shallow(<DogList />);
    expect(getAllBreeds).toHaveBeenCalledTimes(1);
  });
  it('should call function to make api request for get images of breeds', async () => {
		const breedList = {
      message: {
        african: [],
				australian:[]
      },
    };
		const mockBreedKeys = keys(breedList.message)
		getAllBreeds.mockImplementationOnce(() => Promise.resolve(breedList))
		getBreedImages.mockImplementation(() => Promise.resolve({message:"some url"}))
		jest.spyOn(React, 'useEffect').mockImplementationOnce((f) => f());
    const wrapper = shallow(<DogList />);
		await getAllBreeds()
    expect(getBreedImages).toHaveBeenCalledTimes(mockBreedKeys.length);
  });
});
