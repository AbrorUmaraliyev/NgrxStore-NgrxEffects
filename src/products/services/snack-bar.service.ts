import { Injectable } from "@angular/core";
import { MatSnackBar, MatSnackBarDismiss } from "@angular/material";
import { Observable } from "rxjs";

@Injectable()
export class SnackBarService {
    constructor(public snackBar: MatSnackBar) {}

    error(message: string): Observable<MatSnackBarDismiss> {
        const ref = this.snackBar.open(message, "Ok", {
          duration: 4000,
        });
        return ref.afterDismissed();
      }
}
