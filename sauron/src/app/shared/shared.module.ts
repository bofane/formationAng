import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TotalPipe } from './pipe/total.pipe';
import { AppStateDirective } from './directives/app-state.directive';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [TotalPipe, AppStateDirective],
  exports: [TotalPipe, AppStateDirective, RouterModule],
  imports: [
    CommonModule, RouterModule,
  ]
})
export class SharedModule { }
