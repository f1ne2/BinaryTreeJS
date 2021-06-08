const {Tree, TreeNode} = require('./index');

test('Check value in tree', () => {
    let tree = new Tree();
    tree.root = TreeNode(3);
    expect(tree.check(1)).toEqual(false)

});