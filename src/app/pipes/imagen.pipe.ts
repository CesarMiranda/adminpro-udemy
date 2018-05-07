import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'imagen'
})
export class ImagenPipe implements PipeTransform {

  transform(imagen: string, tipo: string = 'usuario'): any {
    // let url = URL_SERVICIOS + '/img';
    // if ( imagen.indexOf('https') >= 0 ) {
    //   return imagen;
    // }
    // switch ( tipo ) {
    //   case 'usuario':
    //     url += '/usuarios/' + imagen;
    //   break;
    //   case 'medico':
    //     url += '/medicos/' + imagen;
    //   break;
    //   case 'hospital':
    //     url += '/usuarios/' + imagen;
    //   break;
    //   default:
    //     console.log('Tipo de imagen no existe.');
    //     url += '/usuarios/xxx';
    //   break;
    // }
    // if ( !imagen ) {
    //   return url + '/usuarios/xxx';
    // }
    // return url;
  }

}
