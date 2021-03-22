import React from 'react';
import DogListItemView from './DogListItemView';

interface Props {
  breed: string;
  breedImage: string;
  active: boolean;
  scoldingCounter: number;
  onSelectDog: (breedName: string) => void;
}

export default function DogListItem({
  breed,
  breedImage,
  active,
  scoldingCounter,
  onSelectDog,
}: Props) {
  return (
    <DogListItemView
      breedImage={breedImage}
      breed={breed}
      active={active}
      scoldingCounter={scoldingCounter}
      onSelectDog={onSelectDog}
    />
  );
}
