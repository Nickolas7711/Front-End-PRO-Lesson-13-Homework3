const SIZE_SMALL = {name: 'Маленький', price: 50, calories: 20}; 
const SIZE_LARGE = {name: 'Великий', price: 100, calories: 40}; 
const STUFFING_CHEESE = {name: 'Сир', price: 10, calories: 20};
const STUFFING_SALAD = {name: 'Салат', price: 20, calories: 5};
const STUFFING_POTATO = {name: 'Картопля', price: 15, calories: 10 };
const TOPPING_SPICE = {name: 'Приправа', price: 15, calories: 0 };
const TOPPING_MAYO = {name: 'Майонез', price: 20, calories: 5 };

class Hamburger {
    constructor(size, stuffing) {
        this.size = size;
        this.stuffing = stuffing;
        this.toppings = [];
    }

    addTopping(topping) {
        this.toppings.push(topping);
    }

    calculatePrice() {
        const totalPrice = this.size.price + this.stuffing.price;
        const toppingsPrice = this.toppings.reduce((total, topping) => total + topping.price, 0);
        return totalPrice + toppingsPrice;
    }

    calculateCalories() {
        const totalCalories = this.size.calories + this.stuffing.calories;
        const toppingsCalories = this.toppings.reduce((total, topping) => total + topping.calories, 0);
        return totalCalories + toppingsCalories;
    }
}

// маленький гамбургер з начинкою з сиру
const hamburger = new Hamburger(SIZE_SMALL, STUFFING_CHEESE);

// добавка з майонезу
hamburger.addTopping(TOPPING_MAYO);

// скільки там калорій
console.log(`Калорійність: ${hamburger.calculateCalories()} калорій`);

// скільки коштує
console.log(`Вартість: ${hamburger.calculatePrice()} тугриків`);

// я тут передумав і вирішив додати ще приправу
hamburger.addTopping(TOPPING_SPICE);

// А скільки тепер коштує?
console.log(`Вартість з добавкою (${hamburger.toppings.map(topping => topping.name).join(', ')}): ${hamburger.calculatePrice()} тугриків`);