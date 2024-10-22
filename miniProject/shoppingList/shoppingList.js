const shoppingList = [];

/* FUNCTION TO ADDING ITEM TO THE SHOPPING LIST */
function addItem(item) {
        shoppingList.push(item);
        console.log(`${item} has been added to the shopping list`);    
}

addItem("Milk");
addItem("Horse");
addItem("Car");
addItem("Watermelon");
addItem("Dragon Fruit");
addItem("Toilet Paper");
addItem("Orange");
addItem("Durian");

console.log(shoppingList);

/* FUNCTION FOR DELETING ITEM FROM SHOPPING LIST */
function removeItem(item) {
    const index = shoppingList.indexOf (item);

    if (index !== -1) {
        shoppingList.splice(index, 1);
        console.log(`${item} has been removed from the shopping list`);
    } else {
        console.log(`${item} is not in the shopping list`);
    }
}

removeItem("Car");
removeItem("Toilet Paper");

console.log(shoppingList);

/* FUNCTION TO SHOWING ALL SHOPPING LIST */
function showList() {
    console.table(shoppingList);
}

showList();

/* FUNCTION TO SAVE ARRAY PRICE OF ITEM, RETURN A TOTAL PRICE, AND CHECK ALL ELEMENT INSIDE
    OF ARRAY ARE VALID USING isNaN() */
function calculateTotal(prices) {
    return prices.reduce((total, price) => {
        if (isNaN(price)) {
            console.error(`Invalid price found: ${price}`);
            return total;
        } else {
            return total + price;
        }
    }, 0);
}

    let itemPrices = [300, 2389, 13846,"twoMillion", 398, 377, 232,"tenBucks", 332];
    let totalPrices = calculateTotal(itemPrices);

    console.log("Total Prices Is", totalPrices);