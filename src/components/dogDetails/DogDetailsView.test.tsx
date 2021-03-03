import React from 'react';
import { shallow } from 'enzyme';
import DogDetailsView from './DogDetailsView';
import Button from '../button/Button';

describe('DogDetailsView', () => {
  const onScoldMock = jest.fn();
  const onBarkMock = jest.fn();
  it('renders component with his props', () => {
    const wrapper = shallow(
      <DogDetailsView
        name={'teste'}
        urlImage={'teste'}
        onBark={onBarkMock}
        scoldCount={0}
        onScold={onScoldMock}
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
              <Button onClick={onBarkMock}>Bark!</Button>
              <Button onClick={onScoldMock}>Scold!</Button>
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
        onBark={onBarkMock}
        scoldCount={0}
        onScold={onScoldMock}
      />
    );
    wrapper.find('Button').at(0).simulate('click');
    expect(onBarkMock).toHaveBeenCalled();
  });

  it('should call a function onClick onScold', () => {
    const wrapper = shallow(
      <DogDetailsView
        name={'teste'}
        urlImage={'teste'}
        onBark={onBarkMock}
        scoldCount={0}
        onScold={onScoldMock}
      />
    );
    wrapper.find('Button').at(1).simulate('click');
    expect(onScoldMock).toHaveBeenCalled();
  });
});
