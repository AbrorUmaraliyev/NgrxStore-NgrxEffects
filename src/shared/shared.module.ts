import { NgModule, ModuleWithProviders } from "@angular/core";

// Material
import {
  MatSnackBarModule,
  MatCheckboxModule,
  MatButtonModule,
  MatSnackBar,
} from "@angular/material";

const materialComponents = [
  MatSnackBarModule,
  MatSnackBar,
  MatButtonModule,
  MatCheckboxModule
];
@NgModule({
  imports: [...materialComponents],
  declarations: [],
  exports: [...materialComponents]
})
export class SharedModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule
    };
  }
}
