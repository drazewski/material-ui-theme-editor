import React, { useContext } from 'react';
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
import useDialog from '../../hooks/useDialog';
import ConfirmDialog from '../modules/ConfirmDialog';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
  }),
);

export default function AppPage() {
  const classes = useStyles();
  const { isDrawerOpen, toggleDrawer } = useContext(TabletDrawerContext);
  const { setDialog, isDialog, dialogComponent } = useDialog();
  const Theme = useTheme();
  const dispatch = useDispatch();

  const handleDrawer = (event: React.MouseEvent<HTMLElement>): void => {
    toggleDrawer(event);
  };

  const handleSetDefaultTheme = () => {
    setDialog(<ConfirmDialog
      handleOnCancelClick={() => setDialog()}
      handleOnConfirmClick={() => {
        setDialog();
        dispatch(setDefaultTheme(Theme));
      }}
      description="Are you sure you want to import Material-UI default theme?"
      mainMessage="Import Theme"
      type="submit"
      confirmButtonTextMessage="Ok"
    />)
  };

  return (
    <div className={classes.root}>
      <AppBar position="fixed">
        <Header />
        <AppToolbar toggleDrawer={handleDrawer} />
      </AppBar>
      <ClippedDrawer isOpen={isDrawerOpen}>
        <ThemeImporter toggleDrawer={handleDrawer}/>
      </ClippedDrawer>
      <MainArea toggleDrawer={handleDrawer} handleSetDefaultTheme={handleSetDefaultTheme} />
      {isDialog && dialogComponent}
    </div>
  );
}
