import { shallow } from 'enzyme';
import DogDetails from './DogDetails';
import DogDetailsView from './DogDetailsView';

describe('DogDetails', () => {
  it('renders component with his props', () => {
    const mockFn = jest.fn();
    const wrapper = shallow(<DogDetails />);
    expect(
      wrapper.matchesElement(
        <DogDetailsView
          urlImage={'teste'}
          name={'teste'}
          onBark={mockFn}
          scoldCount={0}
          onScold={mockFn}
        />
      )
    );
  });
  it('should call the alert when onBark function is called', () => {
    jest.spyOn(window, 'alert').mockImplementation(() => {});
    const wrapper = shallow(<DogDetails />);
    wrapper.invoke('onBark')();
    expect(window.alert).toBeCalled();
  });

  it('should add + 1 to scold count when call onScold function', () => {
    const wrapper = shallow(<DogDetails />);
    wrapper.invoke('onScold')();
    expect(wrapper.prop('scoldCount')).toBe(1);
  });
});
