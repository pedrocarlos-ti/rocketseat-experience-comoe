import React from "react"
import { BrowserRouter as Router, Route } from "react-router-dom"

import SignIn from "../pages/SignIn"
import ProfessionList from "../pages/ProfessionList"

export default function Routes() {
  return (
    <Router>
      <Route path="/" exact component={SignIn} />
      <Route path="/list" component={ProfessionList} />
    </Router>
  )
}
