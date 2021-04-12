import { createEffect, createEvent } from 'effector';
import { keys } from 'lodash';
import { getBreedImages } from '../../service/dogImage/DogImageService';
import { getAllBreeds } from '../../service/dogList/DogListService';
import { DogBreed } from '../../types/DogBreedsType';
import * as LoaderEffect from '../../stores/loader/LoaderEffect';

export const listDogBreeds = createEffect(async () => {
  LoaderEffect.setLoading({ isLoading: true });
  const listDogs = await getAllBreeds();
  const captionDogList = keys(listDogs?.message);
  const formatBreeds: DogBreed[] = await Promise.all(
    captionDogList.map(
      async (item: string): Promise<DogBreed> => {
        const imageBreed: string = await getBreedImages(item);
        return {
          name: item,
          image: imageBreed,
          scoldingCounter: 0,
        };
      }
    )
  );
  LoaderEffect.setLoading({ isLoading: false });
  return formatBreeds;
});

export const setBreedList = createEvent<DogBreed[]>();
