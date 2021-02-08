import { Component, OnInit, DoCheck, OnDestroy } from '@angular/core';

@Component({
    selector: 'videojuego',
    templateUrl: './videojuego.component.html'
})

export class VideojuegoComponent implements OnInit, DoCheck, OnDestroy{
    public titulo: string;
    public listado: string; 
    
    constructor() {

        this.titulo = "Componente de Videojuegos"; 
        this.listado = "Listado de los juegos más populares"; 


console.log("se ha acargado el componente: videojuego.compoennt")
}

    ngOnInit() {
       // console.log("oninit ejecutado");
    }

    ngDoCheck() {
       //console.log("docheckkk ejecutado");
        }

    ngOnDestroy() {
       // console.log(" on destroy ejecutado");
    }

    CambiarTitulo() {
    this.titulo = "nuevo titulo del componenet"; 
    }


}