import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { AutosService } from './../services/autos.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-read-auto',
  templateUrl: './read-auto.component.html',
  styleUrls: ['./read-auto.component.css']
})
export class ReadAutoComponent implements OnInit {

  public titulo: string;
  public auto: any
  public formAuto: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private formBuilder: FormBuilder
  ) {

    this.route.params.subscribe(
      (params: Params) => {
        this.titulo = params['id']
      }
    );


    let autos = Observable.of(JSON.parse(localStorage.getItem('autos')));

    autos.map(
      autos => autos.find(auto => auto._id == this.titulo)
    )
      .subscribe(
      auto => this.auto = auto
      );

    console.log(this.auto);




    this.formAuto = formBuilder.group(
      {
        marca: [
          this.auto.marca
        ],
        modelo: [
          this.auto.modelo
        ],
        anio: [
          this.auto.anio
        ],
        version: [
          this.auto.version
        ]
      }
    );

    // this.formAuto.disable();

  }



  ngOnInit() {
  }

}
