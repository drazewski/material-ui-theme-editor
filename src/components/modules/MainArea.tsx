import { makeStyles, Theme, createStyles, Box, Typography } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { InitialState } from '../../reducer';
import StarImage  from '../../assets/images/star.png';

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
    action: {
      textDecoration: 'underline',
      cursor: 'pointer'
    },
    image:{
      width: 200,
      marginTop: 32,
    },
    initialImage: {
      filter: 'grayscale(1)',
    },
    animatedImage: {
      animation: `$rotateImage 2500ms ${theme.transitions.easing.sharp}`
    },
    "@keyframes rotateImage": {
      "0%": {
        filter: 'grayscale(1)',
        transform: "rotateZ(0deg)",
        opacity: 1,
      },
      "100%": {
        filter: 'grayscale(0)',
        transform: "rotateZ(3600deg)",
        opacity: 0
      }
    },
  })
);

interface MainAreaProps {
  toggleDrawer: (event: React.MouseEvent<HTMLElement, MouseEvent>) => void;
  handleSetDefaultTheme: () => void;
}

const MainArea = ({toggleDrawer, handleSetDefaultTheme}: MainAreaProps) => {
  const initialState = useSelector((state: InitialState) => state.initialState);
  const classes = useStyles();
  const [postInitialState, setPostInitialState] = useState<boolean>(false);

  useEffect(() => {
    if (initialState === false) {
      setTimeout(() => setPostInitialState(true), 2000);
    }
  }, [initialState]);

  return (
    <>
    {!postInitialState && (
      <div className={classes.root}>
        <Box className={classes.box}>
          <Typography variant="h5" color="textSecondary">
            {`Import `}<span className={classes.action} onClick={toggleDrawer}>your theme</span>{` `}
            {`or use the `}
            <span className={classes.action} onClick={handleSetDefaultTheme}>Material-UI default theme</span>
          </Typography>
          <img
            src={StarImage}
            alt="Select theme"
            className={`${classes.image} ${initialState ? classes.initialImage : classes.animatedImage}`} 
          />
        </Box>
      </div>
    )}
    </>
  )
}

export default MainArea;