import React from 'react';
import { shallow } from 'enzyme';
import DogFilterView from './DogFilterView';
import FormControlLabel from '@material-ui/core/FormControlLabel';

describe('DogDetailsWrapper', () => {
  it('should renders component with his props', () => {
    const filterOptionsMock = ['a', 'b', 'c', 'd'];

    const wrapper = shallow(
      <DogFilterView
        filterOptions={filterOptionsMock}
        getDogBreedsLength={jest.fn()}
        onChangeOption={jest.fn()}
      />
    );
    expect(wrapper.find(FormControlLabel)).toHaveLength(filterOptionsMock.length);
  });
});
