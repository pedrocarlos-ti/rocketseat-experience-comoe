import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';

import SignIn from '../pages/SignIn';
import ProfessionList from '../pages/ProfessionList';
import Wizard from "../pages/Wizard";

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Wizard} />
      <Route path="/signin" exact component={SignIn} />
      <Route path="/list" component={ProfessionList} />
    </Switch>
  );
}
