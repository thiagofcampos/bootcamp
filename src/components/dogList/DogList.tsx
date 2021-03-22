import React, { useMemo } from 'react';
import DogListView from './DogListView';
import { DogBreed } from '../../types/DogBreedsType';
interface Props {
  dogBreeds: DogBreed[];
  selectedBreed: DogBreed;
  selectedBreedFilter: string;
  onSelectDog: (breedName: string) => void;
}
export default function DogList({
  dogBreeds,
  selectedBreed,
  selectedBreedFilter,
  onSelectDog,
}: Props) {
  const filteredDogList = useMemo(
    () =>
      selectedBreedFilter
        ? dogBreeds.filter(
            (dogBreed) =>
              dogBreed.name.charAt(0).toLowerCase() === selectedBreedFilter.toLowerCase()
          )
        : dogBreeds,
    [dogBreeds, selectedBreedFilter]
  );
  return (
    <DogListView
      dogBreeds={filteredDogList}
      selectedBreed={selectedBreed}
      onSelectDog={onSelectDog}
    />
  );
}
