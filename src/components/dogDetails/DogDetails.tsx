import React from 'react';
import DogDetailsView from './DogDetailsView';

export interface IDogDetailsProps{
    urlImage: string,
    name: string,
    onBark: (value: string) => void,
}

const DogDetails = ({urlImage, name, onBark}: IDogDetailsProps) => {

    const [scoldCount, setScoldCount] = React.useState(0)
    const handleScold = () => {
        setScoldCount(scoldCount + 1)
    }

    return(
        <DogDetailsView 
        urlImage={urlImage} 
        name={name} 
        onBark={onBark} 
        scoldCount={scoldCount} 
        scoldSetter={handleScold}
        />
    )
}

export default DogDetails;