import { shallow } from 'enzyme';
import DogDetails from './DogDetails';
import DogDetailsView from './DogDetailsView';
import DogItemStore from '../../stores/dogItem/DogItemStore';
import { useStoreMap } from 'effector-react';
import DogListStore from '../../stores/dogList/DogListStore';
import * as DogListEffect from '../../stores/dogList/DogListEffect';

jest.mock('effector-react');

describe('DogDetails', () => {

  it('renders component with his props', () => {
		useStoreMap.mockReturnValueOnce(stateBreeds()).mockReturnValueOnce(stateBreedItem())

    const wrapper = shallow(<DogDetails />);
    
		expect(
      wrapper.matchesElement(
        <DogDetailsView/>
      )
    ).toBe(true);
  });

  it('should call the alert when onBark function is called', () => {
    useStoreMap.mockReturnValueOnce(stateBreeds()).mockReturnValueOnce(stateBreedItem())

		jest.spyOn(window, 'alert').mockImplementation(() => {"wuf"});
    const wrapper = shallow(<DogDetails />);
    
		wrapper.invoke('onBark')();

    expect(window.alert).toBeCalled();
  });

  it('should add + 1 to selectedDog scoldCount when onScold function is called', () => {
    useStoreMap.mockReturnValueOnce(stateBreeds()).mockReturnValueOnce(stateBreedItem())

		jest.spyOn(DogListEffect, 'setBreedList').mockImplementation(() => "some value")

		const wrapper = shallow(<DogDetails />);

		wrapper.invoke('onScold')();
		expect(DogListEffect.setBreedList).toBeCalledWith([
      { image: 'test', name: 'australian', scoldingCounter: 1 },
      { image: 'test', name: 'poodle', scoldingCounter: 0 }
    ])
  });
	
	it("should select the correct values from the store", () => {
		useStoreMap.mockReturnValueOnce(stateBreeds()).mockReturnValueOnce(stateBreedItem())

		shallow(<DogDetails />);

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