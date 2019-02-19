import { NgModule } from '@angular/core';
import {
  MatButtonModule,
  MatInputModule,
  MatIconModule,
  MatFormFieldModule
} from '@angular/material';

@NgModule({
  exports: [MatButtonModule, MatInputModule, MatIconModule, MatFormFieldModule]
})
export class MaterialModule {}
