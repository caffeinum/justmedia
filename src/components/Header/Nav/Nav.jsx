import React from 'react'
import './Nav.css'

import Links from './Links/Links'
import Form from './Form/Form'

import { Container } from '../../layout'


const Nav = () => (
  <div id="nav-header">
    <Container>
      <Links />
      <Form />
    </Container>
  </div>
)

export default Nav
