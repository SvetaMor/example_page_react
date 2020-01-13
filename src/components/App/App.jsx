import React from 'react';
import { Route, Switch, Router, withRouter } from "react-router-dom";
import history from '../../constants/history';
import { AppRoutes } from '../../routes/appRoutes';

const App = () =>
{
   return (
      <Router history={history}>
         <Switch>
         {
            AppRoutes.map(route => (
               <Route exact={route.exact}
                  path={route.path}
                  component={route.component}
                  key={route.path}
               />
            ))
         }
         </Switch>
      </Router>
   )
}

export default withRouter(App);
