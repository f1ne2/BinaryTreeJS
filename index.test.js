const {Tree, TreeNode} = require('./index');

describe('Tree functions', () => {
    test('Check value', () => {
        let tree = new Tree();
        tree.add(3);
        tree.add(4);
        tree.add(2);
        expect(tree.check(4)).toEqual(true)
    });

    test('Add value', () => {
        let tree = new Tree();
        tree.add(4);
        expect(tree.check(4)).toEqual(true);
        expect(tree.root.value).toEqual(4)
    });

    test('Remove value', () => {
        let tree = new Tree();
        tree.add(4);
        tree.add(3);
        tree.add(2);
        tree.add(5);
        tree.remove(3);
        tree.remove(2);
        expect(tree.check(2)).toEqual(false);
        expect(tree.check(3)).toEqual(false);
        expect(tree.check(4)).toEqual(true);
        expect(tree.check(5)).toEqual(true);
    });

    test('The most left value', () => {
        let tree = new Tree();
        tree.add(4);
        tree.add(3);
        tree.add(2);
        tree.add(5);
        expect(tree.mostLeft(tree.root)).toEqual({"height": 1, "left": null, "right": null, "value": 2}
        );
    });

    test('Tree content', () => {
        let tree = new Tree();
        tree.add(4);
        tree.add(3);
        tree.add(2);
        tree.add(5);
        expect(tree.binaryTreeContent(tree.root, [])).toEqual([3, 4, 5, 2]
        );
    });

    test('Add recursion test', () => {
        let tree = new Tree();
        tree.add(4);
        expect(tree.addRecursion(tree.root, 3)).toEqual({"height": 2, "left": {"height": 1, "left": null,
          "right": null, "value": 3}, "right": null, "value": 4});
    });

    test('Balancing function', () => {
        let tree = new Tree();
        tree.add(4);
        expect(tree.balancing(tree.root)).toEqual({"height": 1, "left": null, "right": null, "value": 4});
    });
    test('Height function', () => {
        let tree = new Tree();
        tree.add(4);
        tree.add(3);
        tree.add(5);
        expect(tree.height(tree.root)).toEqual(2);
    });

    test('Bfactor function', () => {
        let tree = new Tree();
        tree.add(4);
        tree.add(3);
        tree.add(5);
        expect(tree.bFactor(tree.root)).toEqual(0);
    });
    test('Rotate to the right function', () => {
        let tree = new Tree();
        tree.add(1);
        tree.add(2);
        tree.add(3);
        expect(tree.rotateRight(tree.root)).toEqual({"height": 3, "left": null, "right": {"height": 2, "left": null,
          "right": {"height": 1, "left": null, "right": null, "value": 3}, "value": 2} , "value": 1});
    });
    test('Rotate to the left function', () => {
        let tree = new Tree();
        tree.add(1);
        tree.add(2);
        tree.add(3);
        expect(tree.rotateLeft(tree.root)).toEqual({"height": 3, "left": {"height": 2, "left": {"height": 1,
          "left": null, "right": null, "value": 1}, "right": null, "value": 2}, "right": null , "value": 3});
    });
    test('Balance', () => {
        let tree = new Tree();
        tree.add(1);
        tree.add(2);
        tree.add(3);
        expect(tree.balance(tree.root)).toEqual({"height": 2, "left": {"height": 1, "left": null, "right": null,
          "value": 1}, "right": {"height": 1, "left": null, "right": null, "value": 3} , "value": 2});
    });
});
