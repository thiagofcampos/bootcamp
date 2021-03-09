import React, { useCallback } from 'react';
import DogDetails from './components/dogDetails/DogDetails';
import CreateBeerForm from './components/createBeerForm/CreateBeerForm';
import CreateBeerFormikForm from './components/createBeerFormikForm /CreateBeerFormikForm';
import { Container, CssBaseline, Grid } from '@material-ui/core';

function App() {
  const image =
    'https://www.eastdallasvetclinic.com/sites/default/files/styles/large/adaptive-image/public/golden-retriever-dog-breed-info.jpg?itok=EXS-JR-v';

  const onBark = useCallback(() => {
    alert('Wuf wuf');
  }, []);

  return (
    <>
      <CssBaseline />
      <Container maxWidth="lg">
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <DogDetails name={'Golden'} urlImage={image} onBark={onBark} />
          </Grid>
          <Grid item sm={6}>
            <CreateBeerForm />
          </Grid>
          <Grid item sm={6}>
            <CreateBeerFormikForm />
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

export default App;
