import React from 'react';
import { TextArea } from '@carbon/react';

interface TextareaProps {
  id?: string;
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  disabled?: boolean;
  className?: string;
  'aria-required'?: boolean;
  'aria-invalid'?: boolean;
  'aria-describedby'?: string;
  // React Hook Form props
  name?: string;
  onBlur?: (e: React.FocusEvent<HTMLTextAreaElement>) => void;
  ref?: React.Ref<HTMLTextAreaElement>;
  rows?: number;
}

export const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  (
    {
      id,
      placeholder,
      value,
      onChange,
      disabled = false,
      className = '',
      name,
      onBlur,
      rows = 4,
      ...props
    },
    ref
  ) => {
    return (
      <TextArea
        labelText={undefined} id={id}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        disabled={disabled}
        name={name}
        ref={ref}
        rows={rows}
        className={className}
        {...props}      />
    );
  }
);

Textarea.displayName = 'Textarea';

export default Textarea;
