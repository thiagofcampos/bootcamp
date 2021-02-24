import { shallow } from 'enzyme';
import App from './App';

describe('renders learn react link', () => {
  it('renders app component', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.exists()).toBe(true);
  });
});
