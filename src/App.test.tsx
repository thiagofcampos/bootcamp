import React from 'react';
import { Container, CssBaseline, Grid } from '@material-ui/core';
import { shallow } from 'enzyme';
import App from './App';
import CreateBeerForm from './components/createBeerForm/CreateBeerForm';
import CreateBeerFormikForm from './components/createBeerFormikForm /CreateBeerFormikForm';
import DogDetailsWrapper from './components/dogDetailsWrapper/DogDetailsWrapper';

describe('App', () => {
  it('should render with the right props', () => {
    const wrapper = shallow(<App />);

    expect(
      wrapper.matchesElement(
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
      )
    ).toBe(true);
  });
});
