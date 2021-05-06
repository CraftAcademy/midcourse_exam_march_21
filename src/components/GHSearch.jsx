import React, { useSate, useEffect } from 'react'
import { Button, Input } from 'semantic-ui-react'
import axios from 'axios'

const GHSearch = () => {
 const [userName, setUserName] = useState()


const userInfo = async () => {
  let response = await axios.get('/search/users/')

}





  return (
    <>
      <Input data-cy="input-name" type="text" name="search" placeholder="Input GH username"/>
      <Button data-cy="search-button" name="search" onClick>Search</Button>
    </>
  )
}

export default GHSearch
