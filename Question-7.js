
// Question:Build a program  that utilizes a Map to store user information (name, age, email) and allows adding,
// updating, and deleting user records.

// Ans:-
let userMap =new Map();

function addUser(name , age , email){
    
    const userInfo = {age,email};
    userMap.set(name,userInfo);
}

function updateUser(name , age , email){
    if (userMap.has(name)){
        const userInfo = userMap.get(name);
        userInfo.age = age;
        userInfo.email = email;
    }
}

function deletUser(name){
    userMap.delete(name);
}

addUser("ram",23,"abc@gmail.com")
addUser("ajay",23,"xyz@gmail.com")

console.log(userMap); 

updateUser("ram",25,"ram@gmail.com")
console.log(userMap);

deletUser("ajay");
console.log(userMap);
