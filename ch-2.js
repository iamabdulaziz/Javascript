var scoreJohn = (89 + 120 + 103) / 3;
var scoreMike = (129 + 94 + 123) / 3;
var scoreMary = (97 + 134 + 105) / 3;

console.log(scoreJohn, scoreMike, scoreMike);

if (scoreJohn > scoreMike && scoreMary > scoreMary) {
    console.log('John\'s team wins with ' + scoreJohn + 'points');
} else if (scoreMike > scoreMary && scoreJohn > scoreMary) {
    console.log('Mike\'s team wins with ' + scoreMike + 'points');
} else if (scoreMary > scoreJohn && scoreMike > scoreJohn) {
    console.log('Mary\'s team wins with ' + scoreMary + 'points');
} else {
    console.log('There is a draw');
}