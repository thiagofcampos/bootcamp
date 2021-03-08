import React from 'react';
import { InputTextAutosizeStyle } from './InputTextAutosizeView.styles';
import { InputLabel } from '@material-ui/core';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';

interface Props {
  handleChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  value: string;
  error: boolean;
  label: string;
  name: string;
  rowsMin: number;
  helperText?: string;
}

const InputTextAutosizeView = ({
  error,
  value,
  handleChange,
  label,
  name,
  rowsMin,
  helperText,
}: Props) => {
  const classes = InputTextAutosizeStyle();

  return (
    <>
      <InputLabel className={classes.ingredientsLabel} error={error}>
        {label}
      </InputLabel>
      <div id="container" className={`${classes.container} ${error ? classes.error : ''}`}>
        <TextareaAutosize
          name={name}
          value={value}
          aria-label="minimum height"
          onChange={handleChange}
          rowsMin={rowsMin}
        />
        {!!helperText && (
          <InputLabel className={classes.ingredientsLabel} error={error}>
            <span>{helperText}</span>
          </InputLabel>
        )}
      </div>
    </>
  );
};

export default InputTextAutosizeView;
