import React from 'react';
import { ListItem, ListItemText } from '@material-ui/core';
import { capitalize } from 'lodash';
import { DogListStyle } from './DogListItemView.styles';

interface Props {
  breed: string;
  breedImage: string;
  active: boolean;
  scoldingCounter: number;
  onSelectDog: (breedName: string) => void;
}

const DogListItemView: React.FC<Props> = ({
  breed,
  breedImage,
  active,
  scoldingCounter,
  onSelectDog,
}) => {
  const classes = DogListStyle();
  const onSelectDogBreed: React.MouseEventHandler<HTMLDivElement> = React.useCallback(() => {
    onSelectDog(breed);
  }, []);

  return (
    <div onClick={onSelectDogBreed} className={`${classes.container} ${active && classes.active}`}>
      <img className={classes.image} src={breedImage} />
      <ListItemText className={classes.title} primary={capitalize(breed)} />
      <span>Scold: {scoldingCounter}</span>
    </div>
  );
};

export default DogListItemView;
