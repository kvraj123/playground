function sum(arr) {
    let total = 0;
    for(let i=0;i<arr.length;i++) {
        if(typeof arr[i]=="number") {
           total = total + arr[i];
        } else if(arr[i] instanceof Array) {
            total = total + sum(arr[i])
        }
    }
    return total
  };

  function arraySum(i) {
    var sum=0; // missing var added
    for(var a=0;a<i.length;a++){ // missing var added
        if(typeof i[a]=="number"){
            sum+=i[a];
        }else if(i[a] instanceof Array){
            sum+=arraySum(i[a]);
        }
    }
    return sum;
}


  let sumArray = [6,[5,2],[1,5],4]
  console.log(sum(sumArray))
//   console.log(total)