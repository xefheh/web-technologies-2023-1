import {Size} from "./models/size";
import {PizzaBase} from "./models/pizzaBase";
import {Topping} from "./models/topping";

export const sizes: Size[] = [
  new Size('Маленькая', 100, 100),
  new Size('Большая', 200, 200)];

export const pizzaBases: PizzaBase[] = [
  new PizzaBase('Маргарита',
    '/assets/images/margarita.png',
    new Map<Size, number>([[sizes[0], 200], [sizes[1], 400]]),
    new Map<Size, number>([[sizes[0], 100], [sizes[1], 200]])),
  new PizzaBase('Пеперони',
    '/assets/images/pepperoni.png',
    new Map<Size, number>([[sizes[0], 100], [sizes[1], 250]]),
    new Map<Size, number>([[sizes[0], 250], [sizes[1], 400]])),
  new PizzaBase('Везувий',
    '/assets/images/vezuviy.png',
    new Map<Size, number>([[sizes[0], 100], [sizes[1], 15]]),
    new Map<Size, number>([[sizes[0], 200], [sizes[1], 250]]))
]

export const toppings: Topping[] = [
    new Topping("Ягнёнок",
      '/assets/images/yagnyonok.png',
      new Map<Size, number>([[sizes[0], 100], [sizes[1], 200]]),
      new Map<Size, number>([[sizes[0], 100], [sizes[1], 200]])),
    new Topping("Килька",
      '/assets/images/kilka.png',
      new Map<Size, number>([[sizes[0], 100], [sizes[1], 200]]),
      new Map<Size, number>([[sizes[0], 100], [sizes[1], 200]]))
]
