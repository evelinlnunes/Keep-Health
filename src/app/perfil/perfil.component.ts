import { CommonModule } from '@angular/common';
import { Component, OnInit, PipeTransform } from '@angular/core';
import { CalculatorAgePipe } from '../calculator-age.pipe';
import { MetrosPipe } from '../metros.pipe';

@Component({
  selector: 'app-perfil',
  standalone: true,
  imports: [CommonModule, CalculatorAgePipe, MetrosPipe],
  templateUrl: './perfil.component.html',
  styleUrl: './perfil.component.css'
})

export class PerfilComponent {
  usuario: any;

  constructor() { }

  ngOnInit(): void {
    if (typeof localStorage !== 'undefined') {

      const usuarioString = localStorage.getItem('usuariosCadastrados');
      if (usuarioString) {
        const usuariosCadastrados = JSON.parse(usuarioString);
        this.usuario = usuariosCadastrados[0];
      }
    }
  }

}


