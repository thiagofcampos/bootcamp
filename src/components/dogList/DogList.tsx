import React from 'react';
import DogListView from './DogListView';
import { getAllBreeds } from '../../service/dogList/DogListService';
import { getBreedImages } from '../../service/dogImage/DogImageService';
import { keys } from 'lodash';

interface Breeds {
  breed: string;
  breedImage: string;
}

const initialBreedList = {
  breedList: [],
};

export default function DogList() {
  const [breedList, setBreedList] = React.useState<Breeds[]>(initialBreedList.breedList);

  const getImageByBreed = async (breed: string) => {
    const response = await getBreedImages(breed);
    return response.message;
  };

  const fetchDogs = async () => {
    const listDogs = await getAllBreeds();
    const captionDogList = keys(listDogs?.message);
    const formatBreeds: Breeds[] = await Promise.all(
      captionDogList.map(
        async (item: string): Promise<Breeds> => {
          const imageBreed: string = await getImageByBreed(item);
          return {
            breed: item,
            breedImage: imageBreed,
          };
        }
      )
    );
    setBreedList([...breedList, ...formatBreeds]);
  };
  React.useEffect(() => {
    fetchDogs();
  }, []);

  return <DogListView breedList={breedList} />;
}
