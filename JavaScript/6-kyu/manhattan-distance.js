// https://www.codewars.com/kata/52998bf8caa22d98b800003a/train/javascript

// The distance formula can be used to find the distance between two points. What if we were trying to walk from point A to point B, but there were buildings in the way? We would need some other formula..but which?

// Manhattan Distance
// Manhattan distance is the distance between two points in a grid (like the grid-like street geography of the New York borough of Manhattan) calculated by only taking a vertical and/or horizontal path.

// Complete the function that accepts two points and returns the Manhattan Distance between the two points.

// The points are arrays or tuples containing the x and y coordinate in the grid. You can think of x as the row in the grid, and y as the column.

// Examples
// manhattanDistance( [1, 1], [1, 1] ) // => returns 0
// manhattanDistance( [5, 4], [3, 2] ) // => returns 4
// manhattanDistance( [1, 1], [0, 3] ) // => returns 3

const manhattanDistance = (a, b) => {
  return Math.abs(a[0] - b[0]) + Math.abs(a[1] - b[1]);
};
