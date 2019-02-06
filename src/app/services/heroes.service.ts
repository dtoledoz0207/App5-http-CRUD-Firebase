import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Heroe} from '../interfaces/heroe.interface';
import {map} from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class HeroesService {

  heroesURL:string = "https://heroesapp-e744c.firebaseio.com/heroes.json";

  constructor(private http: HttpClient) { }


  nuevoHeroe(heroe:Heroe){

    let body = JSON.stringify(heroe);
    let headers = new HttpHeaders({
      'Content-Type':'application/json'
    });

    return this.http.post(this.heroesURL, body, {headers}).pipe(map(resultado => {
      console.log(resultado);
      return resultado;
    }));
  }
}
