export default class BST {
  value;
  left = null;
  right = null;
  
  constructor(value) {
    this.value = value;
  }
  
  /**
   * @param value
   * @return this|bool
   *
   * Average: O(Log(n)) time | O(1) space
   * Worst: O(n) time | O(1) space
   */
  
  insert(value) {
    let currentNode = this;
    while (true) {
      if (value < currentNode.value) {
        if (currentNode.left === null) {
          currentNode.left = new BST(value);
          return this;
        } else {
          currentNode = currentNode.left;
        }
      } else {
        if (currentNode.right === null) {
          currentNode.right = new BST(value);
          return this;
        } else {
          currentNode = currentNode.right;
        }
      }
    }
  }
  
  contains(value) {
    let currentNode = this;
    while(currentNode !== null) {
      if (value < currentNode.value) {
        currentNode = currentNode.left
      } else if(value > currentNode.value) {
        currentNode = currentNode.right
      } else {
        return true
      }
    }
    
    return false
  }
}
