import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles(() => ({
  column: {
    width: 200,
    padding: 10,
  },
  card: {
    marginBottom: 10,

    '&:last-child': {
      marginBottom: 0,
    },
  },
  columnHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  controls: {
    display: 'flex'
  }, 
  deleteBtn: {
    cursor: 'pointer'
  }
}));
