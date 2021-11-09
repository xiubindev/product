import React, { Suspense } from 'react';
import loadable from '@loadable/component';

import { Switch, Route } from 'react-router-dom';

import routes from './config';

const Router = () => {
  return (
    <Suspense fallback={null}>
      <Switch>
        {routes.map((routeItem) => {
          return (
            <Route
              key={routeItem.component}
              path={routeItem.path}
              exact={routeItem.exact}
              component={loadable(() => import(`../pages/${routeItem.component}`))}
            />
          );
        })}
      </Switch>
    </Suspense>
  );
};

export default Router;
