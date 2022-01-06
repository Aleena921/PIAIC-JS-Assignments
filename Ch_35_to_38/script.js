function FirstLetterCapitalize(){
    var inputValue = prompt("Enter value in string", "cloUd naTive computinG"); 
var firstLetter = inputValue.slice(0,1);
var secondLetter = inputValue.slice(6,7);
var thirdLetter = inputValue.slice(13,14);
firstLetter = firstLetter.toUpperCase();
secondLetter = secondLetter.toUpperCase();
thirdLetter = thirdLetter.toUpperCase();
var otherLetters1 = inputValue.slice(1,5);
var otherLetters2 = inputValue.slice(7,12);
var otherLetters3 = inputValue.slice(14,22);
otherLetters1 = otherLetters1.toLowerCase();
otherLetters2 = otherLetters2.toLowerCase();
otherLetters3 = otherLetters3.toLowerCase();
inputValue = firstLetter + otherLetters1 + " " + secondLetter + otherLetters2 + " " + thirdLetter + otherLetters3
return inputValue
}
console.log(FirstLetterCapitalize());


function factorialize(){
    var Number = prompt("Enter any number", "5");
    var fact = 1;
    if(Number==0){
        console.log(`The factorial of ${Number} is 1`) // $ sign is used to fetch the value of prompt, and telda(`) sign used if $ sign use
    }else if(Number<0){
        console.log("The factorial of -ive number is not possible")
    }else {
        for(var i=1; i<=Number; i++){
            fact = fact * i
        }console.log(`The factorial of ${Number} is ${fact}`);
    }
    return fact;
}
console.log(factorialize());
