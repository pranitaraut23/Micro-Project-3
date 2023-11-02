const data = require('./food.json');

function listAllItems() {
    return data;
}

function listVegetable(){
    return data.filter((food)=>food.category==='Vegetable');
}

function listFruit(){
    return data.filter((food)=>food.category==='Fruit');
}

function listProtein(){
    return data.filter((food)=>food.category==='Protein');
}

function listNuts(){
    return data.filter((food)=>food.category==='Nuts');
}

function listGrains(){
    return data.filter((food)=>food.category==='Grain');
}

function listDairy(){
    return data.filter((food)=>food.category==='Dairy');
}

function listAboveCalorie(calorie){
    return data.filter((food)=>food.calorie>calorie);
}

function listBelowCalorie(calorie){
    return data.filter((food)=>food.calorie<calorie);
}

function listByProtein(){
    return data.sort((a,b)=>b.protiens-a.protiens);
}

function listByCarb(){
    return data.sort((a,b)=>a.cab-b.cab);
}


console.log("List of all items");
console.log(listAllItems());
console.log("List of all the food items with category vegetables");
console.log(listVegetable());
console.log("List of all the food items with category fruit");
console.log(listFruit());
console.log("List of all the food items with category protien");
console.log(listProtein());
console.log("List of all the food items with category nuts");
console.log(listNuts());
console.log("List of all the food items with category grains");
console.log(listGrains());
console.log("List of all the food items with category dairy");
console.log(listDairy());
console.log("List of all the food items with calorie above 100");
console.log(listAboveCalorie(100));
console.log("List of all the food items with calorie below 100");
console.log(listBelowCalorie(100));
console.log("List of all the food items with highest protien content to lowest");
console.log(listByProtein());
console.log("List of all the food items with lowest cab content to highest");
console.log(listByCarb());