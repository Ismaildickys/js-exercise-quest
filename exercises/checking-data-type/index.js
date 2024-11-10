let data = {
            "name": "Ismail",
            "age": 25,
        }; // OBJECT

        data = 23; // NUMBER
        data = "55"; // STRING

        if (typeof data === "number") {
            console.log("This is Number");
        } else if (typeof data === "object") {
            console.log("This is Object");
        } else if (typeof data === "string") {
            console.log("This is String");
        } else {
            console.log("UNDEFINED")
        }