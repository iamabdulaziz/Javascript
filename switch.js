var job = 'teacher';
switch (job) {
    case 'teacher':
        console.log(firstName  + 'teaches kids how to code.');
        break;
    case 'driver':
        console.log(firstName + 'drives an uber in lisbopn.');
        break;
    case 'designer':
        console.log(firstName + 'designs beautiful websites.');
        break;
    default:
        console.log(firstName + 'does something else.');    
}

switch (true) {
    case age < 13:
        console.log(firstName + 'is a boy.');
        break;
    case age >= 13 && age < 20:
        console.log(firstName + 'is a teenager.');
        break;
    case age >= 20 && age < 30:
        console.log(firstName + 'is a young man.');
        break;
    default:
        console.log(firstName + ' is a man.');     
}