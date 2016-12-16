/*

The Grade Assigner

Check the results of your assignGrade function from the conditionals exercise
by logging every value from 60 to 100: your log should show "For 88, you got a
B. For 89, you got a B. For 90, you got an A. For 91, you got an A.", etc.,
logging each grade point in the range.

*/

// YOUR CODE GOES HERE

function assignGrade(grade) {
    if (grade > 90) {
        return 'A';
    } else if (grade > 80) {
        return 'B';
    } else if (grade > 70) {
        return 'C';
    } else if (grade > 65) {
        return 'D';
    } else {
        return 'F';
    }
}

for (var i = 60; i <= 65; i++) {
  console.log('For ' + i + ', you got an ' + assignGrade(i));
}
for (var i = 66; i <= 90; i++) {
  console.log('For ' + i + ', you got a ' + assignGrade(i));
}
for (var i = 91; i <= 100; i++) {
  console.log('For ' + i + ', you got an ' + assignGrade(i));
}