import { Component } from '@angular/core';

@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.css']
})
export class PersonaComponent {
  personas = [
    { nombre: 'Juan Pérez', edad: 25 },
    { nombre: 'María Rodríguez', edad: 69 },
    { nombre: 'Davier López', edad: 21 },
    { nombre: 'Luisa Martínez', edad: 89 },
    { nombre: 'Pedro Sánchez', edad: 29 },
    { nombre: 'Ana González', edad: 16 },
    { nombre: 'Jorge Fernández', edad: 65 },
    { nombre: 'Isabel Ramírez', edad: 80 },
    { nombre: 'Andrés López', edad: 15 },
    { nombre: 'Mariana Castillo', edad: 17 },
    { nombre: 'Kevin Viza', edad: 23},
    { nombre: 'Jose Acosta', edad:27}
  ];
}
