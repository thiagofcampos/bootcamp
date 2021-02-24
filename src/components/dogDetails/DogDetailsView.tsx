import React, { useCallback } from 'react';
import { dogDetailsStyle } from './style';
import Button from '../button/Button';

export interface IDogDetailsViewProps{
    urlImage: string,
    name: string,
    onBark: (value: string) => void,
    scoldCount: number,
    scoldSetter: () => void
}

const DogDetailsView = ({urlImage, name, onBark, scoldCount, scoldSetter}:IDogDetailsViewProps) => {

    const bark = "Woof! Woof!"
    const classes = dogDetailsStyle();
    const onShowAlert = useCallback(() => {
        onBark(bark)
    }, [])
    return(
        <div >
            <div className={classes.containerImage}>
                <img src={urlImage}/>
                <span>{name}</span>   
                <span>Scold: {scoldCount}</span>
                <div className={classes.containerButton}>
                <Button onClick={onShowAlert}>
                    Bark!
                </Button>
                <Button onClick={scoldSetter}>
                    Scold!
                </Button>
                </div>   
            </div>
        </div>
    )
}

export default DogDetailsView;