import { Component } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styles: [
  ]
})
export class NoComunesComponent {
  //i18nSelect
  nombre = 'Yuri';
  genero: string = 'masculino';
  invitacionMap = {
    'masculino': 'invitarlo',
    'femenino': 'invitarla', 
  }

  //i18nPlural
  clientes: string[] = ['Maria', 'Pedro', 'Juan', 'Yamir', 'Pepe'];
  clientesMap = {
    '=0': 'No tenemos ningún cliente esperando.',
    '=1': 'tenemos 1 cliente esperando.',
    '=2': 'tenemos 2 clientes esperando.',
    'other': 'tenemos # clientes esperando.'
  }

  cambiarPersona() {
    if( this.nombre == "Yuri")
    {
      this.nombre = "Aymee";
      this.genero = "femenino";
    } else {
      this.nombre = "Yuri";
      this.genero = "masculino";
    }
    
  }

  borrarCliente() {
    this.clientes.splice(0,1);
  }

  //KeyValue Pipe
  persona = {
    nombre: 'Yuri',
    edad: 33,
    direccion: 'La Habana, Cuba'
  }

  //Json Pipe
  heroe = [
    {
      nombre: 'Superman',
      vuela: false
    },
    {
      nombre: 'Robin',
      vuela: false
    },
    {
      nombre: 'Aquaman',
      vuela: false
    }
  ]

  //Async Pipe
  myObservable = interval(5000) //0, 1, 2, 3, ...

  valorPromesa = new Promise(
    ( resolve, reject ) => {
      setTimeout(
        () => {
          resolve('Tenemos data de promesa'); 
        }, 
        3500)
    }
  )

}
