import { Component } from '@angular/core';
import { datosservice } from './datos.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  datos : any[];

  constructor(){
    let datos = new datosservice();
    this.datos = datos.getDatos();
  }
}
