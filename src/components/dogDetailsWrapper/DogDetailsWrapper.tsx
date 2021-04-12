import React from 'react';
import { useStoreMap } from 'effector-react';
import LoaderStore from '../../stores/loader/LoaderStore';
import DogDetailsWrapperView from './DogDetailsWrapperView';
import * as DogListEffect from '../../stores/dogList/DogListEffect';

const DogDetailsWrapper = () => {
  const { isLoading } = useStoreMap({
    store: LoaderStore,
    keys: [],
    fn: (state) => state,
  });

  React.useEffect(() => {
    DogListEffect.listDogBreeds();
  }, []);

  return <DogDetailsWrapperView isLoading={isLoading} />;
};
export default DogDetailsWrapper;
