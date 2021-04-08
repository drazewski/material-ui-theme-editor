import React, { useContext, useState } from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Header from '../organisms/Header';
import AppToolbar from '../organisms/AppToolbar';
import ClippedDrawer from '../organisms/ClippedDrawer';
import { TabletDrawerContext } from '../../context/tabletDrawerContext';
import ThemeImporter from '../organisms/ThemeImporter';

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

  const handleDrawer = (event: React.MouseEvent<HTMLElement>): void => {
    toggleDrawer(event);
  };

  return (
    <div className={classes.root}>
      <Header />
      <AppToolbar toggleDrawer={handleDrawer} />
      <ClippedDrawer isOpen={isDrawerOpen}>
        <ThemeImporter toggleDrawer={handleDrawer}/>
      </ClippedDrawer>
    </div>
  );
}
