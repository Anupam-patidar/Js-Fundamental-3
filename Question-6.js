
// Question: Create a function that takes a string as input and retuns the string reversed using string manipulation
// techniques
// 
// Ans:

let str  = "Hello students";

function reveseString(str){
    let a = str.split('').reverse();
    let revStr=a.join("");
   return revStr;
}
console.log(reveseString(str));