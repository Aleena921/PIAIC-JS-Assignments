function percentage(){
    var number1=prompt("Enter number of course1", "70");
    var number2=prompt("Enter number of course2");
    var number3=prompt("Enter number of course3");
    var number4=prompt("Enter number of course4");
    var number5=prompt("Enter number of course5");
    var totalMarks=500;
    var obtainedMarks=parseInt(number1)+parseInt(number2)+parseInt(number3)+parseInt(number4)+parseInt(number5);
    var p_age=obtainedMarks * 100 / totalMarks;
    if(p_age>=90){
        alert("Grade A+")
    }else if(p_age>=75){
        alert("Grade A")
    }else if(p_age>=60){
        alert("Grade B")
    }else if(p_age>=45){
        alert("Grade C")
    }else if(p_age>=30){
        alert("Grade D")
    }else if(p_age<=29){
        alert("Grade F")
    }
    return p_age;
        
}
console.log(percentage());

