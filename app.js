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