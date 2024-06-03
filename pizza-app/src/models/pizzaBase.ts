import {Size} from "./size";
import {sizes} from "../constants";

export class PizzaBase {
  private readonly _name: string;
  private readonly _picturePath: string;
  private readonly _priceForSize: Map<Size, number>;
  private readonly _caloriesForSize: Map<Size, number>;

  public constructor(name: string,
                     picturePath: string,
                     priceForSize: Map<Size, number>,
                     caloriesForSize: Map<Size, number>) {
    this._name = name;
    this._picturePath = picturePath;
    this._priceForSize = priceForSize;
    this._caloriesForSize = caloriesForSize;
  }

  public getName = (): string => this._name;

  public getPicturePath = (): string => this._picturePath;

  public getPrice = (size: Size): number => this._priceForSize.get(size)!;

  public getCalories = (size: Size): number => this._caloriesForSize.get(size)!;

  public getPriceMap = (): Map<Size, number> => this._priceForSize;

  public getCaloriesMap = (): Map<Size, number> => this._priceForSize;

}
