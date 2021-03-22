import React from 'react';
import { ListItem, ListItemText } from '@material-ui/core';
import { capitalize } from 'lodash';
import { DogListStyle } from './DogListItemView.styles';

interface Props {
  breed: string;
  breedImage: string;
  key: number;
  active: boolean;
  scoldingCounter: number;
  onSelectDog: (breedName: string) => void;
}

const DogListItemView: React.FC<Props> = ({
  breed,
  breedImage,
  key,
  active,
  scoldingCounter,
  onSelectDog,
}) => {
  const classes = DogListStyle();
  const onSelectDogBreed: React.MouseEventHandler<HTMLDivElement> = React.useCallback(() => {
    onSelectDog(breed);
  }, []);

  return (
    <div
      onClick={onSelectDogBreed}
      key={key}
      className={`${classes.container} ${active && classes.active}`}
    >
      <img className={classes.image} src={breedImage} />
      <ListItemText className={classes.title} primary={capitalize(breed)} />
      <span>Scold: {scoldingCounter}</span>
    </div>
  );
};

export default DogListItemView;
