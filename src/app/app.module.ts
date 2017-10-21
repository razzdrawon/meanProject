import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { AutosComponent } from './autos/autos.component';
//peticiones HTTP
import { HttpModule, JsonpModule } from '@angular/http';

@NgModule({
  declarations: [
    AppComponent,
    AutosComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    JsonpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
