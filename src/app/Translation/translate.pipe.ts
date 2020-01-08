import { Pipe, PipeTransform } from '@angular/core';
import { TranslateService } from './translate.service';

@Pipe({
  name: 'translate',
  pure: false
})
export class TranslatePipe implements PipeTransform {
  constructor(private translationService: TranslateService) {}
  transform(value: any, args?: any): any {
    console.log(this.translationService.translate(value),value)
    return this.translationService.translate(value)
  }

}
