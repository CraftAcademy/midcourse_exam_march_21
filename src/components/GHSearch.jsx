import React from 'react'
import { Button, Input } from 'semantic-ui-react'

const GHSearch = () => {
  return (
    <>
      <Input data-cy='search-bar' type="text" name="search" placeholder="Input GH username"/>
      <Button data-cy='search-btn' name="search">Search</Button>
    </>
  )
}

export default GHSearch
