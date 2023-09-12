import { ChangeEvent } from 'react';

import Container from './Container';

interface InputProps {
  id: string;
  label: string;
  type?: 'text' | 'month' | 'url';
  handleChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

const Input = ({ id, label, type = 'text', handleChange }: InputProps) => (
  <Container>
    <label htmlFor={id}>{label}</label>
    <input
      className="bg-neutral-800/30 border p-2 rounded"
      type={type}
      id={id}
      name={id}
      onChange={handleChange}
      required
    />
  </Container>
);

export default Input;
