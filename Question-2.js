// Question : Define ;n object that represents a student's information including name, ;&e, ;nd &r;de7 Implement ;
// method to update the student's Grades

// Ans :-

let student = {
    Name:"Ajay",
    Age:23,
    Grade:"A",
}
//method to update student grade
 function update(newGrade){
   student.Grade= newGrade;
 }
 update("B")
 console.log(student);
