import React from 'react';
import DogListItemView from './DogListItemView';
import DogListStore from '../../stores/dogList/DogListStore';
import * as DogItemEffect from '../../stores/dogItem/DogItemEffect';
import { useStoreMap } from 'effector-react';

interface Props {
  breed: string;
  breedImage: string;
  active: boolean;
  scoldingCounter: number;
}

export default function DogListItem({ breed, breedImage, active, scoldingCounter }: Props) {
  const { dogBreeds } = useStoreMap({
    store: DogListStore,
    keys: [],
    fn: (state) => state,
  });
  const onSelectBreed = (breedName: string) => {
    const selectedBreed = dogBreeds.find(
      (item) => item.name.toLowerCase() === breedName.toLowerCase()
    );
    if (!selectedBreed) return;

    DogItemEffect.selectBreedFromList(selectedBreed);
  };

  return (
    <DogListItemView
      breedImage={breedImage}
      breed={breed}
      active={active}
      scoldingCounter={scoldingCounter}
      onSelectDog={onSelectBreed}
    />
  );
}
