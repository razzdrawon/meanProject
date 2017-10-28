import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { AutosComponent } from './autos/autos.component';
//peticiones HTTP
import { HttpModule, JsonpModule } from '@angular/http';

import { BootstrapModalModule } from 'ng2-bootstrap-modal';
import { ConfirmComponent } from './confirm/confirm.component';

import { RouteRoutingModule } from './route/route-routing.module';
import { ReadAutoComponent } from './read-auto/read-auto.component';



@NgModule({
  declarations: [
    AppComponent,
    AutosComponent,
    ConfirmComponent,
    ReadAutoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    JsonpModule,
    BootstrapModalModule,
    RouteRoutingModule
  ],
  entryComponents: [
    ConfirmComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
