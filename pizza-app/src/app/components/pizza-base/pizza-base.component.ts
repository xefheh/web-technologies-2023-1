import {Component, EventEmitter, Input, Output, output} from '@angular/core';
import {PizzaBase} from "../../../models/pizzaBase";
import {pizzaBases} from "../../../constants";

@Component({
  selector: 'app-pizza-base',
  templateUrl: './pizza-base.component.html',
  styleUrl: './pizza-base.component.scss'
})
export class PizzaBaseComponent {
  @Output() notify: EventEmitter<PizzaBase> = new EventEmitter<PizzaBase>();

  protected readonly _pizzaBases: PizzaBase[] = pizzaBases;

  protected _selectedPizzaBase: PizzaBase = pizzaBases[0];

  public setSelectedPizzaBase (index: number): void {
    this._selectedPizzaBase = this._pizzaBases[index];
    this.notify.emit(this.getSelectedPizzaBase());
  }

  public getSelectedPizzaBase(): PizzaBase {
    return this._selectedPizzaBase;
  }
}
