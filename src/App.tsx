import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Box, Container, createStyles, CssBaseline, makeStyles, Theme } from '@material-ui/core';
import ThemeProvider from './context/themeContext';
import PageNotFound from './components/pages/PageNotFound';
import regularRoutes from './routing/regularRoutes';

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
      <Box>
        <Router>
          <Switch>
            {regularRoutes}
            {/* <PremiumDataContainer>{PremiumRoutes}</PremiumDataContainer> */}
            <Route component={PageNotFound} />
          </Switch>
        </Router>
      </Box>
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