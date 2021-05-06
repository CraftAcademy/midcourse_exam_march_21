import React, { useEffect, useState } from 'react'
import { Button, Container, Input } from 'semantic-ui-react'
import axios from 'axios'

const GHSearch = () => {
	const [usersData, setUserData] = useState([])
	const [orgsData, setOrgsData] = useState([])

	async function fetchData() {
		await axios.get('https://api.github.com/search/users/').then((res) => {
			let userInfo = res.data.items
			setUserData(userInfo)
		})
	}

	useEffect(() => {
		fetchData()
	})

	return (
		<>
			<Input
				data-cy='input-search'
				type='text'
				name='search'
				placeholder='Input GH username'
			/>
			<Button onClick={() => fetchData()} data-cy='submit-search' name='search'>
				Search
			</Button>
			<div>
				{usersData.map((userData) => (
					<Container data-cy='user-list'>
            <div data-cy="user-login">
              {userData.login}
            </div>
            <div data-cy="user-repo">
              {userData.url}
            </div>
            </Container>
				))}
			</div>
		</>
	)
}

export default GHSearch
