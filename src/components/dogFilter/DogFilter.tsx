import React, { useCallback, useMemo } from 'react';
import DogListStore from '../../stores/dogList/DogListStore';
import { useStoreMap } from 'effector-react';
import DogFilterView from './DogFilterView';
import * as BreedFilterEffect from '../../stores/breedFilter/BreedFilterEffect';

function DogFilter(): JSX.Element {
  const { dogBreeds } = useStoreMap({
    store: DogListStore,
    keys: [],
    fn: (state) => state,
  });

  const filterOptions = useMemo(() => 'abcdefghijklmnopqrstuvwxyz'.split(''), []);

  const onChangeOption = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    BreedFilterEffect.onBreedFilter({ selectedBreedFilter: e.target.value });
  }, []);

  const getDogBreedsLength = useCallback(
    (dogBreedLetter: string) => {
      console.log('in');
      return dogBreeds.filter(
        (dogBreed) => dogBreed.name.charAt(0).toLowerCase() === dogBreedLetter.toLowerCase()
      ).length;
    },
    [dogBreeds]
  );
  return (
    <DogFilterView
      filterOptions={filterOptions}
      getDogBreedsLength={getDogBreedsLength}
      onChangeOption={onChangeOption}
    />
  );
}
export default DogFilter;
