import React, { lazy, Suspense } from 'react';
import { Route } from 'react-router';
import MainLoader from '../components/elements/MainLoader';
import { RegularRoutesConfig } from './routeConfigurations';

const AppPage = lazy(() => import('../components/pages/AppPage'));

const regularRoutes = [
  (
    <Route exact path={RegularRoutesConfig.BaseRoot} key="1">
      <Suspense fallback={<MainLoader />}><AppPage /></Suspense>
    </Route>
  ),
];

export default regularRoutes;
