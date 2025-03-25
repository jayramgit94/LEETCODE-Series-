
let grid = [
    [2,1],
    [1,2]
]

var surfaceArea = function(grid) {
    let n = grid.length;
    let surface_area = 0;

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            if (grid[i][j] > 0) {
                // Add top and bottom faces
                surface_area += 2;
                
                // Add all four side faces initially
                surface_area += 4 * grid[i][j];

                // Subtract hidden faces due to vertical adjacency
                if (i > 0) {
                    surface_area -= 2 * Math.min(grid[i][j], grid[i - 1][j]);
                }

                // Subtract hidden faces due to horizontal adjacency
                if (j > 0) {
                    surface_area -= 2 * Math.min(grid[i][j], grid[i][j - 1]);
                }
            }
        }
    }

    return surface_area;
};
// Time complexity: O(n^2)
// Space complexity O(1)
// n is the length of the grid
