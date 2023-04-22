
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



twoSum([5,3,4,2],6)