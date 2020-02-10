const todoRoutes = ({
	app
}) => {
	const init = () => {
		app.get('/todos', (req, res) => res.send('mock todos'))
	}

	return {
		init,
	}
}

module.exports = todoRoutes
