import { Injectable } from '@angular/core';
import { MatSnackBarConfig, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition, MatSnackBar } from '@angular/material';

@Injectable({
  providedIn: 'root'
})
export class PopupService {
  public horizontalPosition: MatSnackBarHorizontalPosition = 'right';
  public verticalPosition: MatSnackBarVerticalPosition = 'top';
  public setAutoHide = true;
  public autoHide = 2000;
  constructor(private snackBar: MatSnackBar) { }

  public snackBarConfig(successflag) {
    console.log('successflag',successflag)
   let config = new MatSnackBarConfig();
   config.verticalPosition = this.verticalPosition;
   config.horizontalPosition = this.horizontalPosition;
   config.duration = this.setAutoHide ? this.autoHide : 0;
   if(!successflag){
       config.panelClass= ['red-snackbar']
   }
   else{
       config.panelClass = successflag ? ['party'] : ['red-snackbar'];
   }
   return config;
}
openSnackBar(message: string,successflag:boolean) {
   this.snackBar.open(message, undefined, this.snackBarConfig(successflag));
}



}
