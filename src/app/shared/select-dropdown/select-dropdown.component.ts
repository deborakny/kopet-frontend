import { Component, Input } from '@angular/core';
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

  onSelected(id: number) {
    this.selectControl.setValue(id)
  }
}
