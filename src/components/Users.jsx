import React from 'react'
import {Grid} from 'semantic-ui-react'
import UserCards from './UserCards'

const Users = ({users}) => {
  return (
    <Grid columns={4} >
      {users.map(user => (
        <UserCards key={user.id} user={user} />
      ))}
    </Grid>
  )
}

export default Users