import React, { FC } from 'react';
import { Route, Switch } from 'react-router-dom';

import * as routes from 'src/constants/routes';
import Landing from 'src/routes/dashboard/landing';
import Symptoms from 'src/routes/dashboard/symptoms';
import HospitalDetails from 'src/routes/dashboard/hospitalDetails';
import withTracker from 'src/utils/googleAnalytics';
import JoinUs from 'src/routes/dashboard/joinUs';

const DashboardRouter: FC<{}> = () => (
  <Switch>
    <Route exact path={routes.DASHBOARD} component={withTracker(Landing)} />
    <Route path={routes.SYMPTOMS} component={withTracker(Symptoms)} />
    <Route path={routes.HOSPITAL_DETAIL} component={withTracker(HospitalDetails)} />
    <Route path={routes.JOIN_US} component={withTracker(JoinUs)} />
  </Switch>
);

export default DashboardRouter;