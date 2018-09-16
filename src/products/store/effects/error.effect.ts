import { Injectable } from "@angular/core";
import { of } from "rxjs";
import { Effect, Actions } from "@ngrx/effects";
import { switchMap, map, catchError } from "rxjs/operators";

import { SnackBarService } from "../../services/snack-bar.service";

import * as commonActions from "../actions";

@Injectable()
export class CommonEffects {
  constructor(private actions$: Actions, private svc: SnackBarService) {}
  @Effect()
  error$ = this.actions$
    .ofType(commonActions.ERROR)
    .pipe(
      switchMap((action: commonActions.ActionError) =>
        this.svc
          .error(action.payload)
          .pipe(map(() => new commonActions.ActionErrorHandled()))
      )
    );
}
