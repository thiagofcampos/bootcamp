import React from 'react';
import DogListView from './DogListView';
import { DogBreed } from '../../types/DogBreedsType';
interface Props {
  dogBreeds: DogBreed[];
  selectedBreed: DogBreed;
  onSelectDog: (breedName: string) => void;
}
export default function DogList({ dogBreeds, selectedBreed, onSelectDog }: Props) {
  return (
    <DogListView dogBreeds={dogBreeds} selectedBreed={selectedBreed} onSelectDog={onSelectDog} />
  );
}
