import React from 'react';
import { makeStyles, createStyles } from '@material-ui/core';
import CircularProgress from '@material-ui/core/CircularProgress';

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      position:'absolute',
      top:'50%',
      left:'50%',
      marginTop:'-20px',
      marginLeft:'-20px'
    },
  }),
);

export default function MainLoader(): JSX.Element {
  const classes = useStyles();

  return <CircularProgress className={classes.root} />
}