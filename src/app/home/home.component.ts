import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { SharedModule } from '../shared/shared.module';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, FormsModule, DialogModule, ButtonModule, SharedModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  displayDialog: boolean = false;
  tipoAtividade: string = '';
  dataRealizada: Date = new Date();
  distancia: number = 0;
  tempo: string = '';
  atividades: any[] = [];


  constructor() { }

  ngOnInit() {

    this.carregarAtividades();
  }

  showDialog() {
    this.displayDialog = true;
  }

  salvarAtividade() {
    let source = ''
    if (this.tipoAtividade == 'Corrida') {
      source = "../../assets/Corrida.jpg"
    }
    else if (this.tipoAtividade == 'Ciclismo') {
      source = "../../assets/Ciclismo.jpg"
    }
    else if (this.tipoAtividade == 'Caminhada') {
      source = "../../assets/Caminhada.jpg"
    }

    const atividade = {
      tipo: this.tipoAtividade,
      img: source,
      data: this.dataRealizada,
      distancia: this.distancia,
      tempo: this.tempo
    };


    this.atividades.push(atividade);


    localStorage.setItem('atividades', JSON.stringify(this.atividades));


    this.displayDialog = false;
  }

  private carregarAtividades() {

    if (typeof localStorage !== 'undefined' && localStorage.getItem('atividades')) {

      const atividadesString = localStorage.getItem('atividades');
      this.atividades = JSON.parse(atividadesString || '[]');
    }
  }
}