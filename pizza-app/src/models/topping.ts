import {Size} from "./size";

export class Topping {
  private readonly _name: string;
  private readonly _picturePath: string;
  private readonly _priceForSize: Map<Size, number>;
  private readonly _caloriesForSize: Map<Size, number>;

  public constructor(name: string,
                     picturePath: string,
                     priceForSize: Map<Size,  number>,
                     caloriesForSize: Map<Size, number>) {
    this._name = name;
    this._picturePath = picturePath;
    this._priceForSize = priceForSize;
    this._caloriesForSize = caloriesForSize;
  }
  public getPicturePath = (): string => this._picturePath;

  public getName(): string { return this._name; }

  public getPrice(size: Size): number { return this._priceForSize.get(size)!; }

  public getCalories(size: Size): number { return  this._caloriesForSize.get(size)!; }
}
