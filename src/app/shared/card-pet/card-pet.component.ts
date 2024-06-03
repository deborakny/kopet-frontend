import { Pet } from 'src/app/core/types/pet';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-pet',
  templateUrl: './card-pet.component.html',
  styleUrls: ['./card-pet.component.scss']
})
export class CardPetComponent {
  @Input() pet: any;
}
