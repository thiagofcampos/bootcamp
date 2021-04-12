import React from 'react';
import { shallow } from 'enzyme';
import DogFilter from './DogFilter';
import DogListStore from '../../stores/dogList/DogListStore';
import DogFilterView from './DogFilterView';
import * as BreedFilterEffect from '../../stores/breedFilter/BreedFilterEffect';
import { useStoreMap } from 'effector-react';

jest.mock('effector-react')
jest.mock('../../stores/breedFilter/BreedFilterEffect');

describe('DogFilter', () => {
  it('should renders component with his props', () => {
		useStoreMap.mockReturnValueOnce( stateBreeds())

		const wrapper = shallow(<DogFilter />);
    expect(
      wrapper.matchesElement(
        <DogFilterView
        />
      )
    ).toBe(true);
  });
	it('should call onBreedFilter effect when change an option', () => {
		useStoreMap.mockReturnValueOnce( stateBreeds())

		const e = {
			target:{
				value:{
					name: 'teste',
					image: 'tente',
					scoldCounting: 0				}
			}
		}

		const wrapper = shallow(<DogFilter/>);

		wrapper.invoke('onChangeOption')(e);
		expect(BreedFilterEffect.onBreedFilter).toHaveBeenCalledTimes(1)
	})

	it('should return the length of dogBreed based on filter when getDogBreedsLength have been called', () => {
		useStoreMap.mockReturnValueOnce( stateBreeds())
		jest.spyOn(React, "useCallback")
		
		const wrapper = shallow(<DogFilter/>);

		wrapper.invoke('getDogBreedsLength')("a");

		expect(wrapper.prop('getDogBreedsLength').mock.call).toBeCalled()

	})
	it('shold call storeMap and return the right props from store', () => {
		useStoreMap.mockReturnValueOnce( stateBreeds())
		shallow(<DogFilter/>);

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
	})
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