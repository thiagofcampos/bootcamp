import React, { useMemo } from 'react';
import { CreateBeerFormikFormStyle } from './CreateBeerFormView.styles';
import TextField from '@material-ui/core/TextField';
import { InputLabel, Typography } from '@material-ui/core';
import Button from '../button/Button';
import MenuItem from '@material-ui/core/MenuItem';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import { typeBeerList } from '../../conf/mocks/typeBeerMock';
import { FormData } from './CreateBeerFormView.types';
import { useFormik } from 'formik';

interface Props {
  handleSubmit: (values: FormData) => void;
}

const CreateBeerFormikFormView = ({ handleSubmit }: Props) => {
  const classes = CreateBeerFormikFormStyle();

  const initialValues = useFormik({
    initialValues: {
      name: '',
      type: 0,
      hasCorn: false,
      ingredients: '',
    },
    onSubmit: (values) => {
      handleSubmit(values);
    },
  });

  return (
    <div className={classes.container}>
      <form onSubmit={initialValues.handleSubmit} className={classes.root}>
        <Typography id={'title'} variant="h4" align={'center'} gutterBottom>
          FormikForm Create Beer
        </Typography>
        <TextField
          name="name"
          type="text"
          onChange={initialValues.handleChange}
          value={initialValues.values.name}
          id="name"
          label="Beer name"
        />
        <TextField
          id="type"
          name="type"
          select
          label="Type"
          onChange={initialValues.handleChange}
          value={initialValues.values.type}
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
              id="hasCorn"
              checked={initialValues.values.hasCorn}
              color="primary"
              onChange={initialValues.handleChange}
            />
          }
          label="Has corn"
        />
        <InputLabel className={classes.ingredientsLabel}>Ingredients</InputLabel>
        <TextareaAutosize
          name="ingredients"
          value={initialValues.values.ingredients}
          aria-label="minimum height"
          onChange={initialValues.handleChange}
          rowsMin={6}
        />
        <Button>Submit</Button>
      </form>
    </div>
  );
};

export default CreateBeerFormikFormView;
