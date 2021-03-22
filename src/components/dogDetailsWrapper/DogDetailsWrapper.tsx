import React from 'react';
import { keys } from 'lodash';
import { getBreedImages } from '../../service/dogImage/DogImageService';
import { getAllBreeds } from '../../service/dogList/DogListService';
import { DogBreed } from '../../types/DogBreedsType';
import DogDetailsWrapperView from './DogDetailsWrapperView';

const DogDetailsWrapper = () => {
  const [breedList, setBreedList] = React.useState<DogBreed[]>([]);
  const [selectedBreed, setSelectedBreed] = React.useState<DogBreed>({} as DogBreed);

  const getImageByBreed = async (breed: string) => {
    const response = await getBreedImages(breed);
    return response.message;
  };

  const fetchDogs = async () => {
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
  };

  const onSelectDog = (breedName: string) => {
    const selectedBreed = breedList.find(
      (item) => item.name.toLowerCase() === breedName.toLowerCase()
    );
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

  React.useEffect(() => {
    fetchDogs();
  }, []);

  return (
    <DogDetailsWrapperView
      name={selectedBreed?.name}
      image={selectedBreed?.image}
      onScold={onScold}
      dogBreeds={breedList}
      selectedBreed={selectedBreed}
      onSelectDog={onSelectDog}
    />
  );
};

export default DogDetailsWrapper;
