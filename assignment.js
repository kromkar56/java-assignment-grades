 let student_name = prompt("Enter your name")
 let student_age = (prompt("Enter your age"))
 let marks= (prompt("Enter your marks"))
 let grade;

if (marks >= 90 && marks <= 100){
    grade = "A+ (Excellent)";
    }
     else if (marks >= 70) { 
     grade = "A (Very Good)";
    } 

    else if (marks >= 50){
    grade = "B (Good)";
    }

    else if (marks >= 40){
    grade = "C (Pass)";
    }

     else {
     grade = "F (Fail)";
    }
alert(`Name: ${student_name}`)
alert(`Age: ${student_age}`)
alert(`Marks Scored: ${marks}`)
alert(`Grade: ${grade}`)




