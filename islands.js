class Visited {
    constructor() {
        this.cur = 0;
    }

    create() {
        this.cur += 1;
        return this.cur;
    }

    count() {
        return this.cur;
    }
}

function itr(v, grid, m, n) {
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (grid[i][j] === '1') {
                let counter;

                if (i > 0 && typeof grid[i - 1][j] === 'number') {
                    counter = grid[i - 1][j];
                } else if (j > 0 && typeof grid[i][j - 1] === 'number') {
                    counter = grid[i][j - 1];
                } else {
                    counter = v.create();
                }

                grid[i][j] = counter;

                if (i + 1 < m && grid[i + 1][j] === '1') {
                    grid[i + 1][j] = counter;
                }
                if (j + 1 < n && grid[i][j + 1] === '1') {
                    grid[i][j + 1] = counter;
                }
            }
        }
    }
}

let grid = [
    ["1", "1", "1", "1", "0"],
    ["1", "1", "0", "1", "0"],
    ["1", "1", "0", "0", "0"],
    ["0", "0", "0", "0", "0"]
];

const m = grid.length;
const n = grid[0].length;
const v = new Visited();
itr(v, grid, m, n);
console.log('Number of islands:', v.count());
