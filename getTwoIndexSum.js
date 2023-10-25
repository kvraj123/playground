
function twoSum(nums, target) {
    indexList = [];
    let i = 0;
    let j = i+1;
    findElement = target - nums[i];
    while(i != nums.length){
      if(j === nums.length){
        i++;
        j = i+1;
        findElement = target - nums[i];
      }
      if(nums[j] === findElement){
        indexList.push(i);
        indexList.push(j);
        break;
      }
      j++;   
    }
      console.log(indexList) ;
};



// console.log(calculateSum([5,3,4,2],6))

function calculateSum(arr,total) {
  let i = 0;
  let j = 1
  let toGetvalue = total - arr[i];
  while(i !== arr.length) {
    if(j == arr.length) {
      i++;
      j = i+1;
      toGetvalue = total - arr[i];
    }
    if(toGetvalue == arr[j]) {
      return[i,j]
    } 
    j++
    
  }
}


function calSumPractice(arr,target) {
  let i = 0;
  let j = 1
  let find =  target - arr[i];
  let result = []
  while(i !== arr.length) {
    
    while(j == arr.length) {
      i ++;
      j = i+1;
      find =  target - arr[i];
    }
    if(find == arr[j]) {
      result = [i,j]
      return result;
    } 
    j++
   
  }


}

console.log(calSumPractice([5,3,4,2],6))
