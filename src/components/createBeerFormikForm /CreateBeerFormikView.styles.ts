import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';

export const CreateBeerFormikFormStyle = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      padding: 30,
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
      background: '#fff',
      '& > *': {
        margin: '15px 0px',
        width: '100%',
      },
    },
    container: {
      padding: '30px',
      borderRadius: '5px',
      background: '#e8e8e8',
      alignItems: 'center',
      display: 'flex',
      flexDirection: 'column',
      width: '100%',
    },
  })
);
