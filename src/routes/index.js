import React from "react"
import { BrowserRouter as Router, Route } from "react-router-dom"

import SignIn from '../pages/SignIn';
import ProfessionList from '../pages/ProfessionList';
import DetailsProfession from '../pages/DetailsProfession';
import Wizard from "../pages/Wizard";

export default function Routes() {
  return (
    <Router>
      <Route path="/" exact component={Wizard} />
      <Route path="/signin" exact component={SignIn} />
      <Route path="/list" component={ProfessionList} />
      <Route path="/detail" component={DetailsProfession} />
    </Router>
  )
}
