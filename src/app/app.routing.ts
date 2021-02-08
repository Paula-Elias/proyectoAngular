//importar modulos del router de Angular
import { ModuleWithProviders } from '@angular/core'; 
import { Routes, RouterModule } from '@angular/router'; 

//importar componentes 
import { zapatillaComponent } from './zapatilla/zapatilla.component'; 
import { VideojuegoComponent } from './videojuego/videojuego.component';
import {  CursosComponent } from './cursos/cursos.component';  
import { ExternoComponent } from './externo/externo.component'; 
import { ContactoComponent } from './contacto/contacto.component'; 

//array de configuracion de rutas
const appRoutes : Routes = [
    {path : 'videojuegos' ,component : VideojuegoComponent },
    {path : 'zapatillas' ,component : zapatillaComponent },
    {path : 'cursos/:nombre' ,component : CursosComponent },
    {path : 'cursos/:nombre/:apellidos' ,component : CursosComponent },
    {path: 'externo', component: ExternoComponent },   
    {path: 'contacto', component: ContactoComponent }, 

    {path : '**' , pathMatch : 'full' , redirectTo : '/'},
]
 
export const appRoutingProviders: any[] = []; 
export const routing: ModuleWithProviders<any> = RouterModule.forRoot(appRoutes);