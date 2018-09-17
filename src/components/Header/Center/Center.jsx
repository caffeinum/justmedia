import React from 'react'
import './Center.css'

import { Logo, Banner } from '../../ui'

import { Container } from '../../layout'


const Center = () => (
  <div id="center-header">
    <Container>
      <Logo />
      <Banner />
    </Container>
  </div>
)

export default Center
