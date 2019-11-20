class BinarySearch {
	target;
	array;

	constructor (array, target) {
		this.array = array;
		this.target= target
	}

	recursionSearch() {
		let left = 0;
		let right = this.array.length - 1;
		return this.searchHelper(left, right)
	}

	searchHelper(left, right) {
		if (left > right) {
			return -1
		}

		const middle = Math.floor((left + right) / 2);
		const potentialMatch = this.array[middle];

		if (potentialMatch === this.target) {
			return middle
		} else if(this.target > potentialMatch) {
			return this.searchHelper(middle + 1, right)
		} else {
			return this.searchHelper(left, middle - 1)
		}
	}
}