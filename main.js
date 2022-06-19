1
class Student {
  constructor(Classroom, firstName, identify) {
    this.Classroom = Classroom;
    this.firstName = firstName;
    this.identify = identify;
  }
}
2 
const myStudent = new Student(3, "yosi", 20932);
// console.log(myStudent);
// const secandmyStudent = new Student(4, "daniel", 5241);
// console.log(secandmyStudent);
3
class user {
  constructor(firstName, lastName, age, email) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.email = email;
  }
}
4
const user1 = new user("lior", "david", 25, "dsds@gmail.com");
const user2 = new user("daniel", "gademo", 27, "dsds@gmail.com");
const user3 = new user("gil", "yair", 23, "dsds@gmail.com");
let myArray = [user1,user2,user3]
myArray.forEach(item => {
 for (const mkk in item) {
  let myP = document.getElementById("p1");
  myP.innerHTML += item[mkk] + "<br>";
}
})
5
function printToLog(){
let userName = document.getElementById('first_name').value;
let userAge = document.getElementById('age').value;
let userEmail = document.getElementById('email').value;
console.log(userName + '<br>'+ userAge + "<br>"+  userEmail);
}

