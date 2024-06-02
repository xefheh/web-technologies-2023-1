export class Size {
    private readonly _name: string;
    private readonly _price: number;
    private readonly _calories: number;
    
    public constructor(name: string, price: number, calories: number) {
        this._name = name;
        this._price = price;
        this._calories = calories;
    }
    
    public getName(): string { return this._name; }
    
    public getPrice(): number { return this._price; }
    
    public getCalories(): number { return this._calories; }
}