import { Injectable } from '@angular/core';
import { Zapatilla } from '../models/zapatilla';

@Injectable()
export class zapatillaService {
    public zapatillas: Array<Zapatilla>; 
  constructor() {
    this.zapatillas = [
      new Zapatilla('Reebok Classic', 80, 'blanco', 'reebok', true),
      new Zapatilla('NIKE', 134, 'blanco', 'runner', true),
      new Zapatilla('ADIDAS', 95, 'azul', 'cualquiera', false),
      new Zapatilla('Reebok', 91, 'rosa', 'classic', true),
      new Zapatilla('ADIDAS YEZZY', 35, 'rojo', 'Adidas', false),
    ];
  }

  getTexto() {
      return "hola mundo desd eun servicio ";
  }

  getZapatilla(): Array<Zapatilla> {
      return this.zapatillas; 
    }
 


}
