import React from 'react';
import { Redirect, Route, Switch } from 'react-router';
import { routes } from '../../router';
import { v4 as uuidv4 } from 'uuid';
import './AppRouter.css';

const AppRouter = () => {
  return (
    <div className="content">
      <Switch>
        {routes.map((route) => (
          <Route
            key={uuidv4()}
            component={route.component}
            path={route.path}
            exact={route.exact}
          />
        ))}
        <Redirect to="/home" />
      </Switch>
    </div>
  );
};

export default AppRouter;
