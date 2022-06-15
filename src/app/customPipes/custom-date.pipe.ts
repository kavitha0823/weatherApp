import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'customDate'
})
export class CustomDatePipe implements PipeTransform {

  transform(date: Date):string{
    date = new Date(date);
    let d = date.toLocaleString('en-us', {weekday:"long", month:"short", day:"numeric"});
    return d.replace(/(,)/g, '');
  }

}
