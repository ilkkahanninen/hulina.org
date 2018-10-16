import React from "react"
import { Router } from "react-static"
import { hot } from "react-hot-loader"
import Routes from "react-static-routes"
import { PageMeta } from "./components/PageMeta"

import "./app.css"

const App = () => (
  <Router>
    <div>
      <PageMeta />
      <Routes />
    </div>
  </Router>
)

export default hot(module)(App)
