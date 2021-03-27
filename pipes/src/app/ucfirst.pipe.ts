import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ucfirst'
})
export class UcfirstPipe implements PipeTransform {

  transform(value: string): string{
      return value[0].toUpperCase() + value.substr(1).toLowerCase();
    }
  }
