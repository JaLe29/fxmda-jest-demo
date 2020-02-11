const add = (...numbers) => {
	return numbers.reduce((acc, v) => acc += v, 0)
}

const divide = (a, b) => {
	if (b === 0) throw new Error('b is zero')
	return a / b
}

module.exports = {
	add,
	divide,
}