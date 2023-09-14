
// Question: Write  program that takes an object as input and returns the number of properties it has .

// Ans:-
const Car = {make:"Tata" ,model:"Altroz", year:2019}
let count = 0;

function propertyCount(){
 for (let key in Car){
   count++
}
console.log(count);
}
propertyCount()

