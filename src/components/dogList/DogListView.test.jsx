import { List } from '@material-ui/core';
import { shallow } from 'enzyme';
import DogListView from './DogListView';
import { DogListStyle } from './DogListView.styles';
import DogListItem from '../dogListItem/DogListItem';
import { capitalize } from 'lodash';
jest.mock('./DogListView.styles.ts');

describe('DogListView', () => {
  beforeEach(() => {
    DogListStyle.mockReturnValue({
      root: 'root',
    });
  });

  it('should render the component with the right props', () => {
    const mockBreedList = [
      { name: 'affenpinscher', image: '', scoldingCounter: 0 },
      { name: 'akita', image: '', scoldingCounter: 0 },
    ];
		const mockSelectedBreed = mockBreedList[0]
    const wrapper = shallow(<DogListView dogBreeds={mockBreedList} onSelectDog={jest.fn()} selectedBreed={mockSelectedBreed}/>);
    expect(
      wrapper.matchesElement(
        <div className={"root"}>
					<List component="nav">
						{mockBreedList.map((item, index) => {
							return (
								<DogListItem
									key={index}
								/>
							);
						})}
					</List>
   		</div>
      )
    );
  });
});
