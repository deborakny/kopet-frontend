import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { ContaService } from 'src/app/core/services/conta.service';
import { FormAgendamentoService } from 'src/app/core/services/form-agendamento.service';
import { PetService } from 'src/app/core/services/pet.service';
import { Pet } from 'src/app/core/types/pet';

@Component({
  selector: 'app-selecionar-pet',
  templateUrl: './selecionar-pet.component.html',
  styleUrls: ['./selecionar-pet.component.scss']
})
export class SelecionarPetComponent implements OnInit{
  // formControl: FormControl = new FormControl();

  usuarioLogado: boolean = true;
  petControl = new FormControl();
  pets?: Pet[];
  estabelecimentoId!: string | null;
  isLoading = true;

  constructor(
    private formAgendamentoService: FormAgendamentoService,
    private router: Router,
    private contaService: ContaService,
    private snackbar: MatSnackBar,
    private petService: PetService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.estabelecimentoId = this.route.snapshot.paramMap.get('id');
    this.petControl = this.formAgendamentoService.getControl('petId');

    const clienteId = this.contaService.getId();
    this.formAgendamentoService.setControlNumber('clienteId', clienteId!)

    this.getPets(clienteId!);
  }

  getPets(clienteId: number) {
    this.petService.getPetsByCliente(clienteId).subscribe(
      res => {
        setTimeout(() => {
          this.pets = res;
          this.isLoading = false;
        }, 1000)
      }
    )
  }

  onClick() {
    if (this.petControl.valid) {
      this.router.navigate([`estabelecimento/${this.estabelecimentoId}/agendamento/selecionar-servico-colaborador`])
    }
    else {

      this.snackbar.open('Selecione um pet', '',
                {
                  horizontalPosition: "center",
                  verticalPosition: "bottom",
                  duration: 3000,
                  panelClass: ['custom-snackbar']
                });
    }
  }

  voltar() {
    if (this.estabelecimentoId) {
      this.formAgendamentoService.clearForm();
      this.router.navigate([`/estabelecimento/${parseInt(this.estabelecimentoId)}`]);
    } else {
      this.router.navigate(['']);
    }
  }

  habilitarBotao(): string {
    if (this.petControl.valid) {
      return 'botao'; //se o formulário for válido, retorne a classe botao
    } else {
      return 'botao__desabilitado' //senão, retorne a classe botao desabilitado
    }
  }
}
