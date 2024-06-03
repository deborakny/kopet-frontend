import { FormEstabelecimentoService } from 'src/app/core/services/form-estabelecimento.service';
import { Component, OnInit } from '@angular/core';
import { CepService } from 'src/app/core/services/cep.service';
import { Router } from '@angular/router';
import { FormGroup } from '@angular/forms';
import { Estabelecimento } from 'src/app/core/types/estabelecimento';
import { EstabelecimentoService } from 'src/app/core/services/estabelecimento.service';

@Component({
  selector: 'app-criar-endereco-estabelecimento',
  templateUrl: './criar-endereco-estabelecimento.component.html',
  styleUrls: ['./criar-endereco-estabelecimento.component.scss']
})
export class CriarEnderecoEstabelecimentoComponent implements OnInit{

  formGroup!: FormGroup;
  cepExiste: boolean = false;

  constructor(
    private cepService: CepService,
    private formEstabelecimentoService: FormEstabelecimentoService,
    private estabelecimentoService: EstabelecimentoService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.formGroup = this.formEstabelecimentoService.getFormGroup();
  }

  onSubmit() {
    if (this.formGroup.valid) {
      const estabelecimento = this.formGroup.getRawValue();
      this.estabelecimentoService.criar(estabelecimento).subscribe({
        next: (value) => {
          console.log('Sucesso', value);
        },
        error: (e) => {
          console.log('Erro', e);
        }
      });
    } else {
      console.log('Formulário inválido', this.formGroup.getRawValue());
      this.formGroup.markAllAsTouched();
    }
  }

}
