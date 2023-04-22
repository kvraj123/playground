let count = 0

let cache = {}
function factRecusive(num){
   return function fib(num) {
    count ++;
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

function fact(num){
   
        if(num < 2) {
            return num;
        }
        return fact(num-1) + fact(num-2)
}


console.log("fast",factRecusive()(10));
console.log("slow",fact(10));
console.log("let cache",cache)
console.log("count",count)