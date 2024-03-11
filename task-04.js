//#Завдання 4
//Ви отримали об'єкт даних з інформацією про продукти в інтернет-магазині:
const product = {
  id: 1,
  name: "Ноутбук Lenovo IdeaPad 3",
  price: 15000,
  description: "15.6 дюймовий, AMD Ryzen 5, 8 ГБ ОЗУ, 512 ГБ SSD",
  images: ["image1.jpg", "image2.jpg", "image3.jpg"],
  category: "Ноутбуки",
  available: true,
};

//Напишіть функцію printProductInfo, яка приймає об'єкт product в якості параметра та 
//друкує в консоль інформацію про цей продукт в наступному форматі:

//Назва: Ноутбук Lenovo IdeaPad 3
//Категорія: Ноутбуки
//Доступність: Так
//Ціна: 15000 грн

//Реалізуйте цю функцію, використовуючи деструктуризацію для отримання необхідних полів з об'єкту product.

function printProductInfo({id, name, price, description, images, category, available}){
    if (available === true) available = "Так";
    else available = "Ні";
    return `Назва: ${name}, Категорія: ${category}, Доступність: ${available}, Ціна: ${price}`;
}
console.log(printProductInfo(product));