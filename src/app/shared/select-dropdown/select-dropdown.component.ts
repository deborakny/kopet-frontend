import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl } from '@angular/forms';


@Component({
  selector: 'app-select-dropdown',
  templateUrl: './select-dropdown.component.html',
  styleUrls: ['./select-dropdown.component.scss']
})
export class SelectDropdownComponent {
  @Input() selectLabel: string = ''
  @Input() objs?: any[];
  @Input() selectControl!: FormControl;
  @Output() selecionado = new EventEmitter()

  onSelected(id: number) {
    this.selectControl.setValue(id)
    this.selecionado.emit();
  }
}
