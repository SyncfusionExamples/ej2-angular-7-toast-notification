import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ToastModule } from '@syncfusion/ej2-angular-notifications';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ToastModule 
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
