import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './shared/shared.module';
import { AuthModule } from './auth/auth.module';
import { CoreModule } from './core/core.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,//Consist of CommonModule and So on
    AppRoutingModule,
    SharedModule,
    AuthModule,
    CoreModule,
    HttpModule
  ],
  providers: [

  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
