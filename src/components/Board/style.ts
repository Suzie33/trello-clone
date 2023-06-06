import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles(() => ({
  board: {
    minWidth: '100vw',
    minHeight: '100%',
    backgroundColor: 'bisque',
    display: 'flex',
    padding: 10
  }, 
  column: {
    marginRight: 20,

    '&:last-child': {
      marginRight: 0,
    }
  }
}));