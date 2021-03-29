import { createStore } from 'effector';
import { cloneDeep } from 'lodash';
import { selectBreedFromList } from './DogItemEffect';
import DogItemState from './DogItemState';

const initialState: DogItemState = {
  image: '',
  name: '',
  scoldingCounter: 0,
};

const DogItemStore = createStore<DogItemState>(initialState).on(
  selectBreedFromList,
  (state, dogItem) =>
    cloneDeep({
      ...state,
      ...dogItem,
    })
);

export default DogItemStore;
