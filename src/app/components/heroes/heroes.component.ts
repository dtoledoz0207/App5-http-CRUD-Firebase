import { Component, OnInit } from '@angular/core';
import {HeroesService} from '../../services/heroes.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styles: []
})
export class HeroesComponent implements OnInit {

  heroes:any[] = [];
  loading:boolean = true;

  constructor(private _hs:HeroesService) {

    this._hs.getHeroes().subscribe(data => {
      console.log(data);
      let datos:any = data;
      this.heroes = datos;

      this.loading = false;
    });

   }

  ngOnInit() {
  }


  borrarHeroe(key$:string){
    this._hs.borrarHeroe(key$).subscribe(data => {
      if(data){
        console.error(data);
      }else{
        // todo bien
        delete this.heroes[key$];
      }
    });
  }

}
