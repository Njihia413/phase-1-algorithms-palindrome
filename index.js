function isPalindrome(word) {
  // Write your algorithm here
  const len = word.length;
  for(let i = 0; i < len / 2; i++) {
    if(word[i] !== word[len - 1 - i]) {
      return false;
    }
  }
  return true;
}


/* 
  Add your pseudocode here
  1. Initialize a variable called len that checks the string length

  2. Loop through half of the sring

  3. Check if first and last string are the same
  
  4. If they are, return "String is a palindrome"

  5. Else return "String is not a palindrome"

*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
