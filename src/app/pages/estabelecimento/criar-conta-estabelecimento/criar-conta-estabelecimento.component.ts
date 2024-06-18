import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { FormEstabelecimentoService } from 'src/app/core/services/form-estabelecimento.service';

@Component({
  selector: 'app-criar-conta-estabelecimento',
  templateUrl: './criar-conta-estabelecimento.component.html',
  styleUrls: ['./criar-conta-estabelecimento.component.scss']
})
export class CriarContaEstabelecimentoComponent implements OnInit{

  // nomeControl = new FormControl();
  // cnpjControl = new FormControl();
  // telefoneControl = new FormControl();
  // emailControl = new FormControl();
  // senhaControl = new FormControl();

  formGroup = this.formEstabelecimentoService.getFormGroup();
  phoneMask: string = '(00) 0000-00009';

  constructor(
    private formEstabelecimentoService: FormEstabelecimentoService,
    private router: Router,
    private cdRef: ChangeDetectorRef
  ) { }

  ngOnInit(): void {
    // this.nomeControl = this.formEstabelecimentoService.getControl('nome');
    // this.cnpjControl = this.formEstabelecimentoService.getControl('cnpj');
    // this.telefoneControl = this.formEstabelecimentoService.getControl('telefone');
    // this.emailControl = this.formEstabelecimentoService.getControl('email');
    // this.senhaControl = this.formEstabelecimentoService.getControl('senha');
    this.formGroup.get('telefone')?.valueChanges.subscribe(value => {
      if (value) {
        const newMask = value.length > 10 ? '(00) 00000-0000' : '(00) 0000-00009';
        if (this.phoneMask !== newMask) {
          this.phoneMask = newMask;
          this.cdRef.detectChanges();  // Marca para verificação de mudanças
        }
      }
    });

  }

  onNext() {
    if (this.isFirstPageValid()) {
      console.log('Form Data:', this.formGroup.value);
      this.router.navigate(['cadastrar/conta-estabelecimento/endereco'])
    } else {
      console.log('erro ao navegar para a página seguinte')
    }
  }

  private isFirstPageValid(): boolean {
    const firstPageControls = ['nome', 'cnpj', 'telefone', 'conta.email', 'conta.senha'];
    for (let controlName of firstPageControls) {
      const control = this.formGroup.get(controlName);
      if (control && control.invalid) {
        return false;
      }
    }
    return true;
  }

}
