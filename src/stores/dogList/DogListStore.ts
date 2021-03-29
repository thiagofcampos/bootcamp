import { createStore } from 'effector';
import { cloneDeep } from 'lodash';
import { listDogBreeds, setBreedList } from './DogListEffect';
import DogListState from './DogListState';

const initialState: DogListState = {
  dogBreeds: [],
};

const DogListStore = createStore<DogListState>(initialState)
  .on(listDogBreeds, (state) =>
    cloneDeep({
      ...state,
    })
  )
  .on(listDogBreeds.doneData, (state, payload) => {
    return cloneDeep({
      ...state,
      dogBreeds: payload,
    });
  })
  .on(setBreedList, (state, updateScold) => {
    return cloneDeep({
      ...state,
      dogBreeds: updateScold,
    });
  });

export default DogListStore;
