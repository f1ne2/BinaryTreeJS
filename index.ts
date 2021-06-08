class TreeNode {
    right: TreeNode | null;
    left: TreeNode | null;
    value: number;
 constructor(value: number) {
     this.value = value;
 }
}

class Tree {
    root: TreeNode | null;
    size: number;
    constructor() {
        this.size = 0;
        this.root = null
    }

    check(value: number) {
        let arr = [];
        let array = this.recursion(this.root, arr);
        for (let i = 0; i < array.length; i++) {
            if (value === array[i]) {
                return true
            }
        }
        return false
    }

    recursion(current: TreeNode, treeContent) {
        if (this.size == 0)
            return treeContent;
        treeContent.push(current.value);
        if (current.right) {
            this.recursion(current.right, treeContent)
        }
        if (current.left) {
            this.recursion(current.left, treeContent)
        }
        return treeContent
    }
}

module.exports = {Tree, TreeNode};

// let tree = new Tree();
// tree.root = new TreeNode(3);
// tree.root.right = new TreeNode(5);
// tree.root.right.left = new TreeNode(4);
// tree.root.left = new TreeNode(1);
// console.log(tree.check(1));