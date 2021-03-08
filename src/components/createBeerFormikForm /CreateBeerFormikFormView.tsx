import React, { useMemo } from 'react';
import { CreateBeerFormikFormStyle } from './CreateBeerFormikView.styles';
import TextField from '@material-ui/core/TextField';
import { Typography } from '@material-ui/core';
import Button from '../button/Button';
import MenuItem from '@material-ui/core/MenuItem';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import InputTextAutosize from '../inputTextAutosize/InputTextAutosize';
import { typeBeerList } from '../../conf/mocks/typeBeerMock';
import { FormData } from './CreateBeerFormikView.types';
import { Formik } from 'formik';
import * as Yup from 'yup';

interface Props {
  handleSubmit: (values: FormData) => void;
}

const validationSchema = Yup.object().shape({
  name: Yup.string().required('Field is required'),
  ingredients: Yup.string().required('Field is required'),
  type: Yup.number().positive('Field is required'),
});

const CreateBeerFormikFormView = ({ handleSubmit }: Props) => {
  const classes = CreateBeerFormikFormStyle();

  const initialValues: FormData = useMemo(
    () => ({
      name: '',
      type: 0,
      hasCorn: false,
      ingredients: '',
    }),
    []
  );

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={validationSchema}
    >
      {({ handleSubmit, handleChange, touched, errors, values }) => (
        <div className={classes.container}>
          <form onSubmit={handleSubmit} className={classes.root}>
            <Typography id={'title'} variant="h4" align={'center'} gutterBottom>
              FormikForm Create Beer
            </Typography>
            <TextField
              name="name"
              type="text"
              onChange={handleChange}
              value={values.name}
              id="name"
              label="Beer name"
              error={touched.name && Boolean(errors.name)}
              helperText={touched.name && errors.name}
            />
            <TextField
              id="type"
              name="type"
              select
              label="Type"
              onChange={handleChange}
              value={typeBeerList.find((item) => item.id === values.type)}
              error={touched.type && Boolean(errors.type)}
              helperText={touched.type && errors.type}
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
                  checked={values.hasCorn}
                  color="primary"
                  onChange={handleChange}
                />
              }
              label="Has corn"
            />
            <InputTextAutosize
              error={!!touched.ingredients && Boolean(errors.ingredients)}
              label={'Ingredients'}
              name="ingredients"
              value={values.ingredients}
              handleChange={handleChange}
              rowsMin={6}
              helperText={touched.ingredients ? errors.ingredients : 'Insert the ingredients'}
            />
            <Button>Submit</Button>
          </form>
        </div>
      )}
    </Formik>
  );
};

export default CreateBeerFormikFormView;
