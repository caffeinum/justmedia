import React from 'react'
import './Top.css'

import Links from './Links/Links'
import Social from './Social/Social'

import { Container } from '../../layout'


const Top = () => (
  <div id="top-header">
    <Container>
      <Links />
      <Social />
    </Container>
  </div>
)

export default Top
