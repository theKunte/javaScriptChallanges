/*
Food Truck vendors 

Vendor 1: ["pizza", "pasta"]
Vendor 2: ["pizza", "calzones"]
Vendor 3: ["lobster"]
Vendor 4: ["calzones"]

Return one mastermenu 

["pizza", "calzone", "pasta", "lobster"]

id = "combine-menu"

*/

function foodTruckFestical(menus){
    let flatMenus = menus.flat();

    let combineMenu = new Set();
    flatMenus.forEach(item =>{
        combineMenu.add(item);
    });

    const menuNode = document.querySelector("#combine-menu");
    for (let item of combineMenu){
        let foodNode = document.createElement('li');
        foodNode.innerText = item;
        menuNode.appendChild(foodNode);

    }
}

foodTruckFestical([["pizza", "pasta"], ["pizza", "calzone"],[ "lobster"]])