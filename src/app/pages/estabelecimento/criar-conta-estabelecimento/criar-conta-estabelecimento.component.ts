import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { ContaService } from 'src/app/core/services/conta.service';
import { FormEstabelecimentoService } from 'src/app/core/services/form-estabelecimento.service';
import { Conta } from 'src/app/core/types/conta';

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
  contas: Conta[] = [];
  emailExiste: boolean = false;

  constructor(
    private formEstabelecimentoService: FormEstabelecimentoService,
    private router: Router,
    private cdRef: ChangeDetectorRef,
    private snackbar: MatSnackBar,
    private contaService: ContaService
  ) { }

  ngOnInit(): void {
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
    if (!this.isFirstPageValid()) {
      this.formGroup.markAllAsTouched();
      this.snackbar.open('Preencha corretamente os campos obrigatórios', '', {
        horizontalPosition: "center", verticalPosition: "bottom", duration: 3000
      });
    } else if (this.emailExiste) {
      this.snackbar.open('E-mail já cadastrado', '', {
        horizontalPosition: "center", verticalPosition: "bottom", duration: 3000
      });
    } else if (this.isFirstPageValid() && !this.emailExiste){
      this.router.navigate(['cadastrar/conta-estabelecimento/endereco']);
    }
    // if (this.isFirstPageValid()) {
    //   this.router.navigate(['cadastrar/conta-estabelecimento/endereco'])
    // } else {
      // this.snackbar.open('Preencha corretamente os campos obrigatórios', '', {
      //   horizontalPosition: "center", verticalPosition: "bottom", duration: 3000
      // });
    // }
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

  verificaEmail() {
    const email = this.formGroup.get('conta.email')?.value;
    console.log(email)
    if (email) {
      this.contaService.listar().subscribe(
        contas => {
          this.emailExiste = contas.some(conta => conta.email === email);
          console.log(this.emailExiste)
          if (this.emailExiste) {
            this.snackbar.open('E-mail já cadastrado', '', {
              horizontalPosition: "center", verticalPosition: "bottom", duration: 3000
            });
          }
        }
      )
    }
  }

}
