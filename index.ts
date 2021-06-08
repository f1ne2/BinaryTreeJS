class TreeNode {
    right: TreeNode | null;
    left: TreeNode | null;
    value: number;
    constructor(value: number) {
        this.right = null;
        this.left = null;
        this.value = value;
    }
}

class Tree {
    root: TreeNode;
    size: number;
    constructor() {
        this.size = 0;
        this.root = null
    }

    check(value: number) {
        let arr = [];
        let array = this.binaryTreeContent(this.root, arr);
        for (let i = 0; i < array.length; i++) {
            if (value === array[i]) {
                return true
            }
        }
        return false
    }

    binaryTreeContent(current: TreeNode, treeContent: Array<number>) {
        if (this.size == 0)
            return treeContent;
        treeContent.push(current.value);
        if (current.right) {
            this.binaryTreeContent(current.right, treeContent)
        }
        if (current.left) {
            this.binaryTreeContent(current.left, treeContent)
        }
        return treeContent
    }

    add(value: number) {
        if (this.size == 0) {
            this.root = new TreeNode(value);
        }
        else {
            this.addRecursion(this.root, value)
        }
        this.size += 1
    }

    addRecursion(current: TreeNode, val: number) {
        if (val > current.value && !current.right) {
            current.right = new TreeNode(val)
        }
        else if (val > current.value && current.right) {
            this.addRecursion(current.right, val)
        }
        else if (val < current.value && !current.left) {
            current.left =  new TreeNode(val)
        }
        else if (val < current.value && current.left) {
            this.addRecursion(current.left, val)
        }

    }

    remove(val: number) {
        if (this.size === 0) {return}
        this.removeRecursion(null, this.root, val);
        this.size -= 1;
    }

    removeRecursion(parents: null | TreeNode, current: TreeNode, val: number) {
        if (current.value == val) {
            this.delete(parents, current)
        }
        if (current.value < val) {
            this.removeRecursion(current, current.right, val)
        }
        if (current.value > val) {
            this.removeRecursion(current, current.left, val)
        }
    }

    delete(parent: TreeNode, current: TreeNode) {
        if (!parent) {
            if (!current.right) {
                this.root = current.left
            }
            else if (!current.left) {
                this.root = current.right
            }
            else {
                this.root = current.right;
                this.mostLeft(current.right).left = current.left
            }
        }
        else if (parent.value > current.value) {
            if (!current.right && !current.left) {
                parent.left = null;
            }
            else if (current.right && !current.left) {
                parent.left = current.right;
            }
            else if (current.left && !current.right) {
                parent.left = current.left;
            }
            else {
                parent.left = current.right;
                this.mostLeft(current.right).left = current.left;
                current.right = null;
            }
        }
        else {
            if (!current.right && !current.left) {
                parent.right = null;
            }
            else if (current.right && !current.left) {
                parent.right = current.right;
            }
            else if (current.left && !current.right) {
                parent.right = current.left;
                current.left = null;
            }
            else {
                parent.right = current.right;
                this.mostLeft(current.right).left = current.left;
                current.left = null;
            }
        }
    }

    mostLeft(current: TreeNode) {
        for (let i=0; i<=this.size; i++) {
            if (current.left) {
                current = current.left
            }
            else {
                return current
            }
        }
    }

    clear(current: TreeNode) {
        if (current.right) {
            this.clear(current.right)
        }
        if (current.left) {
            this.clear(current.left)
        }
        current.right = null;
        current.left = null;
        this.size = 0;
    }
}

module.exports = {Tree, TreeNode};


