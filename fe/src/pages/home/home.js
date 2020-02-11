import React, {useState} from 'react';
import {LIST_OF_USERS} from './home-const';
import User from './user'

const Home = () => {

	const [users, setUsers] = useState(LIST_OF_USERS)

	const handleAddClicked = () => {
		const newUsers = [...users]

		newUsers.push({
			id: users.length + 1,
			name: `fakename${new Date().toJSON()}`,
			age: Math.floor(Math.random() * Math.floor(100)),
		})

		setUsers(newUsers)
	}

	const renderUsers = () => {
		return users.map((user) => <User {...user} key={user.id} />)
	}

	const renderButtons = () => {
		return (
			<button onClick={handleAddClicked}>
				Add random
			</button>
		)
	}

	return (
		<div>
			<h1>HOME PAGE</h1>
			<p>
				xx
			</p>
			{renderButtons()}
			<hr />
			{renderUsers()}
		</div>
	)

}

export default Home
