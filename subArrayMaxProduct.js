// Given an integer array nums, find a 
// subarray
//  that has the largest product, and return the product.
var maxProduct = function(nums) {
    let maxProduct = nums[0];
    let currentProduct = nums[0];

    for(let i =1; i < nums.length; i++) {
        if(nums[i] > nums[i] * currentProduct) {
            currentProduct = nums[i]
        } else {
            currentProduct = nums[i] * currentProduct
        }

        if(currentProduct > maxProduct) {
            maxProduct = currentProduct
        }
    }

    return maxProduct
    
};