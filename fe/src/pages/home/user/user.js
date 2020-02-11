import React from 'react';

const User = ({age, name}) => {

	const className = `user-${age}`

	return (
		<div className={className}>
			<div>
				Name: {name}
			</div>
			<div>
				Age: {age}
			</div>
		</div>
	)

}

export default React.memo(User)
