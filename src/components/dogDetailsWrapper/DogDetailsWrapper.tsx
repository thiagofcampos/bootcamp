import React from 'react';
import { useStore } from 'effector-react';
import LoaderStore from '../../stores/loader/LoaderStore';
import DogDetailsWrapperView from './DogDetailsWrapperView';
import * as DogListEffect from '../../stores/dogList/DogListEffect';
import * as LoaderEffect from '../../stores/loader/LoaderEffect';

const DogDetailsWrapper = () => {
  const { isLoading } = useStore(LoaderStore);

  React.useEffect(() => {
    onGetAllDogBreeds();
  }, []);

  const onGetAllDogBreeds = async () => {
    LoaderEffect.setLoading({ isLoading: true });
    try {
      await DogListEffect.listDogBreeds();
    } finally {
      LoaderEffect.setLoading({ isLoading: false });
    }
  };

  return <DogDetailsWrapperView isLoading={isLoading} />;
};
export default DogDetailsWrapper;
