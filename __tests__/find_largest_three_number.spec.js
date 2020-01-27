import FindLargestThreeNumbers from "../src/FindLargestThreeNumbers";

describe("Find 3 largest number", () => {
  test('find_3_largest_number', () => {
    const threeLargest = new FindLargestThreeNumbers();
    const array = [141, 7, 17, -7, -17, -28, 18, 541, 8, 7, 7];
    threeLargest.findLargestThreeNumbers(array);
    
    expect(threeLargest.largestThreeNumber).toEqual([18,141,541])
  })
})
