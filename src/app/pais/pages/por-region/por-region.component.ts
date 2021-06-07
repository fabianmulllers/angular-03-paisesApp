import { Component } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styles: [
    `
    button{
      margin-right:5px;
    }
    `
  ]
})
export class PorRegionComponent {

  regiones: string[] = ['africa', 'americas', 'asia', 'europe', 'oceania'];
  regionActiva: string ='';
  hayError: boolean = false;
  paises:Country[] =[];

  constructor(private paisService: PaisService) { }

  activarRegion(region: string){
    if(region === this.regionActiva){return};
    this.regionActiva = region; 
    this.paises = [];
    this.paisService.buscarRegiones(this.regionActiva)
    .subscribe(
      paises => {
        this.hayError = false;
        this.paises = paises;
      },
      error => {
        this.hayError = true;
      }
    )
  }

  getClaseCss(region: string){
    return (this.regionActiva === region) ? 'btn-primary' : 'btn-outline-primary';
  }

  buscarPaises(){
   
  }


}
