import React from 'react';
import { shallow } from 'enzyme';
import DogDetailsView from './DogDetailsView';
import Button from '../button/Button';
jest.spyOn(React, "useCallback").mockImplementation((f) => f);

describe('DogDetailsView', () => {
    const mockFn = jest.fn();
    const mockedHook = React.useCallback(() => {
        mockFn();
    }, []);
    const instanceMockedHook = mockedHook;
    console.log(instanceMockedHook)
    it('renders component with his props', () => {
    const wrapper = shallow(<DogDetailsView name={"teste"} urlImage={"teste"} showAlert={instanceMockedHook}/>);
        console.log(wrapper.debug())
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
   

   });
