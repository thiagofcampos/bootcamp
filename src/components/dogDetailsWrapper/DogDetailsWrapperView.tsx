import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import { dogDetailsWrapperStyle } from './DogDetailsWrapperView.styles';
import DogDetails from '../dogDetails/DogDetails';
import DogList from '../dogList/DogList';
import { DogBreed } from '../../types/DogBreedsType';
import DogFilter from '../dogFilter/DogFilter';
export interface Props {
  isLoading: boolean;
  onScold: () => void;
  dogBreeds: DogBreed[];
  selectedBreed: DogBreed;
  selectedBreedFilter: string;
  onSelectDog: (breedName: string) => void;
  onSelectDogBreedFilter: (dogBreedFilter: string) => void;
}
const DogDetailsWrapperView = ({
  isLoading,
  dogBreeds,
  selectedBreed,
  selectedBreedFilter,
  onSelectDog,
  onSelectDogBreedFilter,
  onScold,
}: Props) => {
  const classes = dogDetailsWrapperStyle();
  if (isLoading)
    return (
      <div>
        <div className={classes.container}>
          <CircularProgress />
        </div>
      </div>
    );
  return (
    <div>
      <div className={classes.container}>
        <div>
          <DogFilter dogBreeds={dogBreeds} onSelectDogBreedFilter={onSelectDogBreedFilter} />
          <DogDetails name={selectedBreed?.name} image={selectedBreed?.image} onScold={onScold} />
        </div>
        <DogList
          dogBreeds={dogBreeds}
          selectedBreed={selectedBreed}
          selectedBreedFilter={selectedBreedFilter}
          onSelectDog={onSelectDog}
        />
      </div>
    </div>
  );
};
export default DogDetailsWrapperView;
