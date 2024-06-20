import { inject } from "@angular/core"
import { ContaService } from "../services/conta.service"
import { Router } from "@angular/router";
import { MatSnackBar } from "@angular/material/snack-bar";

export const authGuard = () => {
  const contaService = inject(ContaService);
  const router = inject(Router);
  const snackbar = inject(MatSnackBar)

  if (contaService.logado()) {
    return true;
  }
  const snackbarRef = snackbar.open('Faça log in para realizar essa ação', 'Log in', {
    horizontalPosition: "center", verticalPosition: "bottom",
  });
  router.navigate(['/']);
  snackbarRef.onAction().subscribe(() => {
    router.navigate(['login']);
  })
  return false;
}
