import React, { useState, useEffect } from 'react'
import { Button, Input } from 'semantic-ui-react'
import axios from "axios";

const GHSearch = () => {
  const [query, setQuery] = useState('')
  const [users, setUsers] = useState([])
  const [message, setMessage] = useState('')

  const fetchGHUsers = async () => {
    const results = await axios.get(`https://api.github.com/search/users?q=${query}`)
    results.data.items === 0 ?
      setMessage('We could not find any users based on your query') :
      setUsers(results.data.items)
  }
  //  'We could not find any users based on your query'
  const displayUsers = users.map(user => {
    return (
      <div key={user.id} data-cy={`user-${user.id}`}>{user.login}</div>
    )
  })

  return (
    <>
      <Input
        data-cy="query-field"
        type="text"
        onChange={e => setQuery(e.target.value)}
        placeholder="Input GH username" />
      <Button
        data-cy="query-button"
        onClick={() => fetchGHUsers()}>
        Search
        </Button>
      <div data-cy="query-results">
        {displayUsers}
        <p data-cy="message">{message}</p>
      </div>
    </>
  )
}

export default GHSearch
