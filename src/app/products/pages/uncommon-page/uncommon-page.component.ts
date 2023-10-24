import { Component } from '@angular/core';
import { Observable, interval, tap } from "rxjs";

@Component({
  selector: 'app-uncommon-page',
  templateUrl: './uncommon-page.component.html',
  styleUrls: ['./uncommon-page.component.css']
})
export class UncommonPageComponent {

  // ! i18n Select
  public name: string = 'Fernando';
  public gender: 'male' | 'female' | 'No existe' = 'male';
  public inivitationMap = {
    male:'invitarlo',
    female:'invitarla'
  };

  public changeClient(): void {
    this.name = 'Ana';
    this.gender = 'female';
  }

    // ! i18n Plural
    public clients: string[] = ['Daniel', 'Belinda', 'Yerlin', 'Seidy', 'Daniel A.', 'Daniela', 'Fernando', 'Diego', 'Ariana', 'Emiliano' ]
    public clientsMap = {
      '=0': 'no tenemos ningún cliente esperando.',
      '=1': 'tenemos 1 cliente esperando.',
      'other': 'tenemos # clientes esperando.'
    }

    deleteClient(): void {
      this.clients.shift();
    }

    // ! KeyValue Pipe
    public person = {
      name: 'Fernando',
      age: 21,
      address: 'Tegucigalpa, Honduras'
    }

    // ! Async Pipe
    public myObservableTimer: Observable<number> = interval(2000).pipe(
      tap( value => console.log('tap: ', value )),
    );

    public promiseValue: Promise<string> = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve( 'Tenemos data en la promesa' );
        this.person.name = 'Otro nombre';
      }, 3500);
    })
}
