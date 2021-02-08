import { Component, OnInit } from '@angular/core';
import { PeticionesService } from '../services/peticiones.services';  

@Component({
  selector: 'app-externo',
  templateUrl: './externo.component.html',
  styleUrls: ['./externo.component.css'],
  providers: [PeticionesService]
})

export class ExternoComponent implements OnInit {

  public user: any; 
  public userId: any; 
  public fecha: any; 

  public new_user: any; 




  constructor(
    private _peticionesService: PeticionesService
  ) {
    this.userId = 1; 
          this.new_user = {
            "name": "morpheus",
          "job": "leader"
          }
  }

  ngOnInit()  {
    return  this._peticionesService.getUser().subscribe(
result => { 
this.user = result.data; 
},
error => {
console.log(<any>error); 
  }

);

  }

  onSubmit(form) {
    this._peticionesService.addUser(this.new_user).subscribe (
      response => {
        console.log(response);

        form.reset();
      },   
      error => {
        console.log(<any>error);
        
          });
  }

}