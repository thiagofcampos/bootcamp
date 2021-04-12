import React from 'react';
import { shallow } from 'enzyme';
import DogDetailsWrapper from './DogDetailsWrapper';
import DogDetailsWrapperView from './DogDetailsWrapperView';
import * as DogListEffect from '../../stores/dogList/DogListEffect';

jest.mock('../../service/dogList/DogListService');
jest.mock('../../service/dogImage/DogImageService');
jest.mock('../../stores/dogList/DogListEffect');

describe('DogDetailsWrapper', () => {
	afterEach(() => {
		jest.clearAllMocks();
		const mockUseState = jest.spyOn(React, 'useState');
		mockUseState.mockRestore()
	});
  it('should renders component with his props', () => {
    const wrapper = shallow(<DogDetailsWrapper />);
    expect(
      wrapper.matchesElement(
        <DogDetailsWrapperView
        />
      )
    ).toBe(true);
  });

  it('should call DogListEffect when useEffect has been called', async () => {
		jest.spyOn(React, 'useEffect').mockImplementationOnce((f) => f());
		shallow(<DogDetailsWrapper />);
    expect(DogListEffect.listDogBreeds).toHaveBeenCalled();
  });
  
});
