import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';

export const DogListStyle = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      display: 'flex',
      flexDirection: 'row',
      margin: 10,
    },
    image: {
      width: 150,
      height: 150,
    },
    title: {
      '& span': {
        marginLeft: 15,
        fontSize: 15,
        fontWeight: 600,
      },
    },
  })
);
