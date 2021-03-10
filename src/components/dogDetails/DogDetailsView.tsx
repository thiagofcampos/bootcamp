import React from 'react';
import { dogDetailsStyle } from './DogDetailsView.styles';
import Button from '../button/Button';

export interface Props {
  urlImage: string;
  name: string;
  onBark: () => void;
  scoldCount: number;
  onScold: () => void;
}

const DogDetailsView = ({ urlImage, name, onBark, scoldCount, onScold }: Props) => {
  const classes = dogDetailsStyle();
  return (
    <div>
      <div className={classes.containerImage}>
        <img src={urlImage} alt={'Dog'} />
        <span>{name}</span>
        <span>Scold: {scoldCount}</span>
        <div className={classes.containerButton}>
          <Button onClick={onBark}>Bark!</Button>
          <Button onClick={onScold}>Scold!</Button>
        </div>
      </div>
    </div>
  );
};

export default DogDetailsView;
