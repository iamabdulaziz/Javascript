var massMark = 78; //Kg
var heightMark = 1.69;  //meters

var massJohn = 92;
var heightJohn = 1.95;

var BMIMark = massMark / (heightMark * heightMark);
var BMIJohn = massJohn / (heightJohn * heightJohn);
console.log(BMIMark, BMIJohn);

var markHigherBMI = BMIMark > BMIJohn;
console.log('Is Mark\'s BMI higher than John\'s ' + markHigherBMI);

if (BMIMark > BMIJohn) {
    console.log('Mark\' BMI is higher than John\'s.');
} else {
    console.log('John\' BMI is higher than Marks\'s.');
}