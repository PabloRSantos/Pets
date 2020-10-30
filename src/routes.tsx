import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from './screens/Home'
import Login from './screens/Login'

const Routes = () => {
  const { isAuthenticated } = useAuth0()
  return (
        <BrowserRouter>
            <Switch>
            { isAuthenticated ? <Route path="/" component={Home} exact/> : <Route path="/" component={Login} exact/> }
          </Switch>
        </BrowserRouter>
  )
}

export default Routes
