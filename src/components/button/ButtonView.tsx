import React from 'react';
import { buttonStyle } from './style';
import { IButtonProps } from './Button.types';


const ButtonView = ({children, onClick}:IButtonProps) => {
    const classes = buttonStyle();

    return(
        <>
            <button onClick={onClick} className={classes.button}>
                {children}
            </button>
        </>
    )
}

export default ButtonView