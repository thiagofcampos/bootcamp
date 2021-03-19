import { List } from '@material-ui/core';
import { shallow } from 'enzyme';
import DogListView from './DogListView';
import { DogListStyle } from './DogListView.styles';
import DogListItem from '../dogListItem/DogListItem';
import { capitalize } from 'lodash';
jest.mock('./DogListView.styles.ts');

describe('DogList', () => {
  beforeEach(() => {
    DogListStyle.mockReturnValue({
      root: 'root',
    });
  });

  it('should render the component with the right props', () => {
    const mockBreedList = [
      { breed: 'affenpinscher', image: '' },
      { breed: 'akita', image: '' },
    ];
    const wrapper = shallow(<DogListView breedList={mockBreedList} />);
    expect(
      wrapper.matchesElement(
        <div className={'root'}>
          <List component="nav">
            {mockBreedList.map((item, index) => {
              return <DogListItem key={index} breed={item.breed} />;
            })}
          </List>
        </div>
      )
    );
  });
  it('should render all de elements on typeBeerList when map', () => {
    const mockBreedList = [
      { breed: 'affenpinscher', image: '' },
      { breed: 'akita', image: '' },
    ];
    const wrapper = shallow(<DogListView breedList={mockBreedList} />);
    expect(wrapper.find(List).children()).toHaveLength(mockBreedList.length);
  });

  it('should capitalize the first letter of every breed name', () => {
    const mockBreedList = [
      { breed: 'affenpinscher', image: '' },
      { breed: 'akita', image: '' },
    ];
    const wrapper = shallow(<DogListView breedList={mockBreedList} />);

    expect(
      wrapper.find(DogListItem).map((item) => {
        item.text();
      })
    ).toEqual(
      mockBreedList.map((item) => {
        capitalize(item.breed);
      })
    );
  });
});
