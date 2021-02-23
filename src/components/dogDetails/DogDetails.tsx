import React from 'react';
import { IDogDetailsProps } from './DogDetails.types';
import DogDetailsView from './DogDetailsView';


const DogDetails = ({urlImage, name, showAlert}: IDogDetailsProps) => {

    return(
        <DogDetailsView urlImage={urlImage} name={name} showAlert={showAlert}/>
    )
}

export default DogDetails;