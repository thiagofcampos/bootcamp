import React from 'react';
import { shallow } from 'enzyme';
import DogDetailsWrapperView from './DogDetailsWrapperView';
import DogList from '../dogList/DogList';
import DogDetails from '../dogDetails/DogDetails';
import {dogDetailsWrapperStyle} from './DogDetailsWrapperView.styles'
import DogFilter from '../dogFilter/DogFilter';
import { CircularProgress } from '@material-ui/core';

jest.mock('./DogDetailsWrapperView.styles')

describe('DogDetailsWrapperView', () => {
  beforeEach(() => {
    dogDetailsWrapperStyle.mockReturnValue({
      container: 'container',
    });
  });

  it('renders component with his props when isLoading is false', () => {
    const wrapper = shallow(
      <DogDetailsWrapperView
			isLoading={false}
      />
    );
    expect(
      wrapper.matchesElement(
				<div>
					<div className={"container"}>
						<div>
							<DogFilter />
							<DogDetails />
						</div>
						<DogList />
					</div>
				</div>
      )
    ).toBe(true);
  });
  it('renders component with his props when isLoading is true', () => {
    const wrapper = shallow(
      <DogDetailsWrapperView
			isLoading={true}
      />
    );
    expect(
      wrapper.matchesElement(
				<div>
        <div className={"container"}>
          <CircularProgress />
        </div>
      </div>
      )
    ).toBe(true);
  });
});
