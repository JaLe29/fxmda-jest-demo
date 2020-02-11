import React from 'react';

const User = ({age, name}) => {

	return (
		<div className='user'>
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
