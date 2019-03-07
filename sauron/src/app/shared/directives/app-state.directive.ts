import { Directive, OnChanges, Input } from '@angular/core';
import { State } from '../enums/State';

@Directive({
  selector: '[appAppState]'
})
export class AppStateDirective implements OnChanges {

  ngOnChanges(): void {
  }
  constructor() { console.log( ' direct ok'); }

}
