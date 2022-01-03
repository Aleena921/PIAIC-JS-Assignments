var name = prompt("What is your name?");
var DOB_D = prompt("What is your DOB(Date)?");
var DOB_M = prompt("What is your DOB(Month)?");
var DOB_Y = prompt("What is your DOB(Year)?")
console.log("Mr/Ms" + " " + name + " " + "Good Morning");

var DOB = (new Date(DOB_Y, DOB_M, DOB_D));
console.log(DOB);

var NewDateTime = new Date().getTime();
var DOBTime = DOB.getTime();
var Years = (new Date(NewDateTime).getFullYear()-new Date(DOBTime).getFullYear());
var Months = (new Date(NewDateTime).getMonth()-new Date(DOBTime).getMonth());
var Days = (new Date(NewDateTime).getDay()-new Date(DOBTime).getDay());
var Hours = (new Date(NewDateTime).getHours()-new Date(DOBTime).getHours());
var Minutes = (new Date(NewDateTime).getMinutes()-new Date(DOBTime).getMinutes());
var Seconds = (new Date(NewDateTime).getSeconds()-new Date(DOBTime).getSeconds());
console.log("You are" + " " + Years + " " + "Years" + " " + Months + " Month" + " " + Days + " Days " + Hours + " Hours " + Minutes + " Minutes " + Seconds + " Seconds old");

var diff=NewDateTime-DOBTime
AgeInDays = (diff /(1000 * 60 * 60 * 24));
var DaysInRound = Math.round(AgeInDays);
console.log("Your Age In Days " + DaysInRound);

var CurrentYear = 2022;
var NextBD = new Date(CurrentYear, DOB_M, DOB_D);
var NextBDTime = NextBD.getTime();
var diff2 = NewDateTime-NextBDTime;
NextBDDays = (diff2 / (1000 * 60 * 60 * 24));
var DaysInRound2 = Math.round(NextBDDays);
console.log("Your Birthday Duration Days " + DaysInRound2);
