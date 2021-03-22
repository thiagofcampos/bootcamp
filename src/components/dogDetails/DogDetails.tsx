import React, { useCallback } from 'react';
import DogDetailsView from './DogDetailsView';
interface Props {
  name: string;
  image: string;
  onScold: () => void;
}
const DogDetails = ({ name, image, onScold }: Props) => {
  const onBark = useCallback(() => {
    alert('Wuf wuf');
  }, []);
  return <DogDetailsView image={image} name={name} onBark={onBark} onScold={onScold} />;
};
export default DogDetails;
