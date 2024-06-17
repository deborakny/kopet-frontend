import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { ContaService } from 'src/app/core/services/conta.service';
import { ServicoService } from 'src/app/core/services/servico.service';

@Component({
  selector: 'app-editar-servico',
  templateUrl: './editar-servico.component.html',
  styleUrls: ['./editar-servico.component.scss']
})
export class EditarServicoComponent implements OnInit{

  formGroup!: FormGroup;
  isLoading = true;
  estabelecimentoId?: number;

  constructor(
    private fb: FormBuilder,
    private servicoService: ServicoService,
    private route: ActivatedRoute,
    private contaService: ContaService,
    private router: Router,
    private snackbar: MatSnackBar
  ) { }

  ngOnInit(): void {
    const servicoId = this.route.snapshot.paramMap.get('idServico');
    this.estabelecimentoId = this.contaService.getId();

    this.formGroup = this.fb.group({
      nome: ['', Validators.required],
      valor: [''],
      duracao: ['', Validators.required],
      informacoesAdicionais: ['']
    });

    if (this.estabelecimentoId && servicoId) {
      this.servicoService.getServicoById(parseInt(servicoId)).subscribe(
        servico => {
          setTimeout(() => {
            this.formGroup.patchValue({
              nome: servico.nome,
              valor: servico.valor,
              duracao: servico.duracao,
              informacoesAdicionais: servico.informacoesAdicionais
            })
            this.isLoading = false;
          }, 1000)
        }
      )
    }
  }

  submitHandler() {
    if (this.formGroup.valid) {
      const servicoId = this.route.snapshot.paramMap.get('idServico');
      this.servicoService.editar(parseInt(servicoId!), this.formGroup.value).subscribe({
        next: (value) => {
          console.log('servico atualizado com sucesso', value);
          this.snackbar.open('Serviço atualizado com sucesso', '', {
            horizontalPosition: "center", verticalPosition: "bottom", duration: 3000
          });
          this.router.navigate([`/perfil-estabelecimento/${this.estabelecimentoId}`]);
        },
        error: (err) => {
          console.log('erro', err);
          this.snackbar.open('Não foi possível fazer a atualização', '', {
            horizontalPosition: "center", verticalPosition: "bottom", duration: 3000
          });
        },
      })
    }
  }

}
