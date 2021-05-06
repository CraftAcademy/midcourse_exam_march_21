import React, {Component} from 'react'
import Header from './components/Title'
import GHSearch from './components/GHSearch'
import Users from './components/Users'
import { Container } from 'semantic-ui-react'
import axios from 'axios'

class App extends Component {
  state = {
    users: []
  }

  searchUser = async text => {

    const result = await axios.get(`http://api.github.com/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`)

    this.setState({ users: result.data.items })
  }

  render() {
    return (
      <Container>
        <section name="title">
          <Header />
        </section>
        <section name="main">
          <GHSearch searchUsers={this.searchUsers} />
        </section>
        <Users users={this.state.users}/>
      </Container>
    )
  }
}

export default App
