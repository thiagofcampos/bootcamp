import { makeStyles } from '@material-ui/core/styles';

export const dogDetailsStyle = makeStyles({
  containerImage: {
    padding: '20px 0px 20px 0px',
    borderRadius: '5px',
    background: '#f7f4f0',
    alignItems: 'center',
    display: 'flex',
    width: '60vw',
    flexDirection: 'column',
    '& img': {
      height: 130,
      borderRadius: '5px 5px 0 0',
    },
    '& span': {
      opacity: '0.7',
      marginTop: 10,
      fontSize: 23,
      fontWeight: '600',
    },
    '& button': {
      marginTop: 10,
    },
    '& button:focus': {
      border: 'unset',
    },
  },
  containerButton: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 20,
    width: '100%',
  },
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
});
