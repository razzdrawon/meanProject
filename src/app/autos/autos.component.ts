import { AutosService } from './../services/autos.service';
import { Component, OnInit } from '@angular/core';
import { Auto } from '../models/auto'
import { ConfirmComponent } from '../confirm/confirm.component';
import { DialogService } from 'ng2-bootstrap-modal';
import { Router } from '@angular/router';

@Component({
  selector: 'app-autos',
  templateUrl: './autos.component.html',
  styleUrls: ['./autos.component.css'],
  providers: [AutosService, DialogService]
})

export class AutosComponent implements OnInit {
  


  public titulo: string;
  public autos: Auto[];
  public errorMessage;

  //El constructor inicializa Atributos
  constructor(
    private router: Router,
    private _autoService: AutosService,
    private dialogService: DialogService
  ) {
    this.titulo = "Lista de Autos";
  }
  //El ngOnInit inicializa funciones
  ngOnInit() {
    this.getAutos();
  }

  getAutos() {
    this._autoService.getAutos()
      .subscribe(result => {
        if (!result) {
          console.log("Error");
        }
        else{
          this.autos = result.data;
          localStorage.setItem('autos', JSON.stringify(this.autos));
        }
      },
      error => {
        this.errorMessage = <any>error;
        if (this.errorMessage != null) {
          this.showConfirm('Ocurrio un problema', this.errorMessage, 'error');
        }
      }
      );
  }


  showConfirm(title: string, message: string, kind: string) {
    let disposable = this.dialogService
    .addDialog(ConfirmComponent, {title:title, message:message})
    .subscribe((isConfirmed) => {
      //Si hay un error al obtener el servicio, damos OK y se reintentará la petición
      if(kind=='error'){
        if(isConfirmed) {
          this.getAutos()
        }
      }
    });
    //Se cerrará el dialogo después de 10 segundos si no se toma acción
    setTimeout(() => {
      disposable.unsubscribe();
    }, 10000);
  }

  view(auto: any) {
    this.router.navigate(['/autos', auto._id, 'details']);
  }

}
