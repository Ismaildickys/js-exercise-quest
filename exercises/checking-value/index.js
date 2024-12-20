function checkNumber (number) {
    if (number > 0) {
        return console.log("Positive");
    } else if (number < 0) {
        return console.log("Negative");
    } else {
        return console.log("Zero");
    }
}

checkNumber(-12);
checkNumber(38);
checkNumber(0);