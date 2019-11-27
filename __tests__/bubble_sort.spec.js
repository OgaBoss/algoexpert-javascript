import BubbleSort from "../src/BubbleSort";

describe('BubbleSort', () => {
	test('can sort unordered list of numbers', () => {
		let bubbleSort = new BubbleSort()
		let array = [23, 12, 1, 5, 89, 12, 8, 2, 56, 14, 21, 35];
		const response = bubbleSort.sort(array);
		expect([1,2,5,8,12,12,14,21,23,35,56,89]).toEqual(response)

	})
})
