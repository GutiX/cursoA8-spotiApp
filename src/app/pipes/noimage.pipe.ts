import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'noimage'
})
export class NoimagePipe implements PipeTransform {

  transform(images: any[] ): string {
    // tslint:disable-next-line: triple-equals
    if ( !images || ( images && images.length == 0 )) { return 'assets/img/noimage.png'; } else { return images[0].url; }
  }

}
