import React from 'react';
import { List } from '@material-ui/core';
import { DogListStyle } from './DogListView.styles';
import { capitalize } from 'lodash';
import DogListItem from '../dogListItem/DogListItem';
import { DogBreed } from '../../types/DogBreedsType';
interface Props {
  dogBreeds: DogBreed[];
  selectedBreed: DogBreed;
}
const DogListView: React.FC<Props> = ({ dogBreeds, selectedBreed }) => {
  const classes = DogListStyle();
  return (
    <div className={classes.root}>
      <List component="nav">
        {dogBreeds.map((item, index) => {
          return (
            <DogListItem
              key={item.name}
              active={item.name === selectedBreed.name}
              breedImage={item.image}
              breed={capitalize(item.name)}
              scoldingCounter={item.scoldingCounter}
            />
          );
        })}
      </List>
    </div>
  );
};
export default DogListView;
