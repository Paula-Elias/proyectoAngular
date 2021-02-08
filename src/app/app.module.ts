import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; 
import { routing, appRoutingProviders } from './app.routing';
import { HttpClientModule } from '@angular/common/http'; 

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VideojuegoComponent } from './videojuego/videojuego.component';
import { zapatillaComponent } from './zapatilla/zapatilla.component';
import { CursosComponent } from './cursos/cursos.component'; 

import { ExternoComponent } from './externo/externo.component'; 

import { CalculadoraPipe } from './pipe/calculadora.pipe';
import { ContactoComponent } from './contacto/contacto.component'; 


@NgModule({
  declarations: [
    AppComponent, 
    VideojuegoComponent,
    zapatillaComponent,
    CursosComponent,
    ExternoComponent,
    ContactoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    routing, 
    HttpClientModule
  ],
  providers: [
    appRoutingProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
