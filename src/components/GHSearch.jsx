import React, {Component} from 'react'
import { Button, Input } from 'semantic-ui-react'

class GHSearch extends Component {
  state = {
    text: ''
  }

  render() {
    return (
      <>
        <Input data-cy='search-bar' type="text" name="search" placeholder="Input GH username"/>
        <Button data-cy='search-btn' name="search">Search</Button>
      </>
    )
  }
}

export default GHSearch
