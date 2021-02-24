import React from 'react';
import { IButtonProps } from './Button.types';
import ButtonView from './ButtonView';


const Button = ({children, onClick}:IButtonProps) => {
    return(
        <>
            <ButtonView onClick={(onClick)} >
                {children}
            </ButtonView>
        </>
    )
}

export default Button