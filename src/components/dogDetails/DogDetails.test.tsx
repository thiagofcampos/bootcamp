import { shallow } from 'enzyme';
import DogDetails from './DogDetails';
import DogDetailsView from './DogDetailsView';

describe('DogDetails', () => {
  const mockFn = jest.fn();
  const wrapper = shallow(<DogDetails name={'teste'} urlImage={'teste'} onBark={mockFn} />);
  it('renders component with his props', () => {
    expect(wrapper.type()).toBe(DogDetailsView);
  });
});
