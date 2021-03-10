import React, { useCallback } from 'react';
import DogDetailsView from './DogDetailsView';

const DogDetails = () => {
  const image =
    'https://www.eastdallasvetclinic.com/sites/default/files/styles/large/adaptive-image/public/golden-retriever-dog-breed-info.jpg?itok=EXS-JR-v';

  const onBark = useCallback(() => {
    alert('Wuf wuf');
  }, []);

  const [scoldCount, setScoldCount] = React.useState(0);
  const onScold = () => {
    setScoldCount(scoldCount + 1);
  };

  return (
    <DogDetailsView
      urlImage={image}
      name={'Golden'}
      onBark={onBark}
      scoldCount={scoldCount}
      onScold={onScold}
    />
  );
};

export default DogDetails;
