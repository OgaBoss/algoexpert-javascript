export default class BubbleSort {
	sort(array) {
		let isSorted = false;
		let newArray = array

		while(!isSorted) {
			isSorted = true;
			const arrayLength = array.length;
			let counter = 1;

			for(let i = 0; i < arrayLength - counter; i++) {
				let nextIndex = i + 1;
				const nextElement = newArray[nextIndex];
				if (newArray[i] > nextElement) {
					newArray[nextIndex] = newArray[i];
					newArray[i] = nextElement;
					isSorted = false;
				}
			}
			counter ++;
		}
		return newArray;
	}
}