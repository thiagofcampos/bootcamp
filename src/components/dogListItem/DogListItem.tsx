import React from 'react';
import DogListItemView from './DogListItemView';

interface Props {
  breed: string;
  breedImage: string;
  key: number;
  active: boolean;
  scoldingCounter: number;
  onSelectDog: (breedName: string) => void;
}

export default function DogListItem({
  breed,
  breedImage,
  key,
  active,
  scoldingCounter,
  onSelectDog,
}: Props) {
  return (
    <DogListItemView
      key={key}
      breedImage={breedImage}
      breed={breed}
      active={active}
      scoldingCounter={scoldingCounter}
      onSelectDog={onSelectDog}
    />
  );
}
