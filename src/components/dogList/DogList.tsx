import React, { useMemo } from 'react';
import DogListView from './DogListView';
import DogListStore from '../../stores/dogList/DogListStore';
import { useStoreMap, useStore } from 'effector-react';
import DogItemStore from '../../stores/dogItem/DogItemStore';
import BreedFilterStore from '../../stores/breedFilter/BreedFilterStore';

export default function DogList() {
  const dogBreeds = useStoreMap({
    store: DogListStore,
    keys: [],
    fn: (state) => state.dogBreeds,
  });
  const selectedBreed = useStore(DogItemStore);
  const { selectedBreedFilter } = useStore(BreedFilterStore);
  console.log('selectedBreedFilter', selectedBreedFilter);
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
  return <DogListView dogBreeds={filteredDogList} selectedBreed={selectedBreed} />;
}
