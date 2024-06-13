import { Pet } from 'src/app/core/types/pet';
import { Component, Input } from '@angular/core';
import { ContaService } from 'src/app/core/services/conta.service';

@Component({
  selector: 'app-card-pet',
  templateUrl: './card-pet.component.html',
  styleUrls: ['./card-pet.component.scss']
})
export class CardPetComponent {
  @Input() pet: any;
  clienteId?: number;

  constructor(
    private contaService: ContaService
  ) {
    this.clienteId = contaService.getId();
  }
}
