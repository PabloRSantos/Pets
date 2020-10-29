import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from './screens/Home'
import Login from './screens/Login'

const Routes = () => {
  const signed = true

  return (
        <BrowserRouter>
            <Switch>
            { signed ? <Route path="/" component={Home} exact/> : <Route path="/" component={Login} exact/> }
          </Switch>
        </BrowserRouter>
  )
}

export default Routes
