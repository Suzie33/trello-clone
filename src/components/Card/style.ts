import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles(() => ({
  card: {
    padding: 10,
    backgroundColor: 'blue',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  controls: {
    display: 'flex',
  },
  deleteBtn: {
    cursor: 'pointer',
  },
}));
