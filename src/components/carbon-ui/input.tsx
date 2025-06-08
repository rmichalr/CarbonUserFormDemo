import React from 'react';
import { TextInput } from '@carbon/react';

interface InputProps {
  id?: string;
  type?: string;
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
  className?: string;
  'aria-required'?: boolean;
  'aria-invalid'?: boolean;
  'aria-describedby'?: string;
  // React Hook Form props
  name?: string;
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
  ref?: React.Ref<HTMLInputElement>;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      id,
      type = 'text',
      placeholder,
      value,
      onChange,
      disabled = false,
      className = '',
      name,
      onBlur,
      ...props
    },
    ref
  ) => {
    return (
      <TextInput
        labelText={undefined} id={id ?? ''}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        disabled={disabled}
        name={name}
        ref={ref}
        className={className}
        {...props}      />
    );
  }
);

Input.displayName = 'Input';

export default Input;
