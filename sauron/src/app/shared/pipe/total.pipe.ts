import { Pipe, PipeTransform } from '@angular/core';
import { Prestation } from '../models/prestation.model';

@Pipe({
  name: 'total'
})
export class TotalPipe implements PipeTransform {

  transform(value: Prestation, args?: any): number {

    if (value) {
      if (args === 'TTC') {
        return value.totalTTC();
      }
      return value.totalHT();
    }
    return null;
  }

}
