import React from 'react';
import { buttonStyle } from './ButtonView.styles';

export interface Props {
  onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  children: React.ReactNode;
}

const ButtonView = ({ children, onClick }: Props) => {
  const classes = buttonStyle();

  return (
    <>
      <button type="submit" onClick={onClick} className={classes.button}>
        {children}
      </button>
    </>
  );
};

export default ButtonView;
