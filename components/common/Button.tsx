import React from 'react';
import { ButtonProps } from '../interfaces';


const Button: React.FC<ButtonProps> = ({ children, ...props }) => {
  return (
    <button {...props}>
      {children}
    </button>
  );
};

export default Button;