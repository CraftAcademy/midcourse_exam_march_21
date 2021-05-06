import React from 'react'
import {Card, CardContent, Image, Button} from 'semantic-ui-react'

const UserCards = ({user: {login, avatar_url, html_url}}) => {
  return (
    <Card data-cy="user-card">
      <Image data-cy='user-img' src={avatar_url}/>
      <Card.Content>
        <Card.Header data-cy="user-name" >
          {login}
        </Card.Header>
        <CardContent>
          <Button data-cy="user-btn" href={html_url} ></Button>
        </CardContent>
      </Card.Content>
    </Card>
  )
}


export default UserCards
