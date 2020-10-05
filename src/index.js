
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if (Array.isArray(matrix) && matrix.length) {
    let result = matrix.reduce(
      (result, item) => result.concat(item), []
    ); // собирает в массиве resutlt элементы исходного массива, таким образом вложенность должна раскрыться
    return result;
  } else return [];
  
}

// надо, чтобы шло "змейкой", то есть вторая строка не по порядку, а в обратном порядке.