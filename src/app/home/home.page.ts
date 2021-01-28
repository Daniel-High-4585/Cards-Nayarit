import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage {

  // declarar un atributo para el HTML y los metodos
  public places = [];
  public search = '';

  constructor() {
    // consulta remota

    this.places .push({
      image: 'https://mas-mexico.com.mx/wp-content/uploads/2020/03/santa-mar%C3%ADa-del-oro.jpg',
      title: 'El Charco Verde',
      subtitle: 'Santa Maria del Oro',
      description: 'Este lugar tiene una cascada y pedes practicar deportes extremos',
      active: true
    });

    this.places .push({
      image: '',
      title: 'La Fabrica Extextilera',
      subtitle: 'Bellavista',
      description: 'Cuna de la revolucion',
      active: true
    });

    this.places .push({
      image: '',
      title: 'ASDF',
      subtitle: 'asdffggh',
      description: 'ASDFGHJKL',
      active: false
    });

    this.places .push({
      image: '',
      title: 'La Fabrica Extextilera',
      subtitle: 'Bellavista',
      description: 'Cuna de la revolucion',
      active: true
    });

  }
    // Que regresa el metodo?
    filter(): void{
      // imprimir en consola
      console.log('Buscando....' + this.search);

      // filtar el HTML con funcion arrow
      this.places = this.places.filter((a) => {
        return (a.title.toLocaleLowerCase().indexOf(this.search.toLocaleLowerCase()) > -1);
      });
    }

    deletePlace(pos: number): void{
      this.places.splice(pos, 1);
    }

    changeStatus(pos: number): void{
      this.places[pos].active = !this.places[pos].active;
    }

}
// para el ngIf
// a = # si es 0 es facil, si es diferente a 0 es true
// b= '' si esta vacio es false, si tiene algo es true
// c = []
// d = ?