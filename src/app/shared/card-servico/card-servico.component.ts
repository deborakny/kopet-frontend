import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ContaService } from 'src/app/core/services/conta.service';
import { ServicoService } from 'src/app/core/services/servico.service';
import { ConfirmaExclusaoDialogComponent } from '../confirma-exclusao-dialog/confirma-exclusao-dialog.component';

@Component({
  selector: 'app-card-servico',
  templateUrl: './card-servico.component.html',
  styleUrls: ['./card-servico.component.scss']
})
export class CardServicoComponent implements OnInit{

  @Input() servico?: any;
  valorString: string = '';

  estabelecimentoLogado?: boolean;
  estabelecimentoId?: number;

  constructor(
    private contaService: ContaService,
    public dialog: MatDialog,
    private servicoService: ServicoService,
    private snackbar: MatSnackBar
  ) { }

  ngOnInit(): void {
    this.estabelecimentoLogado = this.contaService.logado() && this.contaService.getTipoEstabelecimento();
    this.estabelecimentoId = this.contaService.getId();
    // if (this.servico.valor) {
    //   this.valorString = `R$ ${this.servico.valor}`
    // } else {
    //   this.valorString = "Não informado"
    // }
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(ConfirmaExclusaoDialogComponent, {
      width: '250px',
    });
    dialogRef.componentInstance.confirmaExclusao.subscribe(
      res => {
        if (res) {
          this.servicoService.excluir(this.servico.id).subscribe({
            next: (value) => {
              console.log('Excluído');
              this.snackbar.open('Serviço excluído', '', {
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
