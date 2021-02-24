import React from 'react';
import { shallow } from 'enzyme';
import DogDetailsView from './DogDetailsView';
import Button from '../button/Button';


describe('DogDetailsView', () => {
    const mockFn = jest.fn();
    const instanceMockedHook = mockFn();
    it('renders component with his props', () => {
    const wrapper = shallow(<DogDetailsView name={"teste"} urlImage={"teste"} showAlert={instanceMockedHook}/>);
     expect(
       wrapper.matchesElement(
        <div>
            <div>
            <img/>
            <span>
                teste
            </span>
            <Button onClick={instanceMockedHook}>
                Bark!
            </Button>
            </div>
        </div>
       )).toBe(true); 
    }) 

    it('should call a function onClick', () => {
        const wrapper = shallow(<DogDetailsView name={"teste"} urlImage={"teste"} showAlert={mockFn}/>);
        wrapper.find('Button').simulate('click');
        expect(mockFn).toHaveBeenCalled();
      })
   });
