import React from 'react'
import Routes from './routes'
import { Auth0Provider } from '@auth0/auth0-react'

function App () {
  return (
    <Auth0Provider
      domain='dev-l81nkh57.us.auth0.com'
      clientId='EAYVjEJUCUJALb984aDpfx6iKXm01rIm'
      redirectUri={window.location.origin}
      >
       <Routes />
    </Auth0Provider>

  )
}

export default App
