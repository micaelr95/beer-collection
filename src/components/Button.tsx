import { ReactNode } from 'react';
import type { MouseEventHandler } from 'react';

interface ButtonProps {
  children: ReactNode;
  type?: 'button' | 'submit' | 'reset';
  handleClick?: MouseEventHandler<HTMLButtonElement>;
}

const Button = ({ children, type, handleClick }: ButtonProps) => (
  <button
    className="bg-blue-700 hover:bg-blue-500 px-5 py-2 rounded"
    type={type}
    onClick={handleClick}
  >
    {children}
  </button>
);

export default Button;
