import React, { useCallback } from 'react';
import { dogDetailsStyle } from './style';
import Button from '../button/Button';
import { IDogDetailsProps } from './DogDetails.types';


const DogDetailsView = ({urlImage, name, showAlert}:IDogDetailsProps) => {

    const bark = "Woof! Woof!"
    const classes = dogDetailsStyle();
    const onShowAlert = useCallback(() => {
        showAlert(bark)
    }, [])
    return(
        <div >
            <div className={classes.containerImage}>
                <img src={urlImage}/>
                <span>{name}</span>   
                <Button onClick={onShowAlert}>
                    Bark!
                </Button>
            </div>
        </div>
    )
}

export default DogDetailsView;