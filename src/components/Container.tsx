import { ReactNode } from 'react';

interface ContainerProps {
  children: ReactNode;
}

const Container = ({ children }: ContainerProps) => (
  <div className="flex flex-col ">{children}</div>
);

export default Container;
