import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {
  numero1=0
  numero2=0
  seleccionado = ""
  lista = ["suma","resta","multiplicacion","division"]
  constructor() { }

  ngOnInit(): void {
  }

}
