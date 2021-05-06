import React, { Component } from 'react';
import { Button, Input } from 'semantic-ui-react';

class GHSearch extends Component {
	state = {
		text: '',
	};

  onSubmit = e => {
    e.preventDefault()
    this.props.searchUsers(this.state.text)
    this.setState({ text: '' })
  }

	onChange = (e) => this.setState({ text: e.target.value });

	render() {
		return (
			<>
      <form onSubmit={this.onSubmit}>
				<Input
					data-cy='search-bar'
					type='text'
					name='search'
					placeholder='Input GH username'
					value={this.state.text}
          onChange={this.onChange}
				/>
				<Button data-cy='search-btn' type='submit' name='search'>
					Search
				</Button>
      </form>
			</>
		);
	}
}

export default GHSearch;
