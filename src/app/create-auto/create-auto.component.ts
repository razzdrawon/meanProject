import { Auto } from './../models/auto';
import { ConfirmComponent } from './../confirm/confirm.component';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DialogService } from 'ng2-bootstrap-modal';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AutosService } from './../services/autos.service';


@Component({
  selector: 'app-create-auto',
  templateUrl: './create-auto.component.html',
  styleUrls: ['./create-auto.component.css'],
  providers: [AutosService]
})
export class CreateAutoComponent implements OnInit {

  public titulo: string;
  public auto: any;
  public formAuto: FormGroup;
  public errorMessage;

  public autoTitle = {
    marca: '',
    modelo: '',
    anio: '',
    version: ''
  }

  constructor(
    private autoService: AutosService,
    private dialogService: DialogService,
    private route: ActivatedRoute,
    private router: Router,
    private formBuilder: FormBuilder,
  ) {

    this.formAuto = formBuilder.group({ 
      marca: [null,
        Validators.compose(
          [Validators.maxLength(15),
          Validators.pattern('[a-zA-Z0-9 \-_.áéóíúÁÉÍÓÚäöüßÄËÏÖÜñÑ]*'),
          Validators.required])],
      modelo: [null,
        Validators.compose(
          [Validators.maxLength(10),
          Validators.pattern('[a-zA-Z0-9 \-_.áéóíúÁÉÍÓÚäöüßÄËÏÖÜñÑ]*'),
          Validators.required])],
      anio: [null,
        Validators.compose(
          [Validators.maxLength(4),
          Validators.pattern('[0-9]*'),
          Validators.required])],
      version: [null,
        Validators.compose(
          [Validators.maxLength(10),
          Validators.pattern('[a-zA-Z0-9 \-_.áéóíúÁÉÍÓÚäöüßÄËÏÖÜñÑ]*'),
          Validators.required])]
    });

  }

  onSubmit(){
    this.auto = new Auto(
      this.formAuto.value.marca,
      this.formAuto.value.modelo,
      this.formAuto.value.anio,
      this.formAuto.value.version
    )
    console.log(this.auto);

    this.autoService.postAuto(this.auto)
    .subscribe(data=>{
      if(!data){
        this.showConfirm('Ocurrio un problema',
        'No se pudo realizar el registro',
        'noError')
      }else{
        this.showConfirm(
          'Auto registrado satisfactoriamente', 
          data.marca+' '+data.modelo+' '+data.anio+' '+data.version,
          'noError');
      }
    },
    error=>{
      this.errorMessage = <any>error;
      if(this.errorMessage != null){
        this.showConfirm('Ocurrio un problema',
        this.errorMessage,'error')
      }
    })
  }
    

  reset(){
    this.formAuto.reset();
  }

  back(){
    this.router.navigate(['/']);;
  }

  showConfirm(title:string,message:string,kind:string) {
    let disposable = 
    this.dialogService.
    addDialog(ConfirmComponent,{title:title,message:message})
    .subscribe((isConfirmed)=>{
      //Ok re dirijimos a la pantalla principal
      if(kind == 'noError'){
        if(isConfirmed) {
          this.router.navigate(['/'])
        }
      }
    });
    //Se cerrará el dialogo en 10 segundos si no se toma una acción
    setTimeout(()=>{
        disposable.unsubscribe();
    },10000);
  }

  ngOnInit() {
  }

}
