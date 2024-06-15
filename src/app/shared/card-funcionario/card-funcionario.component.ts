import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ContaService } from 'src/app/core/services/conta.service';
import { ConfirmaExclusaoDialogComponent } from '../confirma-exclusao-dialog/confirma-exclusao-dialog.component';
import { FuncionarioService } from 'src/app/core/services/funcionario.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-card-funcionario',
  templateUrl: './card-funcionario.component.html',
  styleUrls: ['./card-funcionario.component.scss']
})
export class CardFuncionarioComponent implements OnInit{
  @Input() funcionario?: any;

  estabelecimentoLogado?: boolean;
  estabelecimentoId?: number;

  constructor(
    private contaService: ContaService,
    public dialog: MatDialog,
    private funcionarioService: FuncionarioService,
    private snackbar: MatSnackBar
  ) { }


  ngOnInit(): void {
    this.estabelecimentoLogado = this.contaService.logado() && this.contaService.getTipoEstabelecimento();
    this.estabelecimentoId = this.contaService.getId();
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(ConfirmaExclusaoDialogComponent, {
      width: '250px',
    });
    dialogRef.componentInstance.confirmaExclusao.subscribe(
      res => {
        if (res) {
          this.funcionarioService.excluir(this.funcionario.id).subscribe({
            next: (value) => {
              console.log('Excluído');
              this.snackbar.open('Funcionário excluído', '', {
                horizontalPosition: "center", verticalPosition: "bottom", duration: 3000
              });
              window.location.reload();
            },
            error: (err) => {
              console.log('erro', err)
            }
          })
        }
      }
    );
  }
}
