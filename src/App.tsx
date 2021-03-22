import React from 'react';
import DogDetailsWrapper from './components/dogDetailsWrapper/DogDetailsWrapper';
import CreateBeerForm from './components/createBeerForm/CreateBeerForm';
import CreateBeerFormikForm from './components/createBeerFormikForm /CreateBeerFormikForm';
import { Container, CssBaseline, Grid } from '@material-ui/core';

function App() {
  return (
    <>
      <CssBaseline />
      <Container maxWidth="lg">
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <DogDetailsWrapper />
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
