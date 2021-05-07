import React from 'react'
import { Button, Input } from 'semantic-ui-react'

const GHSearch = () => {
  return (
    <>
      <Input type="text" name="search" placeholder="Input GH username"/>
      <Button name="search">Search</Button>
    </>
  )
}

 // https://api.github.com/search/users?q=Lucas
export default GHSearch
