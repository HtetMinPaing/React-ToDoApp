import React from 'react';
import style from '../styles/modules/button.module.scss';
import { getClasses } from '../utils/getClasses';

const buttonTypes = {
  primary: 'primary',
  secondary: 'secondary',
};

const Button = ({ children, variant = 'primary', type, ...rest }) => (
  <button
    type={type === 'submit' ? 'submit' : 'button'}
    className={getClasses([
      style.button,
      style[`button--${buttonTypes[variant]}`],
    ])}
    {...rest}
  >
    {children}
  </button>
);

function SelectButton({ children, id, ...rest }) {
  return (
    <select
      className={getClasses([style.button, style.button__select])}
      {...rest}
    >
      {children}
    </select>
  );
}

export { SelectButton };
export default Button;
