import React from 'react';
import { buttonStyle } from './style';

export interface IButtonViewProps {
  onClick: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  children: React.ReactNode;
}

const ButtonView = ({ children, onClick }: IButtonViewProps) => {
  const classes = buttonStyle();

  return (
    <>
      <button onClick={onClick} className={classes.button}>
        {children}
      </button>
    </>
  );
};

export default ButtonView;
