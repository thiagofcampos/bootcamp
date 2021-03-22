import React from 'react';
import { dogDetailsStyle } from './DogDetailsView.styles';
import Button from '../button/Button';
export interface Props {
  image: string;
  name: string;
  onBark: () => void;
  onScold: () => void;
}
const DogDetailsView = ({ image, name, onBark, onScold }: Props) => {
  const classes = dogDetailsStyle();
  return (
    <div>
      <div className={classes.containerImage}>
        <img src={image} alt={'Dog'} />
        <span>{name}</span>
        <div className={classes.containerButton}>
          <Button onClick={onBark}>Bark!</Button>
          <Button onClick={onScold}>Scold!</Button>
        </div>
      </div>
    </div>
  );
};
export default DogDetailsView;
