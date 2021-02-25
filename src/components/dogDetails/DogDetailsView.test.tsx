import React from 'react';
import { shallow } from 'enzyme';
import DogDetailsView from './DogDetailsView';
import Button from '../button/Button';

describe('DogDetailsView', () => {
  const mockFn = jest.fn();
  const instanceMockedHook = mockFn();
  it('renders component with his props', () => {
    const wrapper = shallow(
      <DogDetailsView
        name={'teste'}
        urlImage={'teste'}
        onBark={instanceMockedHook}
        scoldCount={0}
        scoldSetter={mockFn}
      />
    );

    expect(
      wrapper.matchesElement(
        <div>
          <div>
            <img />
            <span>teste</span>
            <span>Scold: 0</span>
            <div>
              <Button onClick={instanceMockedHook}>Bark!</Button>
              <Button onClick={mockFn}>Scold!</Button>
            </div>
          </div>
        </div>
      )
    ).toBe(true);
  });

  it('should call a function onClick bark', () => {
    const wrapper = shallow(
      <DogDetailsView
        name={'teste'}
        urlImage={'teste'}
        onBark={mockFn}
        scoldCount={0}
        scoldSetter={mockFn}
      />
    );
    wrapper.find('Button').at(0).simulate('click');
    wrapper.find('Button').at(1).simulate('click');
    expect(mockFn).toHaveBeenCalledTimes(2);
  });
});
