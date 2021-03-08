import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';

export const InputTextAutosizeStyle = makeStyles((theme: Theme) =>
  createStyles({
    ingredientsLabel: {
      marginBottom: '-5px',
    },
    container: {
      '& textarea': {
        width: '100%',
      },
      '& span': {
        fontSize: '0.75rem',
      },
    },
    error: {
      '& textarea': {
        borderColor: '#f44336',
      },
      '& textarea:focus': {
        outline: 'unset',
      },
    },
  })
);
