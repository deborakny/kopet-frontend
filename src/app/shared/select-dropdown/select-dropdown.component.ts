import { Component, Input } from '@angular/core';


@Component({
  selector: 'app-select-dropdown',
  templateUrl: './select-dropdown.component.html',
  styleUrls: ['./select-dropdown.component.scss']
})
export class SelectDropdownComponent {
  @Input() selectLabel: string = ''
  @Input() objs?: any[];
}
