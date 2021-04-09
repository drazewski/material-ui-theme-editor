import React, { useContext, useState } from 'react';
import { createStyles, makeStyles, Theme, useTheme } from '@material-ui/core/styles';
import Header from '../modules/Header';
import AppToolbar from '../modules/AppToolbar';
import ClippedDrawer from '../modules/ClippedDrawer';
import { TabletDrawerContext } from '../../context/tabletDrawerContext';
import ThemeImporter from '../modules/ThemeImporter';
import MainArea from '../modules/MainArea';
import { AppBar } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { setDefaultTheme } from '../../actions';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
  }),
);

export default function ButtonAppBar() {
  const classes = useStyles();
  const { isDrawerOpen, toggleDrawer } = useContext(TabletDrawerContext);
  const Theme = useTheme();
  const dispatch = useDispatch();

  const handleDrawer = (event: React.MouseEvent<HTMLElement>): void => {
    toggleDrawer(event);
  };

  const handleSetDefaultTheme = () => {
    dispatch(setDefaultTheme(Theme));
  };

  return (
    <div className={classes.root}>
      <AppBar position="fixed">
        <Header />
        <AppToolbar toggleDrawer={handleDrawer} handleSetDefaultTheme={handleSetDefaultTheme} />
      </AppBar>
      <ClippedDrawer isOpen={isDrawerOpen}>
        <ThemeImporter toggleDrawer={handleDrawer}/>
      </ClippedDrawer>
      <MainArea toggleDrawer={handleDrawer} handleSetDefaultTheme={handleSetDefaultTheme} />
    </div>
  );
}
