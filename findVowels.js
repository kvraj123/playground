let fourArr= ["dog", "cat", "mouse", "sky", "eleven"]
let vowels = ["a", "e", "i", "o", "u"];

  let resultMatch= fourArr.filter(word => {
    let vowelCount = 0;
    for (let i = 0; i < word.length; i++) {
      if (vowels.includes(word[i])) {
        vowelCount++;
        if (vowelCount >= 2) {
          return true;
        }
      }
    }
    return false;
  });
console.log(resultMatch)
// ==========================================

let fivthArr= ["dog", "cat", "mouse", "sky", "eleven"]
let fivthvowels = ["a", "e", "i", "o", "u"];
 
let resultArray = [];
let fifthFunction = function() {
  fivthArr.forEach(data => {
    let splitData = data.split("");
    let front= false;
   let newArray = [];
    for (let i = 0; i < splitData.length; i++) {
      if (!fivthvowels.includes(splitData[i]) && !front) {
       newArray.push(splitData[i]);
       }
      if (fivthvowels.includes(splitData[i]) && !front) {
       newArray.push('(');
       newArray.push(splitData[i]);
       front = true;
       } else if (front && fivthvowels.includes(splitData[i])) {
         newArray.push(splitData[i]);
      }
      if(front && !fivthvowels.includes(splitData[i])) {
        newArray.push(')');
        newArray.push(splitData[i]);
        front = false;
      }
     
   }
   if(fivthvowels.includes(newArray[newArray.length-1])) {
     newArray.push(')');
   }
    let stringJoin = newArray.join("");
    resultArray.push(stringJoin)
 })
 return resultArray;
}

console.log(fifthFunction())

// ==========================================