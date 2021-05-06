import React, {Component} from 'react'
import Header from './components/Title'
import GHSearch from './components/GHSearch'
import { Container } from 'semantic-ui-react'
import axios from 'axios'

class App extends Component {
  state = {
    users: []
  }

  searchUser = async () => {
    const result = await axios.get(`http://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`)
    this.setState({ users: result.data })
  }

  render() {
    return (
      <Container>
        <section name="title">
          <Header />
        </section>
        <section name="main">
          <GHSearch users={this.state.users}/>
        </section>
      </Container>
    )
  }
}

export default App
