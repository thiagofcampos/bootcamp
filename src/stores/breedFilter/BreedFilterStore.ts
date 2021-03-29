import { createStore } from 'effector';
import { cloneDeep } from 'lodash';
import { onBreedFilter } from './BreedFilterEffect';
import BreedFilterState from './BreedFilterState';

const initialState: BreedFilterState = {
  selectedBreedFilter: '',
};

const BreedFilterStore = createStore<BreedFilterState>(initialState).on(
  onBreedFilter,
  (state, selectedBreedFilter) => {
    console.log(selectedBreedFilter);
    return cloneDeep({
      ...state,
      ...selectedBreedFilter,
    });
  }
);

export default BreedFilterStore;
