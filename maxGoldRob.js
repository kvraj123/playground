var rob = function(nums) {
    if(!nums.length) return 0;
    let maxGold = [];  
   
    for(let i = 0; i < nums.length; i++){
      debugger
      let current = nums[i]
      let prevMax = maxGold[i -1] || 0
      let twoBack = maxGold[i -2] || 0
   
      maxGold.push(Math.max(current + twoBack, prevMax))
    }
   
    return maxGold[nums.length -1];
  };

  console.log(rob([6,5,5,4]))


 // ==========================================
 

 
 
 
  
 
 
 
 
 
 
 
 



