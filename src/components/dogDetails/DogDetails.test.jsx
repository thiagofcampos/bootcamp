import { shallow } from 'enzyme';
import DogDetails from './DogDetails';
import DogDetailsView from './DogDetailsView';

describe('DogDetails', () => {
  it('renders component with his props', () => {
    const mockFn = jest.fn();
    const wrapper = shallow(<DogDetails />);
    expect(
      wrapper.matchesElement(
        <DogDetailsView/>
      )
    );
  });
  it('should call the alert when onBark function is called', () => {
    jest.spyOn(window, 'alert').mockImplementation(() => {});
    const wrapper = shallow(<DogDetails />);
    wrapper.invoke('onBark')();
    expect(window.alert).toBeCalled();
  });
});
