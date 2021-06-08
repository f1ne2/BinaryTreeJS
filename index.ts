class TreeNode {
    right: TreeNode | null;
    left: TreeNode | null;
    value: any;
    height: number;
    constructor(value: any) {
        this.right = null;
        this.left = null;
        this.value = value;
        this.height = 1;
    }
}

class Tree {
    root: TreeNode;
    size: number;
    constructor() {
        this.size = 0;
        this.root = null
    }

    check(value: any): boolean {
        let arr = [];
        let array = this.binaryTreeContent(this.root, arr);
        for (let i = 0; i < array.length; i++) {
            if (value == array[i]) {
                return true
            }
        }
        return false
    }

    binaryTreeContent(current: TreeNode, treeContent: Array<any>): Array<any> {
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

    add(value: any): void {
        if (this.size == 0) {
            this.root = new TreeNode(value);
        }
        else {
            this.root = this.addRecursion(this.root, value)
        }
        this.size += 1
    }

    addRecursion(current: TreeNode, val: any): TreeNode {
        if (val > current.value && !current.right) {
            current.right = new TreeNode(val)
        }
        else if (val > current.value && current.right) {
            current.right = this.addRecursion(current.right, val)
        }
        else if (val < current.value && !current.left) {
            current.left =  new TreeNode(val)
        }
        else if (val < current.value && current.left) {
            current.left = this.addRecursion(current.left, val)
        }
        return this.balance(current)

    }

    remove(val: any): void {
        if (this.size === 0) {return}
        this.removeRecursion(null, this.root, val);
        this.size -= 1;
    }

    removeRecursion(parents: null | TreeNode, current: TreeNode, val: any): void {
        if (current.value == val) {
            this.delete(parents, current);
            this.root = this.balancing(this.root)
        }
        if (current.value < val) {
            this.removeRecursion(current, current.right, val)
        }
        if (current.value > val) {
            this.removeRecursion(current, current.left, val)
        }
    }

    balancing(current: TreeNode): TreeNode {
        if (current.right) {
            current.right = this.balancing(current.right);
        }
        if (current.left) {
            current.left = this.balancing(current.left)
        }
        return this.balance(current)
    }

    delete(parent: TreeNode, current: TreeNode): void {
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

    mostLeft(current: TreeNode): TreeNode {
        for (let i=0; i<=this.size; i++) {
            if (current.left) {
                current = current.left
            }
            else {
                return current
            }
        }
    }

    fixHeight(current: TreeNode) {
      let hLeft = this.height(current.left);
      let hRight = this.height(current.right);
      if (hLeft > hRight) {
          current.height = hLeft + 1
      }
      else {
          current.height = hRight + 1
      }
    }

    height(current: TreeNode | null): number {
        if (!current)
            return 0;
        else {
            let lHeight = this.height(current.left);
            let rHeight = this.height(current.right);
            if (lHeight > rHeight) {
                return lHeight + 1
            }
            else {
                return rHeight + 1
            }
        }
    }

    bFactor(current: TreeNode): number {
        return this.height(current.right) - this.height(current.left)
    }

    rotateRight(parent: TreeNode): TreeNode {
        let current = parent.left;
        parent.left = current.right;
        current.right = parent;
        this.fixHeight(parent);
        this.fixHeight(current);
        return current
    }

    rotateLeft(parent: TreeNode): TreeNode {
        let current = parent.right;
        parent.right = current.left;
        current.left = parent;
        this.fixHeight(parent);
        this.fixHeight(current);
        return current
    }

    balance(current: TreeNode): TreeNode {
        this.fixHeight(current);
        if (this.bFactor(current) == 2) {
            if (this.bFactor(current.right) < 0) {
                current.right = this.rotateRight(current.right)
            }
            return this.rotateLeft(current)
        }
        if (this.bFactor(current) == -2) {
            if (this.bFactor(current.left) > 0) {
                current.left = this.rotateLeft(current.left)
            }
            return this.rotateRight(current)
        }
        return current
    }
}

module.exports = {Tree, TreeNode};

let tree = new Tree();

tree.add({obj1: "0sa"});
tree.add({obj2: "ssada"});
tree.add({obj3: 5});
console.log(tree.root);