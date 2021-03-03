import React from 'react';
import { shallow } from 'enzyme';
import CreateBeerFormikFormView from './CreateBeerFormikFormView';
import TextField from '@material-ui/core/TextField';
import { InputLabel, Typography } from '@material-ui/core';
import { typeBeerList } from '../../conf/mocks/typeBeerMock';
import Button from '../button/Button';
import MenuItem from '@material-ui/core/MenuItem';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';

describe('CreateBeerFormikFormView', () => {
  it('should render the form element correctly', () => {
    const mockFn = jest.fn();
    const wrapper = shallow(<CreateBeerFormikFormView handleSubmit={mockFn} />);
    expect(
      wrapper.matchesElement(
        <div>
          <form>
            <Typography>FormikForm Create Beer</Typography>
            <TextField />
            <TextField>
              {typeBeerList.map((option) => (
                <MenuItem key={option.id} value={option.id}>
                  {option.value}
                </MenuItem>
              ))}
            </TextField>
            <FormControlLabel control={<Checkbox />} label="Has corn" />
            <InputLabel>Ingredients</InputLabel>
            <TextareaAutosize />
            <Button>Submit</Button>
          </form>
        </div>
      )
    );
  });

  it('title should have the right text', () => {
    const mockFn = jest.fn();
    const wrapper = shallow(<CreateBeerFormikFormView handleSubmit={mockFn} />);
    expect(wrapper.find('#title').text()).toEqual('FormikForm Create Beer');
  });

  it('beer name textField must have the name prop declared as name', () => {
    const mockFn = jest.fn();
    const wrapper = shallow(<CreateBeerFormikFormView handleSubmit={mockFn} />);
    expect(wrapper.find('#name').prop('name')).toBe('name');
  });

  it('type beer options must have the name prop declared as type', () => {
    const mockFn = jest.fn();
    const wrapper = shallow(<CreateBeerFormikFormView handleSubmit={mockFn} />);
    expect(wrapper.find('#type').prop('name')).toBe('type');
  });

  it('should render all de elements on typeBeerList when map', () => {
    const mockFn = jest.fn();
    const wrapper = shallow(<CreateBeerFormikFormView handleSubmit={mockFn} />);
    expect(wrapper.find('#type').children()).toHaveLength(typeBeerList.length);
  });
});
