// Create menu for Vegeterien options


function vegeterienMenu(menu){
    const menuNode = document.querySelector("#menu");
    const vegeterienOptions = menu.filter(
        (option) => option.isVegeterian === true
    );
    vegeterienOptions.forEach(option =>{
        let dish = document.createElement('li');
        dish.textContent = option.name;
        menuNode.appendChild(dish);
    });
}

const menu =[
    {
        name: "Chicken parmensan",
        isVegeterian: false
    },
    {
        name: "Stuffed Mushrooms",
        isVegeterian: true
    },
    {
        name:"Tomato Soup",
        isVegeterian: true
    },
    {
        name: "Tiramisu",
        isVegeterian: true
    },
    {
        name: "Chicken Tacos",
        isVegeterian: false
    },
];

vegeterienMenu(menu)