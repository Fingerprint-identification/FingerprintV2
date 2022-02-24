import { Pipe, PipeTransform } from '@angular/core';
import { city } from '../models/city';

@Pipe({
  name: 'FilterCities',
})
export class FilterPipe implements PipeTransform {
  DefaultNotMatch:city[] = [{address: 'No Match',street: ''}];

  transform(cities: city[], SearchText: string): city[] {
    if (!cities || !SearchText)
      return this.DefaultNotMatch;

    // to remove links
    SearchText = SearchText.replace(/(?:https?|ftp):\/\/[\n\S]+/g, 'null');
    // to remove space and comma
    SearchText = SearchText.replace(/[\s,]/g, '');
    // to transform to lowecase
    SearchText = SearchText.toLowerCase();
    // to remove space and comma
    let SearchFilterOperation = cities.filter((city) => city.address.replace(/[\s,]/g, '').toLowerCase().includes(SearchText));
    return (SearchFilterOperation.length!= 0) ? SearchFilterOperation : this.DefaultNotMatch;
  }
}
