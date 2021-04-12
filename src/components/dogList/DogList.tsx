import React, { useMemo } from 'react';
import DogListView from './DogListView';
import DogListStore from '../../stores/dogList/DogListStore';
import { useStoreMap } from 'effector-react';
import DogItemStore from '../../stores/dogItem/DogItemStore';
import BreedFilterStore from '../../stores/breedFilter/BreedFilterStore';

export default function DogList() {
  const { dogBreeds } = useStoreMap({
    store: DogListStore,
    keys: [],
    fn: (state) => state,
  });

  const selectedBreed = useStoreMap({
    store: DogItemStore,
    keys: [],
    fn: (state) => state,
  });

  const { selectedBreedFilter } = useStoreMap({
    store: BreedFilterStore,
    keys: [],
    fn: (state) => state,
  });

  const filteredDogList = useMemo(
    () =>
      selectedBreedFilter && dogBreeds?.length > 0
        ? dogBreeds.filter(
            (dogBreed) =>
              dogBreed.name.charAt(0).toLowerCase() === selectedBreedFilter.toLowerCase()
          )
        : dogBreeds,
    [dogBreeds, selectedBreedFilter]
  );
  return <DogListView dogBreeds={filteredDogList} selectedBreed={selectedBreed} />;
}
