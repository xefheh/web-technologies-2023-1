import {Component} from '@angular/core';
import {Pizza} from "../../../models/pizza";
import {pizzaBases, sizes, toppings} from "../../../constants";
import {PizzaBase} from "../../../models/pizzaBase";
import {Size} from "../../../models/size";
import {Topping} from "../../../models/topping";

@Component({
  selector: 'app-pizza-menu',
  templateUrl: './pizza-menu.component.html',
  styleUrl: './pizza-menu.component.scss'
})
export class PizzaMenuComponent {

  protected readonly _toppings: Topping[] = toppings;

  protected _pizza: Pizza = new Pizza(sizes[0], pizzaBases[0]);

  protected onPizzaBaseNotify(pizzaBase: PizzaBase): void {
    this._pizza.setBase(pizzaBase);
  }

  protected onSizePickerNotify(size: Size): void {
    this._pizza.setSize(size);
  }

  protected isToppingContains(topping: Topping): boolean {
    return this._pizza.getToppings().includes(topping);
  }

  protected addOrDeleteTopping(topping: Topping): void {
    if (this.isToppingContains(topping)) {
      this._pizza.deleteTopping(topping);
    } else {
      this._pizza.addTopping(topping);
    }
  }
}
