/**
 * Time: O(n)
 * Space: O(1)
 * Class FindThreeLargestNumber
 */

export default class FindLargestThreeNumbers {
  largestThreeNumber = [null, null, null]
  
  findLargestThreeNumbers(numbers) {
    for(let i = 0; i < numbers.length; i++) {
      this.updateLargestNumber(numbers[i])
    }
  }
  
  updateLargestNumber(number) {
    if (this.largestThreeNumber[2] === null || number > this.largestThreeNumber[2]) {
      this.shiftAndUpdate(number, 2)
    } else if (this.largestThreeNumber[1] === null || number > this.largestThreeNumber[1]) {
      this.shiftAndUpdate(number, 1)
    } else if (this.largestThreeNumber[0] === null || number > this.largestThreeNumber[0]) {
      this.shiftAndUpdate(number, 0)
    }
  }
  
  shiftAndUpdate(number, idx) {
    for(let i = 0; i < idx + 1; i++) {
     if (idx === i) {
       this.largestThreeNumber[i] = number
     } else {
       this.largestThreeNumber[i] = this.largestThreeNumber[i + 1]
     }
    }
  }
}
