const laptop = {
    "Brand": "Advan",
    "Type": "Workplus",
    "Year": 2023,
}

function hasProperty (object, propertyName) {
    if (propertyName in object) {
        return console.log("True");
    } else {
        return console.log("False");
    }
}

hasProperty(laptop, "Year");
hasProperty(laptop, "CPU");