// Ternary Operator in JavaScript

// let age = 18;

// let result = (age >= 18) ? "Adult" : "Minor";

// console.log(result);

let marks = 65;

let grade = 
    (marks >= 90 && marks <= 100)? "A+":
    (marks >= 80 && marks < 90)? "A":
    (marks >= 70 && marks < 80)? "B+":
    (marks >= 60 && marks < 70)? "B":
    (marks >= 50 && marks < 60)? "C+":
    (marks >= 40 && marks < 50)? "C":
    (marks >= 30 && marks < 40)? "D+":
    "NG";

console.log(`Your Grade: ${grade}`);
