import React from 'react';
import { keys } from 'lodash';
import { getBreedImages } from '../../service/dogImage/DogImageService';
import { getAllBreeds } from '../../service/dogList/DogListService';
import { DogBreed } from '../../types/DogBreedsType';
import DogDetailsWrapperView from './DogDetailsWrapperView';
const DogDetailsWrapper = () => {
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const [breedList, setBreedList] = React.useState<DogBreed[]>([]);
  const [selectedBreed, setSelectedBreed] = React.useState<DogBreed>({} as DogBreed);
  const [selectedBreedFilter, setSelectedBreedFilter] = React.useState<string>('');
  const getImageByBreed = async (breed: string) => {
    const response = await getBreedImages(breed);
    return response.message;
  };

  console.log(selectedBreedFilter);
  const fetchDogs = async () => {
    setIsLoading(true);
    try {
      const listDogs = await getAllBreeds();
      const captionDogList = keys(listDogs?.message);
      const formatBreeds: DogBreed[] = await Promise.all(
        captionDogList.map(
          async (item: string): Promise<DogBreed> => {
            const imageBreed: string = await getImageByBreed(item);
            return {
              name: item,
              image: imageBreed,
              scoldingCounter: 0,
            };
          }
        )
      );
      setBreedList([...breedList, ...formatBreeds]);
    } catch (error) {
      console.log('error: ', error);
    } finally {
      setIsLoading(false);
    }
  };
  const onSelectDog = (breedName: string) => {
    const filterBreedList = breedList.filter(
      (item) => item.name.charAt(0).toLowerCase() === selectedBreedFilter.toLowerCase()
    );

    const selectedBreed = (selectedBreedFilter ? filterBreedList : breedList).find(
      (item) => item.name.toLowerCase() === breedName.toLowerCase()
    );
    console.log(selectedBreed);
    if (!selectedBreed) return;
    setSelectedBreed(selectedBreed);
  };
  const onScold = () => {
    const dogBreeds = breedList.map((item) => {
      if (item.name.toLowerCase() === selectedBreed.name.toLowerCase())
        return { ...item, scoldingCounter: item.scoldingCounter + 1 };
      return item;
    });
    setBreedList(dogBreeds);
  };
  const onSelectDogBreedFilter = (dogBreedFilter: string) => setSelectedBreedFilter(dogBreedFilter);
  React.useEffect(() => {
    fetchDogs();
  }, []);
  return (
    <DogDetailsWrapperView
      isLoading={isLoading}
      onScold={onScold}
      dogBreeds={breedList}
      selectedBreed={selectedBreed}
      selectedBreedFilter={selectedBreedFilter}
      onSelectDog={onSelectDog}
      onSelectDogBreedFilter={onSelectDogBreedFilter}
    />
  );
};
export default DogDetailsWrapper;
