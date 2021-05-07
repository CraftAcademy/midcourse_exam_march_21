import React, { useState } from 'react'
import { Button, Input } from 'semantic-ui-react'
import axios from 'axios'
import SearchResults from './SearchResults'

const GHSearch = () => {
  const [searchInput, setSearchInput] = useState()
  const [seachResult, setSearchResult] = useState([])

  const search = async () => {

    let response = await axios.get(`https://api.github.com/search/users?q=${searchInput}`)
    debugger
  }

  return (
    <>
      <Input
        type="text"
        name="search"
        data-cy='input-field'
        placeholder="Input GH username"
        onBlur={(event) => { setSearchInput(event.target.value) }} />
      <Button
        name="search"
        data-cy='search-button'
        onClick={search}
      >
        Search
      </Button>
      <SearchResults />
    </>
  )
}

// https://api.github.com/search/users?q=Lucas
export default GHSearch
