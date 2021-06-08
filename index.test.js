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
        expect(tree.mostLeft(tree.root)).toEqual({"left": null, "right": null, "value": 2}
        );
    });
});
