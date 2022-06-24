/*
Create a function expression called myName, which takes first and last name as
 parameters, and returns a string interpolated result. Call the function with arguments of your choice and console log it.
For ex: pushing "Ryan" & "Reynolds" into the function will result with a return of "Ryan Reynolds"
*/
let myName = (first, last)=>{
    return `My name is ${first} + ${last}`};
let first = "Lane"
let last = "Smith"
console.log(myName(Lane,Smith));



// Challenge 2
/*
Loop over numbers from 0-100. If the number is divisible by 2, interpolate "The number __ is divisible by 2". If the number is divisible by 5, interpolate 
"The number __ is divisible by 5". If the number is divisible by both 2 & 5, interpolate "The number __ is divisible by 2 & 5." If the number is neither,
 interpolate "The number __ doesn't meet any criteria."
 */ 
let i =1
for (let i = 0; i < 100; i++)
if((i) % 2 === 0){console.log(`The number ${i} is divisible by 2`)}
else if((i) % 5 === 0){console.log(`The number ${i} is divisible by 5`)}
else if((i) % 5 === 0 && (i) % 2 === 0){console.log(`The number ${i} is divisible by 2 and 5`)}
else {console.log(`The number doesn't meet any criteria`)};


console.log(i)

/*

// Challenge 3
/*
Create a function declaration called circleCircumference which takes a parameter of radius and returns the circumference. Call the function and console.log its result.
HINTS:
    - mathematical formula to find circumference of a circle is C = 2*pi*r
    - harcode pi using 3.14 or utilize Math.PI property
*/
function circleCircumference(radius){
    let circumference = 2*Math.PI*radius;
    return circumference;
}
let circumference = circleCircumference(radius);
console.log(circumference)

/*
// Challenge 4
/*
Create an object literal named school with properties of teacher (str), subject (str), and isTenured (bool).
Create a property of student that's an object which will hold two arrays: name with strings of student names (two or more), and grade integers (two or more)
    - Console log the first student grade
    - Reassign that grade to 100 and console log it
*/
let school = {
    teacher: "teacher",
    subject: "physics",
    isTenured: false,  
    student : [{name: "peter", grade: 3,},
               {name: "paul", grade: 3.5,},
               {name: "mary", grade: 4,}, ],

            getGrade(){`The student got ${this.grade}`},


               
}
school.getGrade[0]
console.log(grade[0]=100)
