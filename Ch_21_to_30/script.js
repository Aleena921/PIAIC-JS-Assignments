var num = prompt("Enter number with decimal point", "3.4")
alert(Math.ceil(num))
var text = "This is my dummy text"
var newText = text.slice(0,4);
alert(newText);
var newTextLen = newText.length;
var revStr = "";
console.log(newTextLen)
console.log(newText[newTextLen-1])    // means the newText is This and the array of s is 3 so[3] length is 4 but the array of s 3
for(var i=newTextLen-1; i>=0; i-- ){
    console.log(newText[i]);
    revStr+= (newText[i]); // concatinate + assign
}
alert(revStr);


var inputValue = prompt("Enter value in string", "cloUd naTive computinG"); 
// Length of inputValue is 22 //
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

alert(inputValue)
console.log(inputValue)
