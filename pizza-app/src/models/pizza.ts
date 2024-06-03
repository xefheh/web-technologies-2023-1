import {Size} from "./size";
import {PizzaBase} from "./pizzaBase";
import {Topping} from "./topping";
import {mergeWith} from "rxjs";

export class Pizza {
  private _size: Size;
  private _base: PizzaBase;
  private readonly _toppings: Set<Topping> = new Set<Topping>();

  public constructor(size: Size, base: PizzaBase) {
    this._size = size;
    this._base = base;
  }

  public getSize(): Size { return this._size; }
  public getToppings(): Topping[] { return Array.from(this._toppings.values()); }

  public addTopping(topping: Topping): void {
    this._toppings.add(topping);
  }

  public deleteTopping(topping: Topping): void {
    this._toppings.delete(topping);
  }

  public setSize(size: Size): void {
    this._size = size;
  }

  public setBase(base: PizzaBase): void {
    this._base = base;
  }

  public getPizzaBase(): PizzaBase { return this._base; }

  public calculatePrice(): number {
    return this._size.getPrice() +
      this._base.getPrice(this._size) +
      this.getToppings().reduce((sum, cur) => sum + cur.getPrice(this._size), 0);
  }

  public calculateCalories(): number {
    return this._size.getCalories() +
      this._base.getCalories(this._size) +
      this.getToppings().reduce((sum, cur) => sum + cur.getCalories(this._size), 0);
  }
}
