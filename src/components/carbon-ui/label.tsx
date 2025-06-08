import React from 'react';
import { FormLabel } from '@carbon/react';

interface LabelProps {
  htmlFor?: string;
  children: React.ReactNode;
  className?: string;
}

export const Label: React.FC<LabelProps> = ({
  children,
  className = '',
  ...props
}) => {
  return (
    <FormLabel
      className={className}
      {...props}
    >
      {children}
    </FormLabel>
  );
};

export default Label;
