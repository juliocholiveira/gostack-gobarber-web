import React from 'react';

import { Container } from './styles';

interface TooltipTypes {
  title: string;
  className?: string;
}

const Tooltip: React.FC<TooltipTypes> = ({ title, className, children }) => {
  return (
    <Container className={className}>
      {children}
      <span>{title}</span>
    </Container>
  );
};

export default Tooltip;
