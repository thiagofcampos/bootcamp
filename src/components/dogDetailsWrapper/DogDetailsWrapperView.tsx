import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import { dogDetailsWrapperStyle } from './DogDetailsWrapperView.styles';
import DogDetails from '../dogDetails/DogDetails';
import DogList from '../dogList/DogList';
import DogFilter from '../dogFilter/DogFilter';
export interface Props {
  isLoading: boolean;
}
const DogDetailsWrapperView = ({ isLoading }: Props) => {
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
          <DogFilter />
          <DogDetails />
        </div>
        <DogList />
      </div>
    </div>
  );
};
export default DogDetailsWrapperView;
