import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PabloPaginationComponent } from './pablo-pagination.component';

@NgModule({
  declarations: [PabloPaginationComponent],
  imports: [
    CommonModule,
  ],
  exports: [PabloPaginationComponent]
})
export class PabloPaginationModule { }
