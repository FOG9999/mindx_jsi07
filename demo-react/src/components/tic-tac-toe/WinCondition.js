/**
 *
 * @param {number} length number of columns and rows
 */
const buildWinCondition = (length) => {
    const condition = {
        horizontal: [],
        vertical: [],
        diagonal: [[], []], // [[left->right], [right->left]]
    };
    for (let i = 0; i < length; i++) {
        condition.diagonal[0].push(i * (length + 1));
        condition.diagonal[1].push((i + 1) * (length - 1));
        let horizontalWinRow = [],
            verticalWinColumn = [];
        for (let j = 0; j < length; j++) {
            horizontalWinRow.push(length * i + j);
            verticalWinColumn.push(length * j + i);
        }
        condition.horizontal.push(horizontalWinRow);
        condition.vertical.push(verticalWinColumn);
    }
    return condition;
};

// buildWinCondition(4);
// console.log(condition);

export { buildWinCondition };
