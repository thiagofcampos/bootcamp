import React from 'react';
import { dogDetailsWrapperStyle } from './DogDetailsWrapperView.styles';
import DogDetails from '../dogDetails/DogDetails';
import DogList from '../dogList/DogList';
import { DogBreed } from '../../types/DogBreedsType';

export interface Props {
  name: string;
  image: string;
  onScold: () => void;
  dogBreeds: DogBreed[];
  selectedBreed: DogBreed;
  onSelectDog: (breedName: string) => void;
}

const DogDetailsWrapperView = ({ dogBreeds, selectedBreed, onSelectDog, onScold }: Props) => {
  const classes = dogDetailsWrapperStyle();
  return (
    <div>
      <div className={classes.container}>
        <DogDetails name={selectedBreed?.name} image={selectedBreed?.image} onScold={onScold} />
        <DogList dogBreeds={dogBreeds} selectedBreed={selectedBreed} onSelectDog={onSelectDog} />
      </div>
    </div>
  );
};

export default DogDetailsWrapperView;
