import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {Heroe} from '../../interfaces/heroe.interface';
import {HeroesService} from '../../services/heroes.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styles: []
})
export class HeroeComponent implements OnInit {

  heroe:Heroe = {
    nombre: "",
    bio: "",
    casa: "Marvel"
  }

  constructor(private _hs:HeroesService, private router:Router) { }

  ngOnInit() {
  }

  guardar(){
    console.log(this.heroe);

    this._hs.nuevoHeroe(this.heroe).subscribe(data => {
      let datos:any = data; 
      this.router.navigate(['/heroe', datos.name]);
    },
    error => {
      console.error(error);
    });
  }

}
