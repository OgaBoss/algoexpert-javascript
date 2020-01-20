import BST from "../Impelementation/BST";
import FindClosestValueInBST from "../src/FindClosestValueInBST";
describe('Find Closest value in BST', () => {
  let nodeParent;
  let closest;
  beforeEach(() => {
    closest = new FindClosestValueInBST()
    nodeParent = new BST(10);
    nodeParent.insert(5);
    nodeParent.insert(5);
    nodeParent.insert(2);
    nodeParent.insert(1);
    nodeParent.insert(15);
    nodeParent.insert(13);
    nodeParent.insert(14);
    nodeParent.insert(22);
  });
  test('recursive method', () => {
    expect(closest.findValueWithRecursion(12, nodeParent)).toEqual(13)
  })
  
  test('iterative method', () => {
    expect(closest.findValueWithIteration(16, nodeParent, Infinity)).toEqual(15)
  })
})
