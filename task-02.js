//# Завдання 2
//Виправ помилки, які будуть в консолі, щоб скрипт запрацював.

const inventory = {
  items: ["Knife", "Gas mask"],
  add(itemName) {
    this.items.push(itemName);
    return `Adding ${itemName} to inventory`;
    
  }, 
  remove(itemName) {
    this.items = this.items.filter((item) => item !== itemName)
    return `Removing ${itemName} from inventory`;

   
  },
};

const invokeInventoryAction = function (itemName, action) {
  action[itemName];
  return  `Invoking action on ${itemName}`;
};

invokeInventoryAction("Medkit", inventory.add);
// Invoking action on Medkit
// Adding Medkit to inventory

console.log(inventory.add("Medkit")); 

invokeInventoryAction("Medkit", inventory.add);
console.log(invokeInventoryAction("Medkit", inventory.add));

console.log(inventory.items);

console.log(inventory.remove("Gas mask"));
invokeInventoryAction("Gas mask", inventory.remove);
console.log(invokeInventoryAction("Gas mask", inventory.remove));
// Invoking action on Gas mask
// Removing Gas mask from inventory

console.log(inventory.items); 
