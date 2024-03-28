function sum (){
    const Number1=parseFloat(document.getElementById("number1").value);
    const Number2=parseFloat(document.getElementById("number2").value);
    document.write(`The Result is :  ${Number1+Number2}`);
}
function multiply(){
    const Number1=parseFloat(document.getElementById("number1").value);
    const Number2=parseFloat(document.getElementById("number2").value);
    document.write(`The Result is :  ${Number1*Number2}`);
}
function divide(){
    const Number1=parseFloat(document.getElementById("number1").value);
    const Number2=parseFloat(document.getElementById("number2").value);
    document.write(`The Result is :  ${Number1/Number2}`);
}
function datetimefun(){
    const datetime= new Date();
    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 
    'Friday', 'Saturday'];
    const day = daysOfWeek[datetime.getDay()];
    document.write(`Today is : ${day} <br>`);
    let hours = datetime.getHours();
     if(hours>12){
        hours=hours-12 +" " +"PM";
     }else{
        hours=hours+" "+"AM";
     }
    let minutes = datetime.getMinutes();
    let seconds = datetime.getSeconds();
    let time = hours + ':' + minutes + ':' + seconds;
    document.write(`Current time is : ${time}`);
}
// Write a JavaScript program to check the total marks
// of a student in various examinations. The student

// will get A+ grade if the total marks are in the range 89..100 inclusive, 
//if the examination is
// "Final-exam." the student will get A+ grade and total marks must be greater
// than or equal to 90. Return
// true if the student get A+ grade or false otherwise.
function grading(total_marks,examination){
    let grade;
    if(total_marks>=89 && total_marks<=100 && examination!=="Final") {
        grade="A+";
    }
    else if(total_marks>=90 && total_marks<=100 && examination==="Final"){
        grade="A+"
    }
    if(grade==="A+"){
        return true;
    }else{
        return false;
    }
}