function isPalindrome(string) {
  // Start coding here
  let array = string.split("");
  array = array.reverse();
  if (array.join("") === string) {
    return true;
  } else {
    return false;
  };
};

//Example case
console.log(isPalindrome("reviver"));// true
console.log(isPalindrome("บวบ"));// true
console.log(isPalindrome("deliver"));// false