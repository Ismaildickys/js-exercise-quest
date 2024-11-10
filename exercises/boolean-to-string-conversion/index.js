let isActive = true;
console.log(isActive);

if (typeof isActive === "string") {
    console.log("It is String now");
} else if (typeof isActive === "boolean") {
    console.log("It is Boolean");
} else {
    console.log("It is Undefined")
};

const convert = isActive.toString();
console.log(convert);

if (typeof convert === "string") {
    return console.log("It is String now");
} else if (typeof convert === "boolean") {
    return console.log("It is still Boolean");
} else {
    return console.log("Undefined")
};