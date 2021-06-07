import { Component } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
  styles: [
  ]
})
export class PorCapitalComponent {

  termino: string ="";
  hayError: boolean = false;
  paises: Country[] = []

  constructor(private PaisService: PaisService) { }

  buscar(termino: string){
    this.hayError = false;
    this.termino = termino;
    this.PaisService.buscarCapital(this.termino)
    .subscribe(
      paises  => {
        console.log(paises[0].name);
        this.paises = paises;
      },
      error =>{
        console.info(error);
        this.hayError = true;
        this.paises = [];
      }

    );
  }

  sugerencias(termino: string){
    console.log(termino);
  }

}
