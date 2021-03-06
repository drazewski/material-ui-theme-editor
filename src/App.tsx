import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Box, Container, createStyles, CssBaseline, makeStyles, Theme } from '@material-ui/core';
import ThemeProvider from './context/themeContext';
import PageNotFound from './components/pages/PageNotFound';
import regularRoutes from './routing/regularRoutes';
import TabletDrawerProvider from './context/tabletDrawerContext';
import { Provider } from 'react-redux';
import store from './store'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      minHeight: '100vh',
    },
  })
);

const App: React.FC = () => {
  const classes = useStyles();

  return (
    <Container className={classes.root} disableGutters maxWidth={false}>
      <TabletDrawerProvider>
        <Provider store={store}>
          <Box>
            <Router>
              <Switch>
                {regularRoutes}
                {/* <PremiumDataContainer>{PremiumRoutes}</PremiumDataContainer> */}
                <Route component={PageNotFound} />
              </Switch>
            </Router>
          </Box>
        </Provider>
      </TabletDrawerProvider>
    </Container>
  );
}

const StylesWrap: React.FC = () => {
  return (
    <Fragment>
      <ThemeProvider>
        <CssBaseline />
        <App />
      </ThemeProvider>
    </Fragment>
  );
};

export default StylesWrap;