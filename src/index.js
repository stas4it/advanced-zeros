module.exports = function getZerosCount(number, base) {

  const primes=[];
  const degreesOfPrimes=[];

  
  function getPrimes(tempBase) {
    if(tempBase > 0 && tempBase != 1){
      for(let i = 2; i <= tempBase; i++){
        if (tempBase % i == 0) { 
          let degree=0;
          while(tempBase % i == 0 && tempBase > 1){
            tempBase = tempBase / i;
            degree++;
          }
        primes.push(i);
        degreesOfPrimes.push(degree);
        }
      }
    } else if(tempBase == 1){
        primes.push(tempBase);
        degreesOfPrimes.push(1);
    } 
  }

  getPrimes(base);

  function countPrimeInBase (prime) {
    let res=0;
    let tempNumber=number;
    while (tempNumber>0) {
      res+=Math.floor(tempNumber/=prime);
    } 
    return res;
  }
  
  const arr=[];

  for (let i=0, lengthI=primes.length; i<lengthI; i++ ) {
    arr[i]=Math.floor(countPrimeInBase(primes[i])/degreesOfPrimes[i]);
  }

  arr.sort((a,b) => a-b); 

  return arr[0];  
  
}