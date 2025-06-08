import React from 'react';
import { Button as CarbonButton } from '@carbon/react';

interface ButtonProps {
  children: React.ReactNode;
  type?: 'button' | 'submit' | 'reset';
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
  variant?: 'primary' | 'secondary' | 'tertiary' | 'danger' | 'ghost';
  size?: 'sm' | 'md' | 'lg' | 'xl' | '2xl';
}

export const Button: React.FC<ButtonProps> = ({
  children,
  type = 'button',
  onClick,
  disabled = false,
  className = '',
  variant = 'primary',
  size = 'md',
  ...props
}) => {
  // Map our variant names to Carbon button kinds
  const getCarbonKind = (variant: string) => {
    switch (variant) {
      case 'primary':
        return 'primary';
      case 'secondary':
        return 'secondary';
      case 'tertiary':
        return 'tertiary';
      case 'danger':
        return 'danger';
      case 'ghost':
        return 'ghost';
      default:
        return 'primary';
    }
  };

  // Map size to Carbon size
  const getCarbonSize = (size: string) => {
    switch (size) {
      case 'sm':
        return 'sm';
      case 'md':
        return 'md';
      case 'lg':
        return 'lg';
      case 'xl':
        return 'xl';
      case '2xl':
        return '2xl';
      default:
        return 'md';
    }
  };

  return (
    <CarbonButton
      type={type}
      onClick={onClick}
      disabled={disabled}
      kind={getCarbonKind(variant)}
      size={getCarbonSize(size)}
      className={className}
      {...props}
    >
      {children}
    </CarbonButton>
  );
};

export default Button;
