import React from 'react'
import './Form.css'

import { SearchButton, NavButton } from '../../../ui'


const Form = () => (
  <div className="button-nav">
    <SearchButton />
    <NavButton />
    <div className="search-form">
      <form>
        <input className="input" type="text" name="search" placeholder="Search" />
      </form>
    </div>
  </div>
)

export default Form
