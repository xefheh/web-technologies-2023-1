import {Component, EventEmitter, Output} from '@angular/core';
import {sizes} from "../../../constants";
import {Size} from "../../../models/size";
import {PizzaBase} from "../../../models/pizzaBase";

@Component({
  selector: 'app-size-picker',
  templateUrl: './size-picker.component.html',
  styleUrl: './size-picker.component.scss'
})
export class SizePickerComponent {
  @Output() notify: EventEmitter<Size> = new EventEmitter<Size>();

  protected readonly _sizes: Size[] = sizes;
  protected _currentSize: Size = sizes[0];

  public getCurrentSize = (): Size => this._currentSize;

  public setCurrentSize(index: number): void {
    this._currentSize = this._sizes[index];
    this.notify.emit(this.getCurrentSize());
  }
}
