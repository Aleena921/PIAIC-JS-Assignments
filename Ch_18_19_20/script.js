var courses = [];
var course1 = prompt("Course1", "Accounts and Finance");
var course2 = prompt("Course2", "Business Administration");
var course3 = prompt("Course3", "Fashion Designing");
var course4 = prompt("Course4", "Interior Designing");
var course5 = prompt("Course5", "Beaking");

for(var i=0; i<=0; i++)
{
   courses.push(course1)
   courses.push(course2)
   courses.push(course3)
   courses.push(course4)
   courses.push(course5)

   
}
alert(courses)
console.log(courses)

course1 = prompt(course1, "Accounts and Finance")
course2 = prompt(course2, "Business Administration")
course3 = prompt(course3, "Fashion Designing")
course4 = prompt(course4, "Interior Designing")
course5 = prompt(course5, "Beaking")
course2 = prompt(course2, "Computer")
courses.splice(1, 1, "Computer" )
alert(courses)













var courses=[];
for (let index = 0; index < 5; index++) {
    courses.push(prompt(`Enter course ${index+1}: `));
}
alert(courses);
for (let index = 0; index < 5; index++) {
    var input = prompt(courses[index],courses[index])
    courses.splice(index,1,input);
}
alert(courses);
