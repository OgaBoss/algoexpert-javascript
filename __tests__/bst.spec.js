import BST from "../Impelementation/BST";

describe('Binary Search Tree', () => {
  let nodeParent;
  
  beforeEach(() => {
    nodeParent = new BST(10)
    nodeParent.insert(5)
    nodeParent.insert(5)
    nodeParent.insert(2)
    nodeParent.insert(1)
    nodeParent.insert(15)
    nodeParent.insert(13)
    nodeParent.insert(14)
    nodeParent.insert(22)
  });
  
  test('test insertion operation', () => {
    expect(nodeParent.left.right.value).toEqual(5)
  })
  
  test('test that bst contains a value', () => {
    expect(nodeParent.contains(15)).toBeTruthy();
    expect(nodeParent.contains(29)).toBeFalsy();
  })
})
