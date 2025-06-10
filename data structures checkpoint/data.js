
function distinctElementSum(set1, set2) {
  let sum = 0;

  for (let i = 0; i < set1.length; i++) {
    if (!set2.includes(set1[i])) {
      sum += set1[i];
    }
  }

  for (let i = 0; i < set2.length; i++) {
    if (!set1.includes(set2[i])) {
      sum += set2[i];
    }
  }

  return sum;
}


function dotProduct(v1, v2) {
  let ps = 0;
  for (let i = 0; i < v1.length; i++) {
    ps += v1[i] * v2[i];
  }
  return ps;
}


function checkOrthogonalPairs(pairs) {
  for (let i = 0; i < pairs.length; i++) {
    const [v1, v2] = pairs[i];
    const result = dotProduct(v1, v2);
    if (result === 0) {
      console.log(`Pair ${i + 1}: Orthogonal`);
    } else {
      console.log(`Pair ${i + 1}: Not Orthogonal`);
    }
  }
}


const set1 = [3, 1, 7, 9];
const set2 = [2, 4, 1, 9, 3];
console.log("Sum of distinct elements:", distinctElementSum(set1, set2)); // 13


const vectorPairs = [
  [[1, 2], [-2, 1]],   
  [[3, 4], [1, 1]]     
];
checkOrthogonalPairs(vectorPairs);
