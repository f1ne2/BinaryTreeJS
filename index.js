var TreeNode = /** @class */ (function () {
    function TreeNode(value) {
        this.value = value;
    }
    return TreeNode;
}());
var Tree = /** @class */ (function () {
    function Tree() {
        this.size = 0;
        this.root = null;
    }
    Tree.prototype.check = function (value) {
        var arr = [];
        var array = this.recursion(this.root, arr);
        for (var i = 0; i < array.length; i++) {
            if (value === array[i]) {
                return true;
            }
        }
        return false;
    };
    Tree.prototype.recursion = function (current, treeContent) {
        if (this.size == 0)
            return treeContent;
        treeContent.push(current.value);
        if (current.right) {
            this.recursion(current.right, treeContent);
        }
        if (current.left) {
            this.recursion(current.left, treeContent);
        }
        return treeContent;
    };
    return Tree;
}());
module.exports = { Tree: Tree, TreeNode: TreeNode };
// let tree = new Tree();
// tree.root = new TreeNode(3);
// tree.root.right = new TreeNode(5);
// tree.root.right.left = new TreeNode(4);
// tree.root.left = new TreeNode(1);
// console.log(tree.check(1));
