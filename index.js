function hasTargetSum(array, target) {
  if(array.length == 1){
    return false;
  }
  // Write your algorithm here
  for(let idx=0; idx < array.length - 1; ++idx){
    for(let idy=idx + 1; idy < array.length; ++idy){
      if (array[idx]+array[idy] === target){
        return true;
      }
    }
  }
  return false;
}

/* 
  Write the Big O time complexity of your function here
*/

// O(n2)

/* 
  Add your pseudocode here
*/

/*
  Add written explanation of your solution here
*/
//start from the right end and add to those on left. Do this for each index until you reach 1

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
