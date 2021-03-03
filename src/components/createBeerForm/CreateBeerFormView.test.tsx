import React from 'react';
import { shallow } from 'enzyme';
import CreateBeerFormView from './CreateBeerFormView';
import {
  Checkbox,
  FormControlLabel,
  InputLabel,
  MenuItem,
  TextareaAutosize,
  TextField,
  Typography,
} from '@material-ui/core';
import { typeBeerList } from '../../conf/mocks/typeBeerMock';
import Button from '../button/Button';

describe('CreateBeerFormView', () => {
  const mockFn = jest.fn();
  const instanceMockFunction = mockFn();
  const beer = {
    name: 'teste',
    type: 1,
    hasCorn: true,
    ingredients: 'malte',
    onChangeText: instanceMockFunction,
    onChangeCheckBox: instanceMockFunction,
  };

  const { name, type, hasCorn, ingredients, onChangeText, onChangeCheckBox } = beer;

  it('should render with the right props', () => {
    const wrapper = shallow(<CreateBeerFormView onSubmit={instanceMockFunction} {...beer} />);
    expect(
      wrapper.matchesElement(
        <div>
          <form onSubmit={instanceMockFunction} noValidate autoComplete="off">
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
            <InputLabel>Ingredients</InputLabel>
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
      )
    ).toBe(true);
  });

  it('should call a function onSubmit', () => {
    const wrapper = shallow(<CreateBeerFormView onSubmit={mockFn} {...beer} />);
    wrapper.find('form').first().simulate('submit');
    expect(mockFn).toHaveBeenCalled();
  });
});
