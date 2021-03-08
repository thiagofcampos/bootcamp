import React, { useCallback } from 'react';
import InputTextAutosizeView from './InputTextAutosizeView';

interface Input {
  handleChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  value: string;
  error: boolean;
  label: string;
  name: string;
  rowsMin: number;
  helperText?: string;
}

const InputTextAutosize = ({
  handleChange,
  value,
  error,
  label,
  name,
  rowsMin,
  helperText,
}: Input) => {
  return (
    <InputTextAutosizeView
      handleChange={handleChange}
      value={value}
      error={error}
      label={label}
      name={name}
      rowsMin={rowsMin}
      helperText={helperText}
    />
  );
};

export default InputTextAutosize;
