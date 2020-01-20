import BST from "../Impelementation/BST";
export default class {
  /**
   *
   * @param target
   * @param tree
   * @returns {*|undefined}
   */
  findValueWithRecursion(target, tree) {
    return this._recursiveHelper(target, tree, Infinity)
  }
  
  _recursiveHelper(target, tree, closest) {
    if (tree === null) {
      return closest
    }
    
    if (Math.abs(target - closest) > Math.abs(target - tree.value)) {
      closest = tree.value
    }
    
    if (target < tree.value) {
      return this._recursiveHelper(target, tree.left, closest)
    } else if(target > tree.value) {
      return this._recursiveHelper(target, tree.right, closest)
    } else {
      return closest
    }
  }
  
  findValueWithIteration(target, tree, closest) {
   let currentNode = tree;
   
   while (currentNode !== null) {
     if (Math.abs(target - closest) > Math.abs(target - currentNode.value)) {
       closest = currentNode.value
     }
     
     if (target < currentNode.value) {
       currentNode = currentNode.left
     } else if(target > currentNode.value) {
       currentNode = currentNode.right
     } else {
       return false;
     }
   }
   
   return closest;
  }
}
