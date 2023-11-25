let count = 0

function fibRecusive(){
    let cache = {}

   return function fib(num) {

    if(num in cache) {
        return cache[num]
    } else {
        if(num < 2) {
            return num;
        }
        
         cache[num] = fib(num-1) + fib(num-2)
         return cache[num]
    }
   } 
}

function fib(num){
    count ++;

        if(num < 2) {
            return num;
        }
        return fib(num-1) + fib(num-2)
}
// let fibFast =  fibRecusive()
// console.log("fibFast",fibFast(10))
// let fibslow = fib(10)
// console.log("fibslow",fibslow)
// console.log("count",count)l


let countfact = 0;

function fact(n) {
    countfact ++
    if(n == 2) {
        return n
    }

    return n * fact(n-1)
}

function factRecusive(){
    let cache = {}

   return function fact(num) {
    countfact ++;
   
        if(num == 2) {
            return num;
        }

        if (cache[num] !== undefined) {
            return cache[num];
          }
        
         cache[num] = num * fact(num-1)
         return cache[num]
    
   } 
}
// let fastFact =  factRecusive();
// console.log("fast",fastFact(20));
// console.log("slow",fact(20));

function factorial(n, memo = {}) {
    // Base case: factorial of 0 and 1 is 1
    if (n === 0 || n === 1) {
      return 1;
    }
    console.log(memo[n])
    // Check if the result is already memoized
    if (memo[n] !== undefined) {
      return memo[n];
    }
    countfact ++
    // Calculate the factorial recursively and store it in the memo object
    memo[n] = n * factorial(n - 1, memo);
    return memo[n];
  }

  const result = factorial(5);

  console.log('countfact',countfact,result)


// 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

// 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