import { Component } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [
    `
      li{
        cursor: pointer;
      }
    `
  ]
})
export class PorPaisComponent{

  termino: string = "";
  hayError: boolean = false;
  paises: Country[] = [];
  paisesSugeridos: Country[] = [];
  mostrarSugerencia: boolean = false;

  constructor( private paisService: PaisService) { }

  buscar(termino: string){
    this.hayError = false;
    this.termino = termino;

    this.paisService.buscarPais( this.termino )
    .subscribe(
      paises  => {
        console.log(paises[0].name);
        this.paises = paises;
        this.mostrarSugerencia = false;
      },
      error =>{
        console.info(error);
        this.hayError = true;
        this.paises = [];
      }

    );
  }

  sugerencias(termino: string){
    this.hayError = false
    this.termino = termino;
    this.paisService.buscarPais( termino )
      .subscribe(paises =>{
        this.mostrarSugerencia = true;
        this.paisesSugeridos = paises.splice(0,5);
      },
      error => {
        this.paisesSugeridos = [];
      }
    );
  }

  buscarSugerido(termino: string){
    this.buscar( termino );
  }

}
