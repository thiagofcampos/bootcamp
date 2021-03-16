import React, { useState } from 'react';
import DogListView from './DogListView';
import { getAll } from '../../service/dogList/DogListService';
import { keys } from 'lodash';

export default function DogList() {
  const [dogList, setDogList] = useState<string[]>([]);

  const fetchDogs = async () => {
    const listDogs = await getAll();
    setDogList(keys(listDogs.message));
  };

  React.useEffect(() => {
    fetchDogs();
  }, []);

  return <DogListView dogList={dogList} />;
}
