import { Component } from '@angular/core';

@Component({
  selector: 'app-countrys',
  templateUrl: './countrys.component.html',
  styleUrls: ['./countrys.component.css']
})
export class CountrysComponent {
  paises = [
    { nombre: 'Perú', pais: 'Perú' },
    { nombre: 'España', pais: 'España' },
    { nombre: 'Venezuela', pais: 'Venezuela' },
    { nombre: 'Estados Unidos', pais: 'Estados Unidos' },
    { nombre: 'Argentina', pais: 'Argentina' },
    { nombre: 'México', pais: 'México' },
    { nombre: 'Colombia', pais: 'Colombia' },
    { nombre: 'Japón', pais: 'Japón' },
    { nombre: 'Francia', pais: 'Francia' },
    { nombre: 'Israel', pais: 'Israel' }
  ];

  getColor(nombre: string) {
    switch (nombre) {
      case 'Perú':
        return '#ff0000';
      case 'España':
        return '#ffff00';
      case 'Venezuela':
        return '#cf142b';
      case 'Estados Unidos':
        return '#b22234';
      case 'Argentina':
        return '#75aadb';
      case 'México':
        return '#bc002d';
      case 'Colombia':
        return '#fcd116';
      case 'Japón':
        return '#ffffff';
      case 'Francia':
        return '#bc002d';
      case 'Israel':
        return '#ffffff';
      default:
        return '#000000';
    }
  }

  getBackgroundColor(nombre: string) {
    switch (nombre) {
      case 'Perú':
        return '#ffffff';
      case 'España':
        return '#aa151b';
      case 'Venezuela':
        return '#00247d';
      case 'Estados Unidos':
        return '#3c3b6e';
      case 'Argentina':
        return '#fcd116';
      case 'México':
        return '#006847';
      case 'Colombia':
        return '#003893';
      case 'Japón':
        return '#bc002d';
      case 'Francia':
        return '#0055a4';
      case 'Israel':
        return '#0038b8';
      default:
        return '#dddddd';
    }
  }


  getFlag(nombre: string) {
    switch (nombre) {
      case 'Perú':
        return 'https://www.svgrepo.com/show/508610/flag-pe.svg';
      case 'España':
        return 'https://www.svgrepo.com/show/508499/flag-es.svg';
      case 'Venezuela':
        return 'https://www.svgrepo.com/show/508676/flag-ve.svg'
      case 'Estados Unidos':
        return 'https://www.svgrepo.com/show/508668/flag-us.svg'
      case 'México':
        return 'https://www.svgrepo.com/show/508593/flag-mx.svg'
      case 'Colombia':
        return 'https://www.svgrepo.com/show/508475/flag-co.svg'
      case 'Japón':
        return 'https://www.svgrepo.com/show/508548/flag-jp.svg'
      case 'Argentina':
        return 'https://www.svgrepo.com/show/405411/flag-for-flag-argentina.svg'
      case 'Francia':
        return 'https://www.svgrepo.com/show/508505/flag-fr.svg'
      case 'Israel':
        return 'https://www.svgrepo.com/show/405514/flag-for-flag-israel.svg'

      default:
        return ''; 
    }
  }


}
