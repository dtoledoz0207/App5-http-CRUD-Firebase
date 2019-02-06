import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {Heroe} from '../../interfaces/heroe.interface';
import {HeroesService} from '../../services/heroes.service';
import {Router, ActivatedRoute} from '@angular/router';

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

  nuevo:boolean = false;
  id:string;

  constructor(private _hs:HeroesService, private router:Router, private activatedRoute:ActivatedRoute) { 

    this.activatedRoute.params.subscribe( parametros => {
      console.log(parametros);
      this.id = parametros['id'];

    });

  }

  ngOnInit() {
  }

  guardar(){
    console.log(this.heroe);


    if(this.id == "nuevo"){
      // INSERTANDO

      this._hs.nuevoHeroe(this.heroe).subscribe(data => {
        let datos:any = data; 
        this.router.navigate(['/heroe', datos.name]);
      },
      error => {
        console.error(error);
      });

    }else{
      // ACTUALIZANDO

      this._hs.actualizarHeroe(this.heroe, this.id).subscribe(data => {
        let datos:any = data;
        console.log(datos);
      },
      error =>{
        console.error(error);
      });
      
    }


    
  }

}
