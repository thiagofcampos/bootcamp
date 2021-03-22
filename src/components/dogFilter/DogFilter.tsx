import React, { useCallback, useMemo } from 'react';
import { DogBreed } from '../../types/DogBreedsType';
import DogFilterView from './DogFilterView';
interface Props {
  dogBreeds: DogBreed[];
  onSelectDogBreedFilter: (dogBreedFilter: string) => void;
}
function DogFilter({ dogBreeds, onSelectDogBreedFilter }: Props): JSX.Element {
  const filterOptions = useMemo(() => 'abcdefghijklmnopqrstuvwxyz'.split(''), []);
  const onChangeOption = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    onSelectDogBreedFilter(e.target.value);
  }, []);
  const getDogBreedsLength = useCallback(
    (dogBreedLetter: string) => {
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
