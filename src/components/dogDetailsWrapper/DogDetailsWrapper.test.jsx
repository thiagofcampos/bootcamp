import React from 'react';
import { shallow } from 'enzyme';
import DogDetailsWrapper from './DogDetailsWrapper';
import { getBreedImages } from '../../service/dogImage/DogImageService';
import { getAllBreeds } from '../../service/dogList/DogListService';
import { DogBreed } from '../../types/DogBreedsType';
import DogDetailsWrapperView from './DogDetailsWrapperView';
import { keys } from 'lodash';

jest.mock('../../service/dogList/DogListService');
jest.mock('../../service/dogImage/DogImageService');

describe('DogDetailsWrapper', () => {
	afterEach(() => {
		jest.clearAllMocks();
		const mockUseState = jest.spyOn(React, 'useState');
		mockUseState.mockRestore()
	});
  it('renders component with his props', () => {
    const mockBreedList = [
      { name: 'affenpinscher', image: '', scoldingCounter: 0 },
      { name: 'akita', image: '', scoldingCounter: 0 },
    ];
    const mockSelectedBreed = mockBreedList[0];

    const wrapper = shallow(<DogDetailsWrapper />);
    expect(
      wrapper.matchesElement(
        <DogDetailsWrapperView
          name={mockSelectedBreed?.name}
          image={mockSelectedBreed?.image}
          onScold={jest.fn()}
          dogBreeds={mockBreedList}
          selectedBreed={mockSelectedBreed}
          onSelectDog={jest.fn()}
        />
      )
    );
  });
  it('should call function getAllBreeds to make API request', () => {
    jest.spyOn(React, 'useEffect').mockImplementationOnce((f) => f());
    const wrapper = shallow(<DogDetailsWrapper />);
    expect(getAllBreeds).toHaveBeenCalledTimes(1);
  });

  it('should call function to make api request for get images of breeds', async () => {
    const breedList = {
      message: {
        african: [],
        australian: [],
      },
    };
    const mockBreedKeys = keys(breedList.message);
    getAllBreeds.mockImplementationOnce(() => Promise.resolve(breedList));
    getBreedImages.mockImplementation(() => Promise.resolve({ message: 'some url' }));
    jest.spyOn(React, 'useEffect').mockImplementationOnce((f) => f());
    const wrapper = shallow(<DogDetailsWrapper />);
    await getAllBreeds();
    expect(getBreedImages).toHaveBeenCalledTimes(mockBreedKeys.length);
  });

  it('should find the selectedBreed if onSelectDog is called',  () => {
		const realUseState = React.useState
		const mockBreedList = [
			{ name: 'affenpinscher', image: '', scoldingCounter: 0 },
			{ name: 'akita', image: '', scoldingCounter: 0 },
		];
		const mockSelectedBreed = mockBreedList[0];
		jest.spyOn(React, 'useState').mockImplementationOnce(() => realUseState(mockBreedList))
    const wrapper = shallow(<DogDetailsWrapper />);
		wrapper.invoke('onSelectDog')(mockSelectedBreed.name)
		expect(wrapper.prop('selectedBreed')).toEqual({ name: 'affenpinscher', image: '', scoldingCounter: 0 })
  });

	it('should return null on call onSelectDog if selectedBreed is undefined',  () => {
		const realUseState = React.useState
		const mockBreedList = [
			{ name: 'affenpinscher', image: '', scoldingCounter: 0 },
			{ name: 'akita', image: '', scoldingCounter: 0 },
		];
		const mockSelectedBreed = { name: '', image: '', scoldingCounter: 0 };
		jest.spyOn(React, 'useState').mockImplementationOnce(() => realUseState(mockBreedList))
    const wrapper = shallow(<DogDetailsWrapper />);
		wrapper.invoke('onSelectDog')(mockSelectedBreed.name);
		expect(wrapper.prop('selectedBreed')).toEqual({})
  });

  it('should add +1 to scoldCounter in the selectedBreed on click scoldButton', async () => {
		
    const realUseState = React.useState
		const mockBreedList = [
			{ name: 'affenpinscher', image: '', scoldingCounter: 0 },
			{ name: 'akita', image: '', scoldingCounter: 0 },
		];
		const mockSelectedBreed = mockBreedList[0];
		jest.spyOn(React, 'useState').mockImplementationOnce(() => realUseState(mockBreedList))
    const wrapper = shallow(<DogDetailsWrapper />);
		wrapper.invoke('onSelectDog')(mockSelectedBreed.name)
		wrapper.invoke('onScold')()
		const selectBreedAfterScold = wrapper.prop('dogBreeds').find((item) => item.name == mockSelectedBreed.name)
		expect(selectBreedAfterScold.scoldingCounter).toEqual(mockSelectedBreed.scoldingCounter + 1)
  });

  
});
