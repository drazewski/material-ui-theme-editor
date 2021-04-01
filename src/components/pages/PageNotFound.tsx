import React from 'react';
import {
  createStyles,
  CssBaseline,
  makeStyles,
  Theme,
  Box
} from '@material-ui/core';
import PageNotFoundSVG from '../../assets/images/not-found.jpg';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      display:'flex',
      justifyContent:'center',
      height:'100vh'
    },
    box:{
      margin:'auto auto',
      textAlign:'center',
      display: 'block',
      alignItems:'center',
    },
    image:{
      marginTop:'-64px',
    }
  })
);

const PageNotFound: React.FC = () => {
  const classes = useStyles();
  
  return (
    <div className={classes.root}>
      <CssBaseline />
      <Box className={classes.box}>
        <img src={PageNotFoundSVG} alt="Page Not Found" className={classes.image} />
      </Box>
    </div>
  );
};

export default PageNotFound;
