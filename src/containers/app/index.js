import React, { Fragment } from 'react'
import { Route } from 'react-router-dom'
import Home from '../home'
import About from '../about'
import Header from '../../components/Header/Header'

const App = () => (
  <Fragment>
    <Header />

    <main>
      <Route exact path="/" component={Home} />
      <Route exact path="/about-us" component={About} />
    </main>
  </Fragment>
)

export default App
