import React from 'react';
import { shallow } from 'enzyme';
import DogList from './DogList';
import DogListView from './DogListView';
import DogItemStore from '../../stores/dogItem/DogItemStore';
import DogListStore from '../../stores/dogList/DogListStore';
import BreedFilterStore from '../../stores/breedFilter/BreedFilterStore';
import { useStoreMap } from 'effector-react';

jest.mock('effector-react')


describe('DogList', () => {

  it('should render the component with the right props', () => {
		useStoreMap.mockReturnValueOnce( stateBreeds()).mockReturnValueOnce( stateBreedItem())
		.mockReturnValueOnce( stateBreedFilterLetter())

		const wrapper = shallow(<DogList />);
		
    expect(wrapper.matchesElement(<DogListView/>)).toBe(true);
  });
	it('should return the filtered list if the user has selected one letter filter', () => {
		useStoreMap.mockReturnValueOnce( stateBreeds()).mockReturnValueOnce( stateBreedItem())
		.mockReturnValueOnce( stateBreedFilterLetter())

		const wrapper = shallow(<DogList />);

		expect(wrapper.prop('dogBreeds')).toHaveLength(1)
	})


  it('should return full dogBreeds when selectedBreedFilter is empty', () => {
		function stateBreedFilterLetterEmpty(){
			return(
				{
					selectedBreedFilter:""
				}
			)
		}
		
    useStoreMap.mockReturnValueOnce( stateBreeds()).mockReturnValueOnce( stateBreedItem())
		.mockReturnValueOnce( stateBreedFilterLetterEmpty())

		const wrapper = shallow(<DogList />);
		expect(wrapper.prop('dogBreeds')).toEqual(stateBreeds().dogBreeds)
  });

	it("should select the correct values from the store", () => {
		useStoreMap.mockReturnValueOnce( stateBreeds()).mockReturnValueOnce( stateBreedItem())
		.mockReturnValueOnce( stateBreedFilterLetter())

		shallow(<DogList />);

		expect(useStoreMap.mock.calls[0][0].store).toBe(DogListStore);
    expect(useStoreMap.mock.calls[0][0].keys).toEqual([]);
    expect(useStoreMap.mock.calls[0][0].fn(stateBreeds())).toMatchObject({dogBreeds:[ {
			image: "test",
			name: "australian",
			scoldingCounter: 0,
		},
		{
			image: "test",
			name: "poodle",
			scoldingCounter: 0,
		} ]});
		
		expect(useStoreMap.mock.calls[1][0].store).toBe(DogItemStore);
    expect(useStoreMap.mock.calls[1][0].keys).toEqual([]);
    expect(useStoreMap.mock.calls[1][0].fn(stateBreedItem())).toMatchObject({
			image: "test",
			name: "australian",
			scoldingCounter: 0,
		});

		expect(useStoreMap.mock.calls[2][0].store).toBe(BreedFilterStore);
    expect(useStoreMap.mock.calls[2][0].keys).toEqual([]);
    expect(useStoreMap.mock.calls[2][0].fn(stateBreedFilterLetter().selectedBreedFilter)).toEqual("a")
  });
});

function stateBreeds(){
	return({
		dogBreeds:
		[
				{
					image: "test",
					name: "australian",
					scoldingCounter: 0,
				},
				{
					image: "test",
					name: "poodle",
					scoldingCounter: 0,
				}
			]
		}
	)
}

function stateBreedItem(){
	return(
		{
			image: "test",
			name: "australian",
			scoldingCounter: 0,
		}
	)
}

function stateBreedFilterLetter(){
	return(
		{
			selectedBreedFilter:"a"
		}
	)
}