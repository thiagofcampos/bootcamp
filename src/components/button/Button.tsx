import React from 'react';
import ButtonView from './ButtonView';

export interface IButtonProps {
  onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  children: React.ReactNode;
}

const Button = ({ children, onClick }: IButtonProps) => {
  return (
    <>
      <ButtonView onClick={onClick}>{children}</ButtonView>
    </>
  );
};

export default Button;
