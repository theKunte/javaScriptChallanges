/* Calculate the total cost in the array

[2,3,1,5]
Price per coffee = $1.25
Sum of coffees = 13.75

The total bill is ${total}

Template Literal: allow to combine javascript experession together
use backTacks

*/

function coffeeDate(coffeArr){
    let coffeeSum = coffeArr.reduce(
        (totalCoffee, numCoffees) => (totalCoffee += numCoffees)
    );
    return `The total bill is $${coffeeSum * 1.25} `;
}

console.log(coffeeDate([2,3,1,5, 7]));


