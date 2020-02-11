import React from 'react';
import HomePage from './pages/home';

function App () {

	const reportLastUserId = (id) => console.log(id)

	return <HomePage reportLastUserId={reportLastUserId} />
}

export default App;
