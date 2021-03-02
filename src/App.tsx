import React, { useCallback } from 'react';
import DogDetails from './components/dogDetails/DogDetails';
import CreateBeerForm from './components/createBeerForm/CreateBeerForm';
import CreateBeerFormikForm from './components/createBeerFormikForm /CreateBeerFormikForm';
import { CssBaseline } from '@material-ui/core';
import { appStyle } from './App.styles';

function App() {
  const classes = appStyle();
  const image =
    'https://www.eastdallasvetclinic.com/sites/default/files/styles/large/adaptive-image/public/golden-retriever-dog-breed-info.jpg?itok=EXS-JR-v';

  const onBark = useCallback(() => {
    alert('Wuf wuf');
  }, []);

  return (
    <>
      <CssBaseline />
      <div className={classes.container}>
        <DogDetails name={'Golden'} urlImage={image} onBark={onBark} />
        <CreateBeerForm />
        <CreateBeerFormikForm />
      </div>
    </>
  );
}

export default App;
