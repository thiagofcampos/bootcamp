import React from 'react';
import { shallow } from 'enzyme';
import DogDetailsWrapperView from './DogDetailsWrapperView';
import DogList from '../dogList/DogList';
import DogDetails from '../dogDetails/DogDetails';
import {dogDetailsWrapperStyle} from './DogDetailsWrapperView.styles'

jest.mock('./DogDetailsWrapperView.styles')

describe('DogDetailsWrapperView', () => {
  beforeEach(() => {
    dogDetailsWrapperStyle.mockReturnValue({
      container: 'container',
    });
  });

  it('renders component with his props', () => {
    const wrapper = shallow(
      <DogDetailsWrapperView
      />
    );
    expect(
      wrapper.matchesElement(
			<div>
				<div className={"container"}>
					<DogDetails />
					<DogList />
				</div>
			</div>
      )
    ).toBe(true);
  });
});
