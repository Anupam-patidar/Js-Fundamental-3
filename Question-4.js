// Question: Develop  program that accepts an object and a property name, and checks if the object has the specified
//           property.

// Ans:-          


let obj = {
    prop:"yes",
    keys:"value",
    id:20
}
function specProperty(){
    let check = Object.hasOwn(obj,'prop')
    console.log(check);
}
specProperty()