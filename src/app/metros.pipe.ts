import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'metros',
  standalone: true
})
export class MetrosPipe implements PipeTransform {

  transform(alturaEmCm: number): string {
    const metros = alturaEmCm / 100;
    return metros.toFixed(2) + 'm';
  }

}
