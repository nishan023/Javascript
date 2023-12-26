let a=60;
let b=50;
"use strict"
let student=Object.freeze({
    name:"Nishan Dhakal",
    age:20,
    class:14,
    hobbies:["Reading","Writing","Coding"],
    hy:function() {
        return a+b;
    },
    nepal(){
        return this.age;
    }

});
console.log(student["name"]);
console.log(student.hobbies);
console.log(student["hy"]());
console.log(student.name);
console.log(student);
delete student.class;
console.log(student);
console.log(student.nepal());
console.log(Object.keys(student));
student.name="Ramm";

