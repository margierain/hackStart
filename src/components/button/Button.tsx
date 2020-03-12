import React from 'react';
import { ButtonProps } from 'components/button/types';

const Button = (props: ButtonProps) => {
  const { onClick, style, label } = props;
  return (
    <button onClick={onClick} style={style}>
      {label} Color Button
    </button>
  );
};

export default Button;
