import {Size} from "./classes/sizes/size.ts";
import {Topping} from "./classes/toppings/topping.ts";
import {Pizza} from "./classes/pizzas/pizza.ts";

const sizes: Size[] = [
    new Size("Большая", 200, 200),
    new Size("Маленькая", 100, 100)
];

const toppings: Topping[] = [
    new Topping("Сырный борт",
        new Map<Size,  number>([[sizes[0], 150],
            [sizes[1], 300]]),
        new Map<Size,  number>([[sizes[0], 50],
            [sizes[1], 50]])),
    new Topping("Чедер и пармезан",
        new Map<Size,  number>([[sizes[0], 150],
            [sizes[1], 300]]),
        new Map<Size,  number>([[sizes[0], 50],
            [sizes[1], 50]])),
]

const pizza: Pizza = new Pizza("Маргарита", sizes[0], 500, 300);

pizza.addTopping(toppings[0]);
pizza.addTopping(toppings[1]);
pizza.removeTopping(toppings[0]);
console.log("Total calories:")
// Должно быть 300 + 50 + 200 = 550;
console.log(pizza.calculateCalories());
console.log("Total price:")
// Должно быть 500 + 150 + 200 = 850; 
console.log(pizza.calculatePrice());
console.log(pizza.getSize())
console.log(pizza.getStuffing())
console.log(pizza.getToppings())