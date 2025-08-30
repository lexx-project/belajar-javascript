let primes = true;
function findPrimes(limit) {
  for (let i = 0; i < limit; i++) {
    primes = true;
    for (let j = 2; j < i; j++) {
      if (i % j === 0) {
        primes = false;
      }
    }
    if (primes == true && i > 1) {
      console.log(i);
    }
  }
}

findPrimes(100);
