import React from 'react';
import { shallow } from 'enzyme';
import DogDetailsView from './DogDetailsView';
import Button from '../button/Button';
import DogList from '../dogList/DogList';
import {dogDetailsStyle} from './DogDetailsView.styles'

jest.mock('./DogDetailsView.styles')

describe('DogDetailsView', () => {
  beforeEach(() => {
    dogDetailsStyle.mockReturnValue({
      containerButton: 'container',
      containerImage: 'container',
    });
  });

  it('renders component with his props', () => {
    const wrapper = shallow(
      <DogDetailsView
      />
    );
    expect(
      wrapper.matchesElement(
        <div>
        <div className="container">
          <img alt="Dog" />
          <span />
          <div className="container">
            <Button>
              Bark!
            </Button>
            <Button>
              Scold!
            </Button>
          </div>
        </div>
      </div>
      )
    ).toBe(true);
  });

  it('should call a function onClick bark', () => {
		const onScoldMock = jest.fn();
  const onBarkMock = jest.fn();

    const wrapper = shallow(
      <DogDetailsView
        name={'test'}
        urlImage={'test'}
        onBark={onBarkMock}
        scoldCount={0}
        onScold={onScoldMock}
      />
    );
    wrapper.find('Button').at(0).simulate('click');
    expect(onBarkMock).toHaveBeenCalled();
  });

  it('should call a function onClick onScold', () => {
		const onScoldMock = jest.fn();
  const onBarkMock = jest.fn();

    const wrapper = shallow(
      <DogDetailsView
        name={'test'}
        urlImage={'test'}
        onBark={onBarkMock}
        scoldCount={0}
        onScold={onScoldMock}
      />
    );
    wrapper.find('Button').at(1).simulate('click');
    expect(onScoldMock).toHaveBeenCalled();
  });
});
