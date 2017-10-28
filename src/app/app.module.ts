import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { AutosComponent } from './autos/autos.component';
//peticiones HTTP
import { HttpModule, JsonpModule } from '@angular/http';

import { BootstrapModalModule } from 'ng2-bootstrap-modal';
import { ConfirmComponent } from './confirm/confirm.component';

import { RouteRoutingModule } from './route/route-routing.module';
import { ReadAutoComponent } from './read-auto/read-auto.component';
import { CreateAutoComponent } from './create-auto/create-auto.component';



@NgModule({
  declarations: [
    AppComponent,
    AutosComponent,
    ConfirmComponent,
    ReadAutoComponent,
    CreateAutoComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    JsonpModule,
    BootstrapModalModule,
    RouteRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  entryComponents: [
    ConfirmComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
