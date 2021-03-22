import React from 'react';
import { List } from '@material-ui/core';
import { DogListStyle } from './DogListView.styles';
import { capitalize } from 'lodash';
import DogListItem from '../dogListItem/DogListItem';
import { DogBreed } from '../../types/DogBreedsType';
interface Props {
  dogBreeds: DogBreed[];
  selectedBreed: DogBreed;
  onSelectDog: (breedName: string) => void;
}
const DogListView: React.FC<Props> = ({ dogBreeds, selectedBreed, onSelectDog }) => {
  const classes = DogListStyle();
  return (
    <div className={classes.root}>
      <List component="nav">
        {dogBreeds.map((item, index) => {
          return (
            <DogListItem
              key={index}
              active={item.name === selectedBreed.name}
              breedImage={item.image}
              breed={capitalize(item.name)}
              scoldingCounter={item.scoldingCounter}
              onSelectDog={onSelectDog}
            />
          );
        })}
      </List>
    </div>
  );
};
export default DogListView;
