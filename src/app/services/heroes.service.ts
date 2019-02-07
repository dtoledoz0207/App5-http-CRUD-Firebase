import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Heroe} from '../interfaces/heroe.interface';
import {map} from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class HeroesService {

  heroesURL:string = "https://heroesapp-e744c.firebaseio.com/heroes.json";
  heroeURL: string = "https://heroesapp-e744c.firebaseio.com/heroes";

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


  actualizarHeroe(heroe:Heroe, key$:string){

    let body = JSON.stringify(heroe);
    let headers = new HttpHeaders({
      'Content-Type':'application/json'
    });

    let url = `${this.heroeURL}/${key$}.json`;

    return this.http.put(url, body, {headers}).pipe(map(resultado => {
      console.log(resultado);
      return resultado;
    }));
  }


  getHeroe(key$:string){
    let url = `${this.heroeURL}/${key$}.json`;

    return this.http.get(url).pipe(map(resultado => {
      return resultado;
    }));
  }
}
