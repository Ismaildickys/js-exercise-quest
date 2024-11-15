function isPrime (number) {
    if (number > 2) return console.log("False"); 

    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) {
        return console.log("False");
        }
    }

    return console.log("True");

}

isPrime(19); // It is not Prime Number
isPrime(1); // It is Prime
isPrime(18); // It is not
isPrime(17); // It is also not Prime
isPrime(2); // Absolutely it is Prime