import React from 'react';
import DogListItemView from './DogListItemView';

interface Props {
  breed: string;
  breedImage: string;
  key: number;
}

export default function DogListItem({ breed, breedImage, key }: Props) {
  return <DogListItemView key={key} breedImage={breedImage} breed={breed} />;
}
