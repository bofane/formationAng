import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { State } from 'src/app/shared/enums/state.enum';
import { Prestation } from 'src/app/shared/models/prestation.model';

@Component({
  selector: 'app-form-prestation',
  templateUrl: './form-prestation.component.html',
  styleUrls: ['./form-prestation.component.scss']
})
export class FormPrestationComponent implements OnInit {
  states = State;

init = new Prestation();
@Output() nItem: EventEmitter<Prestation> = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }
  public onSubmit() {
    console.log(this.init);
    this.nItem.emit(this.init);

  }
}
