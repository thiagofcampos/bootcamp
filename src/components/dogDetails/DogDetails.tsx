import React from 'react';
import DogDetailsView from './DogDetailsView';

export interface Props {
  urlImage: string;
  name: string;
  onBark: () => void;
}

const DogDetails = ({ urlImage, name, onBark }: Props) => {
  const [scoldCount, setScoldCount] = React.useState(0);
  const onScold = () => {
    setScoldCount(scoldCount + 1);
  };

  return (
    <DogDetailsView
      urlImage={urlImage}
      name={name}
      onBark={onBark}
      scoldCount={scoldCount}
      onScold={onScold}
    />
  );
};

export default DogDetails;
