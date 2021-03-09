import React from 'react';
import { Container, CssBaseline, Grid } from '@material-ui/core';
import { shallow } from 'enzyme';
import App from './App';
import CreateBeerForm from './components/createBeerForm/CreateBeerForm';
import CreateBeerFormikForm from './components/createBeerFormikForm /CreateBeerFormikForm';
import DogDetails from './components/dogDetails/DogDetails';

describe('App', () => {
  it('should render with the right props', () => {
    const mockFn = jest.fn();
    const wrapper = shallow(<App />);

    expect(
      wrapper.matchesElement(
        <>
          <CssBaseline />
          <Container maxWidth="lg">
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <DogDetails />
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
  it('should call the alert when onBark function is called', () => {
    jest.spyOn(window, 'alert').mockImplementation(() => {});
    window.alert = jest.fn();
    const wrapper = shallow(<App />);
    wrapper.find(DogDetails).invoke('onBark')();
    expect(window.alert).toBeCalled();
  });
});
