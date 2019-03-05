import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagenotfoundComponent } from './pages/pagenotfound/pagenotfound.component';
import { PageNoteFoundRoutingModule } from './page-note-found-routing.module';

@NgModule({
  declarations: [PagenotfoundComponent],
  imports: [
    CommonModule,
    PageNoteFoundRoutingModule
  ]
})
export class PageNotFoundModule { }
