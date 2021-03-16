import { List, ListItem, ListItemText } from '@material-ui/core';
import { shallow } from 'enzyme';
import DogListView from './DogListView';
import { DogListStyle } from './DogListView.styles';
jest.mock('./DogListView.styles.ts');

describe('DogList', () => {
  beforeEach(() => {
    (DogListStyle as jest.Mock).mockReturnValue({
      root: 'root',
    });
  });

  it('should render the component with the right props', () => {
    const mockDogList = ['affenpinscher', 'african', 'akita'];
    const wrapper = shallow(<DogListView dogList={mockDogList} />);
    expect(
      wrapper.matchesElement(
        <div className={'root'}>
          <List component="nav">
            {mockDogList.map((item, index) => {
              return (
                <ListItem key={index}>
                  <ListItemText />
                </ListItem>
              );
            })}
          </List>
        </div>
      )
    );
  });
  it('should render all de elements on typeBeerList when map', () => {
    const mockDogList = ['affenpinscher', 'african', 'akita'];
    const wrapper = shallow(<DogListView dogList={mockDogList} />);
    expect(wrapper.find('#listBreeds').children()).toHaveLength(mockDogList.length);
  });
});
