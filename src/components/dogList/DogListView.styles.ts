import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';

export const DogListStyle = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      marginTop: 20,
      width: '100%',
      overflow: 'auto',
      maxHeight: 600,
      maxWidth: 500,
      backgroundColor: '#c3c3c3',
    },
  })
);
