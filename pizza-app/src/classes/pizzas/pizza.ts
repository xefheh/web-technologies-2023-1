import {Size} from "../sizes/size.ts";
import {Topping} from "../toppings/topping.ts"; 

export class Pizza {
    private readonly _name: string;
    private readonly _size: Size;
    private readonly _price: number;
    private readonly _calories: number;
    private readonly _toppings: Set<Topping>
    
    constructor(name: string,
                size: Size, 
                price: number, 
                calories: number,
                toppings: Set<Topping> = new Set<Topping>()) {
        this._name = name;
        this._size = size;
        this._price = price;
        this._calories = calories;
        this._toppings = toppings;
    }
    
    public getStuffing(): string { return this._name; }
    
    public addTopping(topping: Topping): void {
        this._toppings.add(topping);
    }
    
    public removeTopping(topping: Topping): void {
        this._toppings.delete(topping);
    }
    
    public getToppings(): Topping[] {
        return Array.from(this._toppings.values());
    }
    
    public getSize(): Size { return this._size; }
    
    public calculatePrice(): number {
        return this._price +
            this._size.getPrice() +
            this.getToppings()
                .reduce((sum, current) =>
                sum + current.getPrice(this._size), 0);
    }
    
    public calculateCalories(): number {
        return this._calories +
            this._size.getCalories() +
            this.getToppings()
                .reduce((sum, current) =>
                sum + current.getCalories(this._size), 0);
    }
}