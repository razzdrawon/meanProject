import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { AutosService } from './../services/autos.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

@Component({
  selector: 'app-read-auto',
  templateUrl: './read-auto.component.html',
  styleUrls: ['./read-auto.component.css']
})
export class ReadAutoComponent implements OnInit {

  public titulo: string;
  public auto:any

  constructor(
    private route: ActivatedRoute,
    private router: Router
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

   }


   
  ngOnInit() {
  }

}
