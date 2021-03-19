import { ListItem, ListItemText } from '@material-ui/core';
import { shallow } from 'enzyme';
import DogListItemView from './DogListItemView';

describe('DogListItemView', () => {
  it('should render the component with the right props', () => {
    const index = 1;
    const wrapper = shallow(<DogListItemView breedImage={''} breed={'African'} />);
    expect(
      wrapper.matchesElement(
        <ListItem key={index}>
          <ListItemText />
        </ListItem>
      )
    );
  });
});
