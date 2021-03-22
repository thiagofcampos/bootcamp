import { ListItemText } from '@material-ui/core';
import { shallow } from 'enzyme';
import DogListItemView from './DogListItemView';
import {DogListStyle} from './DogListItemView.styles'

jest.mock('./DogListItemView.styles')

describe('DogListItemView', () => {
	beforeEach(() => {
    DogListStyle.mockReturnValue({
      title: 'title',
			active: 'active'
    });
  });
  it('should render the component with the right props', () => {
    const wrapper = shallow(<DogListItemView breedImage={''} breed={'African'} />);
    expect(
      wrapper.matchesElement(
        <div>
					<img />
					<ListItemText className={"title"} />
					<span>Scold: </span>
				</div>
      )
    );
  });
	it('should call onSelectDogBreed on click in a breed of the list', () => {
		const mockSelectDog = jest.fn()
    const wrapper = shallow(<DogListItemView breedImage={''} breed={'African'} onSelectDog={mockSelectDog}/>);
		wrapper.find('div').simulate('click')
		expect(mockSelectDog).toHaveBeenCalledWith('African')
	})
	it('should apply active class when active is true', () => {
		const mockSelectDog = jest.fn()
    const wrapper = shallow(<DogListItemView breedImage={''} active={true} breed={'African'} onSelectDog={mockSelectDog}/>);
		expect(wrapper.find("div.active").length).toBe(1)
	})
});
