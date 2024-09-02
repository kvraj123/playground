let array1 = [1,2,3,4]
let array2 = [2,3,4,4]
let sum = 8

function findvalidSum(input1) {
 // you can check input validation here
    let i = 0;
    let j = 1;
    while(i < input1.length - 1) {
        if(input1[i] + input1[j] == sum) {
            return true
        } else {
            j++;
            if(j == input1.length) {
                if(i == input1.length) {
                    console.log("111")
                    return false
                } else {
                    i++;
                    j = i + 1
                }
            }
        }
    }
}

console.log(findvalidSum(array2));