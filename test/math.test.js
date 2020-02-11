const {add, divide} = require('./math')

describe('math', () => {

	describe('add', () => {
		it('should return 5', () => {
			expect(add(2, 3)).toBe(5)
		})

		it('should return 10', () => {
			expect(add(5, 5)).toBe(10)
		})

		it('should return 10', () => {
			expect(add(1, 1, 1, 1, 1, 1, 1, 1, 1, 1)).toBe(10)
		})
	})

	describe('divide', () => {
		it('should return 5', () => {
			expect(divide(10, 2)).toBe(5)
		})

		it('should return 5', () => {
			expect(() => divide(10, 0)).toThrow(Error);
		})
	})

})