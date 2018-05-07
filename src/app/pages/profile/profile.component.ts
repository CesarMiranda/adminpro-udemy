import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  imagenSubir: File;

  constructor() { }

  ngOnInit() {
  }

  guardar( usuario ) {
  }

  seleccionImagen( archivo: File ) {
    if ( !archivo ) {
      this.imagenSubir = null;
      return;
    }
    this.imagenSubir = archivo;
  }
  cambiarImagen() {

  }

}
