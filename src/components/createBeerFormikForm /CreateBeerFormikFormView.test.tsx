import React from 'react';
import { shallow } from 'enzyme';
import CreateBeerFormikFormView from './CreateBeerFormikFormView';
import TextField from '@material-ui/core/TextField';
import { Typography } from '@material-ui/core';
import {
  Formik,
  FormikErrors,
  FormikHandlers,
  FormikState,
  FormikTouched,
  FormikValues,
} from 'formik';
import { typeBeerList } from '../../conf/mocks/typeBeerMock';
import Button from '../button/Button';
import MenuItem from '@material-ui/core/MenuItem';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import InputTextAutosize from '../inputTextAutosize/InputTextAutosize';
import { CreateBeerFormikFormStyle } from './CreateBeerFormikView.styles';

jest.mock('./CreateBeerFormikView.styles');

describe('CreateBeerFormikFormView', () => {
  beforeEach(() => {
    (CreateBeerFormikFormStyle as jest.Mock).mockReturnValue({
      container: 'container',
      root: 'root',
    });
  });
  it('should render the Formik element correctly', () => {
    const onSubmitMock = jest.fn();
    const wrapper = shallow(<CreateBeerFormikFormView handleSubmit={onSubmitMock} />);
    const formikWrapper = wrapper.find(Formik);
    expect(formikWrapper).toBeDefined();
    expect(formikWrapper.props()).toMatchObject({
      initialValues: {
        name: '',
        type: 0,
        hasCorn: false,
        ingredients: '',
      },
    });
  });

  it('should render the form correctly', () => {
    const mockFn = jest.fn();
    const error: FormikErrors<FormikValues> = {
      name: '',
      type: '',
      hasCorn: '',
      ingredients: '',
    };
    const touch: FormikTouched<FormikValues> = {
      name: false,
      type: false,
      hasCorn: false,
      ingredients: false,
    };

    const formikHandlers = {
      getFieldHelpers: mockFn(),
      getFieldMeta: mockFn(),
      getFieldProps: mockFn(),
      handleBlur: mockFn(),
      handleChange: mockFn(),
      handleReset: mockFn(),
      handleSubmit: mockFn(),
    } as FormikHandlers;

    const propsFormik = {
      handleSubmit: mockFn(),
      handleChange: mockFn(),
      touched: touch,
      errors: error,
      values: { name: '', type: 0, hasCorn: false, ingredients: '' },
      isSubmitting: false,
      isValidating: false,
      submitCount: 1,
    } as FormikState<FormikValues>;

    const wrapper = shallow(<CreateBeerFormikFormView handleSubmit={mockFn} />);
    const formWrapper = wrapper.renderProp('children')({ ...propsFormik, ...formikHandlers });
    expect(
      formWrapper.matchesElement(
        <div className={'container'}>
          <form onSubmit={formikHandlers.handleSubmit} className={'root'}>
            <Typography id={'title'} variant="h4" align={'center'} gutterBottom>
              FormikForm Create Beer
            </Typography>
            <TextField
              name="name"
              type="text"
              onChange={formikHandlers.handleChange}
              value={propsFormik.values.name}
              id="name"
              label="Beer name"
              error={propsFormik.touched.name && Boolean(propsFormik.errors.name)}
              helperText={propsFormik.touched.name && propsFormik.errors.name}
            />
            <TextField
              id="type"
              name="type"
              select
              label="Type"
              onChange={formikHandlers.handleChange}
              value={typeBeerList.find((item) => item.id === propsFormik.values.type)}
              error={propsFormik.touched.type && Boolean(propsFormik.errors.type)}
              helperText={propsFormik.touched.type && propsFormik.errors.type}
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
                  checked={propsFormik.values.hasCorn}
                  color="primary"
                  onChange={formikHandlers.handleChange}
                />
              }
              label="Has corn"
            />
            <InputTextAutosize
              error={!!propsFormik.touched.ingredients && Boolean(propsFormik.errors.ingredients)}
              label={'Ingredients'}
              name="ingredients"
              value={propsFormik.values.ingredients}
              handleChange={formikHandlers.handleChange}
              rowsMin={6}
              helperText={'Insert the ingredients'}
            />
            <Button>Submit</Button>
          </form>
        </div>
      )
    ).toBe(true);
  });

  it('should set error true on the Beer Name TextField, if prop errors has value and prop touch is true', () => {
    const mockFn = jest.fn();
    const error: FormikErrors<FormikValues> = {
      name: 'teste',
      type: '',
      hasCorn: '',
      ingredients: '',
    };
    const touch: FormikTouched<FormikValues> = {
      name: true,
      type: false,
      hasCorn: false,
      ingredients: false,
    };

    const formikHandlers = {
      getFieldHelpers: mockFn(),
      getFieldMeta: mockFn(),
      getFieldProps: mockFn(),
      handleBlur: mockFn(),
      handleChange: mockFn(),
      handleReset: mockFn(),
      handleSubmit: mockFn(),
    } as FormikHandlers;

    const propsFormik = {
      handleSubmit: mockFn(),
      handleChange: mockFn(),
      touched: touch,
      errors: error,
      values: { name: '', type: 0, hasCorn: false, ingredients: '' },
      isSubmitting: false,
      isValidating: false,
      submitCount: 1,
    } as FormikState<FormikValues>;

    const wrapper = shallow(<CreateBeerFormikFormView handleSubmit={mockFn} />);
    const formWrapper = wrapper.renderProp('children')({ ...propsFormik, ...formikHandlers });
    expect(formWrapper.find('#name').prop('error')).toBe(true);
  });

  it('should set error true on the Beer Type TextField, if prop errors has value and prop touch is true', () => {
    const mockFn = jest.fn();
    const error: FormikErrors<FormikValues> = {
      name: '',
      type: 'teste',
      hasCorn: '',
      ingredients: '',
    };
    const touch: FormikTouched<FormikValues> = {
      name: false,
      type: true,
      hasCorn: false,
      ingredients: false,
    };

    const formikHandlers = {
      getFieldHelpers: mockFn(),
      getFieldMeta: mockFn(),
      getFieldProps: mockFn(),
      handleBlur: mockFn(),
      handleChange: mockFn(),
      handleReset: mockFn(),
      handleSubmit: mockFn(),
    } as FormikHandlers;

    const propsFormik = {
      handleSubmit: mockFn(),
      handleChange: mockFn(),
      touched: touch,
      errors: error,
      values: { name: '', type: 0, hasCorn: false, ingredients: '' },
      isSubmitting: false,
      isValidating: false,
      submitCount: 1,
    } as FormikState<FormikValues>;

    const wrapper = shallow(<CreateBeerFormikFormView handleSubmit={mockFn} />);
    const formWrapper = wrapper.renderProp('children')({ ...propsFormik, ...formikHandlers });
    expect(formWrapper.find('#type').prop('error')).toBe(true);
  });

  it('should set error true on the Beer Ingredients TextField, if prop errors has value and prop touch is true', () => {
    const mockFn = jest.fn();
    const error: FormikErrors<FormikValues> = {
      name: '',
      type: '',
      hasCorn: '',
      ingredients: 'teste',
    };
    const touch: FormikTouched<FormikValues> = {
      name: false,
      type: false,
      hasCorn: false,
      ingredients: true,
    };

    const formikHandlers = {
      getFieldHelpers: mockFn(),
      getFieldMeta: mockFn(),
      getFieldProps: mockFn(),
      handleBlur: mockFn(),
      handleChange: mockFn(),
      handleReset: mockFn(),
      handleSubmit: mockFn(),
    } as FormikHandlers;

    const propsFormik = {
      handleSubmit: mockFn(),
      handleChange: mockFn(),
      touched: touch,
      errors: error,
      values: { name: '', type: 0, hasCorn: false, ingredients: '' },
      isSubmitting: false,
      isValidating: false,
      submitCount: 1,
    } as FormikState<FormikValues>;

    const wrapper = shallow(<CreateBeerFormikFormView handleSubmit={mockFn} />);
    const formWrapper = wrapper.renderProp('children')({ ...propsFormik, ...formikHandlers });
    expect(formWrapper.find({ name: 'ingredients' }).prop('error')).toBe(true);
  });

  it('title should have the right text', () => {
    const mockFn = jest.fn();
    const error: FormikErrors<FormikValues> = {};
    const touch: FormikTouched<FormikValues> = {};
    const propsFormik = {
      handleSubmit: jest.fn(),
      handleChange: jest.fn(),
      touched: touch,
      errors: error,
      values: {},
      isSubmitting: false,
      isValidating: false,
      submitCount: 1,
    } as FormikState<FormikValues>;
    const wrapper = shallow(<CreateBeerFormikFormView handleSubmit={mockFn} />);
    const formWrapper = wrapper.renderProp('children')({ ...propsFormik });
    expect(formWrapper.find('#title').text()).toEqual('FormikForm Create Beer');
  });

  it('beer name textField must have the name prop declared as name', () => {
    const mockFn = jest.fn();
    const error: FormikErrors<FormikValues> = {};
    const touch: FormikTouched<FormikValues> = {};
    const propsFormik = {
      handleSubmit: jest.fn(),
      handleChange: jest.fn(),
      touched: touch,
      errors: error,
      values: {},
      isSubmitting: false,
      isValidating: false,
      submitCount: 1,
    } as FormikState<FormikValues>;
    const wrapper = shallow(<CreateBeerFormikFormView handleSubmit={mockFn} />);
    const formWrapper = wrapper.renderProp('children')({ ...propsFormik });
    expect(formWrapper.find('#name').prop('name')).toBe('name');
  });

  it('type beer options must have the name prop declared as type', () => {
    const mockFn = jest.fn();
    const error: FormikErrors<FormikValues> = {};
    const touch: FormikTouched<FormikValues> = {};
    const propsFormik = {
      handleSubmit: jest.fn(),
      handleChange: jest.fn(),
      touched: touch,
      errors: error,
      values: {},
      isSubmitting: false,
      isValidating: false,
      submitCount: 1,
    } as FormikState<FormikValues>;
    const wrapper = shallow(<CreateBeerFormikFormView handleSubmit={mockFn} />);
    const formWrapper = wrapper.renderProp('children')({ ...propsFormik });
    expect(formWrapper.find('#type').prop('name')).toBe('type');
  });

  it('should render all de elements on typeBeerList when map', () => {
    const mockFn = jest.fn();
    const error: FormikErrors<FormikValues> = {};
    const touch: FormikTouched<FormikValues> = {};
    const propsFormik = {
      handleSubmit: jest.fn(),
      handleChange: jest.fn(),
      touched: touch,
      errors: error,
      values: {},
      isSubmitting: false,
      isValidating: false,
      submitCount: 1,
    } as FormikState<FormikValues>;
    const wrapper = shallow(<CreateBeerFormikFormView handleSubmit={mockFn} />);
    const formWrapper = wrapper.renderProp('children')({ ...propsFormik });
    expect(formWrapper.find('#type').children()).toHaveLength(typeBeerList.length);
  });
});
