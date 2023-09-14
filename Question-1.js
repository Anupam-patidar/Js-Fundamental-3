
// Question:  Create an object representing  car with properties like "make," "model," and "year7" Write ; f,nction to
//            display all the properties of the car.

// Ans:  


let car = {
    make : "tata",
    model: "safari",
    year: 2022
}

function showCarDetail () {
  for (const property in car){
    console.log(`${property} : ${car[property]}`);
  }

}
console.log("The car properties are following :-");
showCarDetail();