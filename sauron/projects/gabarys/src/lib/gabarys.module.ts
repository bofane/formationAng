import { NgModule } from '@angular/core';
import { gabaritsComponent } from './gabarits.component';
import { GabaritAComponent } from './test/gabarit-a/gabarit-a.component';

@NgModule({
  declarations: [gabaritsComponent, GabaritAComponent],
  imports: [
  ],
  exports: [gabaritsComponent]
})
export class gabaritsModule { }
