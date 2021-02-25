import React from 'react';
import { createBeerFormStyle } from './style';
import TextField from '@material-ui/core/TextField';
import { InputLabel, Typography } from '@material-ui/core';
import Button from '../button/Button';
import MenuItem from '@material-ui/core/MenuItem';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import { typeBeerList } from '../../conf/mocks/typeBeerMock';

interface ICreateBeerProps {
  name: string;
  type: number;
  hasCorn: boolean;
  ingredients: string;
  onChangeText: (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  onChangeCheckBox: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit: (event: React.FormEvent) => void;
}

const CreateBeerFormView = ({
  name,
  type,
  hasCorn,
  ingredients,
  onChangeText,
  onChangeCheckBox,
  onSubmit,
}: ICreateBeerProps) => {
  const classes = createBeerFormStyle();

  return (
    <div className={classes.container}>
      <form onSubmit={onSubmit} className={classes.root} noValidate autoComplete="off">
        <Typography variant="h4" align={'center'} gutterBottom>
          Create Beer
        </Typography>
        <TextField
          name="name"
          onChange={onChangeText}
          value={name}
          id="standard-basic"
          label="Beer name"
        />
        <TextField
          id="standard-select-currency"
          name="type"
          select
          label="Type"
          value={type}
          onChange={onChangeText}
          helperText="Please select your beer type"
        >
          {typeBeerList.map((option) => (
            <MenuItem key={option.id} value={option.id}>
              {option.value}
            </MenuItem>
          ))}
        </TextField>
        <FormControlLabel
          control={
            <Checkbox
              checked={hasCorn}
              onChange={onChangeCheckBox}
              name="hasCorn"
              color="primary"
            />
          }
          label="Has corn"
        />
        <InputLabel className={classes.ingredientsLabel}>Ingredients</InputLabel>
        <TextareaAutosize
          name="ingredients"
          onChange={onChangeText}
          value={ingredients}
          aria-label="minimum height"
          rowsMin={6}
        />
        <Button>Submit</Button>
      </form>
    </div>
  );
};

export default CreateBeerFormView;
