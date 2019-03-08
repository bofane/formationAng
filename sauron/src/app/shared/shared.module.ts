import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TotalPipe } from './pipe/total.pipe';
import { AppStateDirective } from './directives/app-state.directive';
import { RouterModule } from '@angular/router';
import { TemplatesModule } from '../templates/templates.module';

@NgModule({
  declarations: [TotalPipe, AppStateDirective],
  exports: [TotalPipe, AppStateDirective, RouterModule, TemplatesModule],
  imports: [
    CommonModule, RouterModule, TemplatesModule
  ]
})
export class SharedModule { }
