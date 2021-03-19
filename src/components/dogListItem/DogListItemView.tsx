import React from 'react';
import { ListItem, ListItemText } from '@material-ui/core';
import { capitalize } from 'lodash';
import { DogListStyle } from './DogListItemView.styles';

interface Props {
  breed: string;
  breedImage: string;
  key: number;
}

const DogListItemView: React.FC<Props> = ({ breed, breedImage, key }) => {
  const classes = DogListStyle();
  return (
    <div key={key} className={classes.container}>
      <img className={classes.image} src={breedImage} />
      <ListItemText className={classes.title} primary={capitalize(breed)} />
    </div>
  );
};

export default DogListItemView;
