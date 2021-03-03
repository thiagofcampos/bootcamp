import { shallow } from 'enzyme';
import DogDetails from './DogDetails';
import DogDetailsView from './DogDetailsView';

describe('DogDetails', () => {
  it('renders component with his props', () => {
    const mockFn = jest.fn();
    const wrapper = shallow(<DogDetails name={'teste'} urlImage={'teste'} onBark={mockFn} />);
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

  it('should add + 1 to scold count when call onScold function', () => {
    const mockFn = jest.fn();
    const wrapper = shallow(<DogDetails name={'teste'} urlImage={'teste'} onBark={mockFn} />);
    wrapper.invoke('onScold')();
    expect(wrapper.prop('scoldCount')).toBe(1);
  });
});
