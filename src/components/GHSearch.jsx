import React, { useState } from 'react'
import { Button, Input } from 'semantic-ui-react'
import axios from 'axios'
import SearchResults from './SearchResults'
import ErrorMessage from './ErrorMessage'

const GHSearch = () => {
  const [searchInput, setSearchInput] = useState()
  const [searchResults, setSearchResults] = useState([])
  const [error, setError] = useState(false)

  const search = async () => {
    if (searchInput) {
      setError(false)
      let response = await axios.get(`https://api.github.com/search/users?q=${searchInput}`)
      setSearchResults(response.data.items)
    } else {
      setError(true)
    }
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
      <SearchResults searchResults={searchResults} />
      {error && <ErrorMessage />}

    </>
  )
}

// https://api.github.com/search/users?q=Lucas
export default GHSearch
