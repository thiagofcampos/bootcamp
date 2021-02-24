import React from 'react';
import DogDetails from './components/dogDetails/DogDetails';
import { CssBaseline } from '@material-ui/core';
import { appStyle } from './style';

function App() {
  const classes = appStyle();
  const image = "https://www.eastdallasvetclinic.com/sites/default/files/styles/large/adaptive-image/public/golden-retriever-dog-breed-info.jpg?itok=EXS-JR-v"

  const showAlert = (text: string) => {
    alert(text)
  }

  return (
    <>
    <CssBaseline/>
    <div className={classes.container}> 
      <DogDetails name={"Golden"} urlImage={image} showAlert={showAlert}/>
    </div>
    </>
  );
}

export default App;
