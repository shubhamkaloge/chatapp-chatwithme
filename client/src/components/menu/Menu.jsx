import React, { useState } from 'react'
import { BrowserRouter } from 'react-router-dom'
// components
import Header from './Header'
import Conversations
  from './Conversations'
import SearchInput from './SearchInput'
const Menu = () => {

  const [searchText, setSearchText] = useState('')
  return (
    <>
        <Header />
      <SearchInput setSearchText={setSearchText}></SearchInput>
      <Conversations searchText={searchText}></Conversations>

    </>
  )
}

export default Menu
