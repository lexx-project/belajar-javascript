function findFactors(num) {
  let factors = [];
  for (let i = 0; i <= num; i++) {
    if (num % i === 0) {
      factors.push(i);
    }
  }
  return factors;
}

console.log(findFactors(12));
