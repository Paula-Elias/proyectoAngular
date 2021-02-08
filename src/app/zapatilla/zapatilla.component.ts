import { Component, OnInit } from '@angular/core';
import { Zapatilla } from '../models/zapatilla';
import{ zapatillaService } from '../services/zapatilla.service'; 

@Component({
  selector: 'zapatillas',
  templateUrl: './zapatilla.component.html',
  providers: [zapatillaService]
})

export class zapatillaComponent implements OnInit {
  public titulo: string = 'Componente de zapatillas';
  public zapatillas: Array<Zapatilla>;
  public marcas: String[];
  public color: string;
  public miMarca: string;

  constructor(
    private _zapatillaService: zapatillaService
  )
  {
    this.miMarca = 'Yaguar';
    this.color = 'pink';
    this.marcas = new Array();
    
  }

  ngOnInit() {
    this.zapatillas = this._zapatillaService.getZapatilla(); 
    console.log(this.zapatillas);
    this.getMarcas();
  }

  getMarcas() {
    this.zapatillas.forEach((zapatilla, index) => {
      if (this.marcas.indexOf(zapatilla.marca) < 0) {
        this.marcas.push(zapatilla.marca);
      }
    });
    console.log(this.marcas);
  }

  getMarca() {
    alert(this.miMarca);
  }

  addMarca() {
    this.marcas.push(this.miMarca);
  }

  borrarMarca(index) {
    //delete this.marcas[index];
    this.marcas.splice(index, 1);
  }

  onBlur() {
    console.log('has salido del input');
  }

  mostrarPalabra() {
    alert(this.miMarca);
  }
  
}
