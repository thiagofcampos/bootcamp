import React from 'react';
import { shallow } from 'enzyme';
import InputTextAutosizeView from './InputTextAutosizeView';
import { InputProps } from './InputTextAutosize.types';
import { InputLabel, TextareaAutosize } from '@material-ui/core';
import { InputTextAutosizeStyle } from './InputTextAutosizeView.styles';

jest.mock('./InputTextAutosizeView.styles');

describe('CreateBeerFormikFormView', () => {
  const mockHandleSubmit = jest.fn();
  beforeEach(() => {
    (InputTextAutosizeStyle as jest.Mock).mockReturnValue({
      ingredientsLabel: 'ingredientsLabel',
      container: 'container',
      error: 'error',
    });
  });

  const values = {
    error: false,
    handleChange: mockHandleSubmit(),
    label: 'test',
    name: 'test',
    rowsMin: 2,
    value: 'abc',
    helperText: 'teste',
  } as InputProps;

  it('should render the form element correctly', () => {
    const wrapper = shallow(<InputTextAutosizeView {...values} />);
    expect(
      wrapper.matchesElement(
        <>
          <InputLabel className={'ingredientsLabel'} error={values.error}>
            {values.label}
          </InputLabel>
          <div className={`container ${values.error ? 'error' : ''}`}>
            <TextareaAutosize
              name={values.name}
              value={values.value}
              onChange={values.handleChange}
              rowsMin={values.rowsMin}
            />
            {!!values.helperText && (
              <InputLabel error={values.error}>
                <span>{values.helperText}</span>
              </InputLabel>
            )}
          </div>
        </>
      )
    );
  });

  it('should apply error class if error is true', () => {
    const wrapper = shallow(<InputTextAutosizeView {...values} error={true} />);
    const wrapperContainer = wrapper.find('#container');
    expect(wrapperContainer.find('.error')).toHaveLength(1);
  });
});
