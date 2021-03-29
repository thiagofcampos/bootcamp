import { createEvent } from 'effector';
import DogItemState from './DogItemState';

export const selectBreedFromList = createEvent<DogItemState>();
