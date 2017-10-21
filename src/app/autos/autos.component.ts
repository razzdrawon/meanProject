import { AutosService } from './../services/autos.service';
import { Component, OnInit } from '@angular/core';
import { Auto } from '../models/auto'

@Component({
  selector: 'app-autos',
  templateUrl: './autos.component.html',
  styleUrls: ['./autos.component.css'],
  providers: [AutosService]
})

export class AutosComponent implements OnInit {

  public titulo: string;
  public errorMessage;
  public autos: Auto[];
  //El constructor inicializa Atributos
  constructor(
    private _autoService:AutosService
  ) {
    this.titulo = "Autos Maravilla";
   }
  //El ngOnInit inicializa funciones
  ngOnInit() {
    this._autoService.getAutos()
    .subscribe(result => {
      this.autos = result.data;
      if(!this.autos){
        alert('Error en el servidor')
      }
    },
    error => {
      this.errorMessage = <any>error;
      if(this.errorMessage != null){
        alert('Error en el servidor')
      }
    }
  );

  }

}
