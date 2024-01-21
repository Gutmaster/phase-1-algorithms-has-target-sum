function hasTargetSum(array, target) {
  // Write your algorithm here
  for(let i = 0; i < array.length-1; i++){
    for(let j = i; j < array.length; j++){
      if(i !== j){
        if(target - array[i] === array[j]){
          return true
        }
      }
    }
  }
  return false
}

/* 
  Write the Big O time complexity of your function here
  O(n)
*/

/* 
  Add your pseudocode here
*/

/*
  Add written explanation of your solution here
  Simple nested loop to check each element against each other element.
  Added optimizations to avoid doublechecking and ensure that numbers
  don't add with themselves.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
