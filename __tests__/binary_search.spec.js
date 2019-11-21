import BinarySearch from "../src/BinarySearch";

describe('Binary Search Test', () => {
	test('recursion return index if target exists', () => {
		const array = [9, 12, 18, 23, 30, 31, 43, 55, 56, 57, 96]
		const testClass = new BinarySearch(array, 55)
		expect(testClass.recursionSearch()).toBe(7)
	})

	test('recursion return -1 if target does not exists', () => {
		const array = [9, 12, 18, 23, 30, 31, 43, 55, 56, 57, 96]
		const testClass = new BinarySearch(array, 100)
		expect(testClass.recursionSearch()).toBe(-1)
	})

	test('iteration return index if target exists', () => {
		const array = [9, 12, 18, 23, 30, 31, 43, 55, 56, 57, 96]
		const testClass = new BinarySearch(array, 55)
		expect(testClass.recursionSearch()).toBe(7)
	})

	test('iteration return -1 if target does not exists', () => {
		const array = [9, 12, 18, 23, 30, 31, 43, 55, 56, 57, 96]
		const testClass = new BinarySearch(array, 100)
		expect(testClass.recursionSearch()).toBe(-1)
	})
});