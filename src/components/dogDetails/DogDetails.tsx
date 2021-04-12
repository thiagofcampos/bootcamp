import React, { useCallback } from 'react';
import DogDetailsView from './DogDetailsView';
import DogItemStore from '../../stores/dogItem/DogItemStore';
import { useStoreMap } from 'effector-react';
import DogListStore from '../../stores/dogList/DogListStore';
import * as DogListEffect from '../../stores/dogList/DogListEffect';

const DogDetails = () => {
  const { dogBreeds } = useStoreMap({
    store: DogListStore,
    keys: [],
    fn: (state) => state,
  });
  const { image, name } = useStoreMap({
    store: DogItemStore,
    keys: [],
    fn: (state) => state,
  });

  const onBark = useCallback(() => {
    alert('Wuf wuf');
  }, []);

  const onScold = () => {
    const dogBreedsScoldCount = dogBreeds.map((item) => {
      if (item.name.toLowerCase() === name.toLowerCase())
        return { ...item, scoldingCounter: item.scoldingCounter + 1 };
      return item;
    });
    DogListEffect.setBreedList(dogBreedsScoldCount);
  };

  return <DogDetailsView image={image} name={name} onBark={onBark} onScold={onScold} />;
};
export default DogDetails;
